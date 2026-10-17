import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Projects() {
  usePageTitle("Projects — Eman Hashimi");

  return (
    <>
      <PageTitle
        title="My Projects"
        description="Front-end practice projects and UI designs where I’ve worked on layouts, responsive design, typography, spacing, and visual details."
      />
      <section className="shell py-[70px] md:py-[100px]">
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
