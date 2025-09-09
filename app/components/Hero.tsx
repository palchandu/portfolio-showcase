import { MotionDiv, fadeUp, Section } from "./ui/Section";
import { Github } from "lucide-react";
import type { HeroSection } from "~/interface/interface";

export default function Hero({
  heroInfo,
}: {
  readonly heroInfo: HeroSection | undefined;
}) {
  console.log("Hero Info:", heroInfo); // Debugging line to check the prop value
  return (
    <header className="bg-[#0B1220] text-white border-b border-white/10">
      <Section className="py-16 md:py-24 text-center">
        <MotionDiv variants={fadeUp} initial="hidden" animate="show">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            
            Hi, I&apos;m <span className="text-white">Chandra Prakash Pal</span>{" "}
            <span className="align-middle">👋</span>
          </h1>
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-blue-200">
            {heroInfo?.tags &&
              heroInfo.tags.length > 0 &&
              heroInfo.tags.map((tag, index) => (
                <span
                  key={index + tag.id}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
                >
                  {tag.tgs}
                </span>
              ))}
          </div>
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto mt-5 text-zinc-300"
        >
          <div dangerouslySetInnerHTML={{ __html: heroInfo?.intro ?? "" }} />
        </MotionDiv>

        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={
              (process.env.VITE_API_URL ||
              "http://localhost:1337" + heroInfo?.resumeLink) ??
              "#"
            }
            target="_blank"
            className="px-5 h-11 inline-flex items-center rounded-xl bg-white text-[#0B1220] hover:bg-zinc-100" rel="noreferrer"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-5 h-11 inline-flex items-center rounded-xl border border-white/15 hover:bg-white/5"
          >
            Contact Me
          </a>
          <a
            href={heroInfo?.githubLink ?? "#"}
            className="px-5 h-11 inline-flex items-center gap-2 rounded-xl border border-white/15 hover:bg-white/5"
          >
            <Github size={18} /> GitHub
          </a>
        </MotionDiv>
      </Section>
    </header>
  );
}
