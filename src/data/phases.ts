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
            task: '60 min: Explore Claude.ai, ChatGPT, Copilot, and Gemini — try the same prompt in each. Note what feels different.',
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
            task: "30 min: Write a one-page 'AI tools cheat sheet' — what you'd say to a non-technical client who asks 'what are all these AI tools I keep hearing about?' Cover all four major tools: ChatGPT, Claude, Copilot, and Gemini.",
            prompt: `I'm an AI consultant preparing a one-page AI tools cheat sheet for non-technical clients. Help me write a plain-language summary covering ChatGPT, Claude, Microsoft Copilot, and Google Gemini — one short paragraph each. For each: what it is, who makes it, and one sentence on when a business user would choose it. After the summaries, give me 3 follow-up questions a client would likely ask and the ideal short answer for each.`,
          },
        ],
        resources: [
          { name: "Anthropic's intro to Claude", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Clear, non-technical overview of how Claude works and what makes it different from other AI tools.', url: 'https://www.anthropic.com/claude' },
          { name: 'Microsoft Copilot overview', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Official overview of Copilot — useful for understanding what your clients who use M365 are already being offered.', url: 'https://www.microsoft.com/en-us/microsoft-copilot' },
          { name: 'Google Gemini for Workspace', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "Google's positioning for enterprise AI — good to understand how it's pitched to Workspace customers.", url: 'https://workspace.google.com/intl/en/solutions/ai/' },
          { name: "'What are large language models?' — Google explainer", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Clear, beginner-friendly explainer on how LLMs work without requiring a technical background.', url: 'https://cloud.google.com/ai/llms' },
        ],
        checks: [
          'Can explain what an LLM is in one sentence to a non-technical person',
          'Know the four major AI vendors: Anthropic, OpenAI, Microsoft, Google',
          'Can describe the difference between a cloud AI tool and a local model',
          "Understand what 'AI agents' means vs. simple chatbot automation",
        ],
        tip: "Don't just read — try the tools. Clients who ask about AI have usually already tried one or two of them. Your credibility goes up immediately when you can say 'I ran the same task in three different tools and here's what I noticed.' Also: start noticing which client types and problems you find genuinely interesting. By Phase 4 you'll develop a niche — the earlier you're paying attention, the easier that becomes.",
      },
      {
        label: 'Week 2',
        weekNumber: 2,
        title: 'Enterprise adoption patterns',
        time: '~4 hrs total',
        goal: "By Friday you'll have the enterprise AI rollout playbook you'll use in every consulting engagement. Understand how organizations actually roll out AI tools — the politics, the pitfalls, and the playbooks. This is the consulting meat. The centralized vs. decentralized debate from your client call lives here.",
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
          { name: 'Gartner — AI insights and research hub', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Gartner\'s central AI research and insights hub — useful for framing where specific tools sit in terms of enterprise maturity and adoption readiness.', url: 'https://www.gartner.com/en/ai' },
          { name: 'HBR — AI adoption and strategy', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'HBR\'s collected coverage on AI adoption, governance models, and change management. Practitioner-focused and written in language that resonates with executive clients.', url: 'https://hbr.org/topic/subject/ai-and-machine-learning' },
          { name: 'Prosci ADKAR change model overview', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) is the most widely used change management framework in enterprise settings — directly applicable to AI rollout conversations.', url: 'https://www.prosci.com/methodology/adkar' },
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
        goal: "By Friday you'll have a governance starter checklist and credible answers to every AI security objection a client can raise — from 'where does our data go?' to 'what about prompt injection?' You don't need to become a security expert; you need to know enough to have the conversation and know when to loop in IT or legal.",
        days: [
          { day: 'Mon', topic: 'Data privacy, DPAs & data residency', task: '45 min: Read about what happens to data sent to AI APIs. Understand how major vendors handle enterprise data, what a DPA adds, and where enterprise clients can require data to stay (data residency). This is the most common first question a legal or IT stakeholder will ask.',
            prompt: `I'm an AI consultant advising clients on AI data privacy. Explain for Anthropic (Claude), OpenAI (ChatGPT), and Microsoft (Copilot): (1) is data used for model training by default, (2) where is data stored, (3) what does a Data Processing Agreement change, (4) what data residency options each vendor offers for enterprise clients. Give me a 60-second answer for a legal stakeholder asking 'where does our data go and can we keep it in the EU?'`
          },
          { day: 'Tue', topic: 'RBAC and access controls', task: '30 min: Learn what role-based access control means in an AI tool context. What restrictions should a company apply by role?',
            prompt: `I'm an AI consultant setting up role-based access control for AI tools. Give me a practical example for a mid-size firm: what AI access and restrictions should apply to executives, managers, analysts, HR, IT admins, and legal? For each role: which tools, what data they can input, and any guardrails.`
          },
          { day: 'Wed', topic: 'Compliance touchpoints + vendor certifications', task: "45 min: Read summaries of SOC 2, GDPR, and HIPAA, then look up the security certifications for Claude, ChatGPT, and Copilot. Can you tell a client which frameworks each vendor is certified against? Knowing this answers the 'is this tool approved for our industry?' question credibly." ,
            prompt: `I'm an AI consultant who needs to recognize when SOC 2, GDPR, and HIPAA are relevant in AI conversations. For each: what it governs, which industries trigger it, and the specific AI questions it raises. Then: what security certifications does each major vendor hold (Anthropic, OpenAI, Microsoft) — SOC 2 Type II, ISO 27001, FedRAMP, HIPAA BAA. Give me a quick reference I can use when a compliance officer asks 'is this tool certified for our environment?'`
          },
          { day: 'Thu', topic: 'Prompt injection + shadow AI audit', task: '45 min: Read about prompt injection attacks (OWASP LLM Top 10 #1). Understand how malicious content in documents or emails can manipulate AI agent behavior. Then read about shadow AI risk — employees using unapproved AI tools. How would you advise a client to audit both risks?',
            prompt: `I'm an AI consultant briefing a CISO on two AI-specific security risks: (1) prompt injection — what it is, how it works, a real-world example, and the guardrails that mitigate it; (2) shadow AI — how to audit which AI tools employees are actually using, the data exposure risks, and how to move from discovery to governed policy without triggering resistance. Give me client-ready language for each.`
          },
          { day: 'Fri', topic: 'Synthesis', task: "30 min: Draft a one-page 'governance starter checklist' you could give a client in a discovery meeting. Include all five security topics from this week: data privacy, access controls, compliance/certifications, prompt injection risks, and shadow AI exposure." ,
            prompt: `I'm an AI consultant building a governance starter checklist for client discovery meetings. Create a one-page checklist across 6 sections: Data Privacy & Residency, Access Controls (RBAC), Compliance & Vendor Certifications, Acceptable Use Policy, Prompt Injection Risks, and Shadow AI Audit. For each section: 3–4 specific yes/no items a non-technical executive can answer. Flag which items require legal or IT input before proceeding.`
          },
        ],
        resources: [
          { name: "OpenAI enterprise privacy", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "How OpenAI handles enterprise data for ChatGPT and the API — essential reading when clients ask about ChatGPT data privacy.", url: 'https://openai.com/enterprise-privacy' },
          { name: 'NIST AI Risk Management Framework (AIRC)', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "The federal AI RMF — the most referenced AI governance framework in enterprise RFPs and regulated industries. Knowing it signals credibility with risk, legal, and compliance stakeholders.", url: 'https://airc.nist.gov' },
          { name: 'IBM: AI governance explainer', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'Accessible breakdown of what AI governance means in practice — good client-facing language here.', url: 'https://www.ibm.com/topics/ai-governance' },
          { name: "Microsoft Responsible AI principles", badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "Microsoft's framework for responsible AI — directly relevant when advising clients on Copilot governance and enterprise trust.", url: 'https://www.microsoft.com/en-us/ai/responsible-ai' },
          { name: 'OWASP Top 10 for LLM applications', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: 'The industry-standard security risk list for AI applications. Prompt injection (#1), data leakage, and model denial of service are the most relevant to enterprise consulting conversations.', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
          { name: 'Anthropic Trust Center', badge: 'Free', badgeBg: '#E1F5EE', badgeColor: '#085041', desc: "Anthropic's security certifications, compliance documentation, and responsible use policies — the reference to cite when a client's security team asks about Claude's enterprise credentials.", url: 'https://trust.anthropic.com' },
        ],
        checks: [
          'Understand what data privacy risks arise when employees use AI tools unsupervised',
          'Can explain data residency options for the three major AI vendors',
          'Can explain role-based access control for AI in plain language',
          'Know when SOC 2, GDPR, and HIPAA become relevant in an AI conversation',
          'Can describe what prompt injection is and what guardrails mitigate it',
          'Know how to advise a client on conducting a shadow AI audit',
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
    duration: 'Weeks 4–8',
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
          "Claude's extended suite: API, Claude Code, and Teams/Enterprise — when clients need more than the chat UI",
          'Microsoft 365 Copilot: Word, Excel, Teams, and the enterprise licensing model',
          'GitHub Copilot and coding-focused AI tools — who benefits and who doesn\'t',
          'Google Gemini Advanced and NotebookLM — Google\'s power-user offer',
          "Building a consultant's tool selection matrix: the right tool for the right organization",
        ],
      },
      {
        icon: 'Layers3',
        title: 'Beyond the big four',
        sub: '~4 hrs',
        topics: [
          'Meeting AI tools: Otter.ai, Fireflies, Grain vs. native Zoom/Teams AI',
          'Workflow connectors: Zapier, Make, n8n — connecting AI to business systems',
          'Document AI: Adobe AI, DocuSign AI, contract tools vs. general-purpose AI',
          'Vertical AI by industry: legal (Harvey), marketing (Jasper), healthcare (Rad AI)',
          'Knowledge management AI: Notion AI, Glean, Confluence AI',
        ],
      },
      {
        icon: 'MessageSquareText',
        title: 'Prompt engineering',
        sub: '~4 hrs',
        topics: [
          'Prompt structure: Role, Context, Task, Format, and Constraints',
          'Few-shot examples and chain-of-thought prompting — when each adds value',
          'Common prompt failure modes and a pre-flight checklist',
          'Building a team prompt library for client organizations',
          'Designing and running a 45-minute prompting workshop',
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
        label: 'Can handle the synthesis questions — hardware, contracts, and tool-to-need mapping',
        desc: "Give a confident answer on Mac vs. PC for AI, know what enterprise AI contracts actually cover (SLAs, BAAs, DPAs), and map any client problem to the right tool category without defaulting to what you know best.",
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
          { day: 'Mon', topic: 'ChatGPT — plans and capabilities', task: "60 min: Sign into ChatGPT. Explore GPT-4o, web browsing, and file analysis — if you have Plus access, test these features directly; otherwise study the plans page to understand what each tier unlocks. Read the Teams and Enterprise plan pages. What does enterprise-grade ChatGPT include that free users don't get?",
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
            prompt: `I'm an AI consultant who has run the same business task in ChatGPT, Claude, Microsoft Copilot, and Google Gemini. Here are my observations: [PASTE YOUR TASK AND NOTES — or describe what task you ran and what you noticed about each tool]. Help me: (1) identify what each tool did that the others didn't, (2) summarize the key differentiators in client-friendly language, and (3) draft a one-page comparison card a client could use to make a tool selection decision. If I haven't run the comparison yet, coach me on what to look for and which differences tend to matter most to business clients.`
          },
        ],
        resources: [
          { name: 'ChatGPT for Teams — overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "OpenAI's overview of ChatGPT Team and Enterprise plans. Many clients are already using ChatGPT — know its current capabilities cold.", url: 'https://openai.com/chatgpt/team' },
          { name: 'Claude.ai product page', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The canonical overview of Claude's consumer and business plans. Clients often come in having skimmed this and wanting clarity on differences.", url: 'https://claude.ai' },
          { name: 'Microsoft Copilot overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Microsoft's full Copilot product lineup — important for understanding what M365 clients already have vs. what requires an additional license.", url: 'https://www.microsoft.com/en-us/microsoft-copilot' },
          { name: 'Google Gemini for Workspace', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Google's AI features for Workspace — essential for advising clients on Google Workspace who want to understand what AI they already have access to.", url: 'https://workspace.google.com/intl/en/solutions/ai/' },
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
        goal: "By Friday you'll have a complete picture of what each major vendor offers beyond their basic chat UI — the developer tools, agentic platforms, and enterprise-specific capabilities that separate a superficial AI conversation from a deep product recommendation.",
        days: [
          { day: 'Mon', topic: "Claude's extended product family", task: "60 min: Explore the Claude API documentation (no coding needed), Claude Code, and Claude for Teams/Enterprise. When does a client need something beyond Claude.ai? What does each extended product add — and what are the governance implications?",
            prompt: `I'm an AI consultant advising on Anthropic's extended product family beyond Claude.ai. Explain: (1) when a business needs the Claude API vs. the web product and what a Data Processing Agreement adds, (2) what Claude Code does that standard Claude can't and who benefits, (3) what Claude for Teams and Enterprise offer beyond individual Pro plans — including admin controls, usage policies, and security commitments. No code examples — keep it business-focused.`
          },
          { day: 'Tue', topic: 'Microsoft 365 Copilot — the enterprise suite', task: "60 min: Read the M365 Copilot documentation. Understand Copilot in Word, Excel, Teams, and Outlook. What does the enterprise license include? What does a rollout actually look like for a 500-person org?",
            prompt: `I'm an AI consultant advising a client on Microsoft 365 Copilot (the paid enterprise product, not free Copilot chat). Explain: what it does in each M365 application, how it's licensed (per-user pricing, prerequisites), what a typical enterprise rollout looks like, and the most common adoption challenges. When is M365 Copilot sufficient, and when might a client still benefit from adding another AI tool?`
          },
          { day: 'Wed', topic: 'GitHub Copilot and coding tools', task: "30 min: Read about GitHub Copilot and understand who benefits: developers, not general business users. When would you recommend this vs. Claude Code? What about Cursor, Windsurf, and other AI coding tools increasingly asked about in enterprise settings?",
            prompt: `I'm an AI consultant who gets asked about AI tools for developers. Compare GitHub Copilot, Claude Code, Cursor, and Windsurf: who benefits most from each, what the pricing looks like, the key difference in how they work (inline vs. agentic), and when I should recommend one over another. Give me a 60-second framing I could use with a non-technical client who asks 'should our developers be using AI coding tools?' — and tell me the one question I should ask developers before recommending anything.`
          },
          { day: 'Thu', topic: 'Google Gemini Advanced and NotebookLM', task: "45 min: Explore Gemini Advanced and try NotebookLM. What does Gemini Advanced add beyond the free tier? Who is NotebookLM genuinely useful for — and when does it outperform ChatGPT or Claude?",
            prompt: `I'm an AI consultant advising clients on Google's extended AI products. Explain: (1) what Gemini Advanced offers beyond the free tier, (2) what NotebookLM is and the specific use cases where it genuinely outperforms ChatGPT or Claude, (3) how these fit into a tool recommendation for a Google Workspace client. Give me a framework for when to suggest Google's extended products.`
          },
          { day: 'Fri', topic: 'Tool selection matrix', task: "60 min: Build a one-page consultant's tool selection matrix covering all major tools and extended products. Columns: tool, best use case, enterprise pricing, key limitation, when to recommend. This becomes a permanent reference card.",
            prompt: `I'm an AI consultant building my tool selection reference card. Help me create a one-page matrix covering: ChatGPT (Free/Plus/Team/Enterprise), Claude.ai + API + Code + Teams/Enterprise, Microsoft Copilot (free) + M365 Copilot, Google Gemini (free) + Gemini Advanced + NotebookLM, GitHub Copilot. For each: primary use case, enterprise pricing tier, key limitation, and a one-sentence 'when to recommend this.' Format it as a table I can use as a reference during client calls.`
          },
        ],
        resources: [
          { name: 'Anthropic enterprise page', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "How Anthropic positions Claude for large organizations — pricing, security commitments, API access, and DPA options.", url: 'https://www.anthropic.com/enterprise' },
          { name: 'Microsoft 365 Copilot documentation', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The official M365 Copilot overview — what it does in each application, licensing requirements, and deployment guidance.", url: 'https://www.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot' },
          { name: 'GitHub Copilot overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "GitHub's AI coding assistant — understand who benefits and how it compares to Claude Code so you can advise development teams confidently.", url: 'https://github.com/features/copilot' },
          { name: 'Google NotebookLM overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Google's AI-powered research and note-taking tool. Worth knowing because clients increasingly ask about it for document-heavy workflows.", url: 'https://notebooklm.google.com' },
        ],
        checks: [
          "Understand what Claude API, Code, and Teams/Enterprise offer beyond Claude.ai — and when a client needs them",
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
        title: 'Beyond the big four',
        time: '~4 hrs total',
        goal: "By Friday you'll be able to answer 'what about all these other AI tools my team is using?' You'll have a working mental map of the specialist AI landscape — meeting recorders, document processors, vertical tools, and automation connectors that clients increasingly ask about.",
        days: [
          { day: 'Mon', topic: 'Meeting AI tools', task: "45 min: Sign into Otter.ai (free tier) and explore Fireflies.ai and Grain. Run a test recording. Note what each captures beyond transcription. What do Zoom AI and Microsoft Teams Copilot already cover natively — for free?",
            prompt: `I'm an AI consultant whose clients frequently ask about AI meeting tools. Compare Otter.ai, Fireflies.ai, and Grain: how each works, pricing tiers, and what they add beyond what's already built into Zoom or Teams. Give me a decision framework and the 3 most common client misconceptions about meeting AI.`
          },
          { day: 'Tue', topic: 'Workflow automation connectors', task: "45 min: Read about Zapier's AI features and Make.com. Understand how these tools connect AI to other business systems. What can a non-technical user configure vs. what needs a developer?",
            prompt: `I'm an AI consultant whose clients ask about connecting AI to their existing systems. Explain Zapier, Make, and n8n: what they connect, how they differ, when to recommend each vs. a native integration, and what 'no-code AI automation' actually means in practice. Give me a 60-second answer for a COO who asks 'can we connect Claude to our CRM?'`
          },
          { day: 'Wed', topic: 'Document AI tools', task: "30 min: Research Adobe Acrobat AI, DocuSign AI, and contract tools like Ironclad. What does AI add to document workflows that general-purpose tools don't? When is a specialized tool worth the extra cost?",
            prompt: `I'm an AI consultant advising on document workflows. Compare using Claude directly for document analysis vs. specialized tools like Adobe Acrobat AI, DocuSign AI, and Ironclad. For each specialist tool: what it does uniquely well, when it justifies the added cost, and when a client's existing AI assistant is sufficient. Give me a recommendation framework.`
          },
          { day: 'Thu', topic: 'Vertical AI tools by industry', task: "45 min: Research one vertical AI tool per major industry: Harvey (legal), Rad AI (radiology), Jasper (marketing). The goal is knowing these categories exist and when to surface them — not going deep.",
            prompt: `I'm an AI consultant who needs to recognize when a vertical AI tool is better than a general-purpose one. Give me a category map: for legal, healthcare, marketing, financial services, and HR — 1–2 notable tools, their key differentiator from ChatGPT or Claude, and the client trigger question that tells me a vertical tool is worth exploring.`
          },
          { day: 'Fri', topic: 'Knowledge management AI + synthesis', task: "45 min: Explore Notion AI, Glean, or Confluence AI. Then build a one-page 'specialist AI landscape' reference card covering all four categories from this week. This is the resource you pull up when a client asks about an unfamiliar tool.",
            prompt: `I'm an AI consultant building a specialist AI landscape reference card. Create a dense one-pager covering: (1) Meeting AI — top tools and decision criteria; (2) Workflow connectors — Zapier vs. Make vs. n8n; (3) Document AI — when specialist beats general-purpose; (4) Vertical tools — industry-to-tool map; (5) Knowledge management — Notion AI vs. Glean vs. Confluence AI. Dense reference format, not an explainer.`
          },
        ],
        resources: [
          { name: 'Otter.ai — meeting AI overview', badge: 'Free tier', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: 'The most widely used standalone meeting AI tool. Worth knowing for the difference between standalone tools and what Zoom or Teams already provides natively.', url: 'https://otter.ai' },
          { name: 'Zapier AI features overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Zapier's AI automation capabilities — the most common tool clients use to connect AI to other business systems. Reference for the 'connect Claude to our CRM' question.", url: 'https://zapier.com/ai' },
          { name: 'Harvey AI — legal AI platform', badge: 'Free overview', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: 'One of the strongest vertical AI examples — used by major law firms for contract review and legal research. Useful reference when discussing AI with legal or professional services clients.', url: 'https://www.harvey.ai' },
          { name: 'Glean — enterprise knowledge search', badge: 'Free overview', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: 'AI-powered enterprise search across all business tools. Increasingly asked about in mid-to-large enterprise engagements where knowledge fragmentation is a problem.', url: 'https://www.glean.com' },
        ],
        checks: [
          'Can articulate when a standalone meeting AI tool beats native Zoom or Teams AI',
          'Know what Zapier and Make do and when to recommend them vs. a native integration',
          'Have a working mental map of specialist AI tools across at least four categories',
          'Know at least one strong vertical AI tool per major industry category',
          'Have a completed specialist AI landscape reference card',
        ],
        tip: "The moment a client asks 'what about [tool you've never heard of]?' is either a credibility moment or an exposure moment. Here's the phrase that keeps it a credibility moment: 'I haven't gone deep on that specific tool, but it sits in the [meeting AI / document AI / vertical] category — which means the core questions are [X and Y]. Let me look at it this week and send you a note.' That response signals category fluency, intellectual honesty, and a follow-through habit — which is more reassuring to a client than pretending you know every tool.",
      },
      {
        label: 'Week 7',
        weekNumber: 7,
        title: 'Prompt engineering',
        time: '~4 hrs total',
        goal: "By Friday you'll have a structured method for writing prompts that consistently produce better results — and a 45-minute workshop ready to run for a client's team. The consultant who can run a prompting session is delivering immediate, visible, attributable value.",
        days: [
          { day: 'Mon', topic: 'Prompt anatomy', task: "45 min: Read Anthropic's prompt engineering guide. Build a personal prompt template using five elements: Role, Context, Task, Format, and Constraints. Apply it to three real business use cases you've encountered.",
            prompt: `I'm an AI consultant learning structured prompt writing. Teach me the five core elements of a business-grade prompt: Role, Context, Task, Format, and Constraints (RCTFC). For each: what it does, what happens when you omit it, and a before/after example. Then apply the framework to: (1) 'summarize this email,' (2) 'help me write a proposal,' (3) 'analyze this sales data.' Show how the structured version outperforms the casual version.`
          },
          { day: 'Tue', topic: 'Few-shot and chain-of-thought prompting', task: "45 min: Learn few-shot prompting (giving examples in the prompt) and chain-of-thought (asking the model to reason step-by-step). Practice each on a real business use case. Understand when each adds value vs. when it's unnecessary complexity.",
            prompt: `I'm an AI consultant learning advanced prompting. Explain few-shot prompting and chain-of-thought prompting: what each is, when each produces better results, and when it's unnecessary overhead. Give me a business example where few-shot dramatically improves output quality, and one where chain-of-thought prevents a reasoning error. Then give me 3 scenarios where neither technique is needed.`
          },
          { day: 'Wed', topic: 'Prompt failure modes', task: "30 min: Collect 5 examples of prompts that produce poor output. Diagnose what went wrong in each. Build a 'prompt failure mode' checklist — the 5 questions to ask before sharing a prompt with a client team.",
            prompt: `I'm building a prompt failure mode checklist. List the 8 most common reasons a business prompt produces poor output: what went wrong, what the bad output looks like, and exactly how to fix it. Then give me a 5-question pre-flight checklist to run before finalizing any prompt for client use.`
          },
          { day: 'Thu', topic: 'Build a client prompt library', task: "60 min: Design a 10-entry prompt library for a fictional professional services firm. Cover email drafting, meeting summaries, proposal writing, risk analysis, and client updates. Use Role/Context/Task/Format/Constraints for each entry.",
            prompt: `I'm an AI consultant building a prompt library for a 50-person professional services firm. Create 10 ready-to-use business prompts: (1) email thread summary with actions, (2) meeting notes to decision log, (3) proposal outline draft, (4) risk summary from project notes, (5) client status update, (6) competitor analysis brief, (7) job posting from role description, (8) training module outline, (9) executive summary from long report, (10) objection response coaching. Apply Role/Context/Task/Format/Constraints to each.`
          },
          { day: 'Fri', topic: 'Design a prompting workshop', task: "60 min: Design a 45-minute 'Introduction to Prompting' workshop for a non-technical business team. Write a timed agenda, 3 learning objectives, two activities, and a one-page take-home reference card. Practice your intro out loud.",
            prompt: `I'm an AI consultant designing a 45-minute prompting workshop for non-technical business users. Build: (1) a timed agenda, (2) 3 learning objectives, (3) a live demonstration showing casual vs. structured prompts side by side, (4) one hands-on activity participants complete themselves, (5) a one-page take-home reference card. The workshop should be fully self-contained — no prior AI experience required.`
          },
        ],
        resources: [
          { name: "Anthropic prompt engineering guide", badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The canonical reference for writing high-quality prompts for Claude. Required reading this week — covers structure, examples, and the most common mistakes.", url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { name: "OpenAI prompt engineering guide", badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "OpenAI's equivalent — tool-agnostic principles that apply across all major models. Useful when advising clients who use different platforms.", url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { name: 'Anthropic prompt library', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Anthropic's curated library of high-quality business prompts. A shortcut for building client prompt libraries and a benchmark for what a strong prompt looks like.", url: 'https://docs.anthropic.com/en/prompt-library/library' },
          { name: "DAIR.AI Prompt Engineering Guide", badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "A comprehensive community-built guide covering few-shot, chain-of-thought, and advanced patterns. The most thorough free reference on prompting techniques available.", url: 'https://www.promptingguide.ai' },
        ],
        checks: [
          'Can write a structured prompt using Role, Context, Task, Format, and Constraints for any business use case',
          'Know when to use few-shot examples vs. chain-of-thought vs. neither',
          'Have a personal prompt failure mode checklist',
          'Have a 10-entry prompt library for a professional services firm, ready to share with a client today',
          "Have a designed and rehearsed 45-minute prompting workshop you could run with one week's notice",
        ],
        tip: "Clients who get better at prompting get more value from AI — which means they get more value from you. The consultant who runs a prompting workshop isn't just delivering training. They're creating visible, attributed success. This week builds the skill that makes every other engagement stickier.",
      },
      {
        label: 'Week 8',
        weekNumber: 8,
        title: 'Hardware, infrastructure & synthesis',
        time: '~4 hrs total',
        goal: "By Friday you'll have three things you didn't have Monday: a confident answer to the Mac/hardware question, a tool-to-need mapping framework for any client conversation, and a completed mock call. Week 8 closes out Phase 2 with the synthesis that ties all five weeks together.",
        days: [
          { day: 'Mon', topic: 'Mac vs. PC for AI work', task: "45 min: Research what actually differentiates Macs for AI tasks (Apple Silicon, Neural Engine, RAM). Then ask: for a business user running cloud-based AI tools only, does hardware matter? Write down the answer you'd give a client in 90 seconds." ,
            prompt: `I'm an AI consultant who gets asked 'should we buy Macs for AI?' Explain what Apple Silicon actually does for AI tasks, when it gives a real advantage (e.g. local model inference), and why hardware is largely irrelevant for cloud-based tools like ChatGPT, Claude, or Copilot. Give me the 60-second client answer.`
          },
          { day: 'Tue', topic: 'Local models — who really needs them', task: "30 min: Read about Ollama, LM Studio, and local model use cases. Understand: when does running a local model make sense (privacy, cost at scale, offline), and when is it overkill?" ,
            prompt: `I'm an AI consultant advising on local vs. cloud AI. Explain what tools like Ollama and LM Studio do, the 3–4 business scenarios where local models are genuinely justified, and why most business users will never need them. Give me a framework for evaluating any client's local model interest.`
          },
          { day: 'Wed', topic: 'Enterprise contracts & SLAs', task: "30 min: Go deeper than 'where does data go?' — research the commercial layer of enterprise AI agreements. What does a DPA actually commit a vendor to beyond a standard click-through? What SLAs and uptime guarantees do Anthropic, OpenAI, and Microsoft offer enterprise clients? When is a HIPAA Business Associate Agreement (BAA) required, and which vendors offer one?" ,
            prompt: `I'm an AI consultant advising clients on the commercial and contractual layer of enterprise AI agreements — not the basics of data routing (covered in Week 3), but the specifics that procurement and legal teams care about. For Anthropic (Claude), OpenAI (ChatGPT), and Microsoft (Copilot): (1) what does a DPA actually commit the vendor to that a standard click-through doesn't, (2) what SLAs and uptime guarantees are offered at the enterprise tier, (3) which vendors offer a HIPAA Business Associate Agreement and at what tier, (4) what API rate limits and usage caps matter for enterprise deployments, (5) what does the negotiation leverage look like for a 500-person vs. 5,000-person firm. Give me the talking points for a procurement or legal team asking 'what exactly are we signing?'`
          },
          { day: 'Thu', topic: 'Tool-to-need mapping framework', task: "45 min: Build a tool-to-need decision framework. Starting from a client's problem — not the tool — map which AI category and then which specific product fits best. Cover: content creation, data analysis, code, meeting notes, document processing, knowledge search, and industry-specific tasks." ,
            prompt: `I'm an AI consultant building a tool-to-need mapping framework. For each of these client problem categories — (1) content drafting, (2) data analysis and summarization, (3) software development, (4) meeting notes and follow-up, (5) document processing and Q&A, (6) enterprise knowledge search, (7) industry-specific workflows (legal, healthcare, marketing) — give me: the best tool category, top 1–2 specific recommendations, when to use a specialist vs. general-purpose tool, and the one question to ask the client first. Format as a reference card I can consult in a discovery call.`
          },
          { day: 'Fri', topic: 'Full Phase 2 mock call', task: "60 min: Role-play a 20-minute client call where they ask: (1) which AI tool is right for our org (we use M365), (2) whether to switch to Macs for AI, (3) whether our developers should use AI coding tools. Record yourself if needed." ,
            prompt: `I'm an AI consultant preparing for a mock client call. The client uses M365 and will ask: (1) Which AI tool is right for us — we've heard of ChatGPT, Claude, and Copilot; (2) Should we buy Macs for AI?; (3) Should our developers use AI coding tools? For each question: give me the ideal answer structure, the key point to land, the most common mistake, and a follow-up question to expect from the client.`
          },
        ],
        resources: [
          { name: 'Apple Mac overview', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Apple's Mac lineup page — useful for understanding Apple Silicon capabilities and how Mac hardware is positioned vs. PC alternatives for AI work.", url: 'https://www.apple.com/mac/' },
          { name: 'Ollama — local model runner', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "The most popular tool for running local AI models. Worth installing and experimenting with so you understand what's possible and what the tradeoffs are.", url: 'https://ollama.com' },
          { name: 'Anthropic Trust Center', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "Anthropic's data handling, residency, and security commitments — bookmark this for when clients ask 'where does our data go?' for Claude.", url: 'https://trust.anthropic.com' },
          { name: 'OpenAI enterprise privacy', badge: 'Free', badgeBg: '#EEEDFE', badgeColor: '#3C3489', desc: "OpenAI's data handling and enterprise privacy commitments for ChatGPT and the API — the counterpart to Anthropic's trust center.", url: 'https://openai.com/enterprise-privacy' },
        ],
        checks: [
          "Can answer 'should we switch to Macs for AI?' in 90 seconds with a clear framework",
          'Understand when local models make sense vs. when cloud-only is fine',
          'Know how major vendors handle data and can answer client data residency questions for each tool',
          'Have a tool-to-need mapping reference card covering at least 7 client problem categories',
          'Have completed a mock client call covering product, hardware, and tool-selection questions',
          'Feel ready to take the lead on any AI tool question in a real client conversation',
        ],
        tip: "The mock call on Friday is non-negotiable. Reading about products and advising on products are completely different skills. If you can't find a colleague to role-play with, record yourself answering the three questions out loud and play it back.",
      },
    ],
  },
  {
    id: 2,
    label: 'Phase 3',
    name: 'Consulting skills',
    duration: 'Weeks 9–13',
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
          "How to diagnose an organization's AI maturity level (people, process, data, governance)",
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
        icon: 'TrendingUp',
        title: 'Adoption strategy & ROI',
        sub: '~5 hrs',
        topics: [
          'Rollout sequencing: which teams go first and why',
          'Communication planning by stakeholder group',
          "Handling 'AI is taking our jobs' — the frontline resistance conversation",
          'ROI and business case framing — metrics for CFOs, COOs, and IT leaders',
          'Pilot-to-scale decision criteria: go/no-go signals',
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
        label: 'Week 9',
        weekNumber: 9,
        title: 'AI readiness assessment',
        time: '~5 hrs total',
        goal: "By Friday you'll have a working AI readiness assessment tool you can run with a real client in a 30-minute discovery call. This is one of the highest-value deliverables a consultant can bring to a first meeting.",
        deliverable: 'A one-page AI readiness scorecard with 5 dimensions, 3–4 diagnostic questions each, and a scoring rubric you can use in discovery calls.',
        days: [
          { day: 'Mon', topic: 'AI maturity models', task: "45 min: Research existing AI maturity frameworks (MIT Sloan, McKinsey, Gartner). Note the common dimensions: data, talent, process, governance, leadership." ,
            prompt: `I'm an AI consultant building a readiness assessment. Summarize the AI maturity frameworks from McKinsey, MIT Sloan, and Gartner. Synthesize the most useful elements into 5 evaluation dimensions I can use in my own tool, with a plain-language definition and low vs. high maturity signals for each.`
          },
          { day: 'Tue', topic: 'Stakeholder mapping', task: "45 min: For a fictional mid-size company, map out every stakeholder who influences an AI adoption decision: IT, HR, legal, CFO, department heads, frontline workers. Then practice — pick the stakeholder most likely to push back hardest and run a 3-exchange conversation with them." ,
            prompt: `I'm an AI consultant preparing for a discovery call. For each stakeholder group — IT, Legal, HR, Finance, Department heads, Frontline workers — give me: their primary AI concern, most likely objection, what would make them a champion, and one thing I should never say to them. Then pick the stakeholder group with the highest resistance potential and play that role for 3 exchanges while I practice responding. After the role-play, tell me what I handled well and what I should do differently.`
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
        label: 'Week 10',
        weekNumber: 10,
        title: 'Workflow automation & use case development',
        time: '~5 hrs total',
        goal: "By Friday you'll have three client demo prompts, a live use case prioritization matrix, and the ability to take a client from 'we want to do something with AI' to a scoped, concrete first project — in a single conversation. Clients rarely say 'I want workflow automation.' They say 'I want to spend less time on email.' This week you learn to translate that.",
        deliverable: 'A use case prioritization matrix you can fill out with a client in real time, ranking opportunities by impact and implementation complexity.',
        days: [
          { day: 'Mon', topic: 'Common business automations', task: "60 min: Using any AI tool (ChatGPT, Claude, or Copilot), build and test three automations: (1) email summarization prompt, (2) meeting notes to action items, (3) deal or proposal analysis. Save your prompts — these become client demos." ,
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
        label: 'Week 11',
        weekNumber: 11,
        title: 'Adoption strategy & ROI',
        time: '~5 hrs total',
        goal: "By Friday you'll have a rollout sequencing guide, a stakeholder communication template, and a one-page ROI/business case you can customize for any client. Two questions kill otherwise strong AI recommendations: 'What's the return?' and 'How do we roll this out across 500 people?' Both are answerable — this week you build the answers.",
        deliverable: 'A rollout sequencing framework and a one-page ROI/business case template you can customize for any client engagement.',
        days: [
          { day: 'Mon', topic: 'Rollout sequencing', task: "45 min: Research how successful enterprise AI rollouts are staged. Which teams go first — and why? Read about the 'lighthouse user' strategy and department sequencing. Draft a rollout sequencing decision guide you'd use with a client.",
            prompt: `I'm an AI consultant advising on enterprise AI rollout sequencing. Help me build a decision guide: which teams or departments should get AI access first, what the criteria are for selecting pilot groups (technical readiness, motivation, impact potential), how to sequence expansion after the initial pilot, and what failure looks like at each stage. Give me the frameworks and a 60-second version I could use in a client meeting.`
          },
          { day: 'Tue', topic: 'Communication planning', task: "45 min: Design a communication plan for a 300-person organization rolling out Claude. Who needs to hear what, when, and from whom? Map the message by stakeholder: leadership, managers, frontline staff, IT.",
            prompt: `I'm an AI consultant designing an AI rollout communication plan for a 300-person organization. For each stakeholder group — executive leadership, middle managers, frontline staff, IT — give me: what they need to hear before launch, what they need during rollout, and what they need at 30/60/90 days. Include the 3 most common communication mistakes that cause rollouts to lose momentum.`
          },
          { day: 'Wed', topic: "Handling 'AI is taking our jobs'", task: "45 min: Prepare for the frontline resistance conversation — the most emotionally charged moment in any AI rollout. Write down your approach: how you validate the fear, what you don't say, and how you redirect. Then run the role-play at least twice until your response lands without sounding scripted.",
            prompt: `I'm an AI consultant who will face 'AI is taking our jobs' in client rollouts. Give me: the 3 distinct forms this concern takes (fear of job loss, fear of deskilling, fear of surveillance), the honest response to each, what absolutely not to say, and how to redirect the conversation toward a constructive outcome. Then play a skeptical frontline worker in a 4-exchange role-play. After, break character and tell me: did my responses genuinely validate the concern or just reassure? What would a frontline worker still be worried about after hearing me?`
          },
          { day: 'Thu', topic: 'ROI and business case framing', task: "60 min: Research how to build a business case for an AI pilot. Learn how to estimate productivity gains, frame time-to-value, and build the metrics that resonate with CFOs vs. COOs vs. IT leaders. Build a one-page business case template.",
            prompt: `I'm an AI consultant building a business case for an AI pilot. Give me: (1) how to estimate productivity gains from specific automations (email, meeting notes, drafting), (2) a time-to-value framework — quick wins in 30 days vs. 6-month transformation, (3) the ROI metrics that resonate with CFOs vs. COOs vs. IT leaders. Format the output as a one-page business case template with clearly labeled sections and placeholder text I can fill in per engagement — not a narrative explanation. Sections should include: Problem Statement, Proposed Pilot Scope, Estimated Productivity Gains, Time-to-Value, Investment Required, Success Metrics, and Risks & Mitigations.`
          },
          { day: 'Fri', topic: 'Pilot-to-scale decision criteria', task: "45 min: Define the success criteria that determine when a pilot is ready to scale. What metrics, behaviors, and organizational signals indicate the pilot has worked — and what signals indicate it hasn't?",
            prompt: `I'm an AI consultant advising on the transition from pilot to enterprise-wide rollout. Define: (1) the leading indicators that a pilot is ready to scale — usage metrics, productivity signals, behavioral evidence, (2) the warning signs that scaling would be premature, (3) the 3 governance decisions that must be made before scaling, and (4) how to present the go/no-go recommendation to leadership credibly.`
          },
        ],
        resources: [
          { name: 'McKinsey — scaling AI in organizations', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "McKinsey's research on the most common barriers to scaling AI beyond pilots. The scaling gap is the single most common failure mode — understanding it is essential for advising mid-to-large organizations.", url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
          { name: 'Harvard Business Review — building the AI business case', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "HBR's guidance on framing AI ROI for executive audiences. Clients will ask 'what's the ROI?' — knowing how to answer credibly, without overpromising, is a core consultant skill.", url: 'https://hbr.org/topic/subject/ai-and-machine-learning' },
          { name: 'Prosci — managing resistance to AI change', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Prosci's frameworks for diagnosing and addressing employee resistance — directly applicable to the 'AI is taking our jobs' conversation and other frontline resistance patterns.", url: 'https://www.prosci.com/managing-change-resistance' },
          { name: 'Gartner — AI insights and adoption research', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Gartner's AI research hub — the go-to source for enterprise AI adoption trends, barriers, and maturity data. The talent, data, and governance gaps identified here map directly onto the rollout challenges you'll face with clients.", url: 'https://www.gartner.com/en/ai' },
        ],
        checks: [
          'Have a rollout sequencing decision guide covering how to choose pilot groups and stage expansion',
          'Have a communication plan template covering all stakeholder groups at each rollout stage',
          'Can articulate the honest response to frontline job displacement concerns without dismissing them',
          'Have a one-page ROI/business case template you can customize per client and engagement',
          'Can define the go/no-go criteria for scaling a pilot to enterprise rollout',
        ],
        tip: "The ROI question is the moment where consultants either earn trust or lose it. Clients can tell when you're making up numbers. The consultants who answer credibly say: 'Based on similar deployments, here's the range of outcomes — and here's how we'd measure whether we're hitting that.' Honest ranges beat confident-sounding fabrications every time.",
      },
      {
        label: 'Week 12',
        weekNumber: 12,
        title: 'Managing risk conversations',
        time: '~4 hrs total',
        goal: "By Friday you'll have a one-page risk reference card and have practiced the hardest conversations in AI consulting out loud. Every AI adoption conversation eventually hits a wall: the IT team pushes back, legal gets nervous, or leadership raises concerns about control. This week you learn to handle those moments without losing momentum.",
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
          { name: 'NIST AI Risk Management Framework (AIRC)', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "The federal standard for AI risk management. Clients in regulated industries — finance, healthcare, government — will ask if you know this. Bookmark the AIRC portal, which consolidates the full framework.", url: 'https://airc.nist.gov' },
          { name: "Anthropic's responsible scaling policy", badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "Anthropic's public commitment to safe AI development. Useful for clients who ask 'how do we know Claude won't do something unexpected?'", url: 'https://www.anthropic.com/responsible-scaling-policy' },
          { name: 'OWASP Top 10 for LLM applications', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "The most referenced security risk list for AI applications. Knowing this puts you ahead of most business consultants.", url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
          { name: 'HBR — AI ethics and governance', badge: 'Free', badgeBg: '#FAEEDA', badgeColor: '#633806', desc: "HBR's collected coverage on AI ethics, governance, and responsible deployment — the language and logic your senior client contacts use when they think about AI risk.", url: 'https://hbr.org/topic/subject/ai-and-machine-learning' },
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
        label: 'Week 13',
        weekNumber: 13,
        title: 'Training, change management & Phase 3 capstone',
        time: '~5 hrs total',
        goal: "By Friday you'll have run a full end-to-end mock client call covering readiness, tools, deployment, governance, training, and next steps — and reviewed the recording. Week 13 closes Phase 3 with the training and change management skills that separate one-time engagements from long-term client relationships.",
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
    duration: 'Weeks 14–19',
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
        label: 'Weeks 14–15',
        weekNumber: 14,
        title: 'Developing your point of view',
        time: '~6 hrs across 2 weeks',
        goal: "By the end of this block you'll have a published point of view and a named framework you can introduce in any client conversation. Go-to experts are not just knowledgeable — they have a perspective. This block is about finding your niche, building a repeatable analytical voice, and producing the first external artifact that signals you have something worth hearing.",
        deliverable: 'A written point-of-view piece (600–900 words) on one aspect of enterprise AI adoption — something specific enough to be useful, opinionated enough to be memorable. Plus a personal \'AI consultant framework\' that you can reference consistently with clients.',
        days: [
          { day: 'Wk 14 Mon–Tue', topic: 'Find your niche', task: '90 min: Answer three questions in writing. (1) Which client types do I understand best — by industry, size, or function? (2) What AI adoption problem do I find genuinely interesting, not just professionally relevant? (3) What perspective do I have that differs from the generic \'AI is transformative\' narrative? Your niche sits at the intersection of those three answers.',
            prompt: `I'm an AI consultant developing a specialty. Help me answer 3 niche-finding questions: (1) What are the most underserved AI consulting niches right now? (2) What makes a niche defensible vs. too broad? (3) Given my background: [DESCRIBE YOUR EXPERIENCE AND INTERESTS] — what niche sits at the intersection? Give me 3 candidate niche statements I can choose from.`
          },
          { day: 'Wk 14 Wed–Thu', topic: 'Map the conversation landscape', task: '60 min: Read 10 recent LinkedIn posts or articles from AI consultants and analysts. For each, note: what position do they take, what are they not saying, where is there a gap or a counterargument? You\'re looking for the white space where your voice fits.',
            prompt: `I'm an AI consultant finding my differentiated voice. I've read these 5 posts or articles: [PASTE TITLES OR EXCERPTS]. For each gap or underexplored angle you identify, suggest a specific POV I could develop — opinionated enough to be memorable, grounded enough to be credible. What is almost never said that I could say?`
          },
          { day: 'Wk 14 Fri', topic: 'Draft your POV piece', task: "60 min: Write a 600–900 word draft on one specific topic — not 'AI adoption is hard' but something like 'Why most enterprise AI pilots fail before they start' or 'The hidden governance cost of letting every employee use Claude.' Specific, opinionated, useful." ,
            prompt: `I'm an AI consultant writing my first thought leadership piece (600–900 words) on: [STATE YOUR TOPIC]. Act as my editor. Help me develop a one-sentence thesis, suggest a structure (hook, 3 arguments, closing implication), and tell me what would make this piece forgettable vs. the thing someone screenshots and sends to a colleague.`
          },
          { day: 'Wk 15 Mon–Tue', topic: 'Build your framework', task: "90 min: Turn your strongest analytical pattern into a named, reusable framework. It doesn't need to be complicated — a 2x2, a three-stage model, a five-question diagnostic. Something you can draw on a whiteboard or drop into a slide. Name it. Use it consistently." ,
            prompt: `I'm an AI consultant developing a signature framework. Here is my recurring insight from client work: [DESCRIBE IT]. Turn this into a named, reusable framework: suggest 3–5 candidate names, give it a clear visual structure (2x2, stages, etc.), define each element, and show me how I'd introduce it in a client conversation in under 2 minutes.`
          },
          { day: 'Wk 15 Wed–Fri', topic: 'Refine and publish', task: '90 min: Edit your POV piece with one goal: cut 20% of the words and make every sentence earn its place. Share it — internally with colleagues, on LinkedIn, or both. The act of publishing, even once, changes how you think about your expertise.',
            prompt: `I'm an AI consultant editing my thought leadership piece before publishing. Here is my draft: [PASTE DRAFT]. Please: (1) identify 3 sentences to cut, (2) flag claims that won't survive scrutiny, (3) suggest a stronger opening sentence, (4) tell me if I have a clear thesis, (5) recommend LinkedIn vs. internal newsletter and how to adapt the framing for each.`
          },
        ],
        resources: [
          { name: 'Obviously Awesome — April Dunford', badge: 'Book (~$15)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'The definitive guide to positioning. Written for product marketers but directly applicable to personal and practice positioning. Forces you to answer: who are you for, what do you do, and why does it matter? One of the most useful books for a consultant building a specialty.', url: 'https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005' },
          { name: 'The Advantage — Patrick Lencioni', badge: 'Book (~$15)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'On organizational health and clarity — what separates smart organizations from effective ones. Gives you vocabulary and frameworks for the organizational dynamics that drive or block AI adoption.', url: 'https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529' },
          { name: 'HBR — building professional influence and credibility', badge: 'Free', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: "HBR's research and essays on how consultants and practitioners build lasting professional credibility. Covers the communication, positioning, and influence patterns that distinguish trusted advisors from vendors.", url: 'https://hbr.org/topic/subject/leadership' },
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
        label: 'Weeks 16–17',
        weekNumber: 16,
        title: 'Engagement design',
        time: '~6 hrs across 2 weeks',
        goal: "By the end of this block you'll have a service menu you could present to a prospective client tomorrow. Expertise without a commercial structure is a hobby — this block turns your knowledge into billable, repeatable engagements: the advisory retainer, the strategy workshop, the audit-to-roadmap project.",
        deliverable: 'A one-page service menu with three engagement types (advisory, workshop, project), each with a clear scope, deliverable, duration, and indicative pricing range.',
        days: [
          { day: 'Wk 16 Mon–Tue', topic: 'The advisory retainer model', task: '90 min: Research how AI advisory retainers are structured — monthly hours, access models, deliverables. Write a one-paragraph description of what a retainer with you would include: what clients get, how often you meet, what outputs they receive. Price it.',
            prompt: `I'm an AI consultant designing my first retainer. Help me structure a monthly AI advisory retainer: what the client receives, hours included, what's excluded, how it's reviewed and renewed, and indicative pricing. Give me a one-paragraph client-facing description, the 3 questions clients most ask about retainers, and the most common structuring mistake.`
          },
          { day: 'Wk 16 Wed–Thu', topic: 'The strategy workshop', task: '60 min: Design a half-day AI strategy workshop for a leadership team. Agenda, objectives, outputs, pre-work, facilitation notes. This should be something you could run in 6 weeks with light preparation. Make it reusable across client types.',
            prompt: `I'm an AI consultant designing a reusable half-day AI strategy workshop for leadership teams. Build: a 4-hour agenda with activities, 3–5 pre-work questions, the primary output participants leave with, facilitation notes for the 2 sessions most likely to go off-track, and how to turn workshop output into a next engagement.`
          },
          { day: 'Wk 16 Fri', topic: 'The project-based engagement', task: '45 min: Scope a three-phase project: (1) AI audit and readiness assessment, (2) roadmap and prioritization, (3) pilot design and launch support. Write the scope, timeline, and deliverables for each phase. This becomes your standard project proposal template.',
            prompt: `I'm an AI consultant designing a standard 3-phase project: (1) AI Audit and Readiness Assessment, (2) Roadmap and Prioritization, (3) Pilot Design and Launch Support. For each phase: duration, key activities, client inputs, consultant deliverables, and success criteria. Then write a one-page proposal summary I could email to a prospective client.`
          },
          { day: 'Wk 17 Mon–Tue', topic: 'Pricing and scoping discipline', task: "90 min: Research how peers price AI consulting work — hourly, project, retainer. Practice scoping a client scenario into each of your three engagement types. Understand when each model is right and how to recommend it without overselling." ,
            prompt: `I'm an AI consultant learning to price engagements. Walk me through pricing the same scenario three ways: hourly, project, and retainer. Scenario: a 200-person financial services firm wants AI readiness assessment, use case prioritization, and 90-day pilot planning. For each model: the logic, price range, who benefits, and the risk I take on.`
          },
          { day: 'Wk 17 Wed–Fri', topic: 'Build your repeatable assets', task: '90 min: Identify three documents you\'ll reuse across every engagement: a discovery questionnaire, a readiness scorecard (already built in Phase 3), and a proposal template. Finalize and file them where you\'ll actually find them before a client meeting.',
            prompt: `I'm an AI consultant building my standard engagement toolkit. Give me the structure for 3 reusable documents: (1) a discovery questionnaire (10–12 questions for the first client call), (2) a proposal template (sections and what each must accomplish), (3) a project kickoff agenda (first working session after contract signing). Scaffold only — I'll fill in the content.`
          },
        ],
        resources: [
          { name: 'The Trusted Advisor — Maister, Green, Galford', badge: 'Book (~$18)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'The foundational text on what makes clients trust advisors over the long term. The trust equation (credibility + reliability + intimacy / self-orientation) is something every serious consultant should be able to recite and apply.', url: 'https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347' },
          { name: 'Win Without Pitching Manifesto — Blair Enns', badge: 'Book (~$20)', badgeBg: '#FAECE7', badgeColor: '#712B13', desc: 'Required reading for any consultant who wants to stop chasing work and start attracting it. Reframes how you position, price, and close engagements. Particularly useful for moving from hourly billing to value-based models.', url: 'https://www.amazon.com/Win-Without-Pitching-Manifesto/dp/1605440043' },
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
        label: 'Weeks 18–19',
        weekNumber: 18,
        title: 'Staying current & the expert capstone',
        time: '~5 hrs + ongoing rhythm',
        goal: "By the end of this block you'll have a running intelligence system and a recorded capstone simulation that serves as your personal benchmark for leading engagements independently. The AI space moves faster than any other domain consultants advise on — new model releases, pricing changes, and regulatory shifts happen monthly. This block builds the habits that keep your advice current.",
        deliverable: "A personal AI intelligence system: a curated reading list, a monthly review ritual, and a 'tool radar' that categorizes what's proven, emerging, and experimental — updated and maintained as a living document.",
        days: [
          { day: 'Wk 18 Mon–Tue', topic: 'Build your intelligence system', task: '90 min: Set up your information diet. Identify 5 sources you\'ll read weekly (newsletters, blogs, release notes). Set up one aggregator (Feedly, Readwise, or a simple bookmark folder). Schedule 30 minutes every Friday as a standing \'AI news review.\' This habit is worth more than any course.',
            prompt: `I'm an AI consultant building a system to stay current. Recommend 5 specific sources with good signal-to-noise for enterprise AI consulting. Suggest an aggregator workflow for under 30 minutes per week. Give me a standing Friday review agenda — what questions to ask myself. Tell me the 3 types of AI news to flag immediately vs. what to skim.`
          },
          { day: 'Wk 18 Wed–Thu', topic: 'Build your tool radar', task: '60 min: Create a living document with four columns: Proven (recommend freely), Emerging (recommend with guardrails), Experimental (advise caution), Deprecated (steer away). Populate it with every AI tool you\'ve learned about across all four phases. Update it monthly.',
            prompt: `I'm an AI consultant building a tool radar. Define the criteria for Proven, Emerging, Experimental, and Deprecated categories. Evaluate these 10 tools and place them with reasoning: Claude, ChatGPT, Microsoft Copilot, Google Gemini, Midjourney, GitHub Copilot, Perplexity, Notion AI, Zapier AI, and Otter.ai. Suggest what fields my radar document should track for each tool.`
          },
          { day: 'Wk 18 Fri', topic: 'Peer community and learning', task: '45 min: Research 2–3 practitioner communities you could join — an AI consultants Slack, a LinkedIn group, a local meetup, or an Anthropic partner network. Evaluate each against three questions: Is there real practitioner signal or mostly vendor content? Are members at your level or above? Will it surface things you\'d miss on your own? Pick one and write down what you\'ll do in the first 30 days.',
            prompt: `I'm an AI consultant looking to join a practitioner community. Evaluate: Anthropic partner network, LinkedIn AI groups, local meetups, paid Slack communities, and conference networks. Give me 3 questions to ask before joining any community to assess if it's worth my time. Then give me a 30-day plan for getting genuine value rather than just lurking.`
          },
          { day: 'Wk 19 Mon–Wed', topic: 'The expert stress test', task: '90 min: Ask a colleague or manager to play a skeptical senior client. They should push back on every recommendation, ask for evidence, challenge your pricing, raise governance concerns, and ask who else does this. Your job: stay grounded, be honest about uncertainty, and never bluff.',
            prompt: `I'm an AI consultant preparing for the expert stress test. Play a skeptical CFO who has seen AI consulting initiatives fail before. Push back on: my pricing, my evidence base, my vendor objectivity, and my track record. After 5 exchanges, break character and give me: what I handled well, where I got defensive or vague, and the one thing I must fix.`
          },
          { day: 'Wk 19 Thu–Fri', topic: 'Full program capstone', task: '120 min: Lead a full end-to-end client engagement simulation — from first call through proposal delivery. Cover: discovery and readiness assessment, product and vendor recommendation, governance and training plan, engagement proposal with pricing, and your POV on where AI adoption is heading. Record it. This recording is your benchmark.',
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
