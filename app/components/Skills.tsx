import { MotionDiv, Section, H2, fadeUp } from "./ui/Section";
import { Code2, Monitor, Database, Cloud, Cog, Boxes } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: "JavaScript, TypeScript, Core Java, Python (basic)",
  },
  {
    icon: Monitor,
    title: "Frontend",
    items: "React, React Native, Redux, Zustand",
  },
  {
    icon: Boxes,
    title: "Backend",
    items: "Node.js, NestJS, Express, GraphQL, REST APIs",
  },
  { icon: Database, title: "Databases", items: "PostgreSQL, MongoDB, Redis" },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    items: "AWS (EC2, S3, Lambda, EKS), Docker, Kubernetes, Terraform",
  },
  {
    icon: Cog,
    title: "Others",
    items: "Git, CI/CD, System Design, Microservices",
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-[#0B1220] text-white py-16 md:py-20">
      <H2>Skills</H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <MotionDiv
            key={g.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-3">
              <g.icon className="text-blue-300" size={18} />
              <h3 className="font-medium">{g.title}</h3>
            </div>
            <p className="mt-2 text-sm text-blue-100/90">{g.items}</p>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
