import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectList from "@/components/projectList";


export default function Home() {
  return (
    <div className="bg-[#5A2D82] min-h-screen">
      <NavBar />
      <Hero />
      <ProjectList />
    </div>
  );
}
