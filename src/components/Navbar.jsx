import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAF7F2]/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-none">
            Linéa
          </h1>

          <p className="text-xs md:text-sm text-gray-500 tracking-[0.3em] mt-1">
            ARCHITECTURE & INTERIORS
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-14 text-xl">

          <li>
            <a href="#services" className="hover:text-[#8B7355] duration-300">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#8B7355] duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#8B7355] duration-300">
              Philosophy
            </a>
          </li>

          <li>
            <a href="#connect" className="hover:text-[#8B7355] duration-300">
              Connect
            </a>
          </li>

        </ul>

        {/* Desktop Consultation Button */}
        <a
          href="#consultation"
          className="hidden md:block bg-[#8B7355] text-white px-6 py-3 rounded-full hover:scale-105 duration-300"
        >
          Consultation
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
      <div className="md:hidden bg-[#FAF7F2] text-center py-8">

        <div className="space-y-10 text-2xl">



          <a href="#services" className="block" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#projects" className="block" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#about" className="block" onClick={() => setMenuOpen(false)}>
            Philosophy
          </a>

          <a href="#connect" className="block" onClick={() => setMenuOpen(false)}>
            Connect
          </a>

          <a
            href="#consultation"
            className="block" onClick={() => setMenuOpen(false)}
          >
            Consultation
          </a>

        </div>
      </div>

      )}

    </nav>
  );
}

export default Navbar;