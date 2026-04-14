import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
}

const TERMS: GlossaryTerm[] = [
  { term: 'AI Agent', definition: 'An AI system that can autonomously take sequences of actions and make decisions to complete a multi-step goal — using tools like web search, code execution, or API calls.' },
  { term: 'AI Center of Excellence (CoE)', definition: 'A centralized organizational body that governs, standardizes, and enables AI adoption across the enterprise.' },
  { term: 'AI Readiness', definition: "An assessment of an organization's capacity to adopt AI, evaluated across four dimensions: people, processes, data maturity, and governance." },
  { term: 'API (Application Programming Interface)', definition: 'A way for software programs to communicate. In AI contexts, an API lets developers integrate AI capabilities directly into apps and workflows without using the consumer UI.' },
  { term: 'Change Management', definition: 'A structured approach to transitioning people from the current to a future state. In AI rollouts: the discipline of managing human adoption alongside technical deployment.' },
  { term: 'Chain-of-Thought Prompting', definition: 'A prompting technique where you ask the AI to reason step by step before reaching a conclusion. Improves accuracy on complex multi-step tasks.' },
  { term: 'Context Window', definition: 'The maximum amount of text (measured in tokens) an AI model can process in a single conversation or request. Larger context windows allow longer documents to be analyzed.' },
  { term: 'Data Processing Agreement (DPA)', definition: 'A legal contract between a business and a vendor governing how personal data is collected, stored, and processed. Required under GDPR and similar frameworks.' },
  { term: 'Data Residency', definition: 'A legal or contractual requirement that data be stored and processed within a specific geographic region. Enterprises operating in the EU often require EU data residency for AI tools.' },
  { term: 'Embedding', definition: 'How AI stores meaning numerically. Powers tools that let you search your own documents — for example, asking questions across a knowledge base or document library. The underlying mechanism behind RAG (Retrieval-Augmented Generation) systems.' },
  { term: 'Few-Shot Prompting', definition: 'A technique where examples of the desired output are included in the prompt to guide the AI\'s response format, tone, or structure.' },
  { term: 'Fine-Tuning', definition: "Training a pre-built AI model on additional domain-specific data to improve its performance on a particular task or industry context. More resource-intensive than prompt engineering." },
  { term: 'Foundation Model', definition: 'A large AI model trained on broad data that can be adapted for many tasks. Examples: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro.' },
  { term: 'GDPR', definition: 'EU General Data Protection Regulation — governs the collection, storage, and processing of personal data for EU residents. Triggers specific obligations when AI processes EU citizen data.' },
  { term: 'Hallucination', definition: 'When an AI model generates factually incorrect or fabricated information with apparent confidence. A key risk to communicate to clients when deploying AI for research or compliance tasks.' },
  { term: 'HIPAA', definition: 'U.S. law governing the privacy and security of protected health information. Triggers specific requirements when AI tools process or are exposed to patient data.' },
  { term: 'LLM (Large Language Model)', definition: 'A neural network trained on massive amounts of text that can generate, summarize, translate, and reason about language. The underlying technology behind Claude, ChatGPT, and Gemini.' },
  { term: 'Multimodal AI', definition: 'AI that can process and generate multiple types of data — text, images, audio, and video — in a single model. GPT-4o and Claude 3.5 Sonnet are multimodal. Relevant when clients ask whether AI can process images, PDFs, diagrams, or voice recordings alongside text.' },
  { term: 'Pilot (AI Pilot)', definition: 'A controlled deployment of an AI tool with a limited user group, designed to test value and surface risks before broader organizational rollout.' },
  { term: 'Prompt', definition: 'The input text or instruction given to an AI model to produce a response. Quality of the prompt is the single largest factor in quality of output.' },
  { term: 'Prompt Injection', definition: 'A security attack where malicious instructions embedded in external content (documents, emails, web pages) manipulate an AI agent into taking unintended actions.' },
  { term: 'RAG (Retrieval-Augmented Generation)', definition: 'An architecture that combines an LLM with a document retrieval system, allowing the model to answer questions from a specific knowledge base rather than just its training data.' },
  { term: 'RBAC (Role-Based Access Control)', definition: "A security model that restricts system access based on a user's organizational role. In AI contexts: controls who can use which tools and what data they can input." },
  { term: 'Shadow AI', definition: 'The use of AI tools by employees without organizational or IT approval. Creates data security, governance, and compliance exposure that consultants routinely help clients audit and address.' },
  { term: 'SOC 2', definition: 'A security certification (Type I or Type II) that confirms a vendor meets rigorous standards for security, availability, and data privacy. Key credential to check when advising enterprise clients on AI tool selection.' },
  { term: 'System Prompt', definition: 'Hidden instructions given to an AI model at the start of a conversation that shape its behavior, persona, and constraints — invisible to end users but visible to administrators.' },
  { term: 'Temperature', definition: 'A parameter controlling the randomness of AI outputs. Low temperature = more deterministic, consistent. High temperature = more varied, creative. Relevant when configuring AI tools for specific business use cases.' },
  { term: 'Token', definition: 'The basic unit an LLM processes — roughly 3–4 characters or 0.75 words. Pricing, speed, and context window limits are all measured in tokens.' },
  { term: 'Tool-to-Need Mapping', definition: "A consultant's framework for systematically matching client problems to the most appropriate AI tool or category. Prevents the 'recommend the tool you know best' bias." },
  { term: 'Vertical AI', definition: 'AI tools purpose-built for a specific industry or function (e.g., Harvey for legal, Rad AI for radiology, Jasper for marketing). Differentiated from general-purpose AI by domain-specific training and workflows.' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function GlossaryModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  const filtered = TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(query.toLowerCase()) ||
      t.definition.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-base font-semibold text-gray-900">AI Glossary</h2>
            <p className="text-xs text-gray-400 mt-0.5">{TERMS.length} terms</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close glossary"
          >
            <X size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-3 border-b border-gray-100 shrink-0">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search terms..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
              autoFocus
            />
          </div>
        </div>

        {/* Terms list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-400 text-center mt-8">No terms match "{query}"</p>
          ) : (
            <div className="space-y-5">
              {filtered.map((t) => (
                <div key={t.term} className="border-b border-gray-50 pb-5 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{t.term}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.definition}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 shrink-0">
          <p className="text-xs text-gray-400 text-center">Press Esc to close</p>
        </div>
      </div>
    </>
  );
}
