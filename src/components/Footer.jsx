import logo from "../assets/linea_logo.jpeg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-white py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col items-center">

          <img
            src={logo}
            alt="Linéa"
            className="w-32 mb-12"
          />

          <div className="flex gap-10 text-4xl mb-12">

            <a
              href="designs_by_linea"
              target="_blank"
              className="hover:text-[#B89B67] duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918688331102"
              target="_blank"
              className="hover:text-[#B89B67] duration-300"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:lineainteriorshyd@gmail.com"
              className="hover:text-[#B89B67] duration-300"
            >
              <MdEmail />
            </a>

          </div>

          <div className="text-center text-gray-400 space-y-2">

            <p>
              Hyderabad, Telangana
            </p>

            <p>
              © 2026 Linéa Architecture & Interiors
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;