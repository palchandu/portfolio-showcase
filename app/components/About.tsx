import React from "react";
import type { AboutMe } from "~/interface/interface";
import { MotionDiv, Section, H2, fadeUp } from "./ui/Section";

export default function About({
  aboutInfo,
}: {
  readonly aboutInfo: AboutMe | undefined;
}) {
  return (
    <Section id="about" className="bg-white text-zinc-900 py-12 md:py-14">
      <H2>About Me</H2>
      <MotionDiv
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {aboutInfo?.bio && (
            <div className="flex-1">
              <p
                className="text-zinc-700 text-lg"
                dangerouslySetInnerHTML={{ __html: aboutInfo.bio }}
              />
            </div>
          )}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 rounded-xl border border-zinc-200 bg-zinc-100 overflow-hidden mx-auto md:mx-0">
              <img
                src={
                  (process.env.VITE_API_URL ?? "http://localhost:1337") +
                    aboutInfo?.profile_image ||
                  "https://via.placeholder.com/150"
                }
                alt="Chandra"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {aboutInfo?.philosophy && (
          <blockquote
            className="mt-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 italic"
            cite="https://www.huxley.net/bnw/four.html"
          >
            <span dangerouslySetInnerHTML={{ __html: aboutInfo.philosophy }} />
          </blockquote>
        )}
      </MotionDiv>
    </Section>
  );
}
