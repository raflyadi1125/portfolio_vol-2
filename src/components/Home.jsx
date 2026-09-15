import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background px-6 py-20"
    >
      <div className="max-w-4xl text-center">

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-navy">
          Welcome to My Portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-dark md:text-7xl">
          Adi Muchamad Rafly
        </h1>

        <p className="mb-6 text-xl font-semibold text-gray-dark md:text-2xl">
          Informatics Engineering Student
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-gray-dark md:text-lg">
          Selamat datang di portfolio saya. Di sini kamu dapat melihat
          pengalaman, project, kemampuan, dan berbagai hal yang saya
          kembangkan selama belajar di bidang teknologi.
        </p>

        <Link
          to="/portfolio"
          viewTransition
          className="inline-block rounded-lg bg-navy px-6 py-3 font-medium text-white no-underline hover:-translate-y-0.5 hover:bg-navy-light"
        >
          Explore Portfolio
        </Link>

      </div>
    </section>
  );
}

export default Home;