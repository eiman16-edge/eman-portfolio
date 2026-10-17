import PageTitle from "../components/PageTitle";
import { usePageTitle } from "../hooks/usePageTitle";

const timeline = [
  {
    year: "2011 — 2022",
    title: "Kardan Private School",
    description: "High school",
  },
  {
    year: "2023 · 6 months",
    title: "Awareness 360",
    description: "Youth Empowerment",
  },
  {
    year: "2025 — Present",
    title: "IBM Skills / University of People",
    description: "CyberSecurity fundamentals",
  },
  {
    year: "2026 — Present",
    title: "Netlinks / UpSkill",
    description: "Web Development",
  },
];

export default function About() {
  usePageTitle("About Me — Eman Hashimi");

  return (
    <>
      <PageTitle
        title="About Me"
        description="A little about who I am, what I care about, and how I approach front-end development."
      />
      <section className="shell py-[70px] md:py-[100px]">
        <div className="grid grid-cols-1 items-start gap-[35px] md:grid-cols-[1.1fr_0.9fr] md:gap-[90px]">
          <div>
            <h2 className="text-[48px] tracking-[-2px] md:text-[62px]">
              Hey, I am Eman.
            </h2>
            <br />
            <p className="mb-[18px] leading-[1.8] text-[#4f4b45]">
              I am a detail-oriented front-end developer who values structural
              organization and visual clarity.
            </p>
            <p className="mb-[18px] leading-[1.8] text-[#4f4b45]">
              I use Git and GitHub for version control and approach development
              through design thinking to ensure a great user experience.
            </p>
            <p className="mb-[18px] leading-[1.8] text-[#4f4b45]">
              I'm a natural problem-solver who enjoys collaborating with others
              to turn creative ideas into high-quality code.
            </p>
          </div>
          <div className="border-l border-[#aaa59c] pl-[30px]">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative pb-[42px] before:absolute before:-left-[36px] before:top-[7px] before:h-2.5 before:w-2.5 before:rounded-full before:bg-ink before:content-['']"
              >
                <div className="mb-[7px] text-[12px] tracking-[2px] text-muted">
                  {item.year}
                </div>
                <h3 className="mb-[3px] text-[24px]">{item.title}</h3>
                <p className="m-0">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
