import "./HeroV2.css";

import HeroLeftV2 from "./HeroLeftV2";
import HeroRightV2 from "./HeroRightV2";

export default function HeroV2() {
  return (
    <section className="hero-v2">

      <div className="hero-container-v2">

        <HeroLeftV2 />

        <HeroRightV2 />

      </div>

    </section>
  );
}