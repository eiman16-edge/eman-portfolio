import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  variant?: "dark" | "outline";
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "href" | "to"
>;

/** Port of the original .btn / .btn.dark styles. Renders a router Link when `to` is given. */
export default function Button({
  variant = "outline",
  className = "",
  children,
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 border border-ink px-5 py-[13px] rounded-lg text-[13px] font-semibold leading-normal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] ${
    variant === "dark" ? "bg-ink text-white" : "bg-transparent"
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${classes} cursor-pointer`} {...rest}>
      {children}
    </button>
  );
}
