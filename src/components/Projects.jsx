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
      github: "#",
      demo: "#",
    },
    {
      title: "Website HIMATIF",
      description:
        "Website organisasi mahasiswa yang dikembangkan untuk menampilkan informasi, kegiatan, dan berbagai kebutuhan organisasi.",
      technologies: ["React", "JavaScript", "CSS", "Node.js"],
      github: "#",
      demo: "#",
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
      github: "#",
      demo: "#",
    },
    {
      title: "Mini Cashier",
      description:
        "Aplikasi kasir sederhana untuk membantu proses pencatatan produk, transaksi, dan perhitungan total pembayaran.",
      technologies: ["Python"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[80vh] bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-navy">
          Portofolio
        </p>

        <h2 className="mb-12 text-4xl font-bold tracking-tight text-dark md:text-5xl">
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              className="rounded-xl border border-gray-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-light md:p-7"
              key={project.title}
            >
              <div>
                <h3 className="mb-4 text-xl font-semibold leading-snug text-dark md:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-6 text-base leading-8 text-gray-dark">
                  {project.description}
                </p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      className="rounded-full border border-gray-border bg-white px-3 py-1.5 text-sm font-medium text-gray-dark"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="font-medium text-navy no-underline transition-colors duration-200 hover:text-navy-light hover:underline">
                  <a
                    href={project.github}
                    className="no-underline text-black hover:underline"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="font-medium text-navy no-underline transition-colors duration-200 hover:text-navy-light hover:underline"
                  >
                    Live Demo
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
