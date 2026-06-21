import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_linea",
        "template_dcawz58",
        form.current,
        "B_a2O2VjjOvew3ekr"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="consultation"
      data-aos="fade-up"
      className="py-32 bg-[#F5EFE6]"
    >
      <div className="max-w-5xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center mb-8">
          Start Your Project
        </h2>

        <p className="text-center text-gray-500 mb-20 text-xl">
          Tell us about your vision and we'll get in touch with you.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid md:grid-cols-2 gap-10"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-5 rounded-2xl bg-white outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="p-5 rounded-2xl bg-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-5 rounded-2xl bg-white outline-none md:col-span-2"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            required
            className="p-5 rounded-2xl bg-white outline-none md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-[#8B7355] text-white py-5 rounded-full md:col-span-2 hover:scale-105 duration-300"
          >
            Schedule Consultation
          </button>

        </form>

        {success && (
          <p className="text-center mt-8 text-green-700 text-xl">
            Thank you! Your request has been sent successfully.
          </p>
        )}

      </div>
    </section>
  );
}

export default Contact;