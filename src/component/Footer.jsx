const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Sikhar.
            </h2>

            <p className="text-slate-400 mt-3">
              Frontend Developer passionate about creating
              modern and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-slate-400">
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#education" className="hover:text-cyan-400 transition">
                Education
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex flex-col gap-2 text-slate-400">
              <a
                href="https://github.com/sikharsp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="mailto:contact@sikharpanthi.com.np"
                className="hover:text-cyan-400 transition"
              >
                Email
              </a>

              <span>
                📍 Rupandehi, Nepal
              </span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sikhar Panthi.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 text-cyan-400 hover:text-cyan-300 transition"
          >
            ↑ Back to Top
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
