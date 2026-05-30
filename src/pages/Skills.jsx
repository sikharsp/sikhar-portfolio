const skills = [
  "React",
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "PHP",
  "Photoshop",
  "Responsive Design",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, responsive,
            and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/40 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Always Learning 🚀
            </h3>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Technology evolves every day, and I continuously improve
              my skills by building projects, learning new frameworks,
              and exploring modern development practices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
