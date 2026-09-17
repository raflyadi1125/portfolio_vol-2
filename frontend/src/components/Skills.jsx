function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "React",
          url: "https://react.dev/",
        },
        {
          name: "Tailwind CSS",
          url: "https://tailwindcss.com/",
        },
        {
          name: "Boostrap",
          url: "https://getbootstrap.com/",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          url: "https://nodejs.org/",
        },
        {
          name: "Express.js",
          url: "https://expressjs.com/",
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MySQL",
          url: "https://www.mysql.com/",
        },
        {
          name: "PostgreSQL",
          url: "https://www.postgresql.org/",
        },
        {
          name: "Prisma",
          url: "https://www.prisma.io/",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          url: "https://git-scm.com/",
        },
        {
          name: "GitHub",
          url: "https://github.com/",
        },
        {
          name: "VS Code",
          url: "https://code.visualstudio.com/",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-10 min-h-[80vh] bg-background px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          Kemampuan
        </p>

        <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-12 md:text-5xl">
          My Skills
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              className="rounded-xl border border-gray-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-light sm:p-6 md:p-7"
              key={category.title}
            >
              <h3 className="mb-4 text-xl font-semibold text-dark sm:mb-5 sm:text-2xl">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-border bg-background px-3 py-2 text-xs font-medium text-gray-dark no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-light hover:text-navy sm:px-4 sm:text-sm"
                    key={skill.name}
                  >
                    {skill.name}
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

export default Skills;