import { useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Lightbulb, Brain, CheckSquare, Package, Clipboard, ClipboardCheck, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { phases } from '../data/phases';
import { quizzes } from '../data/quizzes';
import { isChecked, toggleCheck, getWeekProgress, isQuizCompleted, markQuizCompleted } from '../services/progressService';
import { QuizModal } from '../components/QuizModal';

function parseTaskMinutes(task: string): number | null {
  const match = task.match(/^(\d+)\s*min/i);
  return match ? parseInt(match[1]) : null;
}

function stripTimePrefix(task: string): string {
  return task.replace(/^\d+\s*min:\s*/i, '');
}

function splitDayLabel(day: string): { top: string; bottom?: string } {
  const match = day.match(/^(Wk\s+\d+)\s+(.+)$/);
  return match ? { top: match[1], bottom: match[2] } : { top: day };
}

export function WeekDetail() {
  const { phaseId, weekIndex } = useParams();
  const navigate = useNavigate();
  const [, forceUpdate] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [expandedPrompts, setExpandedPrompts] = useState<Set<number>>(new Set());
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [hoveredPrompt, setHoveredPrompt] = useState<number | null>(null);

  function togglePrompt(i: number) {
    setExpandedPrompts((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function copyPrompt(text: string, i: number) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(i);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  }

  const phase = phases.find((p) => p.id === Number(phaseId));
  const wi = Number(weekIndex);
  const week = phase?.weeks[wi];

  const refresh = useCallback(() => forceUpdate((n) => n + 1), []);

  if (!phase || !week) return <div className="pt-14 p-8 text-gray-500">Week not found.</div>;

  const weekQuiz = quizzes.find((q) => q.phaseId === phase.id && q.weekIndex === wi);
  const weekPct = getWeekProgress(phase.id, wi, week.checks.length);
  const quizDone = weekQuiz ? isQuizCompleted(phase.id, wi) : false;

  const prevWeek = wi > 0 ? wi - 1 : null;
  const nextWeek = wi < phase.weeks.length - 1 ? wi + 1 : null;

  function handleToggle(ci: number) {
    toggleCheck(phase!.id, wi, ci);
    refresh();
  }

  function handleQuizCompleted() {
    markQuizCompleted(phase!.id, wi);
    refresh();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-14">

      {/* Sticky context bar */}
      <div className="sticky top-14 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-2">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{ background: phase.badgeBg, color: phase.badgeColor }}
            >
              {week.label}
            </span>
            <span className="text-xs font-medium text-gray-600 truncate hidden sm:block">{week.title}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {weekPct === 100 && <CheckCircle size={12} className="text-emerald-500" />}
            <span className="text-xs font-semibold text-gray-500">{weekPct}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Back */}
        <button
          onClick={() => navigate(`/phase/${phase.id}`)}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 mb-6 transition-colors"
        >
          <ArrowLeft size={13} /> {phase.label}: {phase.name}
        </button>

        {/* Week header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-5">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: phase.badgeBg, color: phase.badgeColor }}>
              {week.label}
            </span>
            <span className="text-xs text-gray-400">{week.time}</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">{week.title}</h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{week.goal}</p>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1.5">
              <span>Checklist progress</span>
              <span>{weekPct}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${weekPct}%`, background: phase.progressColor }}
              />
            </div>
          </div>
        </div>

        {/* Deliverable */}
        {week.deliverable && (
          <div className="flex gap-3 bg-white border-l-4 border-gray-200 rounded-r-xl p-4 mb-5" style={{ borderLeftColor: phase.progressColor }}>
            <Package size={15} className="shrink-0 mt-0.5" style={{ color: phase.progressColor }} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: phase.badgeColor }}>Week deliverable</p>
              <p className="text-sm text-gray-600 leading-relaxed">{week.deliverable}</p>
            </div>
          </div>
        )}

        {/* Daily schedule */}
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Daily schedule</h2>
        <div className="space-y-2 mb-6">
          {week.days.map((d, i) => {
            const isOpen = expandedPrompts.has(i);
            const isCopied = copiedIndex === i;
            const mins = parseTaskMinutes(d.task);
            const taskText = stripTimePrefix(d.task);
            return (
              <div key={i} className="rounded-xl border border-gray-100 bg-white">
                <div className="flex">
                  <div className="w-24 flex flex-col items-center justify-center bg-gray-100 border-r border-gray-200 shrink-0 py-3 px-2 gap-1 rounded-l-xl">
                    {(() => { const { top, bottom } = splitDayLabel(d.day); return bottom ? (<><span className="text-[10px] font-semibold text-gray-400 text-center leading-none">{top}</span><span className="text-[11px] font-semibold text-gray-600 text-center leading-tight">{bottom}</span></>) : (<span className="text-[11px] font-semibold text-gray-500 text-center leading-tight">{top}</span>); })()}
                    {mins !== null && (
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{ background: phase.progressColor, color: '#fff' }}
                      >
                        {mins}m
                      </span>
                    )}
                  </div>
                  <div className="flex-1 px-4 py-3">
                    <p className="text-sm font-medium text-gray-900 mb-0.5">{d.topic}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{taskText}</p>
                    {d.prompt && (
                      <div
                        className="relative inline-block mt-2.5"
                        onMouseEnter={() => setHoveredPrompt(i)}
                        onMouseLeave={() => setHoveredPrompt(null)}
                      >
                        <button
                          onClick={() => togglePrompt(i)}
                          className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border transition-all ${
                            isOpen
                              ? 'border-gray-300 bg-gray-100 text-gray-700'
                              : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                          }`}
                        >
                          <Clipboard size={11} />
                          Get prompt
                          {isOpen ? <ChevronUp size={10} className="ml-0.5" /> : <ChevronDown size={10} className="ml-0.5" />}
                        </button>
                        {hoveredPrompt === i && (
                          <div className="absolute bottom-full left-0 mb-2 w-60 px-2.5 py-2 bg-gray-900 text-white text-xs rounded-lg pointer-events-none z-20 leading-relaxed">
                            Try this prompt in any AI chat to help you with this task or topic.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {d.prompt && isOpen && (
                  <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">AI research prompt</span>
                      <button
                        onClick={() => copyPrompt(d.prompt!, i)}
                        className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                          isCopied
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-800'
                        }`}
                      >
                        {isCopied ? <ClipboardCheck size={12} /> : <Clipboard size={12} />}
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap font-sans bg-white border border-gray-100 rounded-lg p-3">
                      {d.prompt}
                    </pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resources */}
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Resources</h2>
        <div className="space-y-2 mb-6">
          {week.resources.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{r.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
              <div className="flex items-start gap-2 shrink-0">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: r.badgeBg, color: r.badgeColor }}>
                  {r.badge}
                </span>
                <ExternalLink size={13} className="text-gray-300 group-hover:text-blue-500 transition-colors mt-0.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Checklist */}
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">End-of-week checklist</h2>
        <div className="bg-white rounded-xl border border-gray-100 mb-4">
          {week.checks.map((c, ci) => {
            const checked = isChecked(phase.id, wi, ci);
            return (
              <button
                key={ci}
                onClick={() => handleToggle(ci)}
                className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                  ci < week.checks.length - 1 ? 'border-b border-gray-100' : ''
                } hover:bg-gray-50`}
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    checked ? 'border-transparent' : 'border-gray-300'
                  }`}
                  style={checked ? { background: phase.progressColor } : {}}
                >
                  {checked && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm leading-relaxed ${checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                  {c}
                </span>
                <CheckSquare size={13} className={`shrink-0 mt-0.5 ml-auto ${checked ? 'text-emerald-400' : 'text-gray-200'}`} />
              </button>
            );
          })}
        </div>

        {/* Completion banner */}
        {weekPct === 100 && (
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Week complete!</span>
            </div>
            {nextWeek !== null ? (
              <Link
                to={`/phase/${phase.id}/week/${nextWeek}`}
                className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                {phase.weeks[nextWeek].label} <ArrowRight size={12} />
              </Link>
            ) : (
              <Link
                to={`/phase/${Math.min(phase.id + 1, phases.length - 1)}`}
                className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Next phase <ArrowRight size={12} />
              </Link>
            )}
          </div>
        )}

        {/* Consultant tip */}
        <div className="flex gap-3 rounded-xl p-4 mb-6" style={{ background: phase.badgeBg }}>
          <Lightbulb size={15} className="shrink-0 mt-0.5" style={{ color: phase.badgeColor }} />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: phase.badgeColor }}>Consultant tip</p>
            <p className="text-sm leading-relaxed" style={{ color: phase.badgeColor }}>{week.tip}</p>
          </div>
        </div>

        {/* Quiz button */}
        {weekQuiz && (
          <div className="mb-6">
            {quizDone && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 mb-2">
                <CheckCircle size={12} />
                Quiz completed
              </div>
            )}
            <button
              onClick={() => setShowQuiz(true)}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors ${
                quizDone
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <Brain size={15} />
              {quizDone ? 'Retake quiz' : "Quiz me on this week's material"}
            </button>
          </div>
        )}

        {/* Prev / Next navigation */}
        <div className="flex gap-3">
          {prevWeek !== null ? (
            <Link
              to={`/phase/${phase.id}/week/${prevWeek}`}
              className="flex-1 flex items-center gap-2 py-3 px-4 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors min-w-0"
            >
              <ArrowLeft size={14} className="shrink-0" />
              <span className="truncate">{phase.weeks[prevWeek].label}: {phase.weeks[prevWeek].title}</span>
            </Link>
          ) : (
            <Link
              to={`/phase/${phase.id}`}
              className="flex-1 flex items-center gap-2 py-3 px-4 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors min-w-0"
            >
              <ArrowLeft size={14} className="shrink-0" />
              <span className="truncate">{phase.label}: {phase.name}</span>
            </Link>
          )}
          {nextWeek !== null ? (
            <Link
              to={`/phase/${phase.id}/week/${nextWeek}`}
              className="flex-1 flex items-center justify-end gap-2 py-3 px-4 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors min-w-0"
            >
              <span className="truncate text-right">{phase.weeks[nextWeek].label}: {phase.weeks[nextWeek].title}</span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>
          ) : (
            <Link
              to={`/phase/${Math.min(phase.id + 1, phases.length - 1)}`}
              className="flex-1 flex items-center justify-end gap-2 py-3 px-4 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <span>Next phase</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>

      {showQuiz && weekQuiz && (
        <QuizModal
          questions={weekQuiz.questions}
          weekLabel={`${phase.label} • ${week.label}: ${week.title}`}
          onClose={() => setShowQuiz(false)}
          onCompleted={handleQuizCompleted}
        />
      )}
    </div>
  );
}
