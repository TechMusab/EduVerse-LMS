import LandingPage from "./pages/shared/LandingPage";
import Signup from "./pages/shared/Signup"
import Login from "./pages/shared/Login"
import Dashboard from "./pages/student/Dashboard";
import Profile from "./pages/shared/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
