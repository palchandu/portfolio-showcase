import { MotionDiv, Section, H2, fadeUp } from "./ui/Section";

const experience = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Company Name",
    period: "2019 – Present",
    bullets: [
      "Designed and developed microservices using NestJS and MongoDB handling 1M+ records.",
      "Built CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 40%.",
      "Migrated legacy monolith applications to AWS with Terraform, improving scalability and reducing infra cost by 20%.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Company Name",
    period: "2015 – 2019",
    bullets: [
      "Developed scalable web applications using React, Express, and PostgreSQL.",
      "Implemented role-based authentication and authorization for enterprise apps.",
      "Enhanced performance of critical APIs, reducing response times by 35%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2012 – 2015",
    bullets: [
      "Delivered multiple client-facing applications using JavaScript, jQuery, and Core Java.",
      "Collaborated with cross-functional teams to deliver products on time and within scope.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-white text-zinc-900 py-12 md:py-14">
      <H2>Experience</H2>
      <div className="grid gap-6">
        {experience.map((e, i) => (
          <MotionDiv
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="p-5">
              <h3 className="font-semibold">{e.role}</h3>
              <p className="text-sm text-zinc-500">
                {e.company} | {e.period}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
