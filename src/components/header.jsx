import React from "react";
import { Link } from "react-router-dom";

const Header = ({ navigation }) => {
  return (
    <header className="bg-white shadow">
      <div className="w-full h-[59px] bg-slate-50 flex items-center justify-between px-12 md:px-40">
        {/* Logo di kiri */}
        <div className="text-black text-2xl font-bold font-['Poppins']">
          BANTU
        </div>

        {/* Menu di kanan (Dibuat Dinamis) */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-black text-base font-semibold font-['Poppins']">
            {navigation.map((item, index) => (
              <Link key={index} to={item.to} className="hover:text-[#226dc1]">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <a
            href="#"
            className="px-4 py-1 bg-white rounded-full border-2 border-[#226dc1] text-[#226dc1] font-semibold"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
