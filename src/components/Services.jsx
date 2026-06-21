function Services() {
  return (
    <section id="services" data-aos="fade-up" className="py-28 bg-[#FAF7F2]">

      <h2 className="text-4xl md:text-6xl text-center mb-6">
        Our Services
      </h2>

      <p className="text-center text-gray-500 mb-20 text-lg">
        Thoughtfully crafted spaces tailored to your lifestyle and vision.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">

        <div className="bg-[#F5EFE6] p-12 rounded-3xl shadow-md">
          <h3 className="text-3xl mb-6">
            Residential Interiors
          </h3>

          <p className="text-gray-600 leading-8">
            Elegant living spaces designed to reflect your personality and everyday lifestyle.
          </p>
        </div>


        <div className="bg-[#F5EFE6] p-12 rounded-3xl shadow-md">
          <h3 className="text-3xl mb-6">
            Modular Interiors
          </h3>

          <p className="text-gray-600 leading-8">
            Functional and beautiful interiors tailored for modern living.
          </p>
        </div>


        <div className="bg-[#F5EFE6] p-12 rounded-3xl shadow-md">
          <h3 className="text-3xl mb-6">
            Commercial Spaces
          </h3>

          <p className="text-gray-600 leading-8">
            Timeless office and retail environments crafted with attention to detail.
          </p>
        </div>


        <div className="bg-[#F5EFE6] p-12 rounded-3xl shadow-md">
          <h3 className="text-3xl mb-6">
            Architecture
          </h3>

          <p className="text-gray-600 leading-8">
            Innovative architectural concepts that blend aesthetics with functionality.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;