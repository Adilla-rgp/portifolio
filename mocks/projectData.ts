export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  problem: string;
  solution: string;
  technologies: string[];
  githubLink: string; 
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "FlowState - Productivity Engine",
    description: "Engine minimalista para foco em tarefas com Pomodoro e integração ao GitHub.",
    imageSrc: "/imageWithFallback.png",
    link: "#",
    problem: "Desenvolvedores perdem o foco e sofrem com 'tab fatigue' ao alternar entre ferramentas.",
    solution: "Criado um motor de produtividade com timer Pomodoro e rastreador de atividades do GitHub.",
    technologies: ["NEXT.JS", "SUPABASE", "TAILWIND", "FRAMER MOTION"],
    githubLink: "https://github.com/seuusuario/flowstate" 
  },
  {
    id: 2,
    title: "AlgoViz - Algorithm Sandbox",
    description: "Sandbox interativo para visualizar algoritmos passo a passo.",
    imageSrc: "/projectCard.png",
    link: "#",
    problem: "Algoritmos de ordenação e pathfinding são difíceis de entender sem representação visual.",
    solution: "Construído um ambiente interativo para visualizar execuções de estruturas de dados.",
    technologies: ["REACT", "TYPESCRIPT", "CANVAS API", "ALGORITHMS"],
    githubLink: "https://github.com/seuusuario/algoviz" // exemplo
  },
];

export default projectsData;
