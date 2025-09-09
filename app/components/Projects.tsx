import type { IProject } from '~/interface/interface';
import { MotionDiv, Section, H2, fadeUp } from './ui/Section';
import { Github } from 'lucide-react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

export default function Projects({ projectsInfo }: { readonly projectsInfo: readonly IProject[] }) {
  return (
    <Section id="projects" className="bg-zinc-50 py-16 md:py-20">
      <H2>Projects</H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsInfo &&
          projectsInfo.length > 0 &&
          projectsInfo.map((p) => (
            <MotionDiv
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 grid place-content-center text-white/90 text-sm">
                <img
                  src={(process.env.VITE_API_URL ?? 'http://localhost:1337') + p.images[0].url}
                  alt={p.title}
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {p.short_description && (
                    <BlocksRenderer content={p.short_description as BlocksContent} />
                  )}
                </p>
                <a
                  href={p.githubLink ?? '#'}
                  className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-lg border border-zinc-300 hover:bg-zinc-50">
                  <Github size={14} /> GitHub Link
                </a>
              </div>
            </MotionDiv>
          ))}
      </div>
    </Section>
  );
}
