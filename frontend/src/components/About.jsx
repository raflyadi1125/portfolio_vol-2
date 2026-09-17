function About() {
  return (
    <section
      id="about"
      className="scroll-mt-10 flex min-h-[80vh] items-center bg-background px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-3xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          Tentang Saya
        </p>

        <h2 className="mb-6 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-8 md:text-5xl">
          About Me
        </h2>

        <p className="mb-5 text-sm leading-7 text-gray-dark sm:text-base sm:leading-8 md:mb-6 md:text-lg">
          Saya Adi MR, saya mahasiswa Teknik informatika yang memiliki minat
          untuk memasuki ke dalam dunia teknologi dan pengembangan perangkat
          lunak.
        </p>

        <p className="mb-5 text-sm leading-7 text-gray-dark sm:text-base sm:leading-8 md:mb-6 md:text-lg">
          Saya memiliki minat terhadap perkembangan website, khususnya
          frontend. Saya terus mengembangkan kemampuan pemrograman saya dengan
          cara membuat berbagai project dan mempelajari teknologi yang baru.
        </p>

        <p className="text-sm leading-7 text-gray-dark sm:text-base sm:leading-8 md:text-lg">
          Selain kegiatan akademik, saya juga aktif dalam organisasi mahasiswa
          dan berbagai kegiatan kampus yang membantu untuk perkembangan saya
          dari bidang komunikasi, kerja sama tim, dan kepemimpinan.
        </p>
      </div>
    </section>
  );
}

export default About;