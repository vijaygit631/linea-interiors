import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Connect from "./components/Connect";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
<>
  <Navbar />
  <Hero />
  <Services />
  <Projects />
  <Process />
  <WhyUs />
  <About />
  <Contact />
  <Connect />
  <Footer />
  <WhatsappButton />
</>
  );
}

export default App;