import livingroom from "../assets/images/projects/livingroom.jpg";
import kitchen from "../assets/images/projects/kitchen.jpg";
import office from "../assets/images/projects/office.jpg";
import architecture from "../assets/images/projects/architecture.png";

function Projects() {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-32 bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl md:text-6xl text-center mb-6">
          Signature Projects
        </h2>

        <p className="text-center text-gray-500 text-lg mb-20">
          A selection of spaces thoughtfully designed with elegance and purpose.
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Living Room */}
          <div className="group">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={livingroom}
                alt=""
                className="w-full h-[500px] object-cover group-hover:scale-105 duration-700"
              />
            </div>

            <p className="text-[#8B7355] tracking-[0.2em] text-sm mt-8 mb-2">
              RESIDENTIAL INTERIOR
            </p>

            <h3 className="text-4xl">
              Luxury Living Room
            </h3>
          </div>

          {/* Kitchen */}
          <div className="group">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={kitchen}
                alt=""
                className="w-full h-[500px] object-cover group-hover:scale-105 duration-700"
              />
            </div>

            <p className="text-[#8B7355] tracking-[0.2em] text-sm mt-8 mb-2">
              MODULAR INTERIOR
            </p>

            <h3 className="text-4xl">
              Modern Kitchen
            </h3>
          </div>

          {/* Office */}
          <div className="group">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={office}
                alt=""
                className="w-full h-[500px] object-cover group-hover:scale-105 duration-700"
              />
            </div>

            <p className="text-[#8B7355] tracking-[0.2em] text-sm mt-8 mb-2">
              COMMERCIAL SPACE
            </p>

            <h3 className="text-4xl">
              Commercial Interior
            </h3>
          </div>

          {/* Architecture */}
          <div className="group">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={architecture}
                alt=""
                className="w-full h-[500px] object-cover group-hover:scale-105 duration-700"
              />
            </div>

            <p className="text-[#8B7355] tracking-[0.2em] text-sm mt-8 mb-2">
              ARCHITECTURAL DESIGN
            </p>

            <h3 className="text-4xl">
              Architecture
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;