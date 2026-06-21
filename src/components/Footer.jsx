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