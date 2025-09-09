import type { ISkill } from "~/interface/interface";
import { MotionDiv, Section, H2, fadeUp } from "./ui/Section";
import { Code2, Monitor, Database, Cloud, Cog, Boxes } from "lucide-react";

const iconMap = {
  Languages: Code2,
  Frontend: Monitor,
  Backend: Boxes,
  Databases: Database,
  "DevOps & Cloud": Cloud,
  Others: Cog,
};

export default function Skills({ skillsInfo }: { readonly skillsInfo?: ISkill[] }) {
  skillsInfo = skillsInfo?.sort((a, b) => a.sequence - b.sequence);
  return (
    <Section id="skills" className="bg-[#0B1220] text-white py-16 md:py-20">
      <H2>Skills</H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsInfo &&
          skillsInfo.length > 0 &&
          skillsInfo.map((g) => (
            <MotionDiv
              key={g.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = iconMap[g.name as keyof typeof iconMap];
                  return Icon ? <Icon className="text-blue-300" size={18} /> : null;
                })()}
                <h3 className="font-medium">{g.name}</h3>
              </div>
              <p className="mt-2 text-sm text-blue-100/90">{g.skills && g.skills.length > 0 ? g.skills.map(skill => skill.name).join(", ") : "No skills listed"}</p>
            </MotionDiv>
          ))}
      </div>
    </Section>
  );
}
