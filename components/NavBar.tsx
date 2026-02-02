"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 py-4 bg-[#5A2D82] bg-opacity-80 text-white relative">
      {/* Logo */}
      <Image src="/traco_logo.svg" alt="Logo" width={160} height={80} />

      {/* Botão hamburguer (mobile) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#5A2D82] md:bg-transparent 
        flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 transition-all duration-300 z-50
        ${isOpen ? "flex" : "hidden"} md:flex`}
      >
        <li><a href="/serviços" className="hover:text-gray-400">Serviços</a></li>
        <li><a href="/projetos" className="hover:text-gray-400">Projetos</a></li>
        <li><a href="/sobre" className="hover:text-gray-400">Sobre</a></li>
        <li><a href="/contato" className="hover:text-gray-400">Contato</a></li>
      </ul>
    </nav>
  );
}