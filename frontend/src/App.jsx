import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import NewScan from "./components/NewScan/NewScan";
import RunningScan from "./components/RunningScan/RunningScan";
import ScanResults from "./components/ScanResults/ScanResults";
import Scans from "./components/Scans/Scans";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/scans" element={<Scans />} />

        <Route path="/new-scan" element={<NewScan />} />

        <Route path="/running-scan" element={<RunningScan />} />

        <Route path="/scan-results" element={<ScanResults />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;