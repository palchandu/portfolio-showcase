import { MotionDiv, Section, H2, fadeUp } from "./ui/Section";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Microservices E-Commerce Platform",
    desc: "Built using NestJS, gRPC, MongoDB, and Redis. Deployed on AWS EKS with Terraform & GitHub Actions. Implemented product variants, stock management, and payment service.",
    img: "/proj-ecom.jpg",
    github: "#",
  },
  {
    title: "CI/CD Pipeline Automation",
    desc: "End-to-end pipeline using GitHub Actions, Docker, and Kubernetes. Auto-deployment of Node.js apps with testing & monitoring integrated.",
    img: "/proj-cicd.jpg",
    github: "#",
  },
  {
    title: "Cloud Infrastructure as Code",
    desc: "Designed AWS infra (VPC, EC2, S3, RDS) using Terraform. Automated scaling and cost-optimized architecture.",
    img: "/proj-iac.jpg",
    github: "#",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-zinc-50 py-16 md:py-20">
      <H2>Projects</H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <MotionDiv
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-xl border border-zinc-200 bg-white overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 grid place-content-center text-white/90 text-sm">
              {/* replace with <img src={p.img} .../> if you have real thumbnails */}
              {p.title}
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
              <a
                href={p.github}
                className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-lg border border-zinc-300 hover:bg-zinc-50"
              >
                <Github size={14} /> GitHub Link
              </a>
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
