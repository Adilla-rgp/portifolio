"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa"; // importando o ícone

export default function Hero() {
  return (
    <section className="bg-[#5A2D82] bg-opacity-80 flex flex-col md:flex-row items-center justify-between px-12 md:px-20 py-12 text-white gap-12">
      
      {/* Lado esquerdo */}
      <div className="md:w-1/3 text-left space-y-4">
        <div className="flex justify-start">
          <Image src="/logo-esquerda.png" alt="Logo esquerda" width={48} height={48} />
        </div>
        <h2 className="text-sm text-[#FF6F61] font-roboto font-semibold">THE CREATIVE SIDE</h2>
        <h3 className="text-6xl font-montserrat font-bold">Design Thinking.</h3>
        <p className="font-roboto font-normal">
          Eu abordo problemas com foco no usuário, garantindo que o software seja funcional, intuitivo e acessível.
        </p>
        <a href="/projetos" className="bg-[#FF6F61] text-white px-4 py-2 rounded hover:bg-[#ff1500] transition-colors duration-300 inline-block">
          Ver Projetos
        </a>
      </div>

      {/* Imagem central redonda */}
      <div className="md:w-1/3 flex justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-transform duration-500 hover:scale-110 hover:brightness-110">
          <Image
            src="/hero.png"
            alt="Imagem central"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
          />
        </div>
      </div>

      {/* Lado direito */}
      <div className="md:w-1/3 text-right space-y-4">
        <div className="flex justify-end">
          <Image src="/logo-direita.png" alt="Logo direita" width={48} height={48} />
        </div>
        <h2 className="text-sm text-[#40E0D0] font-roboto font-semibold">THE ENGINEERING SIDE</h2>
        <h3 className="text-6xl font-bold">Logical Precision.</h3>
        <p className="font-roboto font-normal">
          Construindo aplicações web escaláveis e bem estruturadas com princípios de código limpo e arquitetura robusta.
        </p>
        <a
          href="https://github.com/Adilla-rgp"
          target="_blank"
          className="bg-transparent text-white px-4 py-2 rounded border-2 border-white hover:bg-white hover:text-purple-800 transition-colors duration-300 inline-flex items-center gap-2"
        >
          <FaGithub size={20} />
          Perfil no GitHub
        </a>
      </div>
    </section>
  );
}