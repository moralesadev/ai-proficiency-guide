import { useState } from 'react';
import { Settings, BookOpen, HelpCircle, Trash2, Plus, Save, ChevronDown, ChevronRight } from 'lucide-react';
import { phases } from '../data/phases';
import { quizzes as defaultQuizzes } from '../data/quizzes';
import type { PhaseData, WeekQuiz } from '../types';

const CONTENT_KEY = 'ai_learning_admin_content';
const QUIZ_KEY = 'ai_learning_admin_quizzes';

function loadContent(): PhaseData[] {
  try {
    const raw = localStorage.getItem(CONTENT_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return phases;
}

function loadQuizzes(): WeekQuiz[] {
  try {
    const raw = localStorage.getItem(QUIZ_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return defaultQuizzes;
}

type Tab = 'content' | 'quizzes';

export function Admin() {
  const [tab, setTab] = useState<Tab>('content');
  const [content, setContent] = useState<PhaseData[]>(loadContent);
  const [quizData, setQuizData] = useState<WeekQuiz[]>(loadQuizzes);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  function save() {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
    localStorage.setItem(QUIZ_KEY, JSON.stringify(quizData));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function updatePhaseDesc(pi: number, val: string) {
    const next = [...content];
    next[pi] = { ...next[pi], desc: val };
    setContent(next);
  }

  function updateWeekTitle(pi: number, wi: number, val: string) {
    const next = [...content];
    const weeks = [...next[pi].weeks];
    weeks[wi] = { ...weeks[wi], title: val };
    next[pi] = { ...next[pi], weeks };
    setContent(next);
  }

  function updateWeekGoal(pi: number, wi: number, val: string) {
    const next = [...content];
    const weeks = [...next[pi].weeks];
    weeks[wi] = { ...weeks[wi], goal: val };
    next[pi] = { ...next[pi], weeks };
    setContent(next);
  }

  function addCheck(pi: number, wi: number) {
    const next = [...content];
    const weeks = [...next[pi].weeks];
    weeks[wi] = { ...weeks[wi], checks: [...weeks[wi].checks, 'New checklist item'] };
    next[pi] = { ...next[pi], weeks };
    setContent(next);
  }

  function removeCheck(pi: number, wi: number, ci: number) {
    const next = [...content];
    const weeks = [...next[pi].weeks];
    const checks = [...weeks[wi].checks];
    checks.splice(ci, 1);
    weeks[wi] = { ...weeks[wi], checks };
    next[pi] = { ...next[pi], weeks };
    setContent(next);
  }

  function updateCheck(pi: number, wi: number, ci: number, val: string) {
    const next = [...content];
    const weeks = [...next[pi].weeks];
    const checks = [...weeks[wi].checks];
    checks[ci] = val;
    weeks[wi] = { ...weeks[wi], checks };
    next[pi] = { ...next[pi], weeks };
    setContent(next);
  }

  function updateQuizQuestion(qi: number, qqi: number, field: string, val: string | number) {
    const next = [...quizData];
    const questions = [...next[qi].questions];
    questions[qqi] = { ...questions[qqi], [field]: val };
    next[qi] = { ...next[qi], questions };
    setQuizData(next);
  }

  function addQuizQuestion(qi: number) {
    const next = [...quizData];
    next[qi] = {
      ...next[qi],
      questions: [
        ...next[qi].questions,
        { question: 'New question', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctIndex: 0, explanation: 'Explanation here.' },
      ],
    };
    setQuizData(next);
  }

  function removeQuizQuestion(qi: number, qqi: number) {
    const next = [...quizData];
    const questions = [...next[qi].questions];
    questions.splice(qqi, 1);
    next[qi] = { ...next[qi], questions };
    setQuizData(next);
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-400 mt-0.5">Edit content, checklists, and quiz questions</p>
          </div>
          <button
            onClick={save}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              saved ? 'bg-emerald-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <Save size={14} />
            {saved ? 'Saved!' : 'Save changes'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {([['content', BookOpen, 'Content & Checklists'], ['quizzes', HelpCircle, 'Quiz Questions']] as const).map(([id, Icon, label]) => (
            <button
              key={id}
              onClick={() => setTab(id as Tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                tab === id ? 'bg-white border border-gray-200 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {tab === 'content' && (
          <div className="space-y-3">
            {content.map((phase, pi) => (
              <div key={phase.id} className="bg-white rounded-2xl border border-gray-100">
                <button
                  onClick={() => setExpandedPhase(expandedPhase === pi ? null : pi)}
                  className="w-full flex items-center justify-between p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: phase.badgeBg, color: phase.badgeColor }}>
                      {phase.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{phase.name}</span>
                  </div>
                  {expandedPhase === pi ? <ChevronDown size={15} className="text-gray-400" /> : <ChevronRight size={15} className="text-gray-400" />}
                </button>

                {expandedPhase === pi && (
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">Phase description</label>
                    <textarea
                      value={phase.desc}
                      onChange={(e) => updatePhaseDesc(pi, e.target.value)}
                      rows={3}
                      className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />

                    <div className="mt-4 space-y-3">
                      {phase.weeks.map((week, wi) => {
                        const wkey = `${pi}-${wi}`;
                        return (
                          <div key={wi} className="border border-gray-100 rounded-xl">
                            <button
                              onClick={() => setExpandedWeek(expandedWeek === wkey ? null : wkey)}
                              className="w-full flex items-center justify-between px-4 py-3"
                            >
                              <span className="text-sm font-medium text-gray-700">{week.label}: {week.title}</span>
                              {expandedWeek === wkey ? <ChevronDown size={13} className="text-gray-400" /> : <ChevronRight size={13} className="text-gray-400" />}
                            </button>

                            {expandedWeek === wkey && (
                              <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-4">
                                <div>
                                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Week title</label>
                                  <input
                                    value={week.title}
                                    onChange={(e) => updateWeekTitle(pi, wi, e.target.value)}
                                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Week goal</label>
                                  <textarea
                                    value={week.goal}
                                    onChange={(e) => updateWeekGoal(pi, wi, e.target.value)}
                                    rows={3}
                                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200"
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center justify-between mb-2">
                                    <label className="text-xs font-medium text-gray-500">Checklist items</label>
                                    <button onClick={() => addCheck(pi, wi)} className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800">
                                      <Plus size={11} /> Add item
                                    </button>
                                  </div>
                                  <div className="space-y-2">
                                    {week.checks.map((c, ci) => (
                                      <div key={ci} className="flex gap-2 items-center">
                                        <input
                                          value={c}
                                          onChange={(e) => updateCheck(pi, wi, ci, e.target.value)}
                                          className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                        />
                                        <button onClick={() => removeCheck(pi, wi, ci)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                                          <Trash2 size={13} />
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'quizzes' && (
          <div className="space-y-4">
            {quizData.map((quiz, qi) => {
              const phase = phases.find((p) => p.id === quiz.phaseId);
              const week = phase?.weeks[quiz.weekIndex];
              return (
                <div key={qi} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: phase?.badgeBg, color: phase?.badgeColor }}>
                        {phase?.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{week?.label}: {week?.title}</span>
                    </div>
                    <button onClick={() => addQuizQuestion(qi)} className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800">
                      <Plus size={11} /> Add question
                    </button>
                  </div>

                  <div className="space-y-4">
                    {quiz.questions.map((q, qqi) => (
                      <div key={qqi} className="border border-gray-100 rounded-xl p-4">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <span className="text-xs font-medium text-gray-400">Q{qqi + 1}</span>
                          <button onClick={() => removeQuizQuestion(qi, qqi)} className="text-gray-300 hover:text-red-500 transition-colors">
                            <Trash2 size={13} />
                          </button>
                        </div>
                        <textarea
                          value={q.question}
                          onChange={(e) => updateQuizQuestion(qi, qqi, 'question', e.target.value)}
                          rows={2}
                          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200"
                          placeholder="Question text"
                        />
                        <div className="space-y-2 mb-3">
                          {q.options.map((opt, oi) => (
                            <div key={oi} className="flex gap-2 items-center">
                              <button
                                onClick={() => updateQuizQuestion(qi, qqi, 'correctIndex', oi)}
                                className={`w-5 h-5 rounded-full border-2 shrink-0 transition-colors ${oi === q.correctIndex ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'}`}
                              />
                              <input
                                value={opt}
                                onChange={(e) => {
                                  const opts = [...q.options];
                                  opts[oi] = e.target.value;
                                  updateQuizQuestion(qi, qqi, 'options', opts as unknown as string);
                                }}
                                className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                              />
                            </div>
                          ))}
                        </div>
                        <textarea
                          value={q.explanation}
                          onChange={(e) => updateQuizQuestion(qi, qqi, 'explanation', e.target.value)}
                          rows={2}
                          className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-500"
                          placeholder="Explanation shown after answering"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Settings size={13} className="text-amber-600" />
            <span className="text-xs font-semibold text-amber-700">Note</span>
          </div>
          <p className="text-xs text-amber-600 leading-relaxed">
            Changes are saved to browser localStorage. For production, connect this panel to an Azure backend API to persist changes across users.
          </p>
        </div>
      </div>
    </div>
  );
}

