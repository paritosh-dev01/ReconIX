import "./HeroRight.css";

import Glow from "./Glow";
import ConnectionLines from "./ConnectionLines";
import FloatingCard from "./FloatingCard";

export default function HeroRight() {
  return (
    <div className="hero-right">

      <Glow />

      <ConnectionLines />

      {/* Illustration Wrapper */}
      <div className="hero-illustration">

        <div className="world-map-layer">

          {/* World Map SVG yahan aayega */}

        </div>

        <div className="shield-layer">

          {/* Shield SVG yahan aayega */}

        </div>

      </div>

      <FloatingCard
        title="Technologies"
        value="12 Detected"
        className="card-top"
      />

      <FloatingCard
        title="Subdomains"
        value="48 Found"
        className="card-left"
      />

      <FloatingCard
        title="Open Ports"
        value="23 Active"
        className="card-right"
      />

      <FloatingCard
        title="Vulnerabilities"
        value="Critical : 2"
        className="card-bottom"
      />

    </div>
  );
}