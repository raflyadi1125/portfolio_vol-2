import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-border bg-white px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-dark md:text-2xl">Adi Muchamad Rafly</h3>

        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-dark">
          Saya Adi MR, saya mahasiswa Teknik informatika yang memiliki minat
          untuk memasuki ke dalam dunia teknologi dan pengembangan perangkat
          lunak.
        </p>

        <div className="my-7 flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a href="/" className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy">
            Home
          </a>

          <a href="#about" className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy">
            About
          </a>
          
          <a href="#education" className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy">
            Education
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-dark">
          © 2026 Adi Muchamad Rafly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;