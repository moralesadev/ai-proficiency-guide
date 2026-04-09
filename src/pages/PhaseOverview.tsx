import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronDown, ChevronRight, CheckCircle, Clock, ArrowLeft,
  Globe, Building2, ShieldCheck, LayoutGrid, Layers, Cpu,
  ClipboardList, Zap, ShieldAlert, GraduationCap,
  Lightbulb, Briefcase, RefreshCw,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Globe, Building2, ShieldCheck, LayoutGrid, Layers, Cpu,
  ClipboardList, Zap, ShieldAlert, GraduationCap,
  Lightbulb, Briefcase, RefreshCw,
};
import { phases } from '../data/phases';
import { getPhaseProgress, getWeekProgress } from '../services/progressService';

export function PhaseOverview() {
  const { phaseId } = useParams();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const phase = phases.find((p) => p.id === Number(phaseId));
  if (!phase) return <div className="pt-14 p-8 text-gray-500">Phase not found.</div>;

  const phasePct = getPhaseProgress(phase.id, phase.weeks);

  function toggle(i: number) {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Back */}
        <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft size={13} /> Home
        </button>

        {/* Phase tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {phases.map((p) => (
            <Link
              key={p.id}
              to={`/phase/${p.id}`}
              className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all ${
                p.id === phase.id
                  ? ''
                  : 'border-gray-200 text-gray-500 hover:border-gray-400 bg-white'
              }`}
              style={
                p.id === phase.id
                  ? { background: phase.badgeBg, borderColor: phase.badgeColor, color: phase.badgeColor }
                  : {}
              }
            >
              {p.label}: {p.name}
            </Link>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-400 mb-1.5">
            <span>{phase.duration}</span>
            <span>{phasePct}% complete</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${phasePct}%`, background: phase.progressColor }}
            />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: phase.badgeBg, color: phase.badgeColor }}
          >
            {phase.duration}
          </span>
          <h1 className="text-xl font-semibold text-gray-900">{phase.name}</h1>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">{phase.desc}</p>

        {/* Coming soon */}
        {phase.comingSoon && (
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center mb-6">
            <p className="text-sm font-medium text-orange-700 mb-1">Content coming soon</p>
            <p className="text-xs text-orange-500">Phase 4 weekly study plans are in development. Check back soon.</p>
          </div>
        )}

        {/* Modules */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Learning modules</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 items-start">
          {phase.modules.map((m, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`text-left bg-white rounded-xl border p-4 transition-all ${
                expanded[i] ? 'border-gray-300 shadow-sm' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {(() => {
                const Icon = iconMap[m.icon];
                return Icon ? (
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: phase.badgeBg }}
                  >
                    <Icon size={16} style={{ color: phase.progressColor }} />
                  </div>
                ) : null;
              })()}
              <p className="text-sm font-medium text-gray-900 mb-1">{m.title}</p>
              <p className="text-xs text-gray-400 mb-3">{m.sub}</p>
              {expanded[i] && (
                <ul className="space-y-1.5 border-t border-gray-100 pt-3 mt-1">
                  {m.topics.map((t, ti) => (
                    <li key={ti} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                      <span className="text-gray-300 mt-0.5">–</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                {expanded[i] ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
                <span>{expanded[i] ? 'collapse' : 'expand'}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Milestones */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Milestones to hit before moving on</p>
        <div className="space-y-2.5 mb-8">
          {phase.milestones.map((m, i) => (
            <div key={i} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: phase.badgeBg }}
              >
                <CheckCircle size={13} style={{ color: phase.badgeColor }} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">{m.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Weeks */}
        {!phase.comingSoon && phase.weeks.length > 0 && (
          <>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Weekly study plans</p>
            <div className="space-y-2.5">
              {phase.weeks.map((w, wi) => {
                const weekPct = getWeekProgress(phase.id, wi, w.checks.length);
                return (
                  <Link
                    key={wi}
                    to={`/phase/${phase.id}/week/${wi}`}
                    className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-5 py-4 hover:shadow-sm hover:border-gray-200 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
                        style={{ background: phase.badgeBg, color: phase.badgeColor }}
                      >
                        {w.label}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{w.title}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                          <Clock size={11} />
                          <span>{w.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {weekPct === 100 ? (
                        <CheckCircle size={15} className="text-emerald-500" />
                      ) : (
                        <span className="text-xs text-gray-400">{weekPct}%</span>
                      )}
                      <ChevronRight size={15} className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
