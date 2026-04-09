import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { PhaseOverview } from './pages/PhaseOverview';
import { WeekDetail } from './pages/WeekDetail';
import { Timeline } from './pages/Timeline';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/phase/:phaseId" element={<PhaseOverview />} />
        <Route path="/phase/:phaseId/week/:weekIndex" element={<WeekDetail />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </HashRouter>
  );
}
