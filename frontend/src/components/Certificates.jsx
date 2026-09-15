import { useState } from "react";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "Informatika Coding Camp season-4",
      issuer: "Himpunan Mahasiswa Teknik Informatika",
      year: "2024/2025",
      image:
        "/certificates/sertifikat mengikuti kegiatan ICC season 4.png",
    },
    {
      title: "Peringkat-2 Kelas XII IPA A",
      issuer: "Madrasah Aliyah Plus Al-Hikam",
      year: "2024",
      image:
        "/certificates/sertifikat mendapatkan rangking 2.png",
    },
    {
      title: "Panitia Ramadhan Berkah Jilid IX",
      issuer: "Senat Fakultas Teknik",
      year: "2025",
      image:
        "/certificates/sertifikat panitia ramadan berkah jilid 9.jpg",
    },
    {
      title: "Kegiatan Mahasiswa Baru (PKKMB)",
      issuer: "Universitas Islam Nusantara",
      year: "2024",
      image:
        "/certificates/sertifikat mengikuti PKKMB.PNG",
    },
    {
      title: "BootCamp Bahasa Pemrograman C++",
      issuer: "Dilesin",
      year: "2024",
      image:
        "/certificates/sertifikat mengikuti bootcamp tentang C++.jpg",
    },
  ];

  return (
    <>
      <section
        id="certificates"
        className="scroll-mt-24 min-h-[80vh] bg-white px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
            Sertifikasi
          </p>

          <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-12 md:text-5xl">
            Certificates
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <div
                className="overflow-hidden rounded-xl border border-gray-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-navy-light"
                key={certificate.title}
              >
                {/* Foto Sertifikat */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="group block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border-0 bg-gray-100 p-0"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>

                {/* Informasi Sertifikat */}
                <div className="p-5 sm:p-6 md:p-7">
                  <h3 className="mb-3 text-lg font-semibold leading-snug text-dark sm:mb-4 sm:text-xl">
                    {certificate.title}
                  </h3>

                  <p className="mb-2 text-sm text-gray-dark sm:text-base">
                    {certificate.issuer}
                  </p>

                  <span className="block text-sm font-medium text-navy">
                    {certificate.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Foto Sertifikat */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 sm:px-6 sm:py-10"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* Tombol Close */}
          <button
            type="button"
            onClick={() => setSelectedCertificate(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-medium text-dark transition-all duration-200 hover:bg-gray-200 sm:right-5 sm:top-5"
            aria-label="Tutup"
          >
            ×
          </button>

          {/* Foto Besar */}
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-h-[78vh] max-w-full rounded-lg object-contain sm:max-h-[85vh]"
            />

            <p className="mt-3 max-w-full px-10 text-center text-xs font-medium text-white sm:mt-4 sm:px-0 sm:text-sm">
              {selectedCertificate.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;