import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <div className="w-full h-[59px] bg-slate-50 flex items-center justify-between px-6 md:px-40">
        {/* Logo di kiri */}
        <div className="text-black text-2xl font-bold font-['Poppins']">
          BANTU
        </div>

        {/* Menu di kanan untuk desktop */}
        <div className="hidden md:flex items-center gap-6 text-black text-base font-semibold font-['Poppins']">
          <Link
            to="/jobs"
            className={`hover:text-[#226dc1] ${
              isActive("/jobs") ? "border-b-2 border-[#226dc1]" : ""
            }`}
          >
            Find jobs
          </Link>
          <Link
            to="/recruiters"
            className={`hover:text-[#226dc1] ${
              isActive("/recruiters") ? "border-b-2 border-[#226dc1]" : ""
            }`}
          >
            For recruiters
          </Link>
          <Link
            to="/blog"
            className={`hover:text-[#226dc1] ${
              isActive("/blog") ? "border-b-2 border-[#226dc1]" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/career-tips"
            className={`hover:text-[#226dc1] ${
              isActive("/career-tips") ? "border-b-2 border-[#226dc1]" : ""
            }`}
          >
            Career tips
          </Link>
          <Link
            to="/login"
            className={`px-4 py-1 bg-white rounded-full border-2 border-[#226dc1] text-[#226dc1] font-semibold ${
              isActive("/login") ? "bg-[#226dc1] text-white" : ""
            }`}
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
        <nav className="flex flex-col mt-20 space-y-6 text-center">
          <Link
            to="/jobs"
            className={`text-xl font-semibold text-black hover:text-[#226dc1] ${
              isActive("/jobs") ? "border-b-2 border-[#226dc1]" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Find jobs
          </Link>
          <Link
            to="/recruiters"
            className={`text-xl font-semibold text-black hover:text-[#226dc1] ${
              isActive("/recruiters") ? "border-b-2 border-[#226dc1]" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            For recruiters
          </Link>
          <Link
            to="/blog"
            className={`text-xl font-semibold text-black hover:text-[#226dc1] ${
              isActive("/blog") ? "border-b-2 border-[#226dc1]" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/career-tips"
            className={`text-xl font-semibold text-black hover:text-[#226dc1] ${
              isActive("/career-tips") ? "border-b-2 border-[#226dc1]" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Career tips
          </Link>
          <Link
            to="/login"
            className={`px-4 py-2 bg-[#226dc1] text-white rounded-full font-semibold mx-auto w-40 ${
              isActive("/login") ? "opacity-80" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>

      {/* Overlay untuk menutup sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
