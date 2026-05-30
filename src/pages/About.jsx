import ElectricBorder from "../component/ElectricBorder";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I am <span className="text-cyan-400 font-semibold">Sikhar Panthi</span>,
            a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web applications using React
            and Tailwind CSS.
          </p>

          <p className="text-slate-400 mb-8 leading-relaxed">
            I enjoy turning complex problems into simple, beautiful,
            and intuitive interfaces. My goal is to create smooth user
            experiences with clean and maintainable code.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "JavaScript", "UI/UX", "Git", "Responsive Design"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-cyan-500/40 rounded-full text-cyan-300 hover:bg-cyan-500/10 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        {/* RIGHT CONTENT */}
<div className="flex justify-center">
  <ElectricBorder
    color="#ff7da0"
    speed={1}
    chaos={0.12}
    thickness={2}
    style={{ borderRadius: 24 }}
  >
    <div className="w-72 h-72 md:w-96 md:h-96 flex items-center justify-center p-8 text-center bg-slate-900/40 backdrop-blur-md rounded-3xl">

      <p className="text-slate-300 text-lg leading-relaxed">
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
