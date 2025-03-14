import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Consent from "./pages/Consent";
import User from "./pages/User";
import Audit from "./pages/Audit";
import Customization from "./pages/Customization";
import Report from "./pages/Report";
import Settings from "./pages/Settings";


function App() {
  return (
    <Routes>
      {/* Login page without Layout */}
      <Route path="/" element={<Login />} />

      {/* Protected pages wrapped in Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="consents" element={<Consent />} />
        <Route path="audit-logs" element={<Audit />} />
        <Route path="customization" element={<Customization />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
