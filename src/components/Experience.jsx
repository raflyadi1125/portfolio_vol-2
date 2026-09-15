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
          url: "#",
        },
        {
          label: "Live Demo →",
          url: "#",
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
      className="min-h-[80vh] bg-background px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-navy">
          Pengalaman
        </p>

        <h2 className="mb-12 text-4xl font-bold tracking-tight text-dark md:text-5xl">
          My Experience
        </h2>

        <div className="flex flex-col gap-5">
          {experiences.map((experience) => (
            <div
              className="rounded-xl border border-gray-border bg-white p-6 transition-all duration-300 hover:border-navy-light md:p-7"
              key={experience.position}
            >
              <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start md:gap-5">
                <h3 className="mb-1 text-xl font-semibold leading-snug text-dark md:text-2xl">
                  {experience.position}
                </h3>

                <span className="text-sm font-medium text-navy md:pt-1">
                  {experience.period}
                </span>
              </div>

              <h4 className="mb-4 text-base font-medium text-gray-dark">
                {experience.organization}
              </h4>

              <p className="text-base leading-8 text-gray-dark">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-5">
                {experience.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy no-underline transition-colors duration-200 hover:text-navy-light hover:underline"
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
