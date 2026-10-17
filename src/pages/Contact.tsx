import ContactForm from "../components/ContactForm";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact — Eman Hashimi");

  return (
    <section className="shell grid grid-cols-1 items-start gap-[35px] pt-20 pb-[120px] md:grid-cols-[0.9fr_1.1fr] md:gap-[90px]">
      <div>
        <div className="mb-5 text-[12px] tracking-[4px] uppercase">
          Get in touch
        </div>
        <h1 className="text-[55px] tracking-[-3px] md:text-[70px]">
          Have a project
          <br />
          in mind?
        </h1>
        <p className="mt-[25px] mb-[30px] max-w-[430px] text-muted">
          Have a project in mind or just want to say hello? I’d love to hear
          from you.
        </p>
        <div className="grid gap-3 text-[14px]">
          <a href="mailto:eiman16hashemi@gmail.com">
            ✉ eiman16hashemi@gmail.com
          </a>
          <a href="tel:+93728798265">⌕ +93 728 798 265</a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
