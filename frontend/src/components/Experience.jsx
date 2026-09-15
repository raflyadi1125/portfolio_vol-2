function Experience() {
  const experiences = [
    {
      position: "Ketua",
      organization: "HIMATIF",
      period: "2025 - 2026",
      description:
        "Memimpin organisasi mahasiswa dalam menjalankan program kerja, mengoordinasikan pengurus, serta mengembangkan kegiatan yang mendukung peningkatan kemampuan dan kontribusi mahasiswa Teknik Informatika.",
      links: [
        {
          label: "Lihat dokumentasi →",
          url: "https://www.instagram.com/p/DUgoAHRklRD/",
        },
      ],
    },
    {
      position: "Pengembangan Website HIMATIF",
      organization: "HIMATIF",
      period: "2026",
      description:
        "Mengembangkan website organisasi menggunakan teknologi web modern untuk menyediakan informasi dan kebutuhan digital organisasi.",
      links: [
        {
          label: "GitHub →",
          url: "https://github.com/himatifuninus/profile-HIMATIF",
        },
      ],
    },
    {
      position: "Sekretaris",
      organization: "UKM BIAS Nusantara",
      period: "2025 - 2026",
      description:
        "Bertanggung jawab dalam pengelolaan administrasi organisasi, penyusunan dokumen, pencatatan kegiatan, serta membantu koordinasi dan pelaksanaan berbagai program kerja UKM BIAS Nusantara.",
      links: [
        {
          label: "Lihat dokumentasi →",
          url: "https://www.instagram.com/p/DXO_ZYlE-B2/?img_index=2",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 min-h-[80vh] bg-background px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          Pengalaman
        </p>

        <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-12 md:text-5xl">
          My Experience
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5">
          {experiences.map((experience) => (
            <div
              className="rounded-xl border border-gray-border bg-white p-5 transition-all duration-300 hover:border-navy-light sm:p-6 md:p-7"
              key={experience.position}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-5">
                <h3 className="mb-0 text-lg font-semibold leading-snug text-dark sm:text-xl md:text-2xl">
                  {experience.position}
                </h3>

                <span className="shrink-0 text-sm font-medium text-navy md:pt-1">
                  {experience.period}
                </span>
              </div>

              <h4 className="mb-4 text-sm font-medium text-gray-dark sm:text-base">
                {experience.organization}
              </h4>

              <p className="text-sm leading-7 text-gray-dark sm:text-base sm:leading-8">
                {experience.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {experience.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-navy no-underline transition-colors duration-200 hover:text-navy-light hover:underline sm:text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;