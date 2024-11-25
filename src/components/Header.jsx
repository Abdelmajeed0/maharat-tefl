import logo from "../assets/svg/logo.svg";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white flex items-center justify-between h-[96px] px-6 md:px-32 py-2">
      <div className="flex items-center justify-between">
        {/* Left Buttons (Register & Book) */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
            تسجيل
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 text-[18px] rounded-full hover:opacity-80 transition">
            حجز
          </button>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden block text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute  md:static bg-white md:bg-transparent top-[96px] left-0 w-full h-full md:w-auto z-10 flex flex-col md:flex-row md:space-x-6 px-6 md:px-0 transition-all  ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <a
            className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition"
            href="#"
          >
            الرئيسية
          </a>

          <a
            className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition"
            href="#"
          >
            تواصل معنا
          </a>
          <a
            className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition"
            href="#"
          >
            مهارات وذاكره
          </a>
          <a
            className="text-gray-800 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition"
            href="#"
          >
            جلسات اونلاين
          </a>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-4 md:hidden">
            <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              تسجيل
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 text-[18px] rounded-full hover:opacity-80 transition">
              حجز
            </button>
          </div>
        </nav>
      </div>
      {/* Logo */}

      <img
        className="h-16 md:h-12 lg:h-16 w-auto bg-transparent"
        src={logo}
        alt="لولجو موقع مهارة طفل"
      />
    </header>
  );
}
