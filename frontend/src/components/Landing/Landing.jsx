import Navbar from "../Navbar/Navbar";
import HeroV2 from "../HeroV2/HeroV2";
import FeatureStrip from "../FeatureStrip/FeatureStrip";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <HeroV2 />
      <FeatureStrip />
      <Features />
      <Footer />
    </>
  );
}

export default Landing;