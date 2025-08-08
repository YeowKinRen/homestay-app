import { useState } from "react";
import { SiCocoapods } from "react-icons/si";
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-theme text-white shadow z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <SiCocoapods />
          <span>Homestay</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#homestay" className="hover:underline">Our Homestay</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#about" className="hover:underline">About Us</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar (desktop only) */}
          <div className="hidden md:flex items-center bg-zinc-800 px-3 py-1 rounded-full">
            <FaSearch className="text-sm mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
            />
          </div>

          {/* Icons */}
          <button className="text-xl hover:text-gray-400 hidden md:block">
            <FaHeart />
          </button>
          <button className="text-xl hover:text-gray-400 hidden md:block">
            <IoIosCall />
          </button>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-theme text-white px-6 py-4 space-y-4 shadow-lg">
          <a href="#home" className="block" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#homestay" className="block" onClick={() => setMenuOpen(false)}>Our Homestay</a>
          <a href="#gallery" className="block" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#about" className="block" onClick={() => setMenuOpen(false)}>About Us</a>
          <div className="flex gap-4 mt-4">
            <FaHeart className="text-xl" />
            <IoIosCall className="text-xl" />
          </div>
        </div>
      )}
    </header>
  );
}
