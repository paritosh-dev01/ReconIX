import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import NewScan from "./components/NewScan/NewScan";
import RunningScan from "./components/RunningScan/RunningScan";
import ScanResults from "./components/ScanResults/ScanResults";
import Reports from "./components/Reports/Reports";
import Scans from "./components/Scans/Scans";
import Landing from "./components/Landing/Landing";
import Assets from "./components/Assets/Assets";
import AssetDetails from "./components/AssetDetails/AssetDetails";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import Vulnerabilities from "./components/Vulnerabilities/Vulnerabilities";
import ThreatIntelligence from "./components/ThreatIntelligence/ThreatIntelligence";
import Integrations from "./components/Integrations/Integrations";
import Automation from "./components/Automation/Automation";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/assets" element={<Assets />} />

        <Route path="/asset-details" element={<AssetDetails />} />

        <Route path="/asset-details/:assetId" element={<AssetDetails />} />

        <Route path="/scans" element={<Scans />} />

        <Route path="/new-scan" element={<NewScan />} />

        <Route path="/running-scan" element={<RunningScan />} />

        <Route path="/scan-results" element={<ScanResults />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/automation" element={<Automation />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/vulnerabilities" element={<Vulnerabilities />} />

        <Route path="/threat-intelligence" element={<ThreatIntelligence />} />

        <Route path="/integrations" element={<Integrations />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;