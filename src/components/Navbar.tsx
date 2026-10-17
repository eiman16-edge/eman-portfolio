import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About Me", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shell relative flex h-[72px] items-center justify-between md:h-[82px]">
      <Link to="/" className="font-display text-[30px] tracking-[-1px]">
        EH
      </Link>

      <nav
        className={`${open ? "flex" : "hidden"} absolute top-full left-0 right-0 z-10 flex-col items-start gap-5 rounded-[14px] border border-line bg-paper p-[22px] text-[14px] md:static md:flex md:flex-row md:items-center md:gap-[34px] md:rounded-none md:border-0 md:bg-transparent md:p-0`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={"end" in link ? link.end : false}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `relative ${isActive ? "after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-ink after:content-['']" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <span className="hidden md:block">
        <Button to="/contact" variant="dark">
          Let's Connect ↗
        </Button>
      </span>

      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent p-0 text-[25px] leading-none md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        ☰
      </button>
    </header>
  );
}
