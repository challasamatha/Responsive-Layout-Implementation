import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-img.webp"; // <-- import your logo image

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 shadow-md bg-white">
      {/* Logo (Left side) */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="NZHC Honey Logo"
          className="h-12 w-auto object-contain cursor-pointer"
        />
      </div>

      {/* Desktop Menu (Right side) */}
      <ul className="hidden md:flex gap-10 text-gray-700 font-medium text-lg">
        <li className="cursor-pointer hover:text-purple-800 transition">Home</li>
        <li className="cursor-pointer hover:text-purple-800 transition">Products</li>
        <li className="cursor-pointer hover:text-purple-800 transition">About</li>
        <li className="cursor-pointer hover:text-purple-800 transition">Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col gap-6 text-lg font-medium">
          <a href="#" className="hover:text-purple-800">Home</a>
          <a href="#" className="hover:text-purple-800">Products</a>
          <a href="#" className="hover:text-purple-800">About</a>
          <a href="#" className="hover:text-purple-800">Contact</a>
        </div>
      )}
    </nav>
  );
}


















































