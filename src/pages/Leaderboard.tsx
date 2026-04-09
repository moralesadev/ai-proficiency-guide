import { useState } from 'react';
import { Download, Users, TrendingUp, Award } from 'lucide-react';
import { phases } from '../data/phases';

const MOCK_USERS = [
  { name: 'Alicia Morales', phase: 1, week: 2, pct: 18, lastActive: '2026-04-09', role: 'Senior Consultant' },
  { name: 'Marcus Rivera', phase: 2, week: 5, pct: 47, lastActive: '2026-04-08', role: 'Consultant' },
  { name: 'Priya Singh', phase: 3, week: 8, pct: 72, lastActive: '2026-04-09', role: 'Senior Consultant' },
  { name: 'James Chen', phase: 4, week: 0, pct: 100, lastActive: '2026-04-07', role: 'Principal Consultant' },
  { name: 'Sofia Reyes', phase: 1, week: 1, pct: 8, lastActive: '2026-04-06', role: 'Consultant' },
  { name: 'Derek Watson', phase: 2, week: 4, pct: 38, lastActive: '2026-04-09', role: 'Consultant' },
  { name: 'Annika Johansson', phase: 3, week: 9, pct: 88, lastActive: '2026-04-08', role: 'Senior Consultant' },
];

export function Leaderboard() {
  const [phaseFilter, setPhaseFilter] = useState<number | null>(null);

  const filtered = phaseFilter !== null
    ? MOCK_USERS.filter((u) => u.phase - 1 === phaseFilter)
    : MOCK_USERS;

  const sorted = [...filtered].sort((a, b) => b.pct - a.pct);

  function exportCSV() {
    const header = 'Name,Role,Phase,Week,Progress %,Last Active\n';
    const rows = MOCK_USERS.map((u) =>
      `${u.name},${u.role},Phase ${u.phase},Week ${u.week},${u.pct}%,${u.lastActive}`
    ).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-learning-progress.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  const avgPct = Math.round(MOCK_USERS.reduce((s, u) => s + u.pct, 0) / MOCK_USERS.length);
  const complete = MOCK_USERS.filter((u) => u.pct === 100).length;

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Team Progress</h1>
            <p className="text-sm text-gray-400 mt-0.5">Manager view — track your team's learning journey</p>
          </div>
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
          >
            <Download size={13} /> Export CSV
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2.5 mb-2">
              <Users size={16} className="text-gray-400" />
              <span className="text-xs text-gray-400 font-medium">Total consultants</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{MOCK_USERS.length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2.5 mb-2">
              <TrendingUp size={16} className="text-gray-400" />
              <span className="text-xs text-gray-400 font-medium">Avg. progress</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{avgPct}%</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2.5 mb-2">
              <Award size={16} className="text-gray-400" />
              <span className="text-xs text-gray-400 font-medium">Completed path</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{complete}</p>
          </div>
        </div>

        {/* Phase filter */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setPhaseFilter(null)}
            className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all ${
              phaseFilter === null ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-500 hover:border-gray-400 bg-white'
            }`}
          >
            All phases
          </button>
          {phases.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setPhaseFilter(phaseFilter === i ? null : i)}
              className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all`}
              style={
                phaseFilter === i
                  ? { background: p.badgeBg, borderColor: p.badgeColor, color: p.badgeColor }
                  : { borderColor: '#e5e7eb', color: '#6b7280', background: 'white' }
              }
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Rank</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Consultant</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Current phase</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Progress</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Last active</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((u, idx) => {
                const phase = phases[u.phase - 1];
                return (
                  <tr key={u.name} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <span className={`text-xs font-bold ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-gray-400' : idx === 2 ? 'text-orange-400' : 'text-gray-300'}`}>
                        #{idx + 1}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-gray-900">{u.name}</p>
                      <p className="text-xs text-gray-400">{u.role}</p>
                    </td>
                    <td className="px-5 py-4">
                      {phase && (
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{ background: phase.badgeBg, color: phase.badgeColor }}
                        >
                          {phase.label}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 max-w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${u.pct}%`,
                              background: phase?.progressColor ?? '#ccc',
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 tabular-nums">{u.pct}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-400">{u.lastActive}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">Showing mock data — connect to Azure AD for live team progress.</p>
      </div>
    </div>
  );
}
