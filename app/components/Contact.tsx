import { Section, H2 } from "./ui/Section";

export default function Contact() {
  return (
    <Section id="contact" className="bg-white text-zinc-900 py-16 md:py-20">
      <H2>Contact</H2>
      <form className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="h-11 px-3 rounded-xl border border-zinc-300"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="h-11 px-3 rounded-xl border border-zinc-300"
            placeholder="you@example.com"
          />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <label className="text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="p-3 rounded-xl border border-zinc-300"
            placeholder="Tell me about your project or role…"
          />
        </div>
        <div className="md:col-span-2">
          <button className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-black text-white hover:bg-zinc-800">
            Send
          </button>
        </div>
      </form>
    </Section>
  );
}
