import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    onHome();
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="text-xl font-bold tracking-tight text-dark no-underline transition-colors duration-200 hover:text-navy"
        >
          Portofolio
        </Link>


        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Home
          </Link>

          <a
            href="#about"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            About
          </a>

          <a
            href="#education"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Education
          </a>

          <a
            href="#skills"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Experience
          </a>

          <a
            href="#certificates"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Certificates
          </a>

          <a
            href="#contact"
            onClick={handleMenuClick}
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Contact
          </a>
        </div>


        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-gray-border p-2 text-dark transition-colors duration-200 hover:border-navy-light hover:text-navy lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>


      <div
        className={`border-t border-gray-border bg-white px-5 transition-all duration-200 lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col py-3">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Home
          </Link>

          <a
            href="#about"
            onClick={handleMenuClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            About
          </a>

          <a
            href="#education"
            onClick={handleMenuClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Education
          </a>

          <a
            href="#skills"
            onClick={handleMenuClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={handleMenuClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={handleMenuClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Experience
          </a>

          <a
            href="#certificates"
            onClick={handleMenuClick}
            className="border-b border-gray-border py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Certificates
          </a>

          <a
            href="#contact"
            onClick={handleMenuClick}
            className="py-3 text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;