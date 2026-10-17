import { useState, type FormEvent } from "react";
import Button from "./Button";

const STATUS_MESSAGE =
  "Thanks! Your message has been prepared. Connect the form to your email service to receive submissions.";

const inputClass =
  "w-full rounded-lg border border-line bg-transparent p-[14px_15px] font-[inherit] outline-none focus:border-ink";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(STATUS_MESSAGE);
    event.currentTarget.reset();
  }

  return (
    <form
      id="contactForm"
      className="rounded-[18px] border border-line bg-paper p-[34px]"
      onSubmit={handleSubmit}
    >
      <div className="mb-[18px]">
        <label htmlFor="name" className="mb-[7px] block text-[12px]">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div className="mb-[18px]">
        <label htmlFor="email" className="mb-[7px] block text-[12px]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div className="mb-[18px]">
        <label htmlFor="message" className="mb-[7px] block text-[12px]">
          Tell me about your next project
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Write your message..."
          className={`${inputClass} min-h-[150px] resize-y`}
        />
      </div>
      <Button variant="dark" type="submit">
        Submit ↗
      </Button>
      <p className="mt-[15px] text-[13px] text-muted">{status}</p>
    </form>
  );
}
