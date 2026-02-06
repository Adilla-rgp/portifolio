import React from "react";
import Image from "next/image";
import { Project } from "@/mocks/projectData";
import { FaGithub } from "react-icons/fa"; 

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#602e8d] text-white rounded-lg shadow-lg shadow-black/40 w-full max-h-70 flex overflow-hidden mb-6 relative">
      {/* Ícone GitHub no canto superior esquerdo */}
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 text-white hover:text-gray-300"
      >
        <FaGithub size={24} />
      </a>

      {/* Imagem à esquerda ocupando 40% */}
      <div className="w-[40%] h-full">
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Conteúdo à direita ocupando 60% */}
      <div className="w-[60%] p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl mb-2 font-montserrat font-bold">{project.title}</h3>
          <p className="text-gray-200 text-sm font-roboto font-normal mb-3">{project.description}</p>

          <div className="mb-3">
            <h4 className="font-montserrat font-bold text-sm text-[#40E0D0]">Problem</h4>
            <p className="text-gray-200 font-roboto font-normal text-xs mt-1">{project.problem}</p>
          </div>

          <div className="mb-3">
            <h4 className="font-montserrat font-bold text-sm text-[#FF6F61]">Solution</h4>
            <p className="text-gray-200 font-roboto font-normal text-xs mt-1">{project.solution}</p>
          </div>
        </div>

        <div className="mt-1">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-transparent border font-roboto font-bold border-[#40E0D0] text-[#40E0D0] px-2 py-1 rounded-md text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
