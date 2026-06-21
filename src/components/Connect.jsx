import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Connect() {
  return (
    <section id="connect" className="py-32">

      <h2 className="text-5xl font-bold text-center mb-24">
        Connect With Us
      </h2>

      <div className="flex justify-center gap-20 text-6xl mb-16">

        <a
          href="https://instagram.com/designs_by_linea"
          target="_blank"
          className="hover:text-[#8B7355] duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/918688331102"
          target="_blank"
          className="hover:text-[#8B7355] duration-300"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:lineainteriorshyd@gmail.com"
          className="hover:text-[#8B7355] duration-300"
        >
          <MdEmail />
        </a>

      </div>

      <div className="text-center text-xl text-gray-500 space-y-4">

        <p>
          📞 +91 8688331102
        </p>

        <p>
          📧 lineainteriorshyd@gmail.com
        </p>

        <p>
          📍 Hyderabad, Telangana
        </p>

      </div>

    </section>
  );
}

export default Connect;