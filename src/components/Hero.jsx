import bgHero from "../assets/bgherominify.webp";

const Hero = () => {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover"
        src={bgHero}
        alt="background hero"
      />

      <div className="w-full h-screen absolute top-0 md:bottom-4 bg-white/20">
        <div
          id="sobre"
          className="flex flex-col text-center w-4/6 backdrop-opacity-50 rounded-2xl bg-white/50 p-5 bg-opacity-60 shadow-2xl shadow-stone-500"
        >
          <h1 className="text-4xl uppercase lg:text-4xl font-bold text-center">
            Instituto Amparo
          </h1>
          <p>Encontre Amparo e Equilíbrio na Sua Jornada para a Saúde Mental</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
