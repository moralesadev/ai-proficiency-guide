import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { GlossaryModal } from './components/GlossaryModal';
import { Dashboard } from './pages/Dashboard';
import { PhaseOverview } from './pages/PhaseOverview';
import { WeekDetail } from './pages/WeekDetail';
import { Timeline } from './pages/Timeline';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar onOpenGlossary={() => setGlossaryOpen(true)} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/phase/:phaseId" element={<PhaseOverview />} />
        <Route path="/phase/:phaseId/week/:weekIndex" element={<WeekDetail />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <GlossaryModal isOpen={glossaryOpen} onClose={() => setGlossaryOpen(false)} />
    </HashRouter>
  );
}
