import ElectricBorder from "../component/ElectricBorder";

const About = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "UI/UX",
    "Git",
    "Responsive Design",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5">
            I am <span className="text-cyan-400 font-semibold">Sikhar Panthi</span>,
            a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web applications using React and Tailwind CSS.
          </p>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
            I enjoy turning complex problems into simple, beautiful interfaces.
            My focus is on clean code, smooth UX, and performance-driven design.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">
          <ElectricBorder
            color="#22d3ee"
            speed={1}
            chaos={0.15}
            thickness={2}
            style={{ borderRadius: 24 }}
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center p-6 text-center bg-slate-900/50 backdrop-blur-md rounded-3xl">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                “I build modern web experiences with clean design,
                smooth animations, and user-first thinking.”
              </p>
            </div>
          </ElectricBorder>
        </div>

      </div>
    </section>
  );
};

export default About;
