import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import { selectedProjects } from "../data/projectsData";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Home — Eman Hashimi");

  return (
    <>
      <Hero />
      <SkillsSection />
      <section className="shell py-[70px] md:py-[100px]">
        <div className="mb-[42px] flex flex-col items-start gap-[35px] md:flex-row md:items-end md:justify-between md:gap-[30px]">
          <h2 className="text-[48px] tracking-[-2px] md:text-[56px]">
            Selected Work
          </h2>
          <p className="max-w-[420px] text-muted">
            A few projects where I practiced front-end development, responsive
            layouts, UI design, and attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
