import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
