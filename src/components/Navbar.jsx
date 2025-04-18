import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-[#1f1f1f] shadow-md px-6 py-4 flex items-center justify-between`}
    >
      {/* Logo */}
      <div className="flex gap-2 items-center text-xl font-bold text-[#fdc767]">
        <img
          src={logo}
          alt="Approtrans Logo"
          className=" w-15 h-15 rounded-full object-cover"
        />
        <p>
          <span className="text-[#bdc89d]">APPRO</span>TRANS
        </p>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-[#bdc89d] font-bold">
        <li>
          <a href="#" className="hover:text-[#fdc767] transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#fdc767] transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#fdc767] transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#fdc767] transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="border-t border-t-gray-400 absolute top-20 left-0 w-full bg-[#1f1f1f] flex flex-col items-center gap-4 py-4 text-[#bdc89d] font-bold md:hidden z-50">
          <li>
            <a href="#" className="hover:text-[#fdc767] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#fdc767] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#fdc767] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#fdc767] transition">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
