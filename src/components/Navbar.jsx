import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-border bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold trackinng-tight text-dark no-underline transition-colors duration-200 hover:text-navy">
            Portofolio
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            About
          </a>
          <a
            href="#education"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Experience
          </a>
          <a
            href="#certificates"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
