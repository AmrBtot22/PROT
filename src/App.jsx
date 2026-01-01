import React from "react";
import Navbar from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ShowCase from "./sections/ShowCase";
import LogoShowcase from "./components/Logo";
import FeatureCards from "./sections/FeatureCards";
import TechOrbit from "./sections/Tech";
import Experience from "./sections/Exe";
import Contact from "./sections/Contact";
import { Footer } from "./sections/Footer";

// Import SnowCanvas
import SnowCanvas from "./components/SnowCanvas";

function App() {
  return (
    <>
      <SnowCanvas />

      <Navbar />
      <Hero />
      <About />
      <ShowCase />
      <LogoShowcase />
      <FeatureCards />
      <TechOrbit />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
