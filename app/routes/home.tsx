import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getAboutMe, getHeroSection } from "../service/services";
import type { AboutMe, HeroSection } from "../interface/interface";
import type { Route } from "./+types/home";

export async function loader(args: Route.LoaderArgs) {
  console.log("Loading data for home route",args);
  const heroInfo: HeroSection = await getHeroSection();
  const aboutInfo: AboutMe = await getAboutMe();

  return { hero: heroInfo, about: aboutInfo };
}
export default function Page({ loaderData }: Readonly<Route.ComponentProps>) {
  const { hero, about } = loaderData ?? { hero: undefined, about: undefined };
  return (
    <main className="bg-white text-zinc-900 dark:bg-[#0B1220] dark:text-white">
      <Navbar />
      <Hero heroInfo={hero} />
      <About aboutInfo={about} />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
