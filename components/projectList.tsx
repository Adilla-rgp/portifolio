import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/mocks/projectData";

export default function ProjectsList() {
  return (
    <section className="bg-[#5A2D82] px-6 py-12">
      {/* Traço + título */}
      <div className="flex items-center justify-start gap-4 mb-8">
        <Image
          src="/traco-cards.png" 
          alt="Decorative line"
          width={80}
          height={4}
          className="object-contain"
        />
        <h2 className="text-white text-3xl font-montserrat font-bold">Featured Projects</h2>
      </div>

      {/* Lista de cards */}
      <div className="flex flex-col gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
