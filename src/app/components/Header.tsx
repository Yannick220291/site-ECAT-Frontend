"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.jpeg"; // ton logo importé

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50
        bg-white md:bg-transparent transition-colors
        shadow-md md:shadow-none`}
    >
      {/* Logo + Texte */}
      <div className="flex items-center space-x-3">
        <Image
          src={logo}
          alt="Logo ECAT"
          width={50}
          height={50}
          className="rounded-full border border-white"
        />
        <span className="text-[#17f] md:text-sky-400 text-lg md:text-xl font-bold">
          Université ECAT TARATRA FIANARANTSOA
        </span>
      </div>

      {/* Boutons (grand écran) */}
      <div className="hidden md:flex space-x-4">
        <a
          href="/login"
          className="px-4 py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-gray-200 transition"
        >
          Se connecter
        </a>
        <a
          href="/register"
          className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          S’inscrire
        </a>
      </div>

      {/* Hamburger menu (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-purple-600 focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Menu déroulant responsive */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white rounded-lg shadow-lg flex flex-col w-40">
          <a
            href="/login"
            className="px-4 py-2 text-purple-700 font-semibold hover:bg-gray-100"
          >
            Se connecter
          </a>
          <a
            href="/register"
            className="px-4 py-2 text-purple-700 font-semibold hover:bg-gray-100"
          >
            S’inscrire
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
