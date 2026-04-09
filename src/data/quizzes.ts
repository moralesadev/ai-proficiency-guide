import type { WeekQuiz } from '../types';

export const quizzes: WeekQuiz[] = [
  {
    phaseId: 0,
    weekIndex: 0,
    questions: [
      {
        question: "What does 'LLM' stand for?",
        options: ['Large Language Model', 'Logical Learning Machine', 'Linear Logic Module', 'Large Latency Mechanism'],
        correctIndex: 0,
        explanation: 'LLM stands for Large Language Model — AI systems trained on massive text datasets to understand and generate human language.',
      },
      {
        question: "Which of the following best describes a 'context window'?",
        options: [
          'The UI panel where you type your prompt',
          'The maximum amount of text an AI model can process in one interaction',
          'The time limit before an AI session expires',
          'A security boundary around AI data',
        ],
        correctIndex: 1,
        explanation: "A context window is the maximum amount of text (tokens) an AI model can 'see' and process at once — it includes both the input and the output.",
      },
      {
        question: 'What is the key difference between an AI chatbot and an AI agent?',
        options: [
          'Chatbots are free; agents require payment',
          'Agents can only work with code; chatbots handle text',
          'Agents can take multi-step actions and use tools autonomously; chatbots respond to single prompts',
          'There is no meaningful difference',
        ],
        correctIndex: 2,
        explanation: "AI agents can plan, take sequences of actions, use external tools (like web search or email), and complete multi-step tasks autonomously — beyond simple back-and-forth conversation.",
      },
      {
        question: "When would a business user most likely need a 'local model' instead of a cloud AI tool?",
        options: [
          'When they want faster responses',
          'When their data cannot leave the organization for regulatory or privacy reasons',
          'When they want access to GPT-4',
          'When they need a mobile app',
        ],
        correctIndex: 1,
        explanation: 'Local models run on-premises so data never leaves the organization — relevant for highly regulated industries or air-gapped environments. Most business users never need this.',
      },
      {
        question: "Anthropic's Claude, OpenAI's ChatGPT, Microsoft Copilot, and Google Gemini are all examples of:",
        options: [
          'Robotic process automation (RPA) tools',
          'AI-powered large language model products from major vendors',
          'Enterprise resource planning (ERP) systems',
          'Business intelligence dashboards',
        ],
        correctIndex: 1,
        explanation: 'All four are major AI products built on large language models. Knowing their distinctions is foundational to advising clients on which tool fits their needs.',
      },
    ],
  },
  {
    phaseId: 0,
    weekIndex: 1,
    questions: [
      {
        question: "What is 'shadow IT' in the context of AI adoption?",
        options: [
          'AI tools used only at night outside business hours',
          'Employees using AI tools without IT approval or governance oversight',
          'A vendor that competes with Microsoft',
          'A backup AI system for disaster recovery',
        ],
        correctIndex: 1,
        explanation: "Shadow IT refers to employees adopting tools — including AI — without IT department knowledge or approval. It creates security, compliance, and data governance risks.",
      },
      {
        question: "What is the 'core group' deployment model?",
        options: [
          'Giving AI access to every employee simultaneously at launch',
          'Blocking all AI tools until security review is complete',
          'Starting with a small, governed group of users before broader rollout',
          'Using AI only for the IT department',
        ],
        correctIndex: 2,
        explanation: "The core group model starts AI adoption with a controlled pilot group — typically power users or champions — allowing the organization to learn, govern, and refine before scaling.",
      },
      {
        question: 'Which stakeholders typically influence an enterprise AI adoption decision? (Pick the most complete answer)',
        options: [
          'Only the CTO and IT department',
          'Only business unit leaders',
          'IT, legal, HR, compliance, CFO, and business champions across departments',
          'The AI vendor and the CEO only',
        ],
        correctIndex: 2,
        explanation: "Enterprise AI adoption touches multiple functions. IT handles security and infrastructure, legal handles risk and policy, HR handles training, and business champions drive adoption — all must be engaged.",
      },
      {
        question: 'According to McKinsey research, where do most organizations get stuck in AI adoption?',
        options: [
          'Choosing which AI vendor to use',
          'Scaling from pilots to enterprise-wide deployment',
          'Getting leadership to approve the budget',
          'Training employees on how to type prompts',
        ],
        correctIndex: 1,
        explanation: "Most organizations can run a successful pilot, but struggle to scale. The jump from pilot to enterprise requires governance, change management, and process redesign — not just more licenses.",
      },
    ],
  },
  {
    phaseId: 0,
    weekIndex: 2,
    questions: [
      {
        question: 'What is Role-Based Access Control (RBAC) in the context of AI tools?',
        options: [
          'A method for ranking AI responses by quality',
          "Restricting which AI features or data users can access based on their job role",
          'A framework for evaluating AI vendors',
          'A prompt engineering technique',
        ],
        correctIndex: 1,
        explanation: "RBAC ensures that employees can only access AI capabilities appropriate to their role — for example, a salesperson shouldn't have access to HR-sensitive AI workflows.",
      },
      {
        question: 'When does GDPR become relevant in an AI conversation with a client?',
        options: [
          'Only when the client is based in Germany',
          'Whenever the AI tool processes personal data of EU residents',
          'Only when using open-source models',
          'GDPR does not apply to AI tools',
        ],
        correctIndex: 1,
        explanation: "GDPR applies whenever personal data of EU residents is processed — including when that data is sent to an AI model as part of a prompt. Any client serving EU customers needs to consider this.",
      },
      {
        question: 'What is the purpose of a Data Processing Agreement (DPA) with an AI vendor?',
        options: [
          'To negotiate a lower price for AI licenses',
          'To contractually define how the vendor handles your organization\'s data',
          'To grant employees permission to use AI tools',
          'To document which prompts were sent to the model',
        ],
        correctIndex: 1,
        explanation: "A DPA contractually specifies how the AI vendor processes, stores, and protects your data. It's essential for enterprise clients, especially in regulated industries.",
      },
      {
        question: "Anthropic's Constitutional AI approach is primarily designed to:",
        options: [
          'Make Claude faster than competing models',
          'Reduce the cost of running large language models',
          'Train Claude to be helpful, harmless, and honest through a principled safety methodology',
          'Give users a written constitution they must agree to',
        ],
        correctIndex: 2,
        explanation: "Constitutional AI is Anthropic's safety training methodology that uses a set of principles to guide Claude's behavior — making it a governance differentiator vs. competitors.",
      },
    ],
  },
  {
    phaseId: 1,
    weekIndex: 0,
    questions: [
      {
        question: 'Which AI tool has the deepest native integration with Microsoft Word, Excel, Teams, and Outlook?',
        options: ['ChatGPT', 'Claude', 'Microsoft 365 Copilot', 'Google Gemini'],
        correctIndex: 2,
        explanation: 'Microsoft 365 Copilot is embedded directly into M365 applications — it can draft in Word, analyze in Excel, summarize in Teams, and reply in Outlook. The other tools require switching to a separate interface.',
      },
      {
        question: 'A client runs entirely on Google Workspace (Gmail, Docs, Drive, Meet). Which AI tool offers the deepest integration with their existing platform?',
        options: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Google Gemini'],
        correctIndex: 3,
        explanation: 'Google Gemini is integrated directly into Google Workspace applications. For Google-native organizations, Gemini may already cover their use cases without adding a separate AI subscription.',
      },
      {
        question: "A consultant runs the same writing task in ChatGPT and Claude and notices the outputs are noticeably different. What is the most appropriate next step?",
        options: [
          'Recommend whichever gave the longer, more detailed answer',
          'Tell the client one tool is objectively superior',
          'Document the difference and frame it as a use-case-dependent recommendation',
          'Assume one tool has a technical error and report it to the vendor',
        ],
        correctIndex: 2,
        explanation: 'Different AI tools have different strengths depending on task type, output style, and context. The consultant\'s role is to understand those differences and translate them into a client-relevant recommendation — not to pick a universal winner.',
      },
      {
        question: 'What is the key difference between free Microsoft Copilot (in Bing/Edge/Windows) and Microsoft 365 Copilot?',
        options: [
          'They are the same product with identical features',
          'Free Copilot is a consumer AI assistant; M365 Copilot is a paid enterprise product embedded in Office applications',
          'M365 Copilot is free for all Microsoft 365 subscribers',
          'Free Copilot is more powerful than M365 Copilot',
        ],
        correctIndex: 1,
        explanation: 'Free Copilot is a general-purpose AI chat tool available via Bing and Edge. Microsoft 365 Copilot is a separate paid add-on (~$30/user/month) that integrates AI into Word, Excel, Teams, and Outlook. Many clients confuse the two.',
      },
      {
        question: "An enterprise client asks 'Which AI tool should we use?' What is the best consultant response?",
        options: [
          "'ChatGPT is the most popular, so that's where most organizations start.'" ,
          "'Claude is generally the strongest for enterprise use cases.'" ,
          "'That depends on your existing tech stack, primary use cases, and governance requirements — let me ask you a few questions first.'" ,
          "'They're all basically the same, so it comes down to price.'" ,
        ],
        correctIndex: 2,
        explanation: 'Tool selection depends on the client\'s context — their existing platforms (M365 vs. Google), primary use cases, security requirements, and budget. A trusted advisor asks questions before recommending, rather than defaulting to a single vendor.',
      },
    ],
  },
  {
    phaseId: 1,
    weekIndex: 1,
    questions: [
      {
        question: 'A client uses Microsoft 365 across their entire organization and has an existing Copilot license. What should your first recommendation be?',
        options: [
          'Immediately replace Copilot with Claude',
          'Evaluate whether their Copilot use cases are being met before adding another tool',
          'Tell them Copilot is inferior and switch immediately',
          'Add Claude on top of Copilot without evaluating current usage',
        ],
        correctIndex: 1,
        explanation: "The trusted advisor approach is to evaluate what they already have. Many M365 organizations already have Copilot capabilities — recommending Claude on top without evaluating existing usage wastes client budget and erodes trust.",
      },
      {
        question: "What is Anthropic's key safety differentiator that you can position as a governance advantage for enterprise clients?",
        options: [
          'Claude is the fastest model on the market',
          "Constitutional AI — a principled safety training methodology that prioritizes being helpful, harmless, and honest",
          'Claude never stores any user data',
          "Anthropic's models are open source",
        ],
        correctIndex: 1,
        explanation: "Anthropic's Constitutional AI approach and safety-first culture are credible differentiators in enterprise conversations where clients worry about AI risk, especially in regulated industries.",
      },
      {
        question: 'When is Google Gemini likely the strongest recommendation for a client?',
        options: [
          'When the client uses AWS and has no Google products',
          'When the client runs on Google Workspace and wants deep integration with Gmail, Docs, and Drive',
          'When the client needs a local model for air-gapped environments',
          'When the client has a large developer team building custom APIs',
        ],
        correctIndex: 1,
        explanation: "Gemini is deeply integrated into Google Workspace. For Google-native organizations, Gemini may already cover their use cases — recommending Claude on top may not be necessary or valuable.",
      },
    ],
  },
  {
    phaseId: 1,
    weekIndex: 2,
    questions: [
      {
        question: "A client asks 'Should we buy new Macs for our team so they can use AI tools?' What is the most accurate response?",
        options: [
          'Yes, Macs are required for all AI tools',
          "For cloud-based AI tools like Claude.ai or Copilot, hardware matters very little — what matters is internet connectivity and browser capability",
          "No, PCs always outperform Macs for AI",
          "Only MacBook Pros with M4 chips can run AI tools",
        ],
        correctIndex: 1,
        explanation: "Cloud-based AI tools run in the browser — they don't require specialized hardware. The Mac advantage (Apple Silicon Neural Engine) primarily matters for local model inference, which most business users never need.",
      },
      {
        question: "A client asks 'Where does our data go when we use AI tools like ChatGPT or Claude?' What is the most accurate general answer?",
        options: [
          'All AI vendors store prompts permanently and use them for training',
          "Data is processed on the user's local machine and never leaves the organization",
          'For enterprise and API plans, major vendors offer Data Processing Agreements specifying that data is not used for training without consent',
          'Data handling is unregulated and varies randomly between vendors',
        ],
        correctIndex: 2,
        explanation: 'Anthropic, OpenAI, and Microsoft all offer enterprise agreements (DPAs) that specify data handling and typically exclude prompt data from training. The specifics differ by vendor and plan — a consultant should know each vendor\'s trust center and what their DPA covers.',
      },
      {
        question: 'When would running a local AI model (e.g., via Ollama) be genuinely appropriate for a business client?',
        options: [
          'When they want the most powerful AI available',
          'When their data classification policies prohibit sending any data to third-party cloud services',
          'When they want a cheaper alternative to Claude.ai',
          'When they have a small team with limited technical skills',
        ],
        correctIndex: 1,
        explanation: "Local models make sense in highly regulated environments (defense, certain healthcare settings) where data cannot leave the organization. For most business users, cloud AI with a proper DPA is simpler and more capable.",
      },
    ],
  },
  {
    phaseId: 2,
    weekIndex: 0,
    questions: [
      {
        question: "In an AI maturity assessment, which five dimensions are most commonly evaluated?",
        options: [
          'Speed, Cost, Accuracy, Compliance, Vendor',
          'People, Process, Data, Governance, Leadership',
          'Hardware, Software, Network, Security, Budget',
          'Chatbots, Agents, Models, APIs, Plugins',
        ],
        correctIndex: 1,
        explanation: "The five standard dimensions of AI maturity assessments are People (skills & culture), Process (workflow readiness), Data (quality & access), Governance (policies & risk), and Leadership (vision & sponsorship).",
      },
      {
        question: 'Which of the following is a "quick win" AI use case vs. a "transformation" use case?',
        options: [
          'Quick win: redesigning the entire customer service model with AI agents',
          'Quick win: using Claude to draft meeting summaries from notes',
          'Transformation: setting up an email auto-reply',
          'Transformation: training staff on how to use ChatGPT',
        ],
        correctIndex: 1,
        explanation: "Quick wins are low-effort, high-visibility improvements like meeting summaries or email drafting. Transformation involves redesigning how work is done — new service models, automated workflows, structural change.",
      },
      {
        question: 'Who typically has "veto power" in an enterprise AI adoption decision?',
        options: [
          'The AI vendor',
          'The IT security or legal team, whose concerns can block deployment',
          'The end users who will use the tool',
          'The marketing department',
        ],
        correctIndex: 1,
        explanation: "IT security and legal teams often hold veto power — they can block tool deployment based on data risk, compliance concerns, or vendor trust issues. Your job as a consultant is to engage them early.",
      },
    ],
  },
  {
    phaseId: 2,
    weekIndex: 1,
    questions: [
      {
        question: 'A client says "we want to automate our emails." What is the best consultant response?',
        options: [
          "Immediately recommend a specific AI tool without asking more questions",
          "Ask clarifying questions: automate what part of email? For whom? What does success look like?",
          "Tell them AI cannot reliably automate email",
          "Recommend they hire a developer to build a custom solution",
        ],
        correctIndex: 1,
        explanation: "Vague interest must be translated into a scoped project. The best consultants listen first, ask about inputs/outputs/guardrails, and help the client define what 'done' looks like before recommending anything.",
      },
      {
        question: 'What does a 2x2 use case prioritization matrix plot?',
        options: [
          'Cost vs. timeline',
          'Impact (high/low) vs. Implementation effort (high/low)',
          'Technical complexity vs. vendor capability',
          'Number of users vs. number of use cases',
        ],
        correctIndex: 1,
        explanation: "A 2x2 matrix with Impact on one axis and Effort on the other quickly identifies 'pilot zone' opportunities — high impact, low effort — where you should recommend starting.",
      },
      {
        question: 'When scoping a workflow automation project, which elements should be defined? (Select the most complete answer)',
        options: [
          'Only the AI tool to be used',
          'Inputs, outputs, guardrails, ownership, and success metrics',
          'Budget and timeline only',
          'The names of the employees who will use it',
        ],
        correctIndex: 1,
        explanation: "A well-scoped workflow automation project defines: what goes in (inputs), what comes out (outputs), what constraints exist (guardrails), who owns it, and how success is measured. Without these, projects drift.",
      },
    ],
  },
  {
    phaseId: 2,
    weekIndex: 2,
    questions: [
      {
        question: "A client's IT team says 'We can't approve Claude Cowork because we don't know where our data goes.' What is the best response?",
        options: [
          "Tell them their concern is unfounded and approve it anyway",
          "Validate the concern, point to Anthropic's trust center and DPA options, and propose a governed pilot with limited data scope",
          "Abandon the Claude recommendation entirely",
          "Escalate immediately to the client's CEO",
        ],
        correctIndex: 1,
        explanation: "Validate, redirect, keep momentum. IT concerns are legitimate — your job is to show there's a governance path forward, not to override their concern or abandon the opportunity.",
      },
      {
        question: 'What is the ADKAR change management model?',
        options: [
          'A framework for evaluating AI vendor pricing',
          'Awareness, Desire, Knowledge, Ability, Reinforcement — a model for individual behavior change',
          'A security audit checklist for AI deployments',
          'An acronym for a type of AI architecture',
        ],
        correctIndex: 1,
        explanation: "ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) is a Prosci framework for managing individual behavior change — highly applicable to AI tool adoption where resistance is common.",
      },
      {
        question: "What is 'prompt injection' and why should consultants understand it?",
        options: [
          "A technique for writing better prompts",
          "An attack where malicious instructions embedded in data manipulate an AI's output",
          "A method for connecting Claude to external databases",
          "A way to speed up AI response times",
        ],
        correctIndex: 1,
        explanation: "Prompt injection is a security risk where malicious content in documents or emails tricks an AI agent into taking unintended actions. Understanding this helps consultants advise clients on AI security guardrails.",
      },
      {
        question: 'Which metric is the strongest signal that AI adoption is succeeding in an organization?',
        options: [
          'Number of AI licenses purchased',
          'Number of employees who attended an AI training session',
          'Weekly active users + measurable time saved on specific workflows',
          'Number of AI vendor demos attended by leadership',
        ],
        correctIndex: 2,
        explanation: "Licenses and training attendance are vanity metrics. Real adoption shows up in regular usage and measurable productivity change — the behaviors that indicate AI has changed how work gets done.",
      },
    ],
  },
  {
    phaseId: 3,
    weekIndex: 0,
    questions: [
      {
        question: "What is the most effective way to find your niche as an AI consultant?",
        options: [
          "Pick whichever AI tool you've used most often",
          "Find the intersection of client types you understand best, problems you find genuinely interesting, and perspectives that differ from generic narratives",
          "Focus on whichever AI vendor pays the highest referral fees",
          "Specialize in whatever skill is most in demand on job boards",
        ],
        correctIndex: 1,
        explanation: "Your niche sits at the intersection of three things: the client types you understand best, the problems you find genuinely interesting (not just professionally relevant), and a perspective that is specific enough to be different from the 'AI is transformative' noise.",
      },
      {
        question: "What is the primary purpose of writing and sharing a point-of-view piece as a consultant?",
        options: [
          "To prove you can write long documents",
          "To generate SEO traffic to your consulting website",
          "To signal that you have a specific, defensible perspective worth hearing — building reputation and trust",
          "To summarize what other AI thought leaders have already said",
        ],
        correctIndex: 2,
        explanation: "A POV piece is a reputation asset. It signals to clients and colleagues that you have something specific to say — not just aggregated knowledge. The act of publishing changes how others perceive your expertise and how you think about it yourself.",
      },
      {
        question: "What makes a consulting framework valuable and reusable?",
        options: [
          "It must have at least 10 steps to appear thorough",
          "It must be based on academic research and peer-reviewed",
          "It is simple enough to explain in 2 minutes, named, and applicable consistently across client conversations",
          "It must be proprietary and never shared publicly",
        ],
        correctIndex: 2,
        explanation: "A great consultant framework is simple, named, and consistent. A 2x2, a three-stage model, or a five-question diagnostic — the kind of thing you can draw on a whiteboard. The value is in repeated application, not complexity.",
      },
      {
        question: "When mapping the 'conversation landscape' before writing your POV, what are you looking for?",
        options: [
          "The most popular opinion to agree with",
          "The white space — what other voices are not saying, where there is a gap or counterargument your perspective can fill",
          "The most controversial take to generate attention",
          "The safest, least contentious position on AI adoption",
        ],
        correctIndex: 1,
        explanation: "Mapping the landscape means reading what others say and finding where your voice fits — specifically in the gaps, counterarguments, or underexplored angles. Differentiation comes from saying something others aren't saying, not from repeating the consensus.",
      },
    ],
  },
  {
    phaseId: 3,
    weekIndex: 1,
    questions: [
      {
        question: "What are the three core engagement types a go-to AI consultant should have designed and ready?",
        options: [
          "Blog post, webinar, and LinkedIn DM",
          "Advisory retainer, strategy workshop, and project-based engagement (audit → roadmap → pilot)",
          "Free consultation, paid training, and vendor referral",
          "Assessment tool, certification course, and speaking engagement",
        ],
        correctIndex: 1,
        explanation: "The three standard consulting engagement structures are: (1) advisory retainer for ongoing guidance, (2) a reusable strategy workshop for leadership teams, and (3) a project engagement structured as audit → roadmap → pilot. Each serves a different client need and budget.",
      },
      {
        question: "According to 'Win Without Pitching,' what is the key shift in how expert consultants approach client relationships?",
        options: [
          "Always pitch lower than competitors to win on price",
          "Stop chasing work and start attracting it by positioning clearly and pricing on value",
          "Submit the most detailed proposal to demonstrate thoroughness",
          "Offer unlimited revisions to reduce client risk",
        ],
        correctIndex: 1,
        explanation: "Blair Enns argues that expert consultants should position themselves clearly enough that the right clients come to them — and price based on the value they deliver, not hours worked. Chasing work signals a lack of positioning.",
      },
      {
        question: "What is the 'trust equation' from 'The Trusted Advisor'?",
        options: [
          "(Expertise × Speed) / Cost",
          "(Credibility + Reliability + Intimacy) / Self-orientation",
          "(Years of experience + Certifications) / Hourly rate",
          "(Client satisfaction + Referrals) × Engagement length",
        ],
        correctIndex: 1,
        explanation: "The trust equation: (Credibility + Reliability + Intimacy) / Self-orientation. High self-orientation — focusing on your own interests — destroys trust faster than any other variable. The best advisors score high on all three numerators and low on self-orientation.",
      },
      {
        question: "Why should engagement scope be specific rather than flexible when presenting to a client?",
        options: [
          "Specific scope is required by most procurement departments",
          "Vague scope signals a consultant who doesn't know their own value — specificity builds trust and helps clients self-select",
          "Flexibility confuses junior staff who implement the engagement",
          "Specific scope protects the consultant from all liability",
        ],
        correctIndex: 1,
        explanation: "Counterintuitively, being concrete about scope builds more trust than being flexible. Vague scope looks like uncertainty about your own value. Clients who see a clear service definition can decide quickly whether it fits — which is what you want.",
      },
    ],
  },
  {
    phaseId: 3,
    weekIndex: 2,
    questions: [
      {
        question: "What is the purpose of a 'tool radar' document for an AI consultant?",
        options: [
          "To track which AI tools you have personally tried",
          "A living categorization of AI tools by maturity — proven, emerging, experimental, deprecated — so you can give calibrated recommendations quickly",
          "A competitive analysis document to share with clients for marketing purposes",
          "A list of tools approved by your company's IT department",
        ],
        correctIndex: 1,
        explanation: "The tool radar is a living document with four categories: Proven (recommend freely), Emerging (recommend with guardrails), Experimental (advise caution), Deprecated (steer away). It lets you give grounded, consistent answers when clients ask about new AI tools — rather than improvising.",
      },
      {
        question: "What is the goal of the 'expert stress test' in Week 16?",
        options: [
          "To memorize responses to every possible client objection",
          "To practice staying grounded, honest about uncertainty, and never bluffing when a skeptical senior client pushes back hard on every recommendation",
          "To test your typing speed when writing proposals under pressure",
          "To evaluate whether your pricing is competitive against market rates",
        ],
        correctIndex: 1,
        explanation: "The stress test simulates the hardest version of a client conversation — one where someone pushes back on everything. The skill being tested is not having all the answers, but staying grounded, being honest about what you don't know, and never bluffing. That's what expert-level consulting looks like.",
      },
      {
        question: "Why is building a peer community part of the staying-current system?",
        options: [
          "Peer communities are required for most AI consulting certifications",
          "Peers surface real-world developments you'd otherwise miss and challenge your thinking before clients do",
          "It is primarily for networking to generate new business leads",
          "Peer communities provide discounts on AI tool subscriptions",
        ],
        correctIndex: 1,
        explanation: "A practitioner peer group catches things you'd miss on your own — new tool releases, client challenges, emerging risks — and stress-tests your thinking before you take it to clients. It's an intelligence and quality-control system, not just networking.",
      },
      {
        question: "What does the full program capstone simulation cover, and why does recording it matter?",
        options: [
          "It covers only product recommendations; recording is for compliance",
          "It covers discovery through proposal across all four phases; the recording serves as a personal benchmark to measure future growth",
          "It covers only Phase 4 content; recording is shared with clients as a demo",
          "It is a written exam; recording is not relevant",
        ],
        correctIndex: 1,
        explanation: "The capstone runs the full engagement arc — discovery, readiness assessment, vendor recommendation, governance plan, training design, and proposal with pricing. Recording it creates a benchmark: a concrete reference point for where you are at program completion, to compare against in 6 and 12 months.",
      },
    ],
  },
];
