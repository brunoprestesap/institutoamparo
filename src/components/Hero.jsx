import bgHero from "../assets/bgherominify.webp";

const Hero = () => {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover"
        src={bgHero}
        alt="background hero"
      />

      <div className="w-full h-screen flex items-center absolute top-0 bg-white/30">
        <div
          id="sobre"
          className="container mx-auto text-center w-5/6 h-3/6 backdrop-opacity-50 rounded-2xl bg-white/50 p-5 bg-opacity-60 shadow-2xl shadow-stone-500"
        >
          <h1 className="text-4xl uppercase lg:text-4xl font-bold text-center">
            Instituto Amparo
          </h1>
          <p className="text-xl">
            Encontre Amparo e Equilíbrio na Sua Jornada para a Saúde Mental
          </p>

          <button className="bg-green-400 p-3 m-5 rounded-xl text-white">Agende sua consulta</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
