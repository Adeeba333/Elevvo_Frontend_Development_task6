import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      {/* Layout route: sidebar + header stay, only <Outlet /> changes */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p className="text-ink/70">Page not found.</p>} />
      </Route>
    </Routes>
  );
}
