import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "About Me", to: "/about" },
  { label: "My Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-dark py-[45px] text-white">
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 pb-[45px] md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="font-display text-[34px] tracking-[-1px]">EH</div>
            <p className="mt-3.5 max-w-[330px] text-[14px] text-[#aaa]">
              Front-end developer focused on clean code, structured layouts, and
              building functional digital experiences.
            </p>
          </div>
          <div>
            <h4 className="mb-[15px] text-[12px] font-bold tracking-[2px] text-[#ddd] uppercase">
              Explore
            </h4>
            <div className="grid gap-2 text-[14px] text-[#bbb]">
              {exploreLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-[15px] text-[12px] font-bold tracking-[2px] text-[#ddd] uppercase">
              Contact
            </h4>
            <div className="grid gap-2 text-[14px] text-[#bbb]">
              <a href="mailto:eiman16hashemi@gmail.com">
                eiman16hashemi@gmail.com
              </a>
              <a href="tel:+93728798265">+93 728 798 265</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] border-t border-[#333] pt-5 text-[12px] text-[#999] md:flex-row md:justify-between">
          <span>© {currentYear} Eman Hashimi. All rights reserved.</span>
          <div className="flex gap-3.5">
            <a href="https://github.com/eiman16-edge" className="text-white">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eiman-hashemi-5b3806364?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              className="text-white"
            >
              LinkedIn
            </a>
            <a href="#" className="text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
