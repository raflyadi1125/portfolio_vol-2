function Projects() {
  const projects = [
    {
      title: "Informatika Coding Camp Season 4 #FullStack",
      description:
        "Sebuah program organisasi mahasiswa yang mengajak para mahasiswa untuk belajar memahami frontend dan backend lalu membuat project-nya masing-masing.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "MySQL",
        "Prisma",
        "Git",
        "GitHub",
        "VS Code",
      ],
      github: "https://github.com/raflyadi1125/project_icc_full-stuck/tree/main",
    },
    {
      title: "Website HIMATIF",
      description:
        "Website organisasi mahasiswa yang dikembangkan untuk menampilkan informasi, kegiatan, dan berbagai kebutuhan organisasi.",
      technologies: ["React", "JavaScript", "CSS", "Node.js"],
      github: "https://github.com/himatifuninus/profile-HIMATIF",
    },
    {
      title: "Informatika Coding Camp Season 5 #FullStack",
      description:
        "Sebuah program organisasi mahasiswa yang mengajak para mahasiswa untuk belajar mendalami frontend dan backend dari project-nya yang sudah di buat.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "MySQL",
        "Prisma",
        "Git",
        "GitHub",
        "VS Code",
      ],
      github: "https://github.com/raflyadi1125/ICC_Season_5",
    },
    {
      title: "Mini Cashier",
      description:
        "Aplikasi kasir sederhana untuk membantu proses pencatatan produk, transaksi, dan perhitungan total pembayaran.",
      technologies: ["Python"],
      github: "https://github.com/raflyadi1125/kasir-python",
    },
    {
        title: "Portfolio Vol-1",
        description:
        "Website portofolio pribadi pertama yang dibuat untuk menampilkan profil, pengalaman, keahlian, dan kumpulan proyek/sertifikat yang telah saya selesaikan.",
        technologies: ["HTML"],
        github: "https://github.com/raflyadi1125/raflyadi1125.github.io",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-10 min-h-[80vh] bg-white px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          Portofolio
        </p>

        <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-12 md:text-5xl">
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              className="rounded-xl border border-gray-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-light sm:p-6 md:p-7"
              key={project.title}
            >
              <div>
                <h3 className="mb-3 break-words text-lg font-semibold leading-snug text-dark sm:mb-4 sm:text-xl md:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-gray-dark sm:mb-6 sm:text-base sm:leading-8">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2 sm:mb-7">
                  {project.technologies.map((technology) => (
                    <span
                      className="rounded-full border border-gray-border bg-white px-3 py-1.5 text-xs font-medium text-gray-dark sm:text-sm"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                  <a
                    href={project.github}
                    className="text-black no-underline transition-colors duration-200 hover:text-navy hover:underline"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;