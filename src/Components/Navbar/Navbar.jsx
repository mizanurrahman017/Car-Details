import React, { useState } from "react";
import { FaBars, FaTimes, FaCar } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold"
      : "hover:text-red-500 transition duration-200";

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold hover:text-red-500 transition"
          >
            <FaCar className="text-red-500 text-2xl" />
            <span>CarInfo</span>
          </NavLink>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
            <NavLink to="/cars" className={linkStyle}>Cars</NavLink>
            <NavLink to="/brands" className={linkStyle}>Brands</NavLink>
            <NavLink to="/compare" className={linkStyle}>Compare</NavLink>
            {/* <NavLink to="/about" className={linkStyle}>About</NavLink> */}
            <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          </div>

          {/* Mobile Button */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="flex flex-col items-center py-4 gap-4">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
            <NavLink to="/cars" className={linkStyle}>Cars</NavLink>
            <NavLink to="/brands" className={linkStyle}>Brands</NavLink>
            <NavLink to="/compare" className={linkStyle}>Compare</NavLink>
            {/* <NavLink to="/about" className={linkStyle}>About</NavLink> */}
            <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;