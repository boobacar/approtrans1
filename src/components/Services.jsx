import React from "react";
import { Wrench, Truck, Settings } from "lucide-react"; // Icônes

const Services = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#aebf74] mb-4">Nos Services</h2>
        <p className="text-gray-600 text-lg mb-12">
          Des solutions personnalisées pour répondre à vos défis industriels.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-[#fef9ec] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <div className="bg-[#fdc767] w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto">
              <Wrench className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#aebf74] mb-2">
              Ingénierie
            </h3>
            <p className="text-gray-700">
              Conception, planification et accompagnement de vos projets
              techniques et industriels.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#fef9ec] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <div className="bg-[#fba964] w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto">
              <Truck className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#aebf74] mb-2">
              Transport industriel
            </h3>
            <p className="text-gray-700">
              Logistique lourde, transfert de machines et solutions de
              manutention sur mesure.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#fef9ec] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <div className="bg-[#fdc767] w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto">
              <Settings className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#aebf74] mb-2">
              Maintenance
            </h3>
            <p className="text-gray-700">
              Optimisez la durée de vie de vos équipements grâce à notre
              expertise en maintenance industrielle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
