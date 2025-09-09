import type { IExperience } from '~/interface/interface';
import { MotionDiv, Section, H2, fadeUp } from './ui/Section';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

export default function Experience({ experienceInfo }: { experienceInfo?: IExperience[] }) {
  experienceInfo = experienceInfo?.sort((a, b) => a.sequence - b.sequence);
  return (
    <Section id="experience" className="bg-white text-zinc-900 py-12 md:py-14">
      <H2>Experience</H2>
      <div className="grid gap-6">
        {experienceInfo &&
          experienceInfo.length > 0 &&
          experienceInfo.map((e, i) => (
            <MotionDiv
              key={e.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-200 bg-white shadow-sm">
              <div className="p-5">
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-zinc-500">
                  {e.company} | {e.startDate} - {e.endDate ?? 'Present'}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                  {e.description && <BlocksRenderer content={e.description as BlocksContent} />}
                </ul>
              </div>
            </MotionDiv>
          ))}
      </div>
    </Section>
  );
}
