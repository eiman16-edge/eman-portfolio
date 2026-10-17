import group2 from "../assets/images/Group 2.webp";
import group33 from "../assets/images/Group 33.webp";
import group36 from "../assets/images/Group 36 (1).webp";
import group38 from "../assets/images/Group 38 (1).webp";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Internal route ("/projects") or external/placeholder href ("#") */
  href: string;
}

/** Two cards shown in the "Selected Work" section on the home page. */
export const selectedProjects: Project[] = [
  {
    id: "real-estate-website",
    title: "Real Estate Website",
    description:
      "Clean responsive real-estate experience with modern sections and property-focused layouts.",
    image: group38,
    alt: "Real estate",
    href: "/projects",
  },
  {
    id: "beauty-brand",
    title: "Beauty Brand",
    description:
      "A modern beauty and lifestyle concept focused on visual consistency and elegant UI.",
    image: group33,
    alt: "Beauty",
    href: "/projects",
  },
];

/** Full grid shown on the Projects page. */
export const projectsData: Project[] = [
  {
    id: "mentor-directory",
    title: "Mentor Directory",
    description:
      "Front-end practice project. A mentor directory where users can browse mentors, see information, and explore available sessions. Built to practice cards, responsive grids, spacing, HTML and CSS.",
    image: group2,
    alt: "Mentor directory",
    href: "#",
  },
  {
    id: "real-estate-landing-page",
    title: "Real Estate Landing Page",
    description:
      "UI design created in Figma. Includes desktop and mobile layouts, hero section, company information, property catalog, process, testimonials, and contact section.",
    image: group38,
    alt: "Real estate landing page",
    href: "#",
  },
  {
    id: "findit",
    title: "Findit — Real Estate Website",
    description:
      "Front-end practice project built from scratch with navigation, hero, property listings, location section, buying process, testimonials, statistics, blog, and contact CTA.",
    image: group36,
    alt: "Findit",
    href: "#",
  },
  {
    id: "beauty-lifestyle-website",
    title: "Beauty & Lifestyle Website",
    description:
      "Front-end practice project with navigation, hero, product cards, about section, features, blog, and FAQ. Focused on clean, modern and consistent visual design.",
    image: group33,
    alt: "Beauty and lifestyle",
    href: "#",
  },
];
