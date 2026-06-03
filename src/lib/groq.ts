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

const fetchWithTimeout = (url: string, options: RequestInit, ms: number): Promise<Response> => {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { ...options, signal: ctrl.signal }).finally(() => clearTimeout(id));
};

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const GROQ_MODEL    = "llama-3.3-70b-versatile";
const GROQ_API_URL  = "https://api.groq.com/openai/v1/chat/completions";
const RETRYABLE_STATUS = new Set([429, 500, 503]);
const MAX_RETRIES   = 3;
const TIMEOUT_MS    = 30_000;

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const sendMessageToAssistant = async (messages: Message[], _currentPage?: string): Promise<string> => {
  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    throw new Error("Chave de API não configurada. Fale com o suporte.");
  }

  const knowledgeBase = await loadKnowledgeBase();
  const systemPrompt  = `${AGENT_BEHAVIOR}\n\n---\n\n${knowledgeBase}`;

  // Groq usa formato OpenAI: system message + histórico de conversa
  const groqMessages = [
    { role: "system", content: systemPrompt },
    ...messages
      .filter((m) => m.role !== "system")
      .map((m) => ({ role: m.role, content: m.content })),
  ];

  const payload = {
    model: GROQ_MODEL,
    messages: groqMessages,
    temperature: 0.5,
    max_tokens: 1024,
  };

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    let response: Response;

    try {
      response = await fetchWithTimeout(
        GROQ_API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`,
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

    const data = await response.json();

    if (!response.ok) {
      const apiMessage = data?.error?.message ?? "";
      console.error(`[Groq] HTTP ${response.status} | modelo: ${GROQ_MODEL} | erro: ${apiMessage}`);

      if (RETRYABLE_STATUS.has(response.status) && attempt < MAX_RETRIES - 1) {
        await sleep(2000 * (attempt + 1));
        continue;
      }
      if (response.status === 429)
        throw new Error("O assistente está muito ocupado agora. Aguarde alguns segundos e tente novamente.");
      if (response.status === 401)
        throw new Error("Chave de API inválida. Fale com o suporte.");
      throw new Error(apiMessage || `Erro ${response.status} ao conectar com o assistente.`);
    }

    const text = (data?.choices?.[0]?.message?.content ?? "").trim();
    const finishReason = data?.choices?.[0]?.finish_reason ?? "";

    if (!text) {
      if (attempt < MAX_RETRIES - 1) { await sleep(1000); continue; }
      throw new Error("O assistente não retornou resposta. Tente novamente.");
    }

    if (finishReason === "content_filter") {
      throw new Error("Mensagem bloqueada por política de segurança. Reformule a pergunta.");
    }

    return text;
  }

  throw new Error("O assistente está indisponível no momento. Tente novamente em breve.");
};
