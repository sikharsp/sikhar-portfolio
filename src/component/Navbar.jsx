import { useState } from "react";
import GooeyNav from "../component/GooeyNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <a href="#home" className="hover:text-cyan-400 transition">
            Sikhar<span className="text-cyan-400">.</span>
          </a>
        </h1>

        {/* Desktop Gooey Nav */}
        <div className="hidden md:flex items-center justify-center w-[600px]">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-white transition"></span>
          <span className="h-0.5 w-6 bg-white transition"></span>
          <span className="h-0.5 w-6 bg-white transition"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-5 flex flex-col gap-5 text-white">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
