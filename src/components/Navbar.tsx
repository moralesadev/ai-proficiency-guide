import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, CalendarDays, BookMarked } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/phase/0', label: 'Learning Path', icon: BookOpen },
  { to: '/timeline', label: 'Timeline', icon: CalendarDays },
];

interface NavbarProps {
  onOpenGlossary: () => void;
}

export function Navbar({ onOpenGlossary }: NavbarProps) {
  const { pathname } = useLocation();

  function isActive(to: string) {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2.5 font-semibold text-gray-900 text-sm">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-900 text-white text-xs font-bold">AI</span>
          Consultant Path
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isActive(to)
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <BookMarked size={13} />
            <span className="hidden sm:inline">Glossary</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
