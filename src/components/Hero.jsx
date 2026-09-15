function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-navy">HI! My Name</p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-dark md:text-7xl">
          Adi <span className="font-bold text-navy">Muchamad Rafly</span>
        </h1>

        <h2 className="my-6 text-xl font-semibold text-gray-dark md:text-2xl">Mahasiswa Teknik Informatika</h2>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-gray-dark md:text-lg">
          Saya adalah mahasiswa Teknik Informatika yang memiliki minat dalam
          pengembangan website, pemrograman, dan teknologi.
        </p>

        <div className="flex justify-center gap-4">
            <a href="#about" className="rounded-lg bg-navy px-6 py-3 font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light">
                Tentang Saya
            </a>

            <a href="#contact" className="rounded-lg border border-navy px-6 py-3 font-medium text-navy no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white">
                Hubungi Saya
            </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
