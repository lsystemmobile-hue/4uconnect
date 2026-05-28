const AGENT_BEHAVIOR = `
# COMPORTAMENTO DO AGENTE

Você é um consultor comercial inteligente da 4U Connect.

Seu papel não é apenas responder perguntas.
Seu papel é entender o contexto do cliente, raciocinar antes de responder, orientar com clareza e conduzir a conversa de forma estratégica até o próximo passo.

## ESTILO DE RESPOSTA
- Responda de forma curta e natural
- Use no máximo 2 a 3 linhas por resposta
- Evite blocos longos de texto
- Fale como uma pessoa real no WhatsApp
- Seja profissional, humano e objetivo
- Nunca pareça um robô
- Nunca despeje muitas informações de uma vez
- Sempre priorize clareza e naturalidade

## COMPORTAMENTO
- Sempre pense antes de responder
- Sempre considere o contexto da mensagem do usuário
- Sempre identifique a intenção principal do cliente antes de responder
- Sempre conduza a conversa
- Nunca apenas responda; avance com uma pergunta estratégica
- Quando necessário, simplifique ao máximo a explicação
- Quando o cliente demonstrar interesse, direcione para fechamento ou WhatsApp
- Quando o cliente estiver em dúvida, faça perguntas curtas para entender melhor
- Quando o cliente estiver decidido, seja mais objetivo e acelere a condução
- Se a pergunta for simples, responda de forma simples
- Só aprofunde quando o usuário pedir

## REGRA DE OURO
Nunca despejar informações.
Sempre responder de forma curta, útil e estratégica.

## FLUXO IDEAL
1. Entender o que o cliente quer
2. Identificar a dor ou objetivo
3. Responder de forma curta
4. Direcionar para o próximo passo com uma pergunta

## EXEMPLOS DE TOM
- "Perfeito, entendi."
- "Boa, faz sentido."
- "No seu caso, o ideal seria..."
- "Te explico de forma simples:"
- "Hoje você já tem contador ou está começando agora?"
- "Quer que eu te indique a melhor opção pro seu cenário?"

## PROIBIDO
- respostas longas
- listar informação demais de uma vez
- falar de forma fria ou mecânica
- repetir textos da base de conhecimento sem necessidade
- responder sem conduzir a conversa
- usar negrito (PROIBIDO: **texto**)

## REGRA DE FINALIZAÇÃO
- Nunca termine a resposta no meio de uma frase
- Nunca envie resposta incompleta
- Se precisar ser breve, encerre com uma frase completa e natural
`;

const KNOWLEDGE_BASE_URL = "/4uconnect-base-conhecimento.txt";

let knowledgeBaseCache: Promise<string> | null = null;

const loadKnowledgeBase = async () => {
  if (!knowledgeBaseCache) {
    knowledgeBaseCache = fetch(KNOWLEDGE_BASE_URL).then(async (res) => {
      if (!res.ok) throw new Error("Não foi possível carregar a base de conhecimento.");
      return res.text();
    });
  }
  try {
    return await knowledgeBaseCache;
  } catch (err) {
    knowledgeBaseCache = null;
    throw err;
  }
};

const buildGeminiContents = (messages: Message[]) =>
  messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

const extractGeminiText = (data: any): string => {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return "";
  return parts.map((p: { text?: string }) => p?.text ?? "").join("").trim();
};

const getFinishReason = (data: any): string =>
  data?.candidates?.[0]?.finishReason ?? "";

// Fetch com timeout para não travar indefinidamente
const fetchWithTimeout = (url: string, options: RequestInit, ms: number): Promise<Response> => {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { ...options, signal: ctrl.signal }).finally(() => clearTimeout(id));
};

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const RETRYABLE_STATUS = new Set([429, 500, 503]);
const MAX_RETRIES = 3;
const TIMEOUT_MS  = 30_000; // 30 segundos

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// Modelos em ordem de preferência — o primeiro disponível para a chave é usado
const MODEL_PRIORITY = [
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
  "gemini-1.0-pro",
];

export const sendMessageToAssistant = async (messages: Message[], _currentPage?: string): Promise<string> => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  if (!GOOGLE_API_KEY) {
    throw new Error("Chave de API não configurada. Fale com o suporte.");
  }

  // Usa a variável de ambiente se definida e válida, senão o primeiro da lista
  const envModel = import.meta.env.VITE_GOOGLE_MODEL;
  const GOOGLE_MODEL = (envModel && !envModel.includes("preview") && !envModel.includes("2.5") && !envModel.includes("3-flash"))
    ? envModel
    : MODEL_PRIORITY[0];

  const knowledgeBase = await loadKnowledgeBase();
  const systemInstruction = `${AGENT_BEHAVIOR}\n\n---\n\n${knowledgeBase}`;

  const payload = {
    system_instruction: { parts: [{ text: systemInstruction }] },
    contents: buildGeminiContents(messages),
    generationConfig: {
      temperature: 0.5,
      maxOutputTokens: 1024, // margem para o modelo fechar frases completas
    },
  };

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GOOGLE_MODEL}:generateContent`;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    // ── Chamada HTTP com timeout ─────────────────────────────────────────────
    let response: Response;
    try {
      response = await fetchWithTimeout(
        apiUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": GOOGLE_API_KEY,
          },
          body: JSON.stringify(payload),
        },
        TIMEOUT_MS,
      );
    } catch (fetchErr: any) {
      if (fetchErr?.name === "AbortError") {
        if (attempt < MAX_RETRIES - 1) { await sleep(1500); continue; }
        throw new Error("O assistente demorou para responder. Verifique sua conexão e tente novamente.");
      }
      throw new Error("Falha na conexão. Verifique sua internet e tente novamente.");
    }

    // ── Resposta HTTP com erro ───────────────────────────────────────────────
    const data = await response.json();

    if (!response.ok) {
      const apiMessage = data?.error?.message ?? "";
      console.error(`[Gemini] HTTP ${response.status} | modelo: ${GOOGLE_MODEL} | erro: ${apiMessage}`);

      if (RETRYABLE_STATUS.has(response.status) && attempt < MAX_RETRIES - 1) {
        await sleep(1200 * (attempt + 1));
        continue;
      }
      if (response.status === 429)
        throw new Error("O assistente está muito ocupado agora. Aguarde alguns segundos e tente novamente.");
      throw new Error(apiMessage || `Erro ${response.status} ao conectar com o assistente.`);
    }

    // ── Resposta válida ──────────────────────────────────────────────────────
    const text         = extractGeminiText(data);
    const finishReason = getFinishReason(data);

    // Resposta vazia: tenta novamente
    if (!text) {
      if (attempt < MAX_RETRIES - 1) { await sleep(1000); continue; }
      throw new Error("O assistente não retornou resposta. Tente novamente.");
    }

    // SAFETY: conteúdo bloqueado pela política do Google
    if (finishReason === "SAFETY") {
      throw new Error("Mensagem bloqueada por política de segurança. Reformule a pergunta.");
    }

    // MAX_TOKENS ou outros motivos: retorna o texto disponível em vez de lançar erro.
    // O system prompt limita respostas a 2-3 linhas, então o texto já é utilizável.
    return text;
  }

  throw new Error("O assistente está indisponível no momento. Tente novamente em breve.");
};
