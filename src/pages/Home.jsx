import BtnUp from "../components/BtnUp";
import Hero from "../components/Hero";

const Home = () => {
  const colors = [
    "#003E53",
    "#A1412B",
    "#DF854F",
    "#F1EDDB",
    "#244B5A",
    "#53575A",
  ];

  const currentColor = colors[0];
  const currentMode = "white";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-main-dark-bg dark:text-black">
        {/* BtnArrowUp Component */}
        <BtnUp color={currentColor} />

        <div className="transform mx-auto duration-500">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
