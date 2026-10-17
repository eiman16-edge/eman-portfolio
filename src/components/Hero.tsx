import Button from "./Button";
import StackedMockups from "./StackedMockups";

export default function Hero() {
  return (
    <section className="shell grid min-h-[650px] grid-cols-1 items-center gap-10 pt-[35px] pb-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-[48px] md:pt-[55px]">
      <StackedMockups />
      <div>
        <div className="mb-5 text-[12px] tracking-[4px] uppercase">
          Front-end developer
        </div>
        <h1 className="max-w-[600px] text-[62px] tracking-[-4px] md:text-[clamp(58px,7vw,96px)]">
          Eman
          <br />
          Hashimi
        </h1>
        <p className="mt-[25px] mb-8 max-w-[510px] text-[16px] text-[#3f3c37]">
          Front-end developer focused on clean code, structured layouts, and
          building functional digital experiences.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Button to="/projects" variant="dark">
            See my Projects ↗
          </Button>
          <Button to="/contact">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
