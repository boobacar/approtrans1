import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Column 1 - Logo and Description */}
        <div>
          <h2 className="text-3xl text-[#fdc767] font-bold mb-4">
            <span className="text-[#bdc89d]">APPRO</span>TRANS
          </h2>
          <p>
            Votre partenaire de confiance pour la performance industrielle, le
            transport et la maintenance en Afrique.
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#fdc767] transition">
                À propos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fdc767] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fdc767] transition">
                Projets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#fdc767] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-2xl hover:text-[#fdc767] transition"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-2xl hover:text-[#fdc767] transition"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.x.com"
              className="text-2xl hover:text-[#fdc767] transition"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10">
        <p>© 2025 APPROTRANS. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
