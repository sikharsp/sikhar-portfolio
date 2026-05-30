import foodOrderingImg from "../assets/food-ordering.png";
import StarBorder from "../component/StarBorder";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I've built using modern web technologies.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Project Image Placeholder */}
            <div className="lg:w-1/2">
              <img
  src={foodOrderingImg}
  alt="Food Ordering App"
  className="w-full h-64 object-cover rounded-2xl border border-slate-700"
/>
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">
                Food Ordering App
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                A modern food ordering application where users can
                browse food items, add products to the cart, manage
                orders, and enjoy a responsive user experience.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Responsive Design",
                   "PHP"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-cyan-500/40 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/sikharsp/food-ordering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition"
                >
                  View Code
                </a>

                <a
                  href="https://food-ordering-beta-taupe.vercel.app/"
                target="_blank"
                  className="px-5 py-3 border border-cyan-500 rounded-lg font-medium hover:bg-cyan-500 hover:text-slate-950 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
{/* Coming Soon Card */}
<div className="mt-8 bg-slate-900/30 border border-dashed border-cyan-500/40 rounded-3xl p-10 text-center">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 mb-4">
    🚀 In Progress
  </div>

  <h3 className="text-2xl font-bold mb-3">
    More Projects Coming Soon
  </h3>

  <p className="text-slate-400 max-w-xl mx-auto">
    I'm currently working on new web applications and
    exciting side projects. Stay tuned for more React,
    JavaScript, and full-stack projects.
  </p>

  <div className="flex justify-center gap-3 mt-6">
    <span className="px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-300 text-sm">
      React
    </span>

    <span className="px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-300 text-sm">
      Node.js
    </span>

    <span className="px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-300 text-sm">
      Full Stack
    </span>
  </div>
</div>
    </section>
  );
};

export default Projects;
