import { Link } from "react-router-dom";

function Footer({ onHome }) {
  return (
    <footer className="border-t border-gray-border bg-white px-5 py-10 sm:px-6 sm:py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-dark sm:text-2xl">
          Adi Muchamad Rafly
        </h3>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-dark sm:text-base">
          Saya Adi MR, saya mahasiswa Teknik informatika yang memiliki minat
          untuk memasuki ke dalam dunia teknologi dan pengembangan perangkat
          lunak.
        </p>

        <div className="my-6 flex flex-wrap justify-center gap-x-5 gap-y-3 sm:my-7 sm:gap-x-6">
          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault();
              onHome();
            }}
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

        <p className="text-xs text-gray-dark sm:text-sm">
          © 2026 Adi Muchamad Rafly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;