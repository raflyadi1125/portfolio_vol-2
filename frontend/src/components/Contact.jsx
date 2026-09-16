import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  setIsLoading(true);
  setStatus("");

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      setStatus(data.message);
      return;
    }

    setStatus(data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Error:", error);
    setStatus("Terjadi kesalahan pada server");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="scroll-mt-24 min-h-[80vh] bg-background px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:text-sm">
          Hubungi Saya
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl md:mb-5 md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-7 text-gray-dark sm:text-base sm:leading-8 md:mb-12 md:text-lg">
          Jika kamu ingin berdiskusi mengenai project, kerja sama, atau peluang
          lainnya, jangan ragu untuk menghubungi saya.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-6 sm:gap-7">
            <div>
              <h3 className="mb-1 text-sm font-semibold text-dark sm:text-base">
                Email
              </h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=adirafli0112@gmail.com"
                className="text-sm text-gray-dark no-underline transition-colors duration-200 hover:text-navy sm:text-base"
              >
                My E-Mail
              </a>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold text-dark sm:text-base">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/6285150877963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-dark no-underline transition-colors duration-200 hover:text-navy sm:text-base"
              >
                My WhatsApp
              </a>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold text-dark sm:text-base">
                GitHub
              </h3>
              <a
                href="https://github.com/raflyadi1125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-dark no-underline transition-colors duration-200 hover:text-navy sm:text-base"
              >
                My Github
              </a>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold text-dark sm:text-base">
                Linkedin
              </h3>
              <a
                href="https://www.linkedin.com/in/adi-rafli-116729348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-dark no-underline transition-colors duration-200 hover:text-navy sm:text-base"
              >
                My Linkedin
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama"
              className="box-border w-full rounded-lg border border-gray-border bg-white px-4 py-3 text-sm font-inherit text-dark outline-none transition-all duration-200 placeholder:text-gray-dark focus:border-navy focus:ring-1 focus:ring-navy sm:py-3.5 sm:text-base"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="box-border w-full rounded-lg border border-gray-border bg-white px-4 py-3 text-sm font-inherit text-dark outline-none transition-all duration-200 placeholder:text-gray-dark focus:border-navy focus:ring-1 focus:ring-navy sm:py-3.5 sm:text-base"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan"
              rows={6}
              className="box-border w-full resize-none rounded-lg border border-gray-border bg-white px-4 py-3 text-sm font-inherit text-dark outline-none transition-all duration-200 placeholder:text-gray-dark focus:border-navy focus:ring-1 focus:ring-navy sm:py-3.5 sm:text-base"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg border-0 bg-navy px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60 sm:py-3.5 sm:text-base"
            >
              {isLoading ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {status && <p className="text-sm text-gray-dark">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
