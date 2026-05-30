import profileImg from "../assets/sikharpanthi.jpg";
import SplitText from "../component/SplitText";
import Lightning from "../component/Lightning";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden flex items-center pt-16 sm:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Lightning
          hue={260}
          xOffset={0}
          speed={0.8}
          intensity={0.5}
          size={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-6 py-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 text-sm sm:text-base mb-2">
            Hello, I'm
          </p>

          <div className="mb-3 sm:mb-4">
            <SplitText
              text="Sikhar Panthi"
              delay={80}
              duration={0.8}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"
            />
          </div>

          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 mb-4">
            Frontend Developer
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto md:mx-0 mb-6">
            Passionate developer focused on building modern,
            responsive, and user-friendly web applications using React.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-3 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-3 border border-cyan-500 rounded-lg font-medium hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImg}
            alt="Sikhar Panthi"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;