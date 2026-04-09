import type { UserProgress } from '../types';

const STORAGE_KEY = 'ai_learning_progress';

function getProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore parse errors
  }
  return { userId: 'local', checks: {}, lastUpdated: new Date().toISOString() };
}

function saveProgress(progress: UserProgress): void {
  progress.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isChecked(phaseId: number, weekIndex: number, checkIndex: number): boolean {
  const p = getProgress();
  return !!p.checks[`${phaseId}-${weekIndex}-${checkIndex}`];
}

export function toggleCheck(phaseId: number, weekIndex: number, checkIndex: number): boolean {
  const p = getProgress();
  const key = `${phaseId}-${weekIndex}-${checkIndex}`;
  p.checks[key] = !p.checks[key];
  saveProgress(p);
  return p.checks[key];
}

export function getWeekProgress(phaseId: number, weekIndex: number, totalChecks: number): number {
  const p = getProgress();
  let done = 0;
  for (let i = 0; i < totalChecks; i++) {
    if (p.checks[`${phaseId}-${weekIndex}-${i}`]) done++;
  }
  return totalChecks === 0 ? 0 : Math.round((done / totalChecks) * 100);
}

export function getPhaseProgress(phaseId: number, weeks: { checks: string[] }[]): number {
  const p = getProgress();
  let done = 0;
  let total = 0;
  weeks.forEach((w, wi) => {
    total += w.checks.length;
    w.checks.forEach((_, ci) => {
      if (p.checks[`${phaseId}-${wi}-${ci}`]) done++;
    });
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

export function isQuizCompleted(phaseId: number, weekIndex: number): boolean {
  const p = getProgress();
  return !!p.quizzes?.[`${phaseId}-${weekIndex}`];
}

export function markQuizCompleted(phaseId: number, weekIndex: number): void {
  const p = getProgress();
  if (!p.quizzes) p.quizzes = {};
  p.quizzes[`${phaseId}-${weekIndex}`] = true;
  saveProgress(p);
}

export function getAllChecks(): Record<string, boolean> {
  return getProgress().checks;
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
