const educationData = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    period: "2024 - Present",
    institution: "Butwal Kalika Campus, Butwal, Rupandehi",
    description:
      "Currently pursuing my BCA degree with a focus on programming, web development, software engineering, and computer applications.",
    status: "Ongoing",
  },
  {
    title: "Higher Secondary Education (+2)",
    period: "2078 - 2080",
    institution: "Kanti Secondary School, Butwal-04, Rupandehi",
    description:
      "Completed higher secondary education with a strong academic foundation and interest in technology and computer science.",
    status: "Completed",
  },
  {
    title: "Secondary Education Examination (SEE)",
    period: "2076 - 2077",
    institution:
      "Shree Jana Jagriti Secondary School, Tilottama-02, Jogikuti, Rupandehi",
    description:
      "Completed secondary education with good academic standing and active participation in school activities.",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            My academic journey and educational background that helped
            shape my knowledge and passion for technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500 ml-4 md:ml-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-2 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950"></div>

              {/* Card */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition duration-300">
                
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Ongoing"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-cyan-400 font-medium mb-2">
                  {item.period}
                </p>

                <p className="text-slate-300 mb-4">
                  {item.institution}
                </p>

                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
