function School() {
  const education = [
    {
      level: "SD",
      school: "SDN 158 Babakan Sari Babakan Surabaya",
      period: "2012 - 2018",
      location: "Bandung, Jawa Barat",
      maps: "https://www.google.com/maps/search/?api=1&query=SDN+158+Babakan+Sari+Babakan+Surabaya",
    },
    {
      level: "SMP",
      school: "Mts PPTQ Assalaam",
      period: "2018 - 2021",
      location: "Bandung, Jawa Barat",
      maps: "https://www.google.com/maps/search/?api=1&query=Mts+PPTQ+Assalaam",
    },
    {
      level: "SMA",
      school: "MA Plus Al-Hikam",
      period: "2021 - 2024",
      location: "Sumedang, Jawa Barat",
      maps: "https://www.google.com/maps/search/?api=1&query=MA+Plus+Al-Hikam",
    },
    {
      level: "Perguruan Tinggi",
      school: "Universitas Islam Nusantara",
      major: "Teknik Informatika",
      period: "2024 - Now",
      location: "Bandung, Jawa Barat",
      maps: "https://www.google.com/maps/search/?api=1&query=Universitas+Islam+Nusantara+Bandung",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-24 min-h-[80vh] bg-white px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          Pendidikan
        </p>

        <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-12 md:text-5xl">
          Education
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-xl border border-gray-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-light sm:p-6 md:p-7"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-navy sm:text-sm">
                    {item.level}
                  </p>

                  <h3 className="mb-2 break-words text-lg font-semibold text-dark sm:text-xl md:text-2xl">
                    {item.school}
                  </h3>

                  {item.major && (
                    <p className="mb-2 text-sm text-gray-dark sm:text-base">
                      {item.major}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="text-sm text-gray-dark">
                      📍 {item.location}
                    </span>

                    <span className="text-gray-border">•</span>

                    <a
                      href={item.maps}
                      target="_blank"
                      rel="noopener noferrer"
                      className="text-sm font-medium text-navy no-underline transition-colors duration-200 hover:text-navy-light hover:underline"
                    >
                      Lihat di Google Maps
                    </a>
                  </div>
                </div>

                <span className="shrink-0 text-sm font-medium text-gray-dark md:pt-1">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default School;