import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>

      {/* Menu */}
      <ul
        className={`flex items-center sm:gap-10 gap-3 
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
          md:opacity-100 bg-white/10 backdrop-blur-md 
          md:bg-transparent md:backdrop-blur-none
          px-5 py-3 md:p-4 rounded-2xl md:rounded-none
          transition-all duration-300 md:transition-none
          ${active ? "top-3 opacity-100" : "-top-20 opacity-0"}`}
      >
        <li><a href="#home" className="text-sm sm:text-lg font-medium whitespace-nowrap">Home</a></li>
        <li><a href="#about" className="text-sm sm:text-lg font-medium whitespace-nowrap">About</a></li>
        <li><a href="#project" className="text-sm sm:text-lg font-medium whitespace-nowrap">Project</a></li>
        <li><a href="#contact" className="text-sm sm:text-lg font-medium whitespace-nowrap">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
