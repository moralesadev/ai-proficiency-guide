import { useState } from 'react';
import { X, CheckCircle, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import type { QuizQuestion } from '../types';

interface Props {
  questions: QuizQuestion[];
  weekLabel: string;
  onClose: () => void;
  onCompleted?: () => void;
}

export function QuizModal({ questions, weekLabel, onClose, onCompleted }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];
  const answered = selected !== null;
  const isCorrect = selected === q.correctIndex;

  function choose(i: number) {
    if (answered) return;
    setSelected(i);
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(answers[current + 1]);
    } else {
      setShowResult(true);
      onCompleted?.();
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  }

  const score = answers.filter((a, i) => a === questions[i].correctIndex).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Quiz</p>
            <h2 className="text-base font-semibold text-gray-900">{weekLabel}</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={18} />
          </button>
        </div>

        {showResult ? (
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-gray-900 mb-1">{score}/{questions.length}</div>
            <p className="text-gray-500 mb-6">
              {score === questions.length
                ? 'Perfect score! You nailed it.'
                : score >= questions.length * 0.7
                ? 'Great work — solid understanding.'
                : 'Review the material and try again.'}
            </p>
            <div className="space-y-3 mb-6 text-left">
              {questions.map((q, i) => {
                const correct = answers[i] === q.correctIndex;
                return (
                  <div key={i} className={`flex gap-2.5 p-3 rounded-xl text-sm ${correct ? 'bg-emerald-50' : 'bg-red-50'}`}>
                    {correct ? <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" /> : <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />}
                    <span className={correct ? 'text-emerald-800' : 'text-red-800'}>{q.question}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3">
              <button onClick={restart} className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                <RotateCcw size={14} /> Retry
              </button>
              <button onClick={onClose} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-400">Question {current + 1} of {questions.length}</span>
              <div className="flex gap-1">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1 w-6 rounded-full ${i < current ? 'bg-gray-900' : i === current ? 'bg-gray-400' : 'bg-gray-100'}`} />
                ))}
              </div>
            </div>

            <p className="text-base font-medium text-gray-900 mb-4">{q.question}</p>

            <div className="space-y-2.5 mb-5">
              {q.options.map((opt, i) => {
                let cls = 'border border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50';
                if (answered) {
                  if (i === q.correctIndex) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800';
                  else if (i === selected) cls = 'border-red-400 bg-red-50 text-red-800';
                  else cls = 'border-gray-100 text-gray-400';
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${cls} ${!answered ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className={`flex gap-2.5 p-3 rounded-xl mb-5 text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`}>
                {isCorrect ? <CheckCircle size={15} className="mt-0.5 shrink-0" /> : <XCircle size={15} className="mt-0.5 shrink-0" />}
                <p>{q.explanation}</p>
              </div>
            )}

            {answered && (
              <button
                onClick={next}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {current < questions.length - 1 ? 'Next question' : 'See results'}
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
