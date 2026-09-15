import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    setIsExiting(true);

    setTimeout(() => {
      navigate("/portfolio");
    }, 600);
  };

  return (
    <section
      id="home"
      className={`flex min-h-screen items-center justify-center bg-background px-5 py-16 sm:px-6 sm:py-20 ${
        isExiting ? "page-exit" : ""
      }`}
    >
      <div className="w-full max-w-4xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-navy sm:mb-5 sm:text-sm">
          Welcome to My Portfolio
        </p>

        <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl md:mb-6 md:text-7xl">
          Adi Muchamad Rafly
        </h1>

        <p className="mb-5 text-lg font-semibold text-gray-dark sm:text-xl md:mb-6 md:text-2xl">
          Informatics Engineering Student
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-gray-dark sm:text-base sm:leading-8 md:mb-10 md:text-lg">
          Selamat datang di portfolio saya. Di sini kamu dapat melihat
          pengalaman, project, kemampuan, dan berbagai hal yang saya kembangkan
          selama belajar di bidang teknologi.
        </p>

        <button
          type="button"
          onClick={handleExplore}
          className="inline-block rounded-lg bg-navy px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light sm:px-6 sm:text-base"
        >
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}

export default Home;