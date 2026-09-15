function School () {
    const education = [
        {
            level: "SD",
            school: "SDN 158 Babakan Sari Babakan Surabaya",
            period: "2012 - 2018",
            location: "Bandung, Jawa Barat",
            maps:"https://www.google.com/maps/search/?api=1&query=SDN+158+Babakan+Sari+Babakan+Surabaya",
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
    ]

    return (
        <section id="education" className="min-h-[80vh] bg-white px-6 py-20 md:px-12 lg:px-24">
            <div className="mx-auto max-w-6xl">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-navy">
                    Pendidikan
                </p>

                <h2 className="mb-12 text-4xl font-bold tracking-tight text-dark md:text-5xl">
                    Education
                </h2>

                <div className="flex flex-col gap-5">
                    {education.map((item) => (
                        <div key={item.school} className="rounded-xl border border-gray-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-light md:p-7">
                            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
                                <div>
                                    <p className="text-sm mb-2 font-medium uppercase tracking-wide text-navy">
                                        {item.level}
                                    </p>

                                    <h3 className="mb-2 text-xl font-semibold text-dark md:text-2xl">
                                        {item.school}
                                    </h3>

                                    {item.major && (
                                        <p className="text-base text-gray-dark">
                                            {item.major}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-sm text-gray-dark">
                                            📍 {item.location}
                                        </span>
                                            •
                                        <span className="text-gray-border">
                                        
                                        <a 
                                            href={item.maps}
                                            target="_blank"
                                            rel="noopener noferrer"
                                            className="text-sm font-medium text-navy no-underline transition-colors duration-200 hover:text-navy-light hover:underline"
                                        >
                                            Lihat di Google Maps
                                        </a>
                                        </span>
                                    </div>
                                </div>

                                <span className="text-sm font-medium text-gray-dark md:pt-1">
                                    {item.period}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default School