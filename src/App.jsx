import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import School from "./components/School";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <School/>
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
