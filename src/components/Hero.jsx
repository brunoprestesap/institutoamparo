import bgHero from "../assets/bgherominify.webp";
import { FaBars } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover"
        src={bgHero}
        alt="background hero"
      />

      <div className="w-full h-screen flex flex-col justify-center items-center absolute top-0 backdrop-opacity-80 bg-white/50">
        <div className="flex justify-between items-center absolute top-0 left-0 w-full bg-green-600 p-5">
          <p className="text-white font-sans text-lg font-semibold">
            Instituto Amparo
          </p>
          <FaBars className="text-white text-xl" />
        </div>

        <div
          id="sobre"
          className="container mx-auto w-5/6 sm:h-4/6 items-center backdrop-opacity-50 bg-green-700 rounded-xl p-5 shadow-2xl shadow-stone-500"
        >
          <p className="text-base mb-3 text-white">Consulte agora</p>
          <p className="text-2xl text-white font-bold mb-3">Transformando Vidas com Cuidado Especializado e Empático.</p>
          <p className="text-xl text-white mb-6 font-semibold">
            Encontre Amparo e Equilíbrio na Sua Jornada para a Saúde Mental
          </p>

          <button className="bg-green-200 p-3 rounded-xl text-green-950 font-semibold w-full">
            Agende sua consulta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
