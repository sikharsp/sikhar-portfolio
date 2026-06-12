import foodOrderingImg from "../assets/food-ordering.png";

const Projects = () => {
  const techStack = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "PHP",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Some of the projects I've built using modern web technologies.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <div className="h-56 sm:h-64 lg:h-full">
              <img
                src={foodOrderingImg}
                alt="Food Ordering App"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Food Ordering App
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                A modern food ordering application where users can browse items,
                manage cart, and place orders with a smooth responsive experience.
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs sm:text-sm rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (MODERN STYLE - NOT BIG BUTTONS) */}
              <div className="flex flex-wrap gap-5 text-sm">

                <a
                  href="https://github.com/sikharsp/food-ordering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-4"
                >
                  View Code →
                </a>

                <a
                  href="https://food-ordering-beta-taupe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition underline underline-offset-4"
                >
                  Live Demo →
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-10 bg-slate-900/20 border border-dashed border-cyan-500/30 rounded-2xl p-8 text-center">

          <div className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 mb-3">
            🚀 In Progress
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            More Projects Coming Soon
          </h3>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            I'm working on new React and full-stack projects. Stay tuned for updates.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Projects;
