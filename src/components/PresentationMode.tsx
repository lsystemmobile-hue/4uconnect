import { useState, useEffect, useRef, useCallback } from "react";
import {
  Presentation, Crosshair, PenLine, Trash2, X, Sun,
  Circle, Square, ArrowRight, GripHorizontal, Undo2,
} from "lucide-react";
import { useLocation } from "react-router-dom";

type Tool = "laser" | "spotlight" | "draw" | null;
type DrawColor = string;
type DrawShape = "free" | "circle" | "rect" | "arrow";

const COLORS: DrawColor[] = ["#ef4444", "#eab308", "#22c55e", "#3b82f6"];

const SHAPES: { id: DrawShape; icon: React.ElementType; label: string }[] = [
  { id: "free",   icon: PenLine,    label: "Livre"    },
  { id: "circle", icon: Circle,     label: "Círculo"  },
  { id: "rect",   icon: Square,     label: "Quadrado" },
  { id: "arrow",  icon: ArrowRight, label: "Seta"     },
];

type Pos = { x: number; y: number };

// ─── helpers de desenho ──────────────────────────────────────────────────────

function drawCircleShape(ctx: CanvasRenderingContext2D, a: Pos, b: Pos, color: string) {
  const cx = (a.x + b.x) / 2;
  const cy = (a.y + b.y) / 2;
  const rx = Math.abs(b.x - a.x) / 2;
  const ry = Math.abs(b.y - a.y) / 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, Math.max(rx, 1), Math.max(ry, 1), 0, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawRectShape(ctx: CanvasRenderingContext2D, a: Pos, b: Pos, color: string) {
  ctx.beginPath();
  ctx.rect(a.x, a.y, b.x - a.x, b.y - a.y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawArrowShape(ctx: CanvasRenderingContext2D, a: Pos, b: Pos, color: string) {
  const headLen = 18;
  const angle = Math.atan2(b.y - a.y, b.x - a.x);
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(b.x, b.y);
  ctx.lineTo(b.x - headLen * Math.cos(angle - Math.PI / 6), b.y - headLen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(b.x - headLen * Math.cos(angle + Math.PI / 6), b.y - headLen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

// ─────────────────────────────────────────────────────────────────────────────

const PresentationMode = () => {
  const [isActive, setIsActive]           = useState(false);
  const [activeTool, setActiveTool]       = useState<Tool>(null);
  const [drawColor, setDrawColor]         = useState<DrawColor>(COLORS[0]);
  const [drawShape, setDrawShape]         = useState<DrawShape>("free");
  const [hasDrawings, setHasDrawings]     = useState(false);
  const [laserPos, setLaserPos]           = useState({ x: -100, y: -100 });
  const [spotlightEl, setSpotlightEl]     = useState<HTMLElement | null>(null);
  const [spotlightRect, setSpotlightRect] = useState<DOMRect | null>(null);
  const [toolbarPos, setToolbarPos]       = useState<Pos | null>(null); // null = posição padrão

  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const toolbarRef   = useRef<HTMLDivElement>(null);
  const isDrawing    = useRef(false);
  const startPos     = useRef<Pos>({ x: 0, y: 0 });
  const savedImage   = useRef<ImageData | null>(null);
  const historyRef   = useRef<ImageData[]>([]); // pilha de estados para desfazer
  const isDragging   = useRef(false);
  const dragOffset   = useRef<Pos>({ x: 0, y: 0 });
  const location     = useLocation();

  // ── limpeza ao trocar de rota ──────────────────────────────────────────────
  useEffect(() => {
    setSpotlightEl(null);
    setSpotlightRect(null);
  }, [location.pathname]);

  // ── tamanho do canvas ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const onResize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── arrastar toolbar ───────────────────────────────────────────────────────
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const toolbar = toolbarRef.current;
      if (!toolbar) return;
      const { width, height } = toolbar.getBoundingClientRect();
      setToolbarPos({
        x: Math.max(0, Math.min(window.innerWidth  - width,  e.clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(window.innerHeight - height, e.clientY - dragOffset.current.y)),
      });
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const touch = e.touches[0];
      const toolbar = toolbarRef.current;
      if (!toolbar) return;
      const { width, height } = toolbar.getBoundingClientRect();
      setToolbarPos({
        x: Math.max(0, Math.min(window.innerWidth  - width,  touch.clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(window.innerHeight - height, touch.clientY - dragOffset.current.y)),
      });
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend",  onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend",  onTouchEnd);
    };
  }, []);

  const startDrag = useCallback((clientX: number, clientY: number) => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const rect = toolbar.getBoundingClientRect();
    dragOffset.current = { x: clientX - rect.left, y: clientY - rect.top };
    isDragging.current = true;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  }, []);

  const onHandleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  }, [startDrag]);

  const onHandleTouchStart = useCallback((e: React.TouchEvent) => {
    startDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, [startDrag]);

  // ── laser ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (activeTool !== "laser") return;
    const onMove = (e: MouseEvent) => setLaserPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [activeTool]);

  // ── spotlight: atualiza rect a cada frame ──────────────────────────────────
  useEffect(() => {
    if (!spotlightEl) return;
    let id: number;
    const tick = () => {
      setSpotlightRect(spotlightEl.getBoundingClientRect());
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [spotlightEl]);

  // ── desenho no canvas ──────────────────────────────────────────────────────
  useEffect(() => {
    if (activeTool !== "draw") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getPos = (e: MouseEvent | TouchEvent): Pos => {
      if ("touches" in e) {
        const t = e.touches[0];
        return { x: t.clientX, y: t.clientY };
      }
      return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      isDrawing.current = true;
      setHasDrawings(true);
      const pos = getPos(e);
      startPos.current = pos;
      // Salva estado atual na pilha de histórico (máx 30 etapas)
      const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
      if (historyRef.current.length >= 30) historyRef.current.shift();
      historyRef.current.push(snapshot);
      savedImage.current = snapshot;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current) return;
      const pos = getPos(e);
      if (drawShape === "free") {
        ctx.beginPath();
        ctx.moveTo(startPos.current.x, startPos.current.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = drawColor;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        startPos.current = pos;
      } else {
        if (savedImage.current) ctx.putImageData(savedImage.current, 0, 0);
        if (drawShape === "circle") drawCircleShape(ctx, startPos.current, pos, drawColor);
        if (drawShape === "rect")   drawRectShape(ctx, startPos.current, pos, drawColor);
        if (drawShape === "arrow")  drawArrowShape(ctx, startPos.current, pos, drawColor);
      }
    };

    const onStop = () => { isDrawing.current = false; savedImage.current = null; };

    canvas.addEventListener("mousedown",  onStart);
    canvas.addEventListener("mousemove",  onMove);
    canvas.addEventListener("mouseup",    onStop);
    canvas.addEventListener("mouseleave", onStop);
    canvas.addEventListener("touchstart", onStart, { passive: true });
    canvas.addEventListener("touchmove",  onMove,  { passive: true });
    canvas.addEventListener("touchend",   onStop);

    return () => {
      canvas.removeEventListener("mousedown",  onStart);
      canvas.removeEventListener("mousemove",  onMove);
      canvas.removeEventListener("mouseup",    onStop);
      canvas.removeEventListener("mouseleave", onStop);
      canvas.removeEventListener("touchstart", onStart);
      canvas.removeEventListener("touchmove",  onMove);
      canvas.removeEventListener("touchend",   onStop);
    };
  }, [activeTool, drawColor, drawShape]);

  // ── utilitários ────────────────────────────────────────────────────────────
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    historyRef.current = [];
    setHasDrawings(false);
  }, []);

  const undoCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || historyRef.current.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const prev = historyRef.current.pop()!;
    ctx.putImageData(prev, 0, 0);
    if (historyRef.current.length === 0) setHasDrawings(false);
  }, []);

  const deactivate = useCallback(() => {
    setIsActive(false);
    setActiveTool(null);
    setSpotlightEl(null);
    setSpotlightRect(null);
    setToolbarPos(null);
    clearCanvas();
  }, [clearCanvas]);

  const activate = useCallback(() => {
    setIsActive(true);
    setToolbarPos(null); // sempre inicia no canto inferior esquerdo
  }, []);

  // ── ESC ────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !isActive) return;

      // 1º ESC: desfaz etapa ou limpa seleção
      if (spotlightEl) {
        setSpotlightEl(null);
        setSpotlightRect(null);
        return;
      }
      if (activeTool === "draw" && hasDrawings) {
        undoCanvas(); // desfaz último traço/forma
        return;
      }

      // 2º ESC (sem mais histórico): cancela a ferramenta selecionada
      if (activeTool) {
        setActiveTool(null);
        return;
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isActive, activeTool, spotlightEl, hasDrawings, undoCanvas]);

  const toggleTool = useCallback((tool: Tool) => {
    setActiveTool(prev => (prev === tool ? null : tool));
    setSpotlightEl(null);
    setSpotlightRect(null);
  }, []);

  // ── spotlight click ────────────────────────────────────────────────────────
  const handleSpotlightClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const overlay = e.currentTarget;
    overlay.style.pointerEvents = "none";
    const raw = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    overlay.style.pointerEvents = "all";
    if (!raw || raw === document.body) return;
    let el: HTMLElement = raw;
    while (el && el !== document.body) {
      const r = el.getBoundingClientRect();
      if (r.height > 60 && r.width > 100) break;
      el = el.parentElement as HTMLElement;
    }
    if (el && el !== document.body) setSpotlightEl(el);
  }, []);

  // ── estilos ────────────────────────────────────────────────────────────────
  const baseStyle: React.CSSProperties = {
    backgroundColor: "#152248",
    boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.1)",
  };

  const toolbarPositionStyle: React.CSSProperties = toolbarPos
    ? { top: toolbarPos.y, left: toolbarPos.x }
    : { bottom: 24, left: 24 };

  return (
    <>
      {/* Canvas de anotações */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 top-0 left-0 z-[9996]"
        style={{
          pointerEvents: isActive && activeTool === "draw" ? "all" : "none",
          cursor: activeTool === "draw" ? "crosshair" : "default",
        }}
      />

      {/* Overlay spotlight */}
      {isActive && activeTool === "spotlight" && (
        <div
          className="fixed inset-0 z-[9994]"
          style={{ cursor: "crosshair" }}
          onClick={handleSpotlightClick}
        />
      )}

      {/* Spotlight highlight */}
      {isActive && activeTool === "spotlight" && spotlightRect && (
        <div
          className="fixed pointer-events-none z-[9995] rounded-lg transition-all duration-200"
          style={{
            left:   spotlightRect.left   - 10,
            top:    spotlightRect.top    - 10,
            width:  spotlightRect.width  + 20,
            height: spotlightRect.height + 20,
            boxShadow: "0 0 0 9999px rgba(0,0,0,0.78)",
            border: "2px solid rgba(255,255,255,0.22)",
          }}
        />
      )}

      {/* Laser */}
      {isActive && activeTool === "laser" && (
        <div
          className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
          style={{ left: laserPos.x, top: laserPos.y }}
        >
          <div className="absolute inset-0 w-5 h-5 rounded-full bg-red-500/50 animate-ping" />
          <div
            className="w-5 h-5 rounded-full bg-red-600"
            style={{ boxShadow: "0 0 14px 4px rgba(239,68,68,0.7)" }}
          />
        </div>
      )}

      {/* Oculta cursor quando laser ativo */}
      {isActive && activeTool === "laser" && (
        <style>{`* { cursor: none !important; } #pm-toolbar, #pm-toolbar * { cursor: auto !important; }`}</style>
      )}

      {/* Botão de ativar (modo inativo) */}
      {!isActive && (
        <button
          onClick={activate}
          title="Modo Apresentação"
          className="fixed bottom-6 left-6 z-[9998] w-12 h-12 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={baseStyle}
        >
          <Presentation size={20} />
        </button>
      )}

      {/* Toolbar (modo ativo) */}
      {isActive && (
        <div
          id="pm-toolbar"
          ref={toolbarRef}
          className="fixed z-[9999] flex flex-col gap-1.5 rounded-2xl p-3 min-w-[152px] select-none"
          style={{ ...baseStyle, ...toolbarPositionStyle }}
        >
          {/* Cabeçalho — área de arrasto */}
          <div
            className="flex items-center justify-between px-1 pb-2 mb-0.5 border-b border-white/10"
            style={{ cursor: "grab" }}
            onMouseDown={onHandleMouseDown}
            onTouchStart={onHandleTouchStart}
          >
            <div className="flex items-center gap-1.5">
              <GripHorizontal size={13} className="text-white/30" />
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                Apresentação
              </span>
            </div>
            <button
              onClick={deactivate}
              title="Encerrar"
              onMouseDown={e => e.stopPropagation()} // evita arrastar ao clicar X
              className="text-white/35 hover:text-white transition-colors ml-2"
            >
              <X size={13} />
            </button>
          </div>

          {/* Laser */}
          <button
            onClick={() => toggleTool("laser")}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTool === "laser"
                ? "bg-red-500/90 text-white"
                : "text-white/65 hover:text-white hover:bg-white/10"
            }`}
          >
            <Crosshair size={15} />
            <span>Laser</span>
          </button>

          {/* Foco */}
          <button
            onClick={() => toggleTool("spotlight")}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTool === "spotlight"
                ? "bg-yellow-500/90 text-white"
                : "text-white/65 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sun size={15} />
            <span>Foco</span>
          </button>

          {/* Anotar */}
          <button
            onClick={() => toggleTool("draw")}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTool === "draw"
                ? "bg-emerald-500/90 text-white"
                : "text-white/65 hover:text-white hover:bg-white/10"
            }`}
          >
            <PenLine size={15} />
            <span>Anotar</span>
          </button>

          {/* Sub-painel de anotação */}
          {activeTool === "draw" && (
            <div className="flex flex-col gap-2 px-1 pt-1">
              <div className="flex gap-1">
                {SHAPES.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setDrawShape(id)}
                    title={label}
                    className={`flex-1 flex items-center justify-center py-1.5 rounded-lg transition-all ${
                      drawShape === id
                        ? "bg-white/20 text-white"
                        : "text-white/40 hover:text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
              <div className="flex gap-2 px-1">
                {COLORS.map(color => (
                  <button
                    key={color}
                    onClick={() => setDrawColor(color)}
                    className={`w-5 h-5 rounded-full transition-all ${
                      drawColor === color
                        ? "scale-125 ring-2 ring-white/80"
                        : "opacity-50 hover:opacity-90 hover:scale-110"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-white/10 my-0.5" />

          {/* Desfazer — só no modo Anotar com desenhos */}
          {activeTool === "draw" && hasDrawings && (
            <button
              onClick={undoCanvas}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <Undo2 size={15} />
              <span>Desfazer</span>
            </button>
          )}

          {/* Limpar tudo */}
          <button
            onClick={clearCanvas}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <Trash2 size={15} />
            <span>Limpar</span>
          </button>
        </div>
      )}
    </>
  );
};

export default PresentationMode;
