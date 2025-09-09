import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getAboutMe, getExperience, getHeroSection, getProjects, getSiteSettings, getTechStack } from "../service/services";
import type { AboutMe, IExperience, HeroSection, ISkill, IProject, ISiteSettings } from "../interface/interface";
import type { Route } from "./+types/home";

export async function loader(args: Route.LoaderArgs) {
  console.log("Loading data for home route",args);
  const heroInfo: HeroSection = await getHeroSection();
  const aboutInfo: AboutMe = await getAboutMe();
  const experienceInfo: IExperience[] = await getExperience();
  const skillsInfo: ISkill[] = await getTechStack();
  const projectInfo: IProject[] = await getProjects();
  const siteInfo: ISiteSettings = await getSiteSettings();
  return { hero: heroInfo, about: aboutInfo, experience: experienceInfo, skills: skillsInfo, projects: projectInfo, site: siteInfo };
}
export default function Page({ loaderData }: Readonly<Route.ComponentProps>) {
  const { hero, about, experience, skills, projects, site } = loaderData ?? { hero: undefined, about: undefined, experience: undefined, skills: undefined, projects: undefined, site: undefined };
  console.log("Loader data in component:", loaderData);
  return (
    <main className="bg-white text-zinc-900 dark:bg-[#0B1220] dark:text-white">
      <Hero heroInfo={hero} />
      <About aboutInfo={about} />
      <Experience experienceInfo={experience} />
      <Skills skillsInfo={skills} />
      <Projects projectsInfo={projects} />
      <Contact />
      <Footer siteInfo={site} />
    </main>
  );
}
