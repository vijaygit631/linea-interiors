import heroImage from "../assets/images/main.webp";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex justify-center items-center text-white px-6"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="bg-black/40 p-8 md:p-12 rounded-3xl text-center max-w-4xl">

        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Timeless Spaces,
          <br />
          Crafted with Purpose
        </h1>

        <p className="text-lg md:text-2xl mb-8">
          Luxury Interiors • Architecture • Bespoke Spaces
        </p>

        <a
          href="#projects"
          className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300"
        >
          Explore Portfolio
        </a>

      </div>
    </section>
  );
}

export default Hero;