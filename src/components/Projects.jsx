import React from "react";
import project1 from "../assets/installation-ligne-de-production.jpg";
import project2 from "../assets/transfert-industriel.jpg";
import project3 from "../assets/Maintenance-planifiée.png";

const Projects = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#aebf74] mb-4">
          Nos Réalisations
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Une expertise concrète à travers des projets ambitieux et variés.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={project1}
              alt="Projet 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#fdc767] mb-2">
                Installation de ligne de production
              </h3>
              <p className="text-gray-700">
                Mise en place complète d’une unité de fabrication dans le
                secteur agroalimentaire.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={project2}
              alt="Projet 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#fba964] mb-2">
                Transfert industriel
              </h3>
              <p className="text-gray-700">
                Déplacement sécurisé d’équipements lourds sur un nouveau site
                industriel.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={project3}
              alt="Projet 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#fdc767] mb-2">
                Maintenance planifiée
              </h3>
              <p className="text-gray-700">
                Planification et exécution de la maintenance pour une
                multinationale du secteur minier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
