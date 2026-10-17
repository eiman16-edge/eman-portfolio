import { Link } from "react-router-dom";
import type { Project } from "../data/projectsData";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, alt, href } = project;
  const linkClass =
    "mt-[18px] inline-block border-b border-ink pb-[3px] text-[13px] font-semibold";

  return (
    <article className="overflow-hidden rounded-[18px] border border-line bg-paper transition-transform duration-[350ms] hover:-translate-y-[5px]">
      <div className="h-310px bg-[#e5e0d6]">
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-[28px]">{title}</h3>
        <p className="max-w-520px text-[14px] text-muted">{description}</p>
        {href.startsWith("/") ? (
          <Link to={href} className={linkClass}>
            View Project ↗
          </Link>
        ) : (
          <a href={href} className={linkClass}>
            View Project ↗
          </a>
        )}
      </div>
    </article>
  );
}
