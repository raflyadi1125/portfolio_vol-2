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
      className="min-h-[80vh] bg-background px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-navy">
          Kemampuan
        </p>

        <h2 className="mb-12 text-4xl font-bold tracking-tight text-dark md:text-5xl">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category) => (
            <div
              className="rounded-xl border border-gray-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-light md:p-7"
              key={category.title}
            >
              <h3 className="mb-5 text-xl font-semibold text-dark md:text-2xl">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-border bg-background px-4 py-2 text-sm font-medium text-gray-dark no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-light hover:text-navy"
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
