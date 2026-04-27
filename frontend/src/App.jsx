import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ProfileSetup from './pages/ProfileSetup';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';
import Vault from './pages/Vault';
import Jobs from './pages/Jobs';
import Redressal from './pages/Redressal';
import AIAssistant from './pages/AIAssistant';
import Schemes from './pages/Schemes';
import Apps from './pages/Apps';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="vault" element={<Vault />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="schemes" element={<Schemes />} />
          <Route path="apps" element={<Apps />} />
          <Route path="redressal" element={<Redressal />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
          <Route path="*" element={<div style={{padding: '2rem'}}><h3>Component coming soon...</h3><p>This section is not fully implemented for the presentation yet.</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
