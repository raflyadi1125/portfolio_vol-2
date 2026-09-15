function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] bg-background px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-navy">
          Hubungi Saya
        </p>

        <h2 className="text-4xl mb-5 font-bold tracking-tight text-dark md:text-5xl">
          Let's Work Together
        </h2>

        <p className="max-w-2xl leading-8 text-base mb-12 text-gray-dark md:text-lg">
          Jika kamu ingin berdiskusi mengenai project, kerja sama, atau peluang
          lainnya, jangan ragu untuk menghubungi saya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          <div className="flex flex-col gap-7">
            
            <div>
              <h3 className="mb-1 text-base font-semibold text-dark">
                Email
              </h3>
              <a
                href="mailto:adirafli0112@gmail.com"
                className="text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
              >
                adirafli0112@gmail.com
              </a>
            </div>

            <div>
              <h3 className="mb-1 text-base font-semibold text-dark">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/6285150877963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
              >
                085150877963
              </a>
            </div>

            <div>
              <h3 className="mb-1 text-base font-semibold text-dark">
                GitHub
              </h3>
              <a
                href="https://github.com/raflyadi1125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
              >
                github.com/raflyadi1125
              </a>
            </div>

            <div>
              <h3 className="mb-1 text-base font-semibold text-dark">
                Linkedin
              </h3>
              <a
                href="https://www.linkedin.com/in/adi-rafli-116729348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-dark no-underline transition-colors duration-200 hover:text-navy"
              >
                linkedin.com/in/adi-rafli-116729348
              </a>
            </div>

          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nama"
              className="box-border w-full rounded-lg border border-gray-border bg-white px-4 py-3.5 font-inherit text-dark outline-none transition-all duration-200 placeholder:text-gray-dark focus:border-navy focus:ring-1 focus:ring-navy"
            />

            <input
              type="email"
              placeholder="Email"
              className="box-border w-full rounded-lg border border-gray-border bg-white px-4 py-3.5 font-inherit text-dark outline-none transition-all duration-200 placeholder:text-gray-dark focus:border-navy focus:ring-1 focus:ring-navy"
            />

            <textarea
              placeholder="Pesan"
              rows={6}
              className="box-border w-full resize-none rounded-lg border border-gray-border bg-white px-4 py-3.5 font-inherit text-dark outline-none transition-all duration-200 placeholder:text-gray-dark focus:border-navy focus:ring-1 focus:ring-navy"
            ></textarea>

            <button
              type="submit"
              className="rounded-lg border-0 bg-navy px-4 py-3.5 text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light"
            >
              Kirim Pesan
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;