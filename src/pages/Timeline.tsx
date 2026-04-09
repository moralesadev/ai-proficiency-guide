import { phases } from '../data/phases';

function parseMinutes(task: string): number | null {
  const match = task.match(/^(\d+)\s*min/i);
  return match ? parseInt(match[1]) : null;
}

function parseWeekMinutes(timeStr: string): number {
  const hrMatch = timeStr.match(/~?(\d+(?:\.\d+)?)\s*hr/i);
  if (hrMatch) return Math.round(parseFloat(hrMatch[1]) * 60);
  const minMatch = timeStr.match(/~?(\d+)\s*min/i);
  if (minMatch) return parseInt(minMatch[1]);
  return 0;
}

function fmtMin(min: number): string {
  if (min === 0) return '—';
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function fmtHours(min: number): string {
  const h = min / 60;
  return `${Number.isInteger(h) ? h : h.toFixed(1)} hrs`;
}

const MAX_BAR_MIN = 300;

export function Timeline() {
  const allWeeks = phases.flatMap((p) =>
    p.weeks.map((w) => ({ phase: p, week: w }))
  );

  const totalMinutes = allWeeks.reduce((sum, { week }) => {
    return sum + parseWeekMinutes(week.time);
  }, 0);

  const weekCount = allWeeks.length;
  const avgPerWeekMin = Math.round(totalMinutes / weekCount);

  const allDayMins = allWeeks.flatMap(({ week }) =>
    week.days.map((d) => parseMinutes(d.task) ?? 0).filter((m) => m > 0)
  );
  const avgPerDayMin = allDayMins.length
    ? Math.round(allDayMins.reduce((a, b) => a + b, 0) / allDayMins.length)
    : 0;

  const stats = [
    { label: 'Total weeks', value: `${weekCount}`, sub: 'weeks of study' },
    { label: 'Total time', value: fmtHours(totalMinutes), sub: 'program length' },
    { label: 'Avg per week', value: fmtMin(avgPerWeekMin), sub: 'to set aside' },
    { label: 'Avg per day', value: fmtMin(avgPerDayMin), sub: 'per study session' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Study Timeline</h1>
          <p className="text-sm text-gray-500">Your full time commitment, broken down week by week and day by day.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 px-4 py-4">
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Phase sections */}
        {phases.map((phase) => {
          const phaseMin = phase.weeks.reduce(
            (sum, w) => sum + parseWeekMinutes(w.time),
            0
          );
          return (
            <div key={phase.id} className="mb-10">
              {/* Phase header */}
              <div
                className="flex items-center justify-between rounded-xl px-4 py-3 mb-3"
                style={{ backgroundColor: phase.badgeBg }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: phase.progressColor, color: '#fff' }}
                  >
                    {phase.label}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: phase.badgeColor }}>
                    {phase.name}
                  </span>
                  <span className="text-xs" style={{ color: phase.badgeColor, opacity: 0.7 }}>
                    {phase.duration}
                  </span>
                </div>
                <span className="text-xs font-semibold" style={{ color: phase.badgeColor }}>
                  {fmtHours(phaseMin)} total
                </span>
              </div>

              {/* Week rows */}
              <div className="space-y-2">
                {phase.weeks.map((week, wi) => {
                  const weekMin = parseWeekMinutes(week.time);
                  const barPct = Math.min(100, (weekMin / MAX_BAR_MIN) * 100);

                  return (
                    <div
                      key={wi}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                    >
                      {/* Week header row */}
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-50">
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-md"
                            style={{ backgroundColor: phase.badgeBg, color: phase.badgeColor }}
                          >
                            {week.label}
                          </span>
                          <span className="text-xs font-medium text-gray-700 truncate">
                            {week.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          {/* Time bar */}
                          <div className="hidden sm:flex items-center gap-2">
                            <div className="w-20 h-1.5 rounded-full bg-gray-100">
                              <div
                                className="h-1.5 rounded-full"
                                style={{
                                  width: `${barPct}%`,
                                  backgroundColor: phase.progressColor,
                                }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-gray-600 w-12 text-right">
                              {fmtMin(weekMin)}
                            </span>
                          </div>
                          <span className="sm:hidden text-xs font-semibold text-gray-600">
                            {fmtMin(weekMin)}
                          </span>
                        </div>
                      </div>

                      {/* Day grid */}
                      <div className="grid grid-cols-5 divide-x divide-gray-50">
                        {week.days.map((d, di) => {
                          const mins = parseMinutes(d.task);
                          return (
                            <div key={di} className="px-3 py-2.5">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                                  {d.day.length > 3 ? d.day.split(' ')[0] : d.day}
                                </span>
                                {mins !== null && (
                                  <span
                                    className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
                                    style={{
                                      backgroundColor: phase.badgeBg,
                                      color: phase.badgeColor,
                                    }}
                                  >
                                    {fmtMin(mins)}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-600 leading-tight line-clamp-2">
                                {d.topic}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Total footer */}
        <div className="bg-gray-900 rounded-xl px-5 py-4 flex items-center justify-between mt-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
              Total program commitment
            </p>
            <p className="text-sm text-gray-200">
              {weekCount} weeks · {fmtHours(totalMinutes)} of focused study
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{fmtHours(totalMinutes)}</p>
            <p className="text-xs text-gray-400">~{fmtMin(avgPerWeekMin)} / week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
