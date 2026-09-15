function About () {
    return (
        <section id="about" className="min-h-[80vh] flex items-center bg-background px-6 py-20 md:px-12 lg:px-24">
            <div className="max-w-3xl">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-navy">Tentang Saya</p>

                <h2 className="mb-8 text-4xl font-bold tracking-tight text-dark md:text-5xl">About Me</h2>

                <p className="mb-6 text-base leading-8 text-gray-dark md:text-lg">
                    Saya Adi MR, saya mahasiswa Teknik informatika yang memiliki minat untuk memasuki ke dalam dunia teknologi dan pengembangan perangkat lunak.
                </p>

                <p className="mb-6 text-base leading-8 text-gray-dark md:text-lg">
                    Saya memiliki minat terhadap perkembangan website, khususnya frontend. Saya terus mengembangkan kemampuan pemrograman saya dengan cara membuat berbagai project dan mempelajari teknologi yang baru.
                </p>

                <p className="mb-6 text-base leading-8 text-gray-dark md:text-lg">
                    Selain kegiatan akademik, saya juga aktif dalam organisasi mahasiswa dan berbagai kegiatan kampus yang membantu untuk perkembangan saya dari bidang komunikasi, kerja sama tim, dan kepemimpinan.
                </p>
            </div>
        </section>
    )
}

export default About;