import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay translucide */}
      <div className="absolute inset-0 bg-[#1f1f1f]/70"></div>

      {/* Texte au-dessus de l’image */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Votre partenaire de confiance pour la performance industrielle
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Approtrans accompagne les entreprises en Afrique dans leurs projets
            d’ingénierie, de transport et de maintenance industrielle, avec une
            expertise reconnue et des solutions sur-mesure.
          </p>
          <a
            href="#"
            className="inline-block bg-[#fdc767] text-black font-semibold px-6 py-3 rounded-2xl hover:bg-[#fba964] transition"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
