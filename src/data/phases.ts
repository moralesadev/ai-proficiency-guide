import type { PhaseData } from '../types';

export const phases: PhaseData[] = [
  {
    id: 0,
    label: 'Phase 1',
    name: 'Foundation',
    duration: 'Weeks 1–3',
    badgeBg: '#E1F5EE',
    badgeColor: '#0F6E56',
    progressColor: '#1D9E75',
    desc: "Build the core literacy you need to speak confidently about AI tools, vendors, and concepts. You won't be an expert yet — but you'll never be caught flat-footed in a client conversation.",
    modules: [
      {
        icon: 'Globe',
        title: 'AI landscape fundamentals',
        sub: '~4 hrs',
        topics: [
          'Difference between LLMs, agents, and automation tools',
          'Key vendors: Anthropic (Claude), OpenAI, Microsoft Copilot, Google Gemini',
          'How major AI product families compare: Anthropic, OpenAI, Microsoft, Google',
          "What 'frontier models' and 'context windows' mean in plain language",
          'SaaS AI vs. self-hosted / local models — and when each matters',
        ],
      },
      {
        icon: 'Building2',
        title: 'Enterprise AI adoption patterns',
        sub: '~3 hrs',
        topics: [
          'Centralized vs. decentralized tool deployment',
          'Shadow IT risk when employees self-install AI tools',
          'How organizations form AI Centers of Excellence or steering committees',
          'Adoption lifecycle: pilot → core group → governed rollout',
          'Common resistance patterns and how consultants address them',
        ],
      },
      {
        icon: 'ShieldCheck',
        title: 'Security & governance basics',
        sub: '~3 hrs',
        topics: [
          'Data privacy considerations: what goes into AI prompts?',
          'Role-based access control (RBAC) for AI tools',
          'Acceptable use policies — what organizations need and how to draft them',
          'Compliance touchpoints: SOC 2, GDPR, HIPAA in AI context',
          "Evaluating vendor trust: Anthropic's Constitutional AI, Microsoft's responsible AI commitments",
        ],
      },
    ],
    milestones: [
      {
        label: 'Can explain the AI vendor landscape to a non-technical client',
        desc: "Confidently map Claude, Copilot, and Gemini to different use cases without fumbling on terminology.",
      },
      {
        label: 'Can frame the centralized vs. decentralized deployment debate',
        desc: "Know the risks and benefits of each and articulate the 'core group' approach.",
      },
    ],
    weeks: [
      {
        label: 'Week 1',
        weekNumber: 1,
        title: 'AI landscape fundamentals',
        time: '~4 hrs total',
        goal: "By Friday you should be able to explain what LLMs are, name the four major AI vendors and their flagship products, and describe the difference between a cloud AI tool and a local model — in plain language, without jargon.",
        days: [
          {
            day: 'Mon',
            topic: 'What is an LLM?',
            task: "30 min: Read an intro explainer on how LLMs work — try Google's 'What are large language models?' or OpenAI's overview. Goal: understand tokens, context windows, and why models 'hallucinate'.",
            prompt: `I'm an AI consultant building foundational knowledge. Explain what a Large Language Model (LLM) is in plain, jargon-free language suitable for explaining to a non-technical business client. Cover:\n- What tokens are and why they matter\n- What a context window is and why it has limits\n- Why models "hallucinate" and what that means in practice\n\nEnd with 3 questions I should be able to answer confidently after today's reading.`,
          },
          {
            day: 'Tue',
            topic: 'The vendor landscape',
            task: '45 min: Explore Claude.ai, ChatGPT, Copilot, and Gemini — try the same prompt in each. Note what feels different.',
            prompt: `I'm an AI consultant who needs to advise clients on choosing between major AI tools. Give me a concise comparison of Claude (Anthropic), ChatGPT (OpenAI), Microsoft Copilot, and Google Gemini covering:\n- Primary use case and target user\n- Key strengths for business users\n- One notable limitation or watch-out\n- How it's typically licensed/priced for enterprise\n\nFormat as a comparison table, then add a 2-sentence "when to recommend this" summary for each.`,
          },
          {
            day: 'Wed',
            topic: 'Cloud vs. local models',
            task: '30 min: Read one article on local models (e.g. Ollama, LLaMA). Understand why most business users will never need this.',
            prompt: `I'm an AI consultant and a client has asked whether they should run AI models locally (on their own hardware) instead of using cloud-based tools like Claude or Copilot. Help me understand:\n- What "running a local model" actually means (e.g. Ollama, LLaMA)\n- The realistic use cases where local models make sense for a business\n- The reasons most business users don't need this\n- The key factors to evaluate: privacy, cost, capability, and maintenance burden\n\nGive me a 60-second answer I could give a client, then a more detailed explanation I can reference.`,
          },
          {
            day: 'Thu',
            topic: 'Agents vs. automation',
            task: "30 min: Read about AI agents. Key question: what's the difference between a chatbot and an agent?",
            prompt: `I'm an AI consultant and I need to clearly explain the difference between AI chatbots and AI agents to business clients who often confuse the two. Please:\n- Define AI agents in plain language\n- Explain what makes an agent different from a standard chatbot (autonomy, tool use, multi-step reasoning)\n- Give 2–3 concrete business examples of each so the distinction is clear\n- Describe the governance and risk considerations that come with agents that don't apply to simple chatbots\n\nKeep the language accessible — no jargon without explanation.`,
          },
          {
            day: 'Fri',
            topic: 'Consolidation',
            task: "30 min: Write a one-page 'AI tools cheat sheet' — what you'd say to a non-technical client who asks 'what are all these AI tools I keep hearing about?' Cover at least two major tools.",
            prompt: `I'm an AI consultant preparing a one-page AI tools cheat sheet for non-technical clients. Help me write a plain-language summary covering ChatGPT, Claude, Microsoft Copilot, and Google Gemini — one short paragraph each. For each: what it is, who makes it, and one sentence on when a business user would choose it. After the summaries, give me 3 follow-up questions a client would likely ask and the ideal short answer for each.`,
          },
        ],
        resources: [
          { name: "Anthropic's intro to Claude", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Clear, non-technical overview of how Claude works and what makes it different from other AI tools.', url: 'https://www.anthropic.com/claude' },
          { name: 'Microsoft Copilot overview', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Official overview of Copilot — useful for understanding what your clients who use M365 are already being offered.', url: 'https://www.microsoft.com/en-us/microsoft-copilot' },
          { name: 'Google Gemini for Workspace', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "Google's positioning for enterprise AI — good to understand how it's pitched to Workspace customers.", url: 'https://workspace.google.com/intl/en/products/gemini/' },
          { name: "'What are large language models?' — Google explainer", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Clear, beginner-friendly explainer on how LLMs work without requiring a technical background.', url: 'https://cloud.google.com/ai/llms' },
        ],
        checks: [
          'Can explain what an LLM is in one sentence to a non-technical person',
          'Know the four major AI vendors: Anthropic, OpenAI, Microsoft, Google',
          'Can describe the difference between a cloud AI tool and a local model',
          "Understand what 'AI agents' means vs. simple chatbot automation",
        ],
        tip: "Don't just read — try the tools. Clients who ask about AI have usually already tried one or two of them. Your credibility goes up immediately when you can say 'I ran the same task in three different tools and here's what I noticed.'",
      },
      {
        label: 'Week 2',
        weekNumber: 2,
        title: 'Enterprise adoption patterns',
        time: '~4 hrs total',
        goal: "Understand how organizations actually roll out AI tools — the politics, the pitfalls, and the playbooks. This is the consulting meat. The centralized vs. decentralized debate from your client call lives here.",
        days: [
          { day: 'Mon', topic: 'Centralized vs. decentralized', task: "45 min: Research 'AI center of excellence' and 'shadow IT AI risk'. Write down the pros and cons of each deployment model." ,
            prompt: `I'm an AI consultant studying enterprise deployment models. Compare centralized AI deployment (IT-governed center of excellence) vs. decentralized (shadow IT / employee self-adoption). For each model: 3 pros, 3 risks, and the organization type it suits best. End with a 60-second recommendation I could give a client who asks which model to use.`
          },
          { day: 'Tue', topic: 'The core group model', task: '45 min: Read about how organizations form AI steering committees. Map the stakeholders: IT, HR, legal, business champions.',
            prompt: `I'm an AI consultant advising on AI rollout strategy. Explain the core group / pilot model: how to select the right pilot users, what IT, HR, legal, and business champions each need to contribute, how long a pilot should run, and how to structure the transition to broader rollout.`
          },
          { day: 'Wed', topic: 'Adoption lifecycle', task: '45 min: Read a Gartner or McKinsey piece on AI adoption curves. Note where most organizations get stuck.',
            prompt: `I'm an AI consultant studying AI adoption patterns. Summarize where organizations most commonly get stuck — from initial pilot through enterprise-wide deployment. For each sticking point: why it happens, what consultants recommend, and one sentence I could use in a client conversation.`
          },
          { day: 'Thu', topic: 'Resistance patterns', task: '45 min: Find two case studies of failed AI rollouts. What went wrong? Was it tech, people, or process?',
            prompt: `I'm an AI consultant studying why AI rollouts fail. Give me 3 representative case studies of failed enterprise AI initiatives. For each: what went wrong (tech, people, or process) and what the organization should have done differently. End with the top 3 root causes of AI rollout failure.`
          },
          { day: 'Fri', topic: 'Your advisory framework', task: '45 min: Draft a simple decision framework — a set of 5 questions you\'d ask a new client to diagnose their deployment readiness.',
            prompt: `I'm an AI consultant building a discovery tool. Help me develop a 5-question AI deployment readiness diagnostic for the first 30 minutes of a client call. For each question: what I'm trying to learn, what a ready vs. not-ready answer looks like, and the follow-up to ask if I hear a red flag.`
          },
        ],
        resources: [
          { name: "McKinsey: 'The state of AI' annual report", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Industry benchmark data on AI adoption rates, barriers, and what separates leaders from laggards.', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
          { name: 'Gartner AI Hype Cycle', badge: 'Free summary', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Useful framework for explaining to clients where specific AI tools sit in terms of maturity and adoption.', url: 'https://www.gartner.com/en/articles/what-s-new-in-artificial-intelligence-from-the-2023-gartner-hype-cycle' },
          { name: "HBR: 'How to scale AI in your organization'", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Practitioner-focused article covering governance models, change management, and why most AI pilots fail to scale.', url: 'https://hbr.org/2023/11/how-to-scale-generative-ai' },
          { name: "Anthropic usage policies", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "Understanding Anthropic's own policies on acceptable use — essential when advising clients on governance guardrails.", url: 'https://www.anthropic.com/policies/usage' },
        ],
        checks: [
          'Can articulate the risks of letting all employees self-install AI tools',
          "Know what a 'core group' model looks like and why consultants recommend it",
          'Can name the typical stakeholders in an enterprise AI rollout',
          "Have a draft set of 5 discovery questions for diagnosing a client's AI readiness",
        ],
        tip: "The 'core group' recommendation is something you should be able to explain in 60 seconds without notes. Practice saying it out loud. Consultants who can't articulate frameworks clearly don't get repeat engagements.",
      },
      {
        label: 'Week 3',
        weekNumber: 3,
        title: 'Security & governance',
        time: '~3 hrs total',
        goal: "You don't need to become a security expert. You need to know enough to have a credible governance conversation — and to know when to loop in IT, legal, or compliance. This week gives you that floor.",
        days: [
          { day: 'Mon', topic: 'Data privacy basics', task: '45 min: Read about what happens to data sent to AI APIs. Understand how major vendors (Anthropic, OpenAI, Microsoft) handle enterprise data — and what a Data Processing Agreement (DPA) adds.',
            prompt: `I'm an AI consultant advising clients on AI data privacy. Explain how the major AI vendors handle enterprise data: Anthropic (Claude), OpenAI (ChatGPT), and Microsoft (Copilot). For each: is data used for model training by default, where is it stored, and what does a Data Processing Agreement change? Give me a 60-second answer I could give a client worried about confidential data leaving their organization.`
          },
          { day: 'Tue', topic: 'RBAC and access controls', task: '30 min: Learn what role-based access control means in an AI tool context. What restrictions should a company apply by role?',
            prompt: `I'm an AI consultant setting up role-based access control for AI tools. Give me a practical example for a mid-size firm: what AI access and restrictions should apply to executives, managers, analysts, HR, IT admins, and legal? For each role: which tools, what data they can input, and any guardrails.`
          },
          { day: 'Wed', topic: 'Compliance touchpoints', task: "45 min: Read summaries of SOC 2, GDPR, and HIPAA — not deep dives, just enough to recognize when they're relevant in a client conversation." ,
            prompt: `I'm an AI consultant who needs to recognize when SOC 2, GDPR, and HIPAA are relevant in AI conversations. For each: what it governs, which industries trigger it, and the specific AI-related questions it raises. End with a when-to-escalate-to-legal guideline for each.`
          },
          { day: 'Thu', topic: 'Acceptable use policies', task: '30 min: Find two example corporate AI use policies (many are public). Note what they restrict and why.',
            prompt: `I'm an AI consultant helping a client draft an AI acceptable use policy. Break down the key elements every policy should include: what to restrict and why, what to require employees to do, and common gaps that leave organizations exposed. Draft a one-paragraph executive summary explaining why the policy exists.`
          },
          { day: 'Fri', topic: 'Synthesis', task: "30 min: Draft a one-page 'governance starter checklist' you could give a client in a discovery meeting." ,
            prompt: `I'm an AI consultant building a governance starter checklist for client discovery meetings. Create a one-page checklist across 5 sections: Data Privacy, Access Controls, Compliance, Acceptable Use, and Incident Response. For each section: 3–4 specific yes/no items a non-technical executive can answer.`
          },
        ],
        resources: [
          { name: "OpenAI enterprise privacy", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "How OpenAI handles enterprise data for ChatGPT and the API — essential reading when clients ask about ChatGPT data privacy.", url: 'https://openai.com/enterprise-privacy' },
          { name: 'NIST AI Risk Management Framework', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "The federal government's framework for managing AI risk — increasingly referenced in enterprise RFPs.", url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { name: 'IBM: AI governance explainer', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Accessible breakdown of what AI governance means in practice — good client-facing language here.', url: 'https://www.ibm.com/topics/ai-governance' },
          { name: "Microsoft Responsible AI principles", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "Microsoft's framework for responsible AI — directly relevant when advising clients on Copilot governance and enterprise trust.", url: 'https://www.microsoft.com/en-us/ai/responsible-ai' },
        ],
        checks: [
          'Understand what data privacy risks arise when employees use AI tools unsupervised',
          'Can explain role-based access control for AI in plain language',
          'Know when SOC 2, GDPR, and HIPAA become relevant in an AI conversation',
          'Have a draft governance checklist you could share with a client',
        ],
        tip: "When a client's IT team raises security objections, your job isn't to override them — it's to validate their concern and redirect to a governance path. 'That's exactly why we recommend starting with a controlled pilot group' is a powerful phrase.",
      },
    ],
  },
  {
    id: 1,
    label: 'Phase 2',
    name: 'Product depth',
    duration: 'Weeks 4–6',
    badgeBg: '#EEEDFE',
    badgeColor: '#3C3489',
    progressColor: '#7F77DD',
    desc: "Go deep on every major AI tool your clients are using or evaluating. By the end you should be able to walk into any client meeting and speak confidently about ChatGPT, Claude, Microsoft Copilot, and Google Gemini — what each does, who it's for, and when to recommend it.",
    modules: [
      {
        icon: 'LayoutGrid',
        title: 'AI assistant tools — the big four',
        sub: '~5 hrs',
        topics: [
          'ChatGPT (OpenAI): plans, use cases, and enterprise capabilities',
          'Claude (Anthropic): product family from Claude.ai to API and agentic tools',
          'Microsoft Copilot: M365 integration, licensing, and who already has it',
          'Google Gemini: Workspace integration and strengths for Google-native organizations',
          'Side-by-side comparison: how to run the same task across tools and form a view',
        ],
      },
      {
        icon: 'Layers',
        title: 'Extended product families',
        sub: '~4 hrs',
        topics: [
          "Claude's extended suite: API, Claude Code, and Cowork — when clients need more than the chat UI",
          'Microsoft 365 Copilot: Word, Excel, Teams, and the enterprise licensing model',
          'GitHub Copilot and coding-focused AI tools — who benefits and who doesn\'t',
          'Google Gemini Advanced and NotebookLM — Google\'s power-user offer',
          "Building a consultant's tool selection matrix: the right tool for the right organization",
        ],
      },
      {
        icon: 'Cpu',
        title: 'Hardware & infrastructure',
        sub: '~2 hrs',
        topics: [
          'Mac vs. PC for AI tasks — what actually matters (RAM, GPU, NPU)',
          'When local models matter vs. cloud-only tools',
          'Minimum specs for local AI tools and developer environments',
          "Cloud AI tools: why most business users don't need special hardware",
          'Advising on hardware refresh decisions tied to AI adoption',
        ],
      },
    ],
    milestones: [
      {
        label: 'Can walk a client through all four major AI product families',
        desc: 'For each vendor, know what the product does, who it\'s for, how it\'s priced, and when to recommend it over alternatives.',
      },
      {
        label: 'Can advise on Mac vs. PC for AI use cases',
        desc: 'Give a confident, clear answer — not specs, but use-case driven guidance.',
      },
    ],
    weeks: [
      {
        label: 'Week 4',
        weekNumber: 4,
        title: 'AI assistant tools — the big four',
        time: '~5 hrs total',
        goal: "By Friday you should be able to walk into any client meeting and explain ChatGPT, Claude, Microsoft Copilot, and Google Gemini — what each does best, who it's for, and how it's priced. You'll have run the same task in all four and formed your own view.",
        days: [
          { day: 'Mon', topic: 'ChatGPT — plans and capabilities', task: "60 min: Sign into ChatGPT (free and paid). Explore GPT-4o, web browsing, and file analysis. Read the Teams and Enterprise plan pages. What does enterprise-grade ChatGPT include that free users don't get?",
            prompt: `I'm an AI consultant advising clients on ChatGPT. Break down ChatGPT's Free, Plus, Team, and Enterprise plans: what each includes, usage limits, pricing, and the features that matter most for business users. Give me a decision guide: which plan for which type of organization, and what are the most common misunderstandings clients have about ChatGPT's enterprise capabilities?`
          },
          { day: 'Tue', topic: 'Claude.ai — plans and capabilities', task: "60 min: Sign into Claude.ai. Explore the interface, Projects, and team features. Compare Free, Pro, and Team plans. What makes Claude distinct from ChatGPT for business users?",
            prompt: `I'm an AI consultant advising clients on Claude.ai. Compare Free, Pro, and Team plans: what each includes, usage limits, pricing, and the features that differentiate Claude from ChatGPT for business users (Projects, context window, document analysis). Give me a decision guide: which plan for which type of organization?`
          },
          { day: 'Wed', topic: 'Microsoft Copilot — who already has it', task: "45 min: Read Microsoft's Copilot overview. Understand the difference between Copilot (free, built into Windows/Edge/Bing) and Microsoft 365 Copilot (paid, integrated into Teams, Outlook, Word, Excel). Who already has access through their M365 license?",
            prompt: `I'm an AI consultant advising clients on Microsoft Copilot. Explain the difference between the free Copilot (built into Windows/Edge/Bing) and Microsoft 365 Copilot (paid enterprise product integrated into Teams, Outlook, Word, and Excel). Who already has each through their Microsoft subscription? When should a client prioritize Copilot over adding another AI tool?`
          },
          { day: 'Thu', topic: 'Google Gemini — strengths for Google-native organizations', task: "45 min: Try Gemini at gemini.google.com. Read the Gemini for Google Workspace overview. Who already has Gemini through their Google subscription? When does Gemini win vs. when should a client look elsewhere?",
            prompt: `I'm an AI consultant advising Google Workspace clients on Gemini. Break down Google Gemini: the free tier, Gemini Advanced, and Gemini for Google Workspace. Who already has it through their Google subscription? What are its genuine strengths for Google-native organizations, and when is it insufficient compared to Claude or ChatGPT?`
          },
          { day: 'Fri', topic: 'Side-by-side comparison', task: "60 min: Run the same business task (e.g. summarize an email thread and draft a response) in ChatGPT, Claude, Copilot, and Gemini. Document what you notice. Build a one-page comparison card you'd share with a client.",
            prompt: `I'm an AI consultant who has run the same business task in ChatGPT, Claude, Microsoft Copilot, and Google Gemini. Here are my observations: [PASTE YOUR TASK AND NOTES]. Help me: (1) identify what each tool did that the others didn't, (2) summarize the key differentiators in client-friendly language, and (3) draft a one-page comparison card a client could use to make a tool selection decision.`
          },
        ],
        resources: [
          { name: 'ChatGPT for Teams — overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "OpenAI's overview of ChatGPT Team and Enterprise plans. Many clients are already using ChatGPT — know its current capabilities cold.", url: 'https://openai.com/chatgpt/team' },
          { name: 'Claude.ai product page', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The canonical overview of Claude's consumer and business plans. Clients often come in having skimmed this and wanting clarity on differences.", url: 'https://claude.ai' },
          { name: 'Microsoft Copilot overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Microsoft's full Copilot product lineup — important for understanding what M365 clients already have vs. what requires an additional license.", url: 'https://www.microsoft.com/en-us/microsoft-copilot' },
          { name: 'Google Gemini for Workspace', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Google's positioning for enterprise AI — essential for advising clients who run on Google Workspace.", url: 'https://workspace.google.com/intl/en/products/gemini/' },
        ],
        checks: [
          'Know ChatGPT\'s plans and what enterprise-grade ChatGPT includes beyond the free tier',
          'Can explain what makes Claude.ai distinct from ChatGPT for business users',
          'Understand who already has Microsoft Copilot through their M365 subscription',
          'Know when Gemini is sufficient for a Google Workspace client vs. when they need more',
          'Have run the same task in all four tools and can articulate what you noticed',
        ],
        tip: "The side-by-side comparison on Friday is the single most important activity in Week 4. Clients will ask 'which AI tool is best?' — the honest answer is 'it depends, and here's what each is best at.' You can only say that credibly if you've tried them all.",
      },
      {
        label: 'Week 5',
        weekNumber: 5,
        title: 'Extended product families',
        time: '~5 hrs total',
        goal: "The chat UI is just the entry point. This week you go deep on what each major vendor offers beyond the basic interface — developer APIs, agentic tools, coding assistants, and enterprise-specific capabilities that clients often don't know exist.",
        days: [
          { day: 'Mon', topic: "Claude's extended product family", task: "60 min: Explore the Claude API documentation (no coding needed), Claude Code, and Claude Cowork. When does a client need something beyond Claude.ai? What does each extended product add — and what are the governance risks?",
            prompt: `I'm an AI consultant advising on Anthropic's extended product family beyond Claude.ai. Explain: (1) when a business needs the Claude API vs. the web product and what a Data Processing Agreement adds, (2) what Claude Code does that standard Claude can't and who benefits, (3) what Claude Cowork is and the governance risks it introduces. No code examples — keep it business-focused.`
          },
          { day: 'Tue', topic: 'Microsoft 365 Copilot — the enterprise suite', task: "60 min: Read the M365 Copilot documentation. Understand Copilot in Word, Excel, Teams, and Outlook. What does the enterprise license include? What does a rollout actually look like for a 500-person org?",
            prompt: `I'm an AI consultant advising a client on Microsoft 365 Copilot (the paid enterprise product, not free Copilot chat). Explain: what it does in each M365 application, how it's licensed (per-user pricing, prerequisites), what a typical enterprise rollout looks like, and the most common adoption challenges. When is M365 Copilot sufficient, and when might a client still benefit from adding another AI tool?`
          },
          { day: 'Wed', topic: 'GitHub Copilot and coding tools', task: "30 min: Read about GitHub Copilot and understand who benefits: developers, not general business users. When would you recommend this vs. Claude Code? What about Cursor and other AI coding tools?",
            prompt: `I'm an AI consultant who gets asked about AI tools for developers. Compare GitHub Copilot, Claude Code, and Cursor: who benefits most from each, what the pricing looks like, and when I should recommend one over another. Give me a 60-second framing I could use with a non-technical client who asks 'should our developers be using AI coding tools?'`
          },
          { day: 'Thu', topic: 'Google Gemini Advanced and NotebookLM', task: "45 min: Explore Gemini Advanced and try NotebookLM. What does Gemini Advanced add beyond the free tier? Who is NotebookLM genuinely useful for — and when does it outperform ChatGPT or Claude?",
            prompt: `I'm an AI consultant advising clients on Google's extended AI products. Explain: (1) what Gemini Advanced offers beyond the free tier, (2) what NotebookLM is and the specific use cases where it genuinely outperforms ChatGPT or Claude, (3) how these fit into a tool recommendation for a Google Workspace client. Give me a framework for when to suggest Google's extended products.`
          },
          { day: 'Fri', topic: 'Tool selection matrix', task: "60 min: Build a one-page consultant's tool selection matrix covering all major tools and extended products. Columns: tool, best use case, enterprise pricing, key limitation, when to recommend. This becomes a permanent reference card.",
            prompt: `I'm an AI consultant building my tool selection reference card. Help me create a one-page matrix covering: ChatGPT (Free/Plus/Team/Enterprise), Claude.ai + API + Code + Cowork, Microsoft Copilot (free) + M365 Copilot, Google Gemini (free) + Gemini Advanced + NotebookLM, GitHub Copilot. For each: primary use case, enterprise pricing tier, key limitation, and a one-sentence 'when to recommend this.' Format it as a table I can use as a reference during client calls.`
          },
        ],
        resources: [
          { name: 'Anthropic enterprise page', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "How Anthropic positions Claude for large organizations — pricing, security commitments, API access, and DPA options.", url: 'https://www.anthropic.com/enterprise' },
          { name: 'Microsoft 365 Copilot documentation', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The official M365 Copilot overview — what it does in each application, licensing requirements, and deployment guidance.", url: 'https://www.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot' },
          { name: 'GitHub Copilot overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "GitHub's AI coding assistant — understand who benefits and how it compares to Claude Code so you can advise development teams confidently.", url: 'https://github.com/features/copilot' },
          { name: 'Google NotebookLM overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Google's AI-powered research and note-taking tool. Worth knowing because clients increasingly ask about it for document-heavy workflows.", url: 'https://notebooklm.google.com' },
        ],
        checks: [
          "Understand what Claude API, Code, and Cowork add beyond Claude.ai — and when a client needs them",
          'Can explain what M365 Copilot does across Word, Excel, Teams, and Outlook',
          'Know when to recommend GitHub Copilot vs. Claude Code to a client with developers',
          'Have tried Gemini Advanced or NotebookLM and can describe what makes each useful',
          'Have a complete tool selection matrix covering all major AI products and extended families',
        ],
        tip: "The best AI consultants aren't advocates for one vendor — they're honest brokers who can say 'for your situation, this tool wins because...' You can only do that if you've actually used all of them. This week gives you the depth to be that consultant.",
      },
      {
        label: 'Week 6',
        weekNumber: 6,
        title: 'Hardware, infrastructure & synthesis',
        time: '~4 hrs total',
        goal: "Week 6 closes out Phase 2 with two things: the hardware question (Mac vs. PC, local vs. cloud) that comes up in client calls, and a full synthesis exercise that prepares you to advise confidently across the product and competitive landscape.",
        days: [
          { day: 'Mon', topic: 'Mac vs. PC for AI work', task: "45 min: Research what actually differentiates Macs for AI tasks (Apple Silicon, Neural Engine, RAM). Then ask: for a business user running cloud-based AI tools only, does hardware matter? Write down the answer you'd give a client in 90 seconds." ,
            prompt: `I'm an AI consultant who gets asked 'should we buy Macs for AI?' Explain what Apple Silicon actually does for AI tasks, when it gives a real advantage (e.g. local model inference), and why hardware is largely irrelevant for cloud-based tools like ChatGPT, Claude, or Copilot. Give me the 60-second client answer.`
          },
          { day: 'Tue', topic: 'Local models — who really needs them', task: "30 min: Read about Ollama, LM Studio, and local model use cases. Understand: when does running a local model make sense (privacy, cost at scale, offline), and when is it overkill?" ,
            prompt: `I'm an AI consultant advising on local vs. cloud AI. Explain what tools like Ollama and LM Studio do, the 3–4 business scenarios where local models are genuinely justified, and why most business users will never need them. Give me a framework for evaluating any client's local model interest.`
          },
          { day: 'Wed', topic: 'Cloud AI tool infrastructure', task: "30 min: Understand how major AI vendors (Anthropic, OpenAI, Microsoft) route and store data, what enterprise data residency options each offers, and how to answer 'where does our data go?' for the major tools." ,
            prompt: `I'm an AI consultant answering 'where does our data go?' for clients using major AI tools. For Anthropic (Claude), OpenAI (ChatGPT), and Microsoft (Copilot): explain how each routes data, whether they use prompt data for training by default, what enterprise data residency options exist, and how a Data Processing Agreement changes the picture. Give me a 90-second answer I could give to an IT or legal stakeholder.`
          },
          { day: 'Thu', topic: 'Advising on hardware upgrades', task: "30 min: Draft a framework for advising clients on hardware decisions tied to AI adoption. Key principle: match hardware to actual use case, not to FOMO about Mac-only tools." ,
            prompt: `I'm an AI consultant helping clients with hardware decisions. Build a framework covering: questions to ask before recommending any hardware change, use cases that actually justify different specs, how to redirect a client buying Macs for AI FOMO, and a hardware evaluation checklist for IT.`
          },
          { day: 'Fri', topic: 'Full Phase 2 mock call', task: "60 min: Role-play a 20-minute client call where they ask: (1) which AI tool is right for our org (we use M365), (2) whether to switch to Macs for AI, (3) whether our developers should use AI coding tools. Record yourself if needed." ,
            prompt: `I'm an AI consultant preparing for a mock client call. The client uses M365 and will ask: (1) Which AI tool is right for us — we've heard of ChatGPT, Claude, and Copilot; (2) Should we buy Macs for AI?; (3) Should our developers use AI coding tools? For each question: give me the ideal answer structure, the key point to land, the most common mistake, and a follow-up question to expect from the client.`
          },
        ],
        resources: [
          { name: 'Apple Silicon AI performance overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Apple's documentation on Neural Engine and AI performance. Useful for understanding what Mac hardware actually offers vs. what's marketing.", url: 'https://www.apple.com/mac/ai/' },
          { name: 'Ollama — local model runner', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The most popular tool for running local AI models. Worth installing and experimenting with so you understand what's possible and what the tradeoffs are.", url: 'https://ollama.com' },
          { name: 'Anthropic trust and safety center', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Anthropic's data handling, residency, and security commitments — bookmark this for when clients ask 'where does our data go?' for Claude.", url: 'https://www.anthropic.com/security' },
          { name: 'OpenAI enterprise privacy', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "OpenAI's data handling and enterprise privacy commitments for ChatGPT and the API — the counterpart to Anthropic's trust center.", url: 'https://openai.com/enterprise-privacy' },
        ],
        checks: [
          "Can answer 'should we switch to Macs for AI?' in 90 seconds with a clear framework",
          'Understand when local models make sense vs. when cloud-only is fine',
          'Know how major vendors handle data and can answer client data residency questions for each tool',
          'Have completed a mock client call covering product, hardware, and competitive questions',
          'Feel ready to take the lead on tool-selection questions in a real client conversation',
        ],
        tip: "The mock call on Friday is non-negotiable. Reading about products and advising on products are completely different skills. If you can't find a colleague to role-play with, record yourself answering the three questions out loud and play it back.",
      },
    ],
  },
  {
    id: 2,
    label: 'Phase 3',
    name: 'Consulting skills',
    duration: 'Weeks 7–10',
    badgeBg: '#FAEEDA',
    badgeColor: '#633806',
    progressColor: '#BA7517',
    desc: "Knowing the tools is only half the job. This phase builds the consulting frameworks and conversation skills that let you guide clients through ambiguity, resistance, and competing priorities.",
    modules: [
      {
        icon: 'ClipboardList',
        title: 'AI readiness assessment',
        sub: '~4 hrs',
        topics: [
          "How to diagnose an org's AI maturity level (people, process, data, governance)",
          'Identifying quick wins vs. long-term transformation opportunities',
          'Mapping current workflows to AI automation potential',
          'Stakeholder mapping: who influences AI adoption decisions',
          'Building a readiness scorecard you can use in discovery calls',
        ],
      },
      {
        icon: 'Zap',
        title: 'Workflow automation & use case development',
        sub: '~4 hrs',
        topics: [
          'Email summarization, deal analysis, and other common business automations',
          'How to scope a workflow automation project (inputs, outputs, guardrails)',
          'AI workflow automation: prompt chains, automations, and integrations across tools',
          'Connecting AI tools to existing business systems (CRM, email, calendar)',
          'Building a use case pipeline with clients: prioritization frameworks',
        ],
      },
      {
        icon: 'ShieldAlert',
        title: 'Managing risk conversations',
        sub: '~3 hrs',
        topics: [
          'How to discuss AI risk without killing momentum',
          'Framing safeguards as enablers, not blockers',
          "What to say when a client's IT team pushes back on AI tools",
          "Non-technical user risk: the 'powerful tools in wrong hands' problem",
          'Escalation triggers: when to involve legal, compliance, or CISO',
        ],
      },
      {
        icon: 'GraduationCap',
        title: 'Training & change management',
        sub: '~3 hrs',
        topics: [
          'Adult learning principles applied to AI tool adoption',
          'Designing a tiered training program: basic users, power users, developers',
          'Change management frameworks (Kotter, ADKAR) applied to AI rollouts',
          'Measuring adoption success: usage metrics, productivity signals',
          'Building internal AI champions within client organizations',
        ],
      },
    ],
    milestones: [
      {
        label: 'Can run a 30-minute AI readiness discovery call solo',
        desc: "Leave with a clear picture of the client's maturity, top use cases, and key risks.",
      },
      {
        label: 'Can scope and pitch a workflow automation engagement',
        desc: "Translate vague interest ('automate our emails') into a concrete, billable project with clear deliverables.",
      },
    ],
    weeks: [
      {
        label: 'Week 7',
        weekNumber: 7,
        title: 'AI readiness assessment',
        time: '~5 hrs total',
        goal: "By Friday you'll have a working AI readiness assessment tool you can run with a real client in a 30-minute discovery call. This is one of the highest-value deliverables a consultant can bring to a first meeting.",
        deliverable: 'A one-page AI readiness scorecard with 5 dimensions, 3–4 diagnostic questions each, and a scoring rubric you can use in discovery calls.',
        days: [
          { day: 'Mon', topic: 'AI maturity models', task: "45 min: Research existing AI maturity frameworks (MIT Sloan, McKinsey, Gartner). Note the common dimensions: data, talent, process, governance, leadership." ,
            prompt: `I'm an AI consultant building a readiness assessment. Summarize the AI maturity frameworks from McKinsey, MIT Sloan, and Gartner. Synthesize the most useful elements into 5 evaluation dimensions I can use in my own tool, with a plain-language definition and low vs. high maturity signals for each.`
          },
          { day: 'Tue', topic: 'Stakeholder mapping', task: "45 min: For a fictional mid-size company, map out every stakeholder who influences an AI adoption decision: IT, HR, legal, CFO, department heads, frontline workers." ,
            prompt: `I'm an AI consultant preparing for a discovery call. For each stakeholder group — IT, Legal, HR, Finance, Department heads, Frontline workers — give me: their primary AI concern, most likely objection, what would make them a champion, and one thing I should never say to them.`
          },
          { day: 'Wed', topic: 'Quick wins vs. transformation', task: "30 min: Practice separating 'quick win' use cases (email drafting, meeting summaries) from 'transformation' use cases (workflow redesign, new service delivery models)." ,
            prompt: `I'm an AI consultant categorizing client use cases. Define 'quick win' vs. 'transformation initiative,' then sort these 10 use cases: email drafting, meeting summaries, CRM data entry, customer service redesign with agents, proposal writing, HR onboarding automation, legal contract review, real-time sales coaching, invoice processing, new AI-native product. Explain each placement.`
          },
          { day: 'Thu', topic: 'Build your scorecard', task: "60 min: Draft your readiness scorecard. Five dimensions: People, Process, Data, Governance, Leadership. For each, write 3 diagnostic questions and a simple 1–5 scoring rubric." ,
            prompt: `I'm building an AI readiness scorecard across 5 dimensions: People, Process, Data, Governance, Leadership. For each dimension: a plain-language description, 3 diagnostic questions a non-technical executive can answer, and a 1–5 scoring rubric. Make the questions specific enough to differentiate organizations.`
          },
          { day: 'Fri', topic: 'Test your scorecard', task: "45 min: Run your scorecard on a real or fictional organization. Score each dimension. Write a 3-sentence summary of findings and a recommended first step." ,
            prompt: `I'm testing my AI readiness scorecard. Apply it to this fictional organization: [DESCRIBE THE COMPANY — size, industry, tech stack, leadership awareness]. Score each of the 5 dimensions from 1–5. Write a 3-sentence executive summary, identify the single most urgent gap, recommend one concrete 30-day first step, and flag any questions that need refinement.`
          },
        ],
        resources: [
          { name: 'McKinsey AI maturity assessment', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "McKinsey's framework for diagnosing where an organization sits on the AI adoption curve.", url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
          { name: 'MIT Sloan Management Review — AI strategy', badge: 'Free articles', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: 'Practitioner-focused research on how organizations build AI strategy. Strong on the people and process dimensions.', url: 'https://sloanreview.mit.edu/tag/artificial-intelligence/' },
          { name: 'Harvard Business Review — AI readiness', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "HBR's coverage of AI readiness is client-language-friendly — ideal for borrowing framing and vocabulary that resonates with executives.", url: 'https://hbr.org/topic/subject/ai-and-machine-learning' },
          { name: 'Prosci ADKAR change model overview', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: 'ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) is the most-used change management framework in enterprise settings.', url: 'https://www.prosci.com/methodology/adkar' },
        ],
        checks: [
          'Have a working AI readiness scorecard with 5 dimensions and scoring rubric',
          'Can map stakeholders for a typical mid-size client in under 10 minutes',
          'Can separate quick-win use cases from transformation initiatives on the fly',
          'Have run your scorecard on one real or fictional org and written up findings',
          'Could open a client discovery call with your scorecard and run it without notes',
        ],
        tip: "Your readiness scorecard is your most reusable consulting asset from this entire phase. Once you've run it with two or three real clients, you'll iterate it into something genuinely sharp. Don't wait for it to be perfect before using it.",
      },
      {
        label: 'Week 8',
        weekNumber: 8,
        title: 'Workflow automation & use case development',
        time: '~5 hrs total',
        goal: "Clients rarely say 'I want workflow automation.' They say 'I want to spend less time on email' or 'our deal analysis takes too long.' This week you learn to translate vague business pain into scoped, deliverable AI projects.",
        deliverable: 'A use case prioritization matrix you can fill out with a client in real time, ranking opportunities by impact and implementation complexity.',
        days: [
          { day: 'Mon', topic: 'Common business automations', task: "45 min: Using any AI tool (ChatGPT, Claude, or Copilot), build and test three automations: (1) email summarization prompt, (2) meeting notes to action items, (3) deal or proposal analysis. Save your prompts — these become client demos." ,
            prompt: `I'm an AI consultant building client demo prompts. Help me write and refine 3 prompts for: (1) email thread summarization with decisions and action items, (2) meeting notes to action items for a project tracker, (3) deal analysis from pasted CRM notes. For each: the ideal prompt structure, expected output quality, and the 'wow moment' to highlight in a demo.`
          },
          { day: 'Tue', topic: 'Scoping a workflow project', task: "45 min: For each of the three automations you built, write a one-paragraph project scope: inputs, outputs, guardrails, who owns it, and how success is measured." ,
            prompt: `I'm an AI consultant scoping automation projects. Write a one-paragraph project brief for: (1) email summarization for a sales team, (2) meeting notes to actions for a consulting team, (3) proposal analysis for a BD team. Each brief: business problem, inputs, outputs, guardrails, ownership, and success metric. Make each tight enough to share directly with a client.`
          },
          { day: 'Wed', topic: 'AI workflow automation concepts', task: "30 min: Understand the practical difference between a simple AI prompt, a prompt chain, an automation, and an integration (AI connected to another system). How do tools like Claude, ChatGPT, and Copilot approach this differently?" ,
            prompt: `I'm an AI consultant explaining AI workflow automation to clients. Describe the practical difference between: a simple AI prompt, a prompt chain, an automation (triggered workflow), and an integration (AI connected to another system). Give concrete business examples across Claude, ChatGPT, and Copilot. Then give me 3 questions to ask a client to determine what level of automation they actually need.`
          },
          { day: 'Thu', topic: 'Use case prioritization', task: "45 min: Build a 2x2 prioritization matrix: impact (high/low) vs. effort (high/low). Populate it with 10 hypothetical client use cases." ,
            prompt: `I'm building a use case prioritization matrix (Impact vs. Effort). Describe the four quadrants and guidance for each. Then evaluate these 10 use cases and place them: email drafting, legal contract review, CRM auto-update, AI customer service chatbot, meeting summaries, competitive intelligence, proposal generation, onboarding docs, real-time sales coaching, invoice exception processing.`
          },
          { day: 'Fri', topic: 'The use case pitch', task: "60 min: Role-play a client conversation where they describe interest in email summarization and deal analysis. Walk them through your prioritization matrix to land on a concrete first project." ,
            prompt: `I'm an AI consultant practicing the 'vague interest to concrete project' conversation. Play a client who says: 'We want to do something with AI — probably email automation and deal analysis, but we're not sure where to start.' After 5 exchanges, break character and give me feedback: what I did well, what I missed, and what I should have asked sooner.`
          },
        ],
        resources: [
          { name: 'OpenAI prompt engineering guide', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "OpenAI's guide to writing effective prompts. Tool-agnostic principles apply across ChatGPT, Claude, and Copilot.", url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { name: 'Anthropic prompt library', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Anthropic's curated collection of high-quality prompts for business use cases. A practical reference for building client demos across common workflows.", url: 'https://docs.anthropic.com/en/prompt-library/library' },
          { name: 'Process Street — workflow automation examples', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: 'Real-world workflow templates across business functions. Useful for seeing how other practitioners structure and document automated processes.', url: 'https://www.process.st/' },
          { name: 'Zapier blog — AI automation use cases', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Practical, implementation-focused examples of AI automation in business settings. Good for staying current on what's actually being built.", url: 'https://zapier.com/blog/ai-automation/' },
        ],
        checks: [
          'Have built and tested three reusable client demo prompts (email, notes, deal analysis)',
          'Can scope a workflow automation project in a one-paragraph brief',
          'Understand the difference between a simple prompt, a prompt chain, an automation, and an AI integration',
          'Have a populated use case prioritization matrix ready to use with clients',
          "Can run the 'vague interest to concrete project' conversation without preparation",
        ],
        tip: "The clients who remember you are the ones who helped them go from 'we want to do something with AI' to 'here's the specific project we're starting Monday.' That translation skill is not a product knowledge skill. It is a listening and structuring skill.",
      },
      {
        label: 'Week 9',
        weekNumber: 9,
        title: 'Managing risk conversations',
        time: '~4 hrs total',
        goal: "Every AI adoption conversation eventually hits a wall: the IT team pushes back, legal gets nervous, or a senior leader raises concerns about non-technical users having too much power. This week you learn to handle those moments without losing momentum.",
        deliverable: "A one-page 'risk and mitigation' reference card you can pull up during a client conversation to address objections with specific, credible responses.",
        days: [
          { day: 'Mon', topic: 'The anatomy of AI objections', task: "45 min: List every AI objection you've heard or can imagine: data privacy, job displacement, hallucinations, cost, governance gaps, vendor lock-in. For each, write the honest consultant response." ,
            prompt: `I'm an AI consultant preparing for objections. List the AI adoption objections I'll hear from IT/Security, Legal, HR, Finance, and Leadership. For each: the underlying concern, the honest consultant response, and what NOT to say. Be specific — no generic reassurances that would make a skeptical professional distrust me.`
          },
          { day: 'Tue', topic: 'Framing safeguards as enablers', task: "30 min: Practice reframing three common governance requirements as business benefits. Language matters enormously here." ,
            prompt: `I'm an AI consultant reframing governance requirements as business benefits. Reframe these 5 requirements as enablers: (1) mandatory AI training before access, (2) restricting to a pilot group initially, (3) no client data in unapproved tools, (4) human review of AI-generated client content, (5) usage logging. Give me the exact language for each.`
          },
          { day: 'Wed', topic: 'The IT pushback scenario', task: "45 min: Role-play a scenario where IT refuses to approve a new AI tool due to data concerns. Your job: validate the concern, answer the data handling question accurately, and redirect to a governed pilot approach." ,
            prompt: `I'm an AI consultant practicing the IT pushback scenario. Play the IT security lead who says: 'We can't approve this AI tool — we have no visibility into where our data goes and whether it's being used for training.' Push back on my responses for 4 exchanges. Then break character: what I handled well, what I should have said differently, and what the IT lead's real concern probably was.`
          },
          { day: 'Thu', topic: 'Non-technical user risk', task: "30 min: Research real examples of AI misuse by non-technical users. Build a short briefing you could give a client's IT lead to establish shared vocabulary on the risk." ,
            prompt: `I'm an AI consultant briefing a CISO on non-technical user AI risk. Cover: the specific risks of unrestricted access (prompt injection, data leakage, overreliance, hallucination-as-fact), 2–3 representative examples of misuse, the controls that mitigate risk without killing adoption, and how to frame this as a reason for structured rollout — not a ban.`
          },
          { day: 'Fri', topic: 'Your risk reference card', task: "45 min: Compile your objection responses, reframing language, and mitigation approaches into a single one-page reference card." ,
            prompt: `I'm building a one-page AI risk reference card for live client conversations. For 5 risk categories (data privacy, hallucination/accuracy, governance gaps, user misuse, vendor lock-in): a 1-sentence description of the risk, the standard mitigation, and a 'what to say in the room' phrase I can use without reading from notes.`
          },
        ],
        resources: [
          { name: 'NIST AI Risk Management Framework — practical guide', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "The federal standard for AI risk management. Clients in regulated industries will ask if you know this.", url: 'https://airc.nist.gov/RMF' },
          { name: "Anthropic's responsible scaling policy", badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Anthropic's public commitment to safe AI development. Useful for clients who ask 'how do we know Claude won't do something unexpected?'", url: 'https://www.anthropic.com/responsible-scaling-policy' },
          { name: 'OWASP Top 10 for LLM applications', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "The most referenced security risk list for AI applications. Knowing this puts you ahead of most business consultants.", url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
          { name: 'Harvard Business Review — AI governance', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Executive-level framing for AI governance — the language and logic your senior client contacts use when they think about risk.", url: 'https://hbr.org/2023/06/a-practical-guide-to-building-ethical-ai' },
        ],
        checks: [
          'Have a written response for every major AI objection type',
          'Can reframe a governance requirement as a business benefit without it sounding forced',
          'Have practiced the IT pushback scenario at least twice out loud',
          'Can describe non-technical user AI risk in terms a CISO would respect',
          'Have a completed one-page risk reference card ready for live client use',
        ],
        tip: "The instinct when someone raises a concern is to reassure them quickly. Resist it. The consultants who build the most trust are the ones who slow down, validate the concern fully, and then redirect. 'That's a real risk, and here's how the best organizations handle it' is worth ten times more than 'don't worry, it's fine.'",
      },
      {
        label: 'Week 10',
        weekNumber: 10,
        title: 'Training, change management & Phase 3 capstone',
        time: '~5 hrs total',
        goal: "Week 10 closes Phase 3 with the training and change management skills that separate one-time engagements from long-term client relationships — and a full capstone that simulates the kind of call you're preparing to lead independently.",
        deliverable: 'A tiered training program outline (basic users, power users, developers) that you could present to a client as part of an AI adoption engagement proposal.',
        days: [
          { day: 'Mon', topic: 'Tiered training design', task: "45 min: Design a three-tier training structure. Tier 1 (all staff): safety, basic prompting, acceptable use. Tier 2 (power users): workflow building, prompt engineering. Tier 3 (developers/IT): API, governance, security." ,
            prompt: `I'm an AI consultant designing enterprise AI training for a 300-person firm rolling out Claude. Build a 3-tier structure — Tier 1: all staff, Tier 2: power users and team leads, Tier 3: IT and developers. For each tier: 5 learning objectives, recommended format, time commitment, and what 'passing' looks like.`
          },
          { day: 'Tue', topic: "Change management frameworks", task: "45 min: Read summaries of Kotter's 8-step model and ADKAR. Map each step to a specific AI adoption action. Build a one-page cheat sheet." ,
            prompt: `I'm an AI consultant applying change management to AI adoption. Map Kotter's 8-step model and Prosci's ADKAR to a specific AI rollout. For each step/element: what it looks like in an AI context, one action the consulting team should take, and one warning sign the stage isn't complete before moving on.`
          },
          { day: 'Wed', topic: 'Building internal champions', task: "30 min: Research how organizations identify and cultivate AI champions — employees who adopt early and influence peers." ,
            prompt: `I'm an AI consultant advising on AI champion programs. Explain: what makes a good champion candidate, how to identify and recruit them, what champions are responsible for doing and not doing, how to sustain the network over 6–12 months, and the top mistakes that cause champion programs to fade out after 3 months.`
          },
          { day: 'Thu', topic: 'Measuring adoption success', task: "30 min: Define 5 metrics a client could track to measure AI adoption success — not vanity metrics, but signals of real behavior change." ,
            prompt: `I'm an AI consultant defining AI adoption success metrics. Give me 5 concrete, measurable indicators — not vanity metrics. For each: what it measures, how to collect the data, what success looks like at 30/60/90 days, and the most common tracking mistake. Then give me a leading vs. lagging indicator framework.`
          },
          { day: 'Fri', topic: 'Phase 3 capstone call', task: "90 min: Full mock client call. Cover: AI readiness assessment, tool recommendation, deployment strategy, governance concerns, training plan, and next steps. Record it. Review it." ,
            prompt: `I'm preparing for a mock client call. Scenario: 400-person financial services firm wants enterprise-wide Claude. Failed AI pilot 18 months ago. Skeptical IT team. Enthusiastic but uninformed CEO. Give me: a call structure, the 3 most important things to establish in the first 5 minutes, the 3 hardest questions I'll face, and the next step to propose.`
          },
        ],
        resources: [
          { name: "Kotter International — 8-step change model", badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "The most widely used change management framework in enterprise consulting. Know the 8 steps cold.", url: 'https://www.kotterinc.com/methodology/8-steps/' },
          { name: 'Prosci ADKAR model', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: 'ADKAR is the change management framework most often used in IT and software rollouts, making it directly applicable to AI adoption.', url: 'https://www.prosci.com/methodology/adkar' },
          { name: 'LinkedIn Learning — AI for business leaders', badge: 'Paid/subscription', badgeBg: '#FAC775', badgeColor: '#412402', desc: "Structured courses on AI strategy and adoption for business contexts. Worth a month's subscription if your firm doesn't have it.", url: 'https://www.linkedin.com/learning/topics/artificial-intelligence' },
          { name: 'Anthropic docs — building with Claude', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "The technical documentation for Claude integrations — not for building, but for understanding what developers on your client's team will need.", url: 'https://docs.anthropic.com/en/docs/build-with-claude/overview' },
        ],
        checks: [
          'Have a three-tier training program outline ready to include in a proposal',
          "Can walk through Kotter's 8 steps and map each to an AI adoption action",
          'Know how to advise a client on finding and supporting internal AI champions',
          'Have defined 5 concrete metrics for measuring AI adoption success',
          'Have completed a full solo mock call covering all Phase 3 topics and reviewed the recording',
        ],
        tip: "The capstone call on Friday is the moment of truth for Phase 3. If you can run that call confidently — without leaning on a VP, without fumbling on governance or training questions — you are ready to take the lead on client engagements.",
      },
    ],
  },
  {
    id: 3,
    label: 'Phase 4',
    name: 'Go-to expert',
    duration: 'Weeks 11–16',
    badgeBg: '#FAECE7',
    badgeColor: '#712B13',
    progressColor: '#D85A30',
    desc: "Become someone clients and colleagues call for the hard questions. This phase is about building a point of view, a personal methodology, and a reputation — not just more knowledge.",
    modules: [
      {
        icon: 'Lightbulb',
        title: 'Developing your POV',
        sub: '~ongoing',
        topics: [
          'Pick your niche: industry vertical, company size, or use case specialization',
          "Write one 'hot take' on AI adoption per month — share internally or on LinkedIn",
          'Build a simple framework or decision tree you use consistently with clients',
          'Document 3–5 case examples (anonymized) you can reference in conversations',
          'Stay current: follow Anthropic, OpenAI, and Microsoft release notes weekly',
        ],
      },
      {
        icon: 'Briefcase',
        title: 'Engagement design',
        sub: '~4 hrs',
        topics: [
          'Advisory retainer models for ongoing AI guidance',
          'Workshop design: half-day AI strategy sessions for leadership teams',
          'Project-based engagements: audit, roadmap, pilot, scale',
          'Pricing and scoping AI consulting work',
          'Building repeatable delivery assets: templates, scorecards, playbooks',
        ],
      },
      {
        icon: 'RefreshCw',
        title: 'Staying current',
        sub: '~2 hrs/week ongoing',
        topics: [
          'Monthly review of new Claude features and Anthropic product updates',
          'Tracking enterprise AI adoption trends (Gartner, McKinsey, a16z reports)',
          "Maintaining a personal 'tool radar' — what's proven, what's experimental",
          'Peer learning: participate in AI practitioner communities',
          'Annual re-certification or deep dive on one emerging capability',
        ],
      },
    ],
    milestones: [
      {
        label: 'Can lead a full client engagement from discovery to delivery',
        desc: 'Scope, structure, and deliver an AI advisory or training engagement without VP support.',
      },
      {
        label: 'Colleagues and clients start asking for you by name',
        desc: "The clearest signal you've arrived as a go-to expert in this space.",
      },
    ],
    weeks: [
      {
        label: 'Weeks 11–12',
        weekNumber: 11,
        title: 'Developing your point of view',
        time: '~6 hrs across 2 weeks',
        goal: "Go-to experts are not just knowledgeable — they have a perspective. This block is about finding your niche, building a repeatable analytical voice, and producing the first external artifact that signals you have something worth hearing. One well-reasoned post or framework does more for your reputation than a dozen client calls no one hears about.",
        deliverable: 'A written point-of-view piece (600–900 words) on one aspect of enterprise AI adoption — something specific enough to be useful, opinionated enough to be memorable. Plus a personal \'AI consultant framework\' that you can reference consistently with clients.',
        days: [
          { day: 'Wk 11 Mon–Tue', topic: 'Find your niche', task: '90 min: Answer three questions in writing. (1) Which client types do I understand best — by industry, size, or function? (2) What AI adoption problem do I find genuinely interesting, not just professionally relevant? (3) What perspective do I have that differs from the generic \'AI is transformative\' narrative? Your niche sits at the intersection of those three answers.',
            prompt: `I'm an AI consultant developing a specialty. Help me answer 3 niche-finding questions: (1) What are the most underserved AI consulting niches right now? (2) What makes a niche defensible vs. too broad? (3) Given my background: [DESCRIBE YOUR EXPERIENCE AND INTERESTS] — what niche sits at the intersection? Give me 3 candidate niche statements I can choose from.`
          },
          { day: 'Wk 11 Wed–Thu', topic: 'Map the conversation landscape', task: '60 min: Read 10 recent LinkedIn posts or articles from AI consultants and analysts. For each, note: what position do they take, what are they not saying, where is there a gap or a counterargument? You\'re looking for the white space where your voice fits.',
            prompt: `I'm an AI consultant finding my differentiated voice. I've read these 5 posts or articles: [PASTE TITLES OR EXCERPTS]. For each gap or underexplored angle you identify, suggest a specific POV I could develop — opinionated enough to be memorable, grounded enough to be credible. What is almost never said that I could say?`
          },
          { day: 'Wk 11 Fri', topic: 'Draft your POV piece', task: "60 min: Write a 600–900 word draft on one specific topic — not 'AI adoption is hard' but something like 'Why most enterprise AI pilots fail before they start' or 'The hidden governance cost of letting every employee use Claude.' Specific, opinionated, useful." ,
            prompt: `I'm an AI consultant writing my first thought leadership piece (600–900 words) on: [STATE YOUR TOPIC]. Act as my editor. Help me develop a one-sentence thesis, suggest a structure (hook, 3 arguments, closing implication), and tell me what would make this piece forgettable vs. the thing someone screenshots and sends to a colleague.`
          },
          { day: 'Wk 12 Mon–Tue', topic: 'Build your framework', task: "90 min: Turn your strongest analytical pattern into a named, reusable framework. It doesn't need to be complicated — a 2x2, a three-stage model, a five-question diagnostic. Something you can draw on a whiteboard or drop into a slide. Name it. Use it consistently." ,
            prompt: `I'm an AI consultant developing a signature framework. Here is my recurring insight from client work: [DESCRIBE IT]. Turn this into a named, reusable framework: suggest 3–5 candidate names, give it a clear visual structure (2x2, stages, etc.), define each element, and show me how I'd introduce it in a client conversation in under 2 minutes.`
          },
          { day: 'Wk 12 Wed–Fri', topic: 'Refine and publish', task: '90 min: Edit your POV piece with one goal: cut 20% of the words and make every sentence earn its place. Share it — internally with colleagues, on LinkedIn, or both. The act of publishing, even once, changes how you think about your expertise.',
            prompt: `I'm an AI consultant editing my thought leadership piece before publishing. Here is my draft: [PASTE DRAFT]. Please: (1) identify 3 sentences to cut, (2) flag claims that won't survive scrutiny, (3) suggest a stronger opening sentence, (4) tell me if I have a clear thesis, (5) recommend LinkedIn vs. internal newsletter and how to adapt the framing for each.`
          },
        ],
        resources: [
          { name: 'Obviously Awesome — April Dunford', badge: 'Book (~$15)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'The definitive guide to positioning. Written for product marketers but directly applicable to personal and practice positioning. Forces you to answer: who are you for, what do you do, and why does it matter? One of the most useful books for a consultant building a specialty.', url: 'https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005' },
          { name: 'The Advantage — Patrick Lencioni', badge: 'Book (~$15)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'On organizational health and clarity — what separates smart organizations from effective ones. Gives you vocabulary and frameworks for the organizational dynamics that drive or block AI adoption.', url: 'https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529' },
          { name: 'LinkedIn content strategy for consultants', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'LinkedIn\'s own guidance on building thought leadership. Not glamorous, but the platform is where B2B consultants build reputations. One good post a month compounds fast.', url: 'https://business.linkedin.com/marketing-solutions/blog/linkedin-b2b-marketing/2019/the-b2b-thought-leadership-impact-study' },
          { name: 'Lenny\'s Newsletter — product and strategy thinking', badge: 'Free/paid', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'One of the best examples of a practitioner building a point of view into a durable reputation. Study the format as much as the content — concrete, opinionated, grounded in real experience.', url: 'https://www.lennysnewsletter.com' },
        ],
        checks: [
          'Have written down your niche in one clear sentence',
          'Have read 10 posts from other AI consultants and identified a gap your voice can fill',
          'Have a published or internally shared POV piece of 600–900 words',
          'Have a named, reusable framework you can explain in under 2 minutes',
          'Have shared your thinking externally at least once — post, presentation, or internal briefing',
        ],
        tip: "Most consultants never develop a real point of view. They aggregate other people's thinking and present it as synthesis. The ones who get asked back — and referred — are the ones who say something specific that turns out to be right. You don't need to be provocative. You need to be precise. Pick one thing you actually believe about AI adoption and say it clearly.",
      },
      {
        label: 'Weeks 13–14',
        weekNumber: 13,
        title: 'Engagement design',
        time: '~6 hrs across 2 weeks',
        goal: "Expertise without a commercial structure is a hobby. This block is about turning your knowledge into billable, repeatable engagements — the advisory retainer, the strategy workshop, the audit-to-roadmap project. By the end you'll have a service menu you could present to a prospective client tomorrow.",
        deliverable: 'A one-page service menu with three engagement types (advisory, workshop, project), each with a clear scope, deliverable, duration, and indicative pricing range.',
        days: [
          { day: 'Wk 13 Mon–Tue', topic: 'The advisory retainer model', task: '90 min: Research how AI advisory retainers are structured — monthly hours, access models, deliverables. Write a one-paragraph description of what a retainer with you would include: what clients get, how often you meet, what outputs they receive. Price it.',
            prompt: `I'm an AI consultant designing my first retainer. Help me structure a monthly AI advisory retainer: what the client receives, hours included, what's excluded, how it's reviewed and renewed, and indicative pricing. Give me a one-paragraph client-facing description, the 3 questions clients most ask about retainers, and the most common structuring mistake.`
          },
          { day: 'Wk 13 Wed–Thu', topic: 'The strategy workshop', task: '60 min: Design a half-day AI strategy workshop for a leadership team. Agenda, objectives, outputs, pre-work, facilitation notes. This should be something you could run in 6 weeks with light preparation. Make it reusable across client types.',
            prompt: `I'm an AI consultant designing a reusable half-day AI strategy workshop for leadership teams. Build: a 4-hour agenda with activities, 3–5 pre-work questions, the primary output participants leave with, facilitation notes for the 2 sessions most likely to go off-track, and how to turn workshop output into a next engagement.`
          },
          { day: 'Wk 13 Fri', topic: 'The project-based engagement', task: '45 min: Scope a three-phase project: (1) AI audit and readiness assessment, (2) roadmap and prioritization, (3) pilot design and launch support. Write the scope, timeline, and deliverables for each phase. This becomes your standard project proposal template.',
            prompt: `I'm an AI consultant designing a standard 3-phase project: (1) AI Audit and Readiness Assessment, (2) Roadmap and Prioritization, (3) Pilot Design and Launch Support. For each phase: duration, key activities, client inputs, consultant deliverables, and success criteria. Then write a one-page proposal summary I could email to a prospective client.`
          },
          { day: 'Wk 14 Mon–Tue', topic: 'Pricing and scoping discipline', task: "90 min: Research how peers price AI consulting work — hourly, project, retainer. Practice scoping a client scenario into each of your three engagement types. Understand when each model is right and how to recommend it without overselling." ,
            prompt: `I'm an AI consultant learning to price engagements. Walk me through pricing the same scenario three ways: hourly, project, and retainer. Scenario: a 200-person financial services firm wants AI readiness assessment, use case prioritization, and 90-day pilot planning. For each model: the logic, price range, who benefits, and the risk I take on.`
          },
          { day: 'Wk 14 Wed–Fri', topic: 'Build your repeatable assets', task: '90 min: Identify three documents you\'ll reuse across every engagement: a discovery questionnaire, a readiness scorecard (already built in Phase 3), and a proposal template. Finalize and file them where you\'ll actually find them before a client meeting.',
            prompt: `I'm an AI consultant building my standard engagement toolkit. Give me the structure for 3 reusable documents: (1) a discovery questionnaire (10–12 questions for the first client call), (2) a proposal template (sections and what each must accomplish), (3) a project kickoff agenda (first working session after contract signing). Scaffold only — I'll fill in the content.`
          },
        ],
        resources: [
          { name: 'The Trusted Advisor — Maister, Green, Galford', badge: 'Book (~$18)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'The foundational text on what makes clients trust advisors over the long term. The trust equation (credibility + reliability + intimacy / self-orientation) is something every serious consultant should be able to recite and apply.', url: 'https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347' },
          { name: 'Win Without Pitching Manifesto — Blair Enns', badge: 'Book (~$20)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'Required reading for any consultant who wants to stop chasing work and start attracting it. Reframes how you position, price, and close engagements. Particularly useful for moving from hourly billing to value-based models.', url: 'https://www.winwithoutpitching.com/the-manifesto/' },
          { name: 'Consulting success — pricing guide', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'Practical, no-fluff guidance on consulting pricing models — hourly, project, retainer, value-based. Useful for calibrating where your current pricing sits and how to move toward higher-value models.', url: 'https://www.consultingsuccess.com/consulting-fees' },
          { name: 'Notion — consulting proposal templates', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'Community-built templates for consulting proposals, SOWs, and project scoping documents. Faster than building from scratch — find one that\'s close and adapt it to your engagement types.', url: 'https://www.notion.so/templates/category/consulting' },
        ],
        checks: [
          'Have a written one-paragraph description of your advisory retainer offering',
          'Have a half-day workshop agenda you could run with 6 weeks\' notice',
          'Have a three-phase project scope template you can adapt per client',
          'Can explain your pricing model for each engagement type without hesitating',
          'Have a discovery questionnaire, scorecard, and proposal template filed and ready to use',
        ],
        tip: "The instinct when scoping engagements is to make them flexible to avoid scaring off clients. This is backwards. Clients trust consultants who are specific about what they do and don't do. Vague scope signals a consultant who doesn't know their own value. Be concrete about what they get, and clients will self-select in or out — which is exactly what you want.",
      },
      {
        label: 'Weeks 15–16',
        weekNumber: 15,
        title: 'Staying current & the expert capstone',
        time: '~5 hrs + ongoing rhythm',
        goal: "The AI space moves faster than any other domain consultants advise on. New model releases, pricing changes, product pivots, and regulatory shifts happen monthly. This block builds the ongoing intelligence system that keeps your advice accurate — and closes Phase 4 with the capstone that marks you as ready to lead independently.",
        deliverable: "A personal AI intelligence system: a curated reading list, a monthly review ritual, and a 'tool radar' that categorizes what's proven, emerging, and experimental — updated and maintained as a living document.",
        days: [
          { day: 'Wk 15 Mon–Tue', topic: 'Build your intelligence system', task: '90 min: Set up your information diet. Identify 5 sources you\'ll read weekly (newsletters, blogs, release notes). Set up one aggregator (Feedly, Readwise, or a simple bookmark folder). Schedule 30 minutes every Friday as a standing \'AI news review.\' This habit is worth more than any course.',
            prompt: `I'm an AI consultant building a system to stay current. Recommend 5 specific sources with good signal-to-noise for enterprise AI consulting. Suggest an aggregator workflow for under 30 minutes per week. Give me a standing Friday review agenda — what questions to ask myself. Tell me the 3 types of AI news to flag immediately vs. what to skim.`
          },
          { day: 'Wk 15 Wed–Thu', topic: 'Build your tool radar', task: '60 min: Create a living document with four columns: Proven (recommend freely), Emerging (recommend with guardrails), Experimental (advise caution), Deprecated (steer away). Populate it with every AI tool you\'ve learned about across all four phases. Update it monthly.',
            prompt: `I'm an AI consultant building a tool radar. Define the criteria for Proven, Emerging, Experimental, and Deprecated categories. Evaluate these 10 tools and place them with reasoning: Claude, ChatGPT, Microsoft Copilot, Google Gemini, Midjourney, GitHub Copilot, Perplexity, Notion AI, Zapier AI, and Otter.ai. Suggest what fields my radar document should track for each tool.`
          },
          { day: 'Wk 15 Fri', topic: 'Peer community and learning', task: '45 min: Find one practitioner community to join — an AI consultants Slack, a LinkedIn group, a local meetup, or an Anthropic partner network. The goal is a peer group who will surface things you\'d otherwise miss and challenge your thinking before clients do.',
            prompt: `I'm an AI consultant looking to join a practitioner community. Evaluate: Anthropic partner network, LinkedIn AI groups, local meetups, paid Slack communities, and conference networks. Give me 3 questions to ask before joining any community to assess if it's worth my time. Then give me a 30-day plan for getting genuine value rather than just lurking.`
          },
          { day: 'Wk 16 Mon–Wed', topic: 'The expert stress test', task: '90 min: Ask a colleague or manager to play a skeptical senior client. They should push back on every recommendation, ask for evidence, challenge your pricing, raise governance concerns, and ask who else does this. Your job: stay grounded, be honest about uncertainty, and never bluff.',
            prompt: `I'm an AI consultant preparing for the expert stress test. Play a skeptical CFO who has seen AI consulting initiatives fail before. Push back on: my pricing, my evidence base, my vendor objectivity, and my track record. After 5 exchanges, break character and give me: what I handled well, where I got defensive or vague, and the one thing I must fix.`
          },
          { day: 'Wk 16 Thu–Fri', topic: 'Full program capstone', task: '120 min: Lead a full end-to-end client engagement simulation — from first call through proposal delivery. Cover: discovery and readiness assessment, product and vendor recommendation, governance and training plan, engagement proposal with pricing, and your POV on where AI adoption is heading. Record it. This recording is your benchmark.',
            prompt: `I'm an AI consultant preparing for my full program capstone simulation. Give me: (1) a suggested 90-minute structure, (2) the 5 things I must demonstrate to prove I can lead engagements independently, (3) the 3 scenarios most likely to trip me up and how to handle each, (4) how to review my own recording objectively, and (5) what passing looks like.`
          },
        ],
        resources: [
          { name: 'Anthropic news and research', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: "Anthropic's own announcements — model releases, policy updates, product changes. Subscribe to their newsletter. You should never be caught off guard by a Claude update in front of a client.", url: 'https://www.anthropic.com/news' },
          { name: 'The Rundown AI newsletter', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'One of the most widely read daily AI newsletters. Good signal-to-noise ratio for staying current without spending hours on it. Useful for catching major moves across the competitive landscape.', url: 'https://www.therundown.ai' },
          { name: 'Ben Thompson — Stratechery', badge: 'Paid ($15/mo)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: "The best strategic analysis of the technology industry available anywhere. Ben's frameworks for understanding platform dynamics, vendor competition, and enterprise adoption are directly applicable to advising clients on AI strategy.", url: 'https://stratechery.com' },
          { name: 'Anthropic partner network', badge: 'Apply', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: "Anthropic's formal partner and consulting ecosystem. Being listed or affiliated signals credibility to clients evaluating Claude-focused consultants. Investigate the requirements and application process.", url: 'https://www.anthropic.com/partners' },
          { name: 'a16z \'AI Canon\' reading list', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: "Andreessen Horowitz's curated list of the most important writing on AI — from foundational research to enterprise strategy. An excellent reference for going deeper on any topic that comes up in client conversations.", url: 'https://a16z.com/ai-canon/' },
        ],
        checks: [
          'Have a standing Friday 30-minute AI news review on my calendar',
          'Have a populated tool radar document (proven / emerging / experimental / deprecated)',
          'Have joined at least one practitioner community where peers share real-world experience',
          'Have completed the expert stress test with a skeptical senior colleague or manager',
          'Have a recording of the full end-to-end capstone simulation to use as a personal benchmark',
        ],
        tip: "The tool radar is the most underrated asset in this entire program. In six months, when a client asks 'should we be using this new AI tool we just heard about,' you'll pull it up and give a grounded, calibrated answer instead of improvising. That kind of consistent, reliable judgment is what makes clients call you first.",
      },
    ],
  },
];
