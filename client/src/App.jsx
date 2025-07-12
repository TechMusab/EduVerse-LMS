import LandingPage from "./pages/shared/LandingPage";
import Signup from "./pages/shared/Signup"
import Login from "./pages/shared/Login"
import Dashboard from "./pages/student/Dashboard";
import Profile from "./pages/shared/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/shared/ToastContext";
import { initSmoothScroll, cleanupSmoothScroll } from "./components/shared/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize smooth scrolling
    initSmoothScroll();

    // Cleanup on unmount
    return () => {
      cleanupSmoothScroll();
    };
  }, []);

  return (
    <ToastProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </ToastProvider>
  );
}

export default App;
