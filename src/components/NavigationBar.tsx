import { FaSearch, FaHeart } from 'react-icons/fa';
import { SiCocoapods } from "react-icons/si";
import { IoIosCall } from "react-icons/io";

export default function NavigationBar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-theme text-white shadow z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <SiCocoapods href="#"></SiCocoapods>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#homestay" className="hover:underline">Our Homestay</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#about" className="hover:underline">About Us</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-zinc-800 px-3 py-1 rounded-full">
            <FaSearch className="text-sm mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
            />
          </div>

          {/* Icons */}
          <button className="text-xl hover:text-gray-400">
            <FaHeart />
          </button>
          <button className="text-xl hover:text-gray-400">
            <IoIosCall />
          </button>
        </div>
      </div>
    </header>
  );
}
