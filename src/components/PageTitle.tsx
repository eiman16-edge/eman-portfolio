type PageTitleProps = {
  title: string;
  description: string;
};

/** Shared title block used on the About and Projects pages. */
export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <section className="shell pt-[75px] pb-[50px]">
      <h1 className="text-[55px] tracking-[-3px] md:text-[76px]">{title}</h1>
      <p className="mt-4 max-w-[600px] text-muted">{description}</p>
    </section>
  );
}
