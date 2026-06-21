import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918688331102"
      target="_blank"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 duration-300"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;