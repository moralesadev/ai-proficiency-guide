import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Info, Clipboard, Users, Compass, ChevronDown, ChevronUp, Rocket, AlertCircle } from 'lucide-react';
import { phases } from '../data/phases';
import { getPhaseProgress, getWeekProgress } from '../services/progressService';
import { ProgressRing } from '../components/ProgressRing';

export function Dashboard() {
  const [day0Open, setDay0Open] = useState(false);
  const [fallBehindOpen, setFallBehindOpen] = useState(false);
  const phaseProgress = phases.map((p) => getPhaseProgress(p.id, p.weeks));
  const totalChecks = phases.flatMap((p) => p.weeks.flatMap((w) => w.checks)).length;
  const totalDone = phases.reduce((sum, p, pi) => {
    const done = Math.round((phaseProgress[pi] / 100) * p.weeks.flatMap((w) => w.checks).length);
    return sum + done;
  }, 0);
  const overallPct = totalChecks === 0 ? 0 : Math.round((totalDone / totalChecks) * 100);

  const currentPhaseIdx = phaseProgress.findIndex((p) => p < 100) ?? phases.length - 1;
  const currentPhase = phases[currentPhaseIdx === -1 ? phases.length - 1 : currentPhaseIdx];
  const currentWeekIdx = (() => {
    if (!currentPhase) return 0;
    const idx = currentPhase.weeks.findIndex((w, wi) =>
      getWeekProgress(currentPhase.id, wi, w.checks.length) < 100
    );
    return idx === -1 ? currentPhase.weeks.length - 1 : idx;
  })();

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Welcome back</p>
            <h1 className="text-2xl font-bold text-white mb-2">AI Consultant Learning Path</h1>
            <p className="text-gray-400 text-sm max-w-md">
              {overallPct === 0
                ? 'A self-guided checklist to take you from AI-curious to the go-to AI SME in any organization. Start with Phase 1 below.'
                : 'A 19-week program to take you from AI-curious to the consultant clients call by name.'}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <ProgressRing pct={overallPct} size={80} strokeWidth={7} color="#60a5fa" trackColor="rgba(255,255,255,0.1)" />
            <span className="text-gray-400 text-xs">overall</span>
          </div>
        </div>

        {/* What this is */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Info size={14} className="text-blue-500 shrink-0" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">How to use this guide</p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            This is <strong>not a course</strong> — there are no videos, no lectures, and no certificates. It's a
            structured, self-guided checklist designed to take any consultant from AI-curious to the
            go-to AI subject matter expert in their organization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Compass size={14} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 mb-0.5">Follow the roadmap</p>
                <p className="text-xs text-gray-500 leading-relaxed">Each week has topics, daily tasks, and a checklist. Work through them at your own pace.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                <Clipboard size={14} className="text-violet-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 mb-0.5">Use the prompts</p>
                <p className="text-xs text-gray-500 leading-relaxed">Every day entry includes a ready-made prompt. Paste it into any AI tool to go deeper on that topic.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <Users size={14} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 mb-0.5">For every consultant</p>
                <p className="text-xs text-gray-500 leading-relaxed">No development skills needed. Built for BAs, PMs, and developers who want to lead AI adoption conversations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Day 0 — Before You Begin */}
        <div className="bg-white rounded-2xl border border-gray-100 mb-6 overflow-hidden">
          <button
            onClick={() => setDay0Open(!day0Open)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Rocket size={14} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Before you begin — Day 0 checklist</p>
                <p className="text-xs text-gray-400">Set yourself up for success before Week 1</p>
              </div>
            </div>
            {day0Open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
          </button>
          {day0Open && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5">
                <div>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Accounts to create (free)</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Claude.ai</strong> — Anthropic's assistant (free tier)</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>ChatGPT</strong> — OpenAI's assistant (free tier)</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Microsoft Copilot</strong> — free at copilot.microsoft.com</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Google Gemini</strong> — free at gemini.google.com</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Otter.ai</strong> — free tier for meeting AI week</span></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Self-assessment: where are you starting?</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">□</span><span>Can you explain what an LLM is in one sentence?</span></li>
                    <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">□</span><span>Have you used ChatGPT or Claude for work at least 5 times?</span></li>
                    <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">□</span><span>Can you name 3 clients who've asked about AI this year?</span></li>
                    <li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">□</span><span>Do you know what your firm's AI policy allows?</span></li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">If you checked 0–1: start at Week 1. If you checked 3–4: skim Phase 1 and start Phase 2 actively.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Time commitment</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Minimum pace:</strong> 3–4 hrs/week, one task per day</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Faster pace:</strong> 6–8 hrs/week completes Phase 1 in ~2 weeks</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span><span><strong>Most time spent:</strong> Phases 3–4, which require client conversations</span></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">What to do first</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">1.</span><span>Create the five accounts above</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">2.</span><span>Run the same prompt in all four major tools and compare outputs</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">3.</span><span>Block 45 minutes in your calendar for Mon–Fri this week</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">4.</span><span>Open Phase 1 and start Week 1</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Continue CTA */}
        {currentPhase && (
          <Link
            to={`/phase/${currentPhase.id}/week/${currentWeekIdx}`}
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm mb-8 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold"
                style={{ background: currentPhase.badgeBg, color: currentPhase.badgeColor }}
              >
                {currentPhase.id + 1}
              </span>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{overallPct === 0 ? 'Start here' : 'Continue where you left off'}</p>
                <p className="text-sm font-semibold text-gray-900">
                  {currentPhase.weeks[currentWeekIdx].label}: {currentPhase.weeks[currentWeekIdx].title}
                </p>
                <p className="text-xs text-gray-400">{currentPhase.label}: {currentPhase.name}</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
          </Link>
        )}

        {/* Phase cards */}
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">All phases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {phases.map((phase, idx) => {
            const pct = phaseProgress[idx];
            const weekCount = phase.weeks.length;
            const doneWeeks = phase.weeks.filter((w, wi) =>
              w.checks.every((_, ci) => {
                const key = `${phase.id}-${wi}-${ci}`;
                const all = JSON.parse(localStorage.getItem('ai_learning_progress') || '{}');
                return !!all?.checks?.[key];
              })
            ).length;

            return (
              <Link
                key={phase.id}
                to={`/phase/${phase.id}`}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2"
                      style={{ background: phase.badgeBg, color: phase.badgeColor }}
                    >
                      {phase.duration}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900">{phase.label}: {phase.name}</h3>
                  </div>
                  <ProgressRing pct={pct} size={52} strokeWidth={4} color={phase.progressColor} />
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{phase.desc}</p>

                <div className="flex items-center justify-between">
                  {phase.comingSoon ? (
                    <span className="text-xs text-gray-400 italic">Content coming soon</span>
                  ) : (
                    <span className="text-xs text-gray-400">
                      {doneWeeks}/{weekCount} weeks complete
                    </span>
                  )}
                  {pct === 100 ? (
                    <CheckCircle size={15} className="text-emerald-500" />
                  ) : (
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>

                {!phase.comingSoon && (
                  <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, background: phase.progressColor }}
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* What to do if you fall behind */}
        <div className="mt-6">
          <button
            onClick={() => setFallBehindOpen(!fallBehindOpen)}
            className="w-full flex items-center justify-between px-5 py-4 bg-amber-50 border border-amber-100 rounded-2xl text-left hover:bg-amber-100/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <AlertCircle size={14} className="text-amber-500 shrink-0" />
              <p className="text-sm font-semibold text-amber-800">What to do if you fall behind</p>
            </div>
            {fallBehindOpen ? <ChevronUp size={15} className="text-amber-400" /> : <ChevronDown size={15} className="text-amber-400" />}
          </button>
          {fallBehindOpen && (
            <div className="bg-amber-50 border border-amber-100 border-t-0 rounded-b-2xl px-5 pb-5">
              <div className="pt-4 space-y-3 text-sm text-amber-900 leading-relaxed">
                <p><strong>Missing a day is fine. Missing a week requires a decision.</strong> If you're more than a week behind, don't try to catch up by cramming — decide whether to compress or skip.</p>
                <p><strong>To compress:</strong> Focus on the deliverable for each week (the bolded output). Skip the research reading and go straight to the AI prompts. You'll still build the artifact, just with less context.</p>
                <p><strong>To skip:</strong> Phase 1 is non-negotiable — it's the foundation. Everything in Phase 2 can be skimmed if you already use the tools. Phase 3 content cannot be skipped if you want to advise clients credibly.</p>
                <p><strong>The Friday synthesis tasks are the highest-ROI hours in the program.</strong> If you have to choose between doing Monday–Thursday or just Friday: do Friday. The mock calls and capstone exercises are where the learning compounds.</p>
                <p className="text-xs text-amber-700">The program is designed to flex. One week behind is normal. Three weeks behind is a signal to recommit or officially restart from your current phase.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
