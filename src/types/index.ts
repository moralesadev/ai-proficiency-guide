export interface DayEntry {
  day: string;
  topic: string;
  task: string;
  prompt?: string;
}

export interface Resource {
  name: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  desc: string;
  url: string;
}

export interface WeekData {
  label: string;
  weekNumber: number;
  title: string;
  time: string;
  goal: string;
  deliverable?: string;
  days: DayEntry[];
  resources: Resource[];
  checks: string[];
  tip: string;
}

export interface Module {
  icon: string;
  title: string;
  sub: string;
  topics: string[];
}

export interface Milestone {
  label: string;
  desc: string;
}

export interface PhaseData {
  id: number;
  label: string;
  name: string;
  duration: string;
  badgeBg: string;
  badgeColor: string;
  progressColor: string;
  desc: string;
  modules: Module[];
  milestones: Milestone[];
  weeks: WeekData[];
  comingSoon?: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface WeekQuiz {
  phaseId: number;
  weekIndex: number;
  questions: QuizQuestion[];
}

export interface UserProgress {
  userId: string;
  checks: Record<string, boolean>;
  quizzes?: Record<string, boolean>;
  lastUpdated: string;
}
