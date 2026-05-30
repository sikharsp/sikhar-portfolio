import profileImg from "../assets/sikharpanthi.jpg";
import SplitText from "../component/SplitText";
import Lightning from "../component/Lightning";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden pt-20 md:pt-0"
    >
      {/* Lightning Background */}
      <div className="absolute inset-0">
        <Lightning
          hue={260}
          xOffset={0}
          speed={0.8}
          intensity={0.5}
          size={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 px-6 py-10 md:py-0">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 text-sm sm:text-base md:text-lg mb-2 md:mb-3">
            Hello, I'm
          </p>

          {/* Animated Name */}
          <div className="mb-3 md:mb-4">
            <SplitText
              text="Sikhar Panthi"
              delay={80}
              duration={0.8}
              className="text-3xl sm:text-5xl md:text-7xl font-bold"
            />
          </div>

          {/* Role */}
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-4 md:mb-6">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto md:mx-0 mb-6 md:mb-8">
            Passionate developer focused on building modern,
            responsive, and user-friendly web applications
            using React and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-3 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-3 border border-cyan-500 rounded-lg font-medium hover:bg-cyan-500 transition text-center"
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
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
