import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

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
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    setIsExiting(true);

    setTimeout(() => {
      navigate("/");
    }, 600);
  };

  return (
    <div className={isExiting ? "page-exit" : "page-enter"}>
      <header className="sticky top-0 z-50">
        <Navbar onHome={handleHome} />
      </header>

      <main>
        <Hero />
        <About />
        <School />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer onHome={handleHome} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
