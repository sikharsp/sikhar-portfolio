import profileImg from "../assets/sikharpanthi.jpg";
import SplitText from "../component/SplitText";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-24 gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">

          <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-5">
            👋 Welcome to my Portfolio
          </span>

          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <SplitText
            text="Sikhar Panthi"
            delay={80}
            duration={0.8}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          />

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
            Frontend Developer & React Enthusiast
          </h2>

          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            I create modern, responsive, and user-friendly web applications
            with React, JavaScript, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
              src={profileImg}
              alt="Sikhar Panthi"
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-5 -right-4 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl backdrop-blur-md">
              <p className="text-cyan-400 font-semibold">
                Available for Work 🚀
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
