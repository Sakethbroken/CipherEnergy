import CHome from "./home";
import effect from "../../assets/images/effect.png";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <CHome />

      {/* Overlay image - full container height */}
      <img
        src={effect}
        alt="Effect Overlay"
        className="absolute top-0 right-0 h-full w-full object-contain pointer-events-none"
      />
    </div>
  );
};

export default Home;
