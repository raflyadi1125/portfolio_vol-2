function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center bg-white px-5 py-16 sm:px-6 sm:py-20">
      <div className="w-full max-w-4xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          HI! My Name
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl md:text-7xl">
          Adi <span className="font-bold text-navy">Muchamad Rafly</span>
        </h1>

        <h2 className="my-5 text-lg font-semibold text-gray-dark sm:text-xl md:my-6 md:text-2xl">
          Mahasiswa Teknik Informatika
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-gray-dark sm:text-base sm:leading-8 md:mb-10 md:text-lg">
          Saya adalah mahasiswa Teknik Informatika yang memiliki minat dalam
          pengembangan website, pemrograman, dan teknologi.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#about"
            className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light sm:text-base"
          >
            Tentang Saya
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-navy px-6 py-3 text-sm font-medium text-navy no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white sm:text-base"
          >
            Hubungi Saya
          </a>
          <a
            href="/curriculum_vitae/CV-Adi_mr.docx"
            download
            className="rounded-lg border border-gray-border bg-white px-6 py-3 text-sm font-medium text-dark no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-light hover:text-navy sm:text-base"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
