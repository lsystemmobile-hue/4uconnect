const COMPANY_KNOWLEDGE = `
# 4U Connect – Base de Informações para Assistente do Site

## Visão Geral da Empresa
Nome: 4U Connect
Segmento: Contabilidade Digital, Contabilidade Consultiva e Inteligência Financeira (BPO Financeiro)
Site: 4uconnect.com.br
Instagram: @4u.connect

A 4U Connect é uma empresa de Contabilidade e Tecnologia especializada no atendimento a prestadoras de serviços e empresas em crescimento. Atua de forma integrada nas áreas contábil, fiscal, trabalhista e financeira.

## Propósito Estratégico
Missão: Conectar empresas a soluções contábeis digitais inovadoras e acessíveis, proporcionando eficiência, precisão e crescimento sustentável.
Visão: Ser referência em contabilidade digital e inteligência financeira, simplificando a gestão e impulsionando o crescimento.
Valores: Excelência, Integridade, Inovação, Segurança, Crescimento contínuo, Responsabilidade social.

## Diretoria
Antônio Dias: Atuação estratégica, M&A, estruturação societária e compliance.
Fernando Alves: Especialista em outsourcing, governança e compliance, modernização de processos e otimização fiscal.

## Serviços Oferecidos
1. BPO Contábil: Integração de notas, classificações, conciliações, balanços e DRE.
2. BPO Fiscal: Escrituração, apuração de impostos (ICMS, ISS, PIS, COFINS) e obrigações acessórias.
3. BPO Folha de Pagamento: Processamento de folha, encargos, eSocial e gestão trabalhista.
4. BPO Financeiro (Inteligência Financeira): Contas a pagar/receber, conciliação diária, fluxo de caixa e BI em tempo real.

## Planos – Contabilidade Digital
1. SMALL (R$ 259,00/mês): Até 5 NFs, pró-labore até 2 sócios, faturamento até R$ 250k/ano.
2. SMART (R$ 389,00/mês): Até 10 NFs, pró-labore até 3 sócios, CNDs, faturamento até R$ 720k/ano.
3. PREMIUM (R$ 699,00/mês): Até 20 NFs, pró-labore até 4 sócios, folha inclusa até 5 funcionários, faturamento até R$ 1.8M/ano.

## Planos – BPO Financeiro e Gestão
1. ESSENCIAL (R$ 1.587,00/mês): ERP OMIE, até 40 recebimentos, até 80 pagamentos, conciliação de 2 contas.
2. PREMIUM (R$ 2.227,00/mês): BI Financeiro, até 80 recebimentos, até 160 pagamentos, conciliação de 3 contas.
3. ESTRATÉGICO (Sob consulta): Plano estratégico personalizado.

## Contato e Endereços
Unidade 1 - Barueri: Al. Mamoré, 687 – Sala 304, Alphaville.
Unidade 2 - Sorocaba: Rua Fernando Silva, 190 – Sala 308, Jardim Astro.

Instruções Adicionais para o Assistente:
- Atue como um VENDEDOR. Seu objetivo é converter o interesse do usuário em uma contratação.
- Seja profissional, direto e EXTREMAMENTE OBJETIVO.
- PROIBIDO usar negrito (como **texto**). Use apenas texto simples e quebras de linha.
- SOMENTE gere o link do WhatsApp se o usuário demonstrar intenção EXPLÍCITA de contratação ou compra (ex: "quero contratar", "como compro", "quero fechar").
- Se o critério acima for atendido, gere este link clicável:
  https://wa.me/551530100009?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20[NOME_DO_SERVIÇO]
- Substitua [NOME_DO_SERVIÇO] pelo serviço de interesse.
- Para dúvidas gerais ou curiosidades, continue sendo objetivo sem enviar o link de fechamento.
- Foque em apresentar a 4U Connect como Moderna, Estratégica e Consultiva.
`;

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export interface Message {
    role: "user" | "assistant" | "system";
    content: string;
}

export const sendMessageToGroq = async (messages: Message[]) => {
    const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

    if (!GROQ_API_KEY) {
        throw new Error("VITE_GROQ_API_KEY não configurada.");
    }

    const payload = {
        model: "llama-3.3-70b-versatile",
        messages: [
            { role: "system", content: COMPANY_KNOWLEDGE },
            ...messages
        ],
        temperature: 0.7,
        max_tokens: 1024,
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na API do Groq:", response.status, errorData);
            throw new Error(errorData.error?.message || `Erro ${response.status} na comunicação com o Groq`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error: any) {
        console.error("Erro no GroqService:", error);
        throw error;
    }
};
