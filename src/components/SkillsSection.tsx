const skills = [
  { title: "Clean Design", lines: ["Minimal and intentional", "UI/UX design"] },
  { title: "Responsive", lines: ["Seamless across all", "devices"] },
  {
    title: "Detail Oriented",
    lines: ["Focused on quality and", "user experience"],
  },
  {
    title: "Always Learning",
    lines: ["Explore new tools and", "improving every day"],
  },
];

export default function SkillsSection() {
  return (
    <section className="mx-auto w-full border-t border-black/10 px-6 py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.title}>
            <h3 className="mb-3 text-[1.25rem] font-semibold tracking-[0.02em]">
              {skill.title}
            </h3>
            <ul className="m-0 list-none p-0">
              <li className="relative mb-[0.45rem] pl-[1.1rem] leading-[1.5] text-black before:absolute before:top-[0.55em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-current before:opacity-55 before:content-['']">
                {skill.lines[0]}
                <br />
                {skill.lines[1]}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
