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
    knowledgeBaseCache = fetch(KNOWLEDGE_BASE_URL, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error("Não foi possível carregar a base de conhecimento da 4U Connect.");
      }

      return response.text();
    });
  }

  try {
    return await knowledgeBaseCache;
  } catch (error) {
    knowledgeBaseCache = null;
    throw error;
  }
};

const buildGeminiContents = (messages: Message[]) => {
  return messages
    .filter((message) => message.role !== "system")
    .map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    }));
};

const extractGeminiText = (data: any) => {
  const parts = data?.candidates?.[0]?.content?.parts;

  if (!Array.isArray(parts)) {
    return "";
  }

  return parts
    .map((part: { text?: string }) => part?.text ?? "")
    .join("")
    .trim();
};

const getFinishReason = (data: any) => {
  return data?.candidates?.[0]?.finishReason || "";
};

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export const sendMessageToAssistant = async (messages: Message[], _currentPage?: string) => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const GOOGLE_MODEL = import.meta.env.VITE_GOOGLE_MODEL || "gemini-3-flash-preview";

  if (!GOOGLE_API_KEY) {
    throw new Error("VITE_GOOGLE_API_KEY não configurada.");
  }

  const knowledgeBase = await loadKnowledgeBase();
  const systemInstruction = `${AGENT_BEHAVIOR}\n\n---\n\n${knowledgeBase}`;

  const payload = {
    system_instruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: buildGeminiContents(messages),
    generationConfig: {
      temperature: 0.5,
      maxOutputTokens: 600,
    },
  };

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GOOGLE_MODEL}:generateContent`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GOOGLE_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro na API do Google:", response.status, data);
      throw new Error(data?.error?.message || `Erro ${response.status} na comunicação com a API do Google.`);
    }

    const text = extractGeminiText(data);
    const finishReason = getFinishReason(data);

    if (!text) {
      console.error("Resposta vazia da API do Google:", data);
      throw new Error("A API do Google não retornou uma resposta válida.");
    }

    if (finishReason && finishReason !== "STOP") {
      console.error("Resposta potencialmente incompleta da API do Google:", finishReason, data);
      throw new Error("A resposta do assistente foi interrompida antes de concluir. Tente novamente.");
    }

    return text;
  } catch (error: any) {
    console.error("Erro no GoogleService:", error);
    throw error;
  }
};
