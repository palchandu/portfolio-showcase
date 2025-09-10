import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import "react";
import { motion } from "framer-motion";
import { Github, Cog, Cloud, Database, Boxes, Monitor, Code2, Linkedin, Mail } from "lucide-react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const API_URL = "http://localhost:1337";
const getHeroSection = async () => {
  try {
    const response = await fetch(`${API_URL}/api/hero-section`);
    return response.json();
  } catch (error) {
    console.error("Error fetching hero section:", error);
    throw error;
  }
};
const getAboutMe = async () => {
  try {
    const response = await fetch(`${API_URL}/api/about-me`);
    return response.json();
  } catch (error) {
    console.error("Error fetching about me section:", error);
    throw error;
  }
};
const getExperience = async () => {
  try {
    const response = await fetch(`${API_URL}/api/experiences`);
    const data = await response.json();
    console.log("Fetched experiences:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching experience section:", error);
    throw error;
  }
};
const getTechStack = async () => {
  try {
    const response = await fetch(`${API_URL}/api/tech-stacks?populate=*`);
    const data = await response.json();
    console.log("Fetched tech stacks:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching tech stack section:", error);
    throw error;
  }
};
const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/api/projects?populate=*`);
    console.log("Fetched projects response:", response);
    const data = await response.json();
    console.log("Fetched projects data:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching projects section:", error);
    throw error;
  }
};
const getSiteSettings = async () => {
  try {
    const response = await fetch(`${API_URL}/api/site-setting`);
    const data = await response.json();
    console.log("Fetched site settings:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    throw error;
  }
};
async function loader$1(args) {
  const siteSetting = await getSiteSettings();
  console.log("Root loader called", args);
  return {
    siteSetting
  };
}
function meta({
  data
}) {
  var _a;
  return ((_a = data == null ? void 0 : data.siteSetting) == null ? void 0 : _a.seoMeta) || {
    title: "Portfolio Showcase",
    description: "Welcome to my portfolio showcase!"
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  loader: loader$1,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const container = "max-w-6xl mx-auto px-4";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
function Section({
  id,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx("section", { id, className, children: /* @__PURE__ */ jsx("div", { className: container, children }) });
}
function H2({
  children,
  sub
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-semibold tracking-tight", children }),
    sub && /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-400 mt-1", children: sub })
  ] });
}
const MotionDiv = motion.div;
function Hero({
  heroInfo
}) {
  console.log("Hero Info:", heroInfo);
  return /* @__PURE__ */ jsx("header", { className: "bg-[#0B1220] text-white border-b border-white/10", children: /* @__PURE__ */ jsxs(Section, { className: "py-16 md:py-24 text-center", children: [
    /* @__PURE__ */ jsx(MotionDiv, { variants: fadeUp, initial: "hidden", animate: "show", children: /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
      "Hi, I'm ",
      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Chandra Prakash Pal" }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: "👋" })
    ] }) }),
    /* @__PURE__ */ jsx(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        animate: "show",
        className: "mt-4",
        children: /* @__PURE__ */ jsx("div", { className: "inline-flex flex-wrap items-center justify-center gap-2 text-sm text-blue-200", children: (heroInfo == null ? void 0 : heroInfo.tags) && heroInfo.tags.length > 0 && heroInfo.tags.map((tag, index) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "px-3 py-1 rounded-full bg-white/5 border border-white/10",
            children: tag.tgs
          },
          index + tag.id
        )) })
      }
    ),
    /* @__PURE__ */ jsx(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        animate: "show",
        className: "max-w-3xl mx-auto mt-5 text-zinc-300",
        children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: (heroInfo == null ? void 0 : heroInfo.intro) ?? "" } })
      }
    ),
    /* @__PURE__ */ jsxs(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        animate: "show",
        className: "mt-8 flex flex-wrap items-center justify-center gap-3",
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: (process.env.VITE_API_URL || "http://localhost:1337" + (heroInfo == null ? void 0 : heroInfo.resumeLink)) ?? "#",
              target: "_blank",
              className: "px-5 h-11 inline-flex items-center rounded-xl bg-white text-[#0B1220] hover:bg-zinc-100",
              rel: "noreferrer",
              children: "View Resume"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "px-5 h-11 inline-flex items-center rounded-xl border border-white/15 hover:bg-white/5",
              children: "Contact Me"
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: (heroInfo == null ? void 0 : heroInfo.githubLink) ?? "#",
              className: "px-5 h-11 inline-flex items-center gap-2 rounded-xl border border-white/15 hover:bg-white/5",
              children: [
                /* @__PURE__ */ jsx(Github, { size: 18 }),
                " GitHub"
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function About({
  aboutInfo
}) {
  return /* @__PURE__ */ jsxs(Section, { id: "about", className: "bg-white text-zinc-900 py-12 md:py-14", children: [
    /* @__PURE__ */ jsx(H2, { children: "About Me" }),
    /* @__PURE__ */ jsxs(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-10", children: [
            (aboutInfo == null ? void 0 : aboutInfo.bio) && /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-zinc-700 text-lg",
                dangerouslySetInnerHTML: { __html: aboutInfo.bio }
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-56 h-56 rounded-xl border border-zinc-200 bg-zinc-100 overflow-hidden mx-auto md:mx-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: (process.env.VITE_API_URL ?? "http://localhost:1337") + (aboutInfo == null ? void 0 : aboutInfo.profile_image) || "https://via.placeholder.com/150",
                alt: "Chandra",
                className: "object-cover"
              }
            ) }) })
          ] }),
          (aboutInfo == null ? void 0 : aboutInfo.philosophy) && /* @__PURE__ */ jsx(
            "blockquote",
            {
              className: "mt-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 italic",
              cite: "https://www.huxley.net/bnw/four.html",
              children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: aboutInfo.philosophy } })
            }
          )
        ]
      }
    )
  ] });
}
function Experience({ experienceInfo }) {
  experienceInfo = experienceInfo == null ? void 0 : experienceInfo.sort((a, b) => a.sequence - b.sequence);
  return /* @__PURE__ */ jsxs(Section, { id: "experience", className: "bg-white text-zinc-900 py-12 md:py-14", children: [
    /* @__PURE__ */ jsx(H2, { children: "Experience" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: experienceInfo && experienceInfo.length > 0 && experienceInfo.map((e, i) => /* @__PURE__ */ jsx(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        className: "rounded-xl border border-zinc-200 bg-white shadow-sm",
        children: /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: e.role }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-zinc-500", children: [
            e.company,
            " | ",
            e.startDate,
            " - ",
            e.endDate ?? "Present"
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5", children: e.description && /* @__PURE__ */ jsx(BlocksRenderer, { content: e.description }) })
        ] })
      },
      e.id
    )) })
  ] });
}
const iconMap = {
  Languages: Code2,
  Frontend: Monitor,
  Backend: Boxes,
  Databases: Database,
  "DevOps & Cloud": Cloud,
  Others: Cog
};
function Skills({ skillsInfo }) {
  skillsInfo = skillsInfo == null ? void 0 : skillsInfo.sort((a, b) => a.sequence - b.sequence);
  return /* @__PURE__ */ jsxs(Section, { id: "skills", className: "bg-[#0B1220] text-white py-16 md:py-20", children: [
    /* @__PURE__ */ jsx(H2, { children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: skillsInfo && skillsInfo.length > 0 && skillsInfo.map((g) => /* @__PURE__ */ jsxs(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        className: "rounded-xl border border-white/10 bg-white/5 p-5",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            (() => {
              const Icon = iconMap[g.name];
              return Icon ? /* @__PURE__ */ jsx(Icon, { className: "text-blue-300", size: 18 }) : null;
            })(),
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: g.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-blue-100/90", children: g.skills && g.skills.length > 0 ? g.skills.map((skill) => skill.name).join(", ") : "No skills listed" })
        ]
      },
      g.name
    )) })
  ] });
}
function Projects({ projectsInfo }) {
  return /* @__PURE__ */ jsxs(Section, { id: "projects", className: "bg-zinc-50 py-16 md:py-20", children: [
    /* @__PURE__ */ jsx(H2, { children: "Projects" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projectsInfo && projectsInfo.length > 0 && projectsInfo.map((p) => /* @__PURE__ */ jsxs(
      MotionDiv,
      {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true },
        className: "rounded-xl border border-zinc-200 bg-white overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-video bg-gradient-to-br from-slate-800 to-slate-700 grid place-content-center text-white/90 text-sm", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: (process.env.VITE_API_URL ?? "http://localhost:1337") + p.images[0].url,
              alt: p.title,
              className: "object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-zinc-600", children: p.short_description && /* @__PURE__ */ jsx(BlocksRenderer, { content: p.short_description }) }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: p.githubLink ?? "#",
                className: "mt-4 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-lg border border-zinc-300 hover:bg-zinc-50",
                children: [
                  /* @__PURE__ */ jsx(Github, { size: 14 }),
                  " GitHub Link"
                ]
              }
            )
          ] })
        ]
      },
      p.title
    )) })
  ] });
}
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required").min(50, "Message must be at least 50 characters long")
});
function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    console.log(data);
    const submitEnquiry = await fetch(
      "https://digital-showcase-62d4b-default-rtdb.asia-southeast1.firebasedatabase.app/enquiries.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : null
      }
    );
    if (submitEnquiry.ok) {
      reset();
      alert("Enquiry submitted successfully");
    } else {
      alert("Failed to submit enquiry");
    }
  };
  console.log(watch("name"));
  console.log(watch("email"));
  console.log(watch("message"));
  console.log(errors);
  return /* @__PURE__ */ jsxs(Section, { id: "contact", className: "bg-white text-zinc-900 py-16 md:py-20", children: [
    /* @__PURE__ */ jsx(H2, { children: "Contact" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "grid md:grid-cols-2 gap-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm", htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            className: "h-11 px-3 rounded-xl border border-zinc-300",
            placeholder: "Your name",
            ...register("name", { required: true })
          }
        ),
        errors.name && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: errors.name.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm", htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            className: "h-11 px-3 rounded-xl border border-zinc-300",
            placeholder: "you@example.com",
            ...register("email", { required: true })
          }
        ),
        errors.email && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 grid gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm", htmlFor: "message", children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            rows: 5,
            className: "p-3 rounded-xl border border-zinc-300",
            placeholder: "Tell me about your project or role…",
            ...register("message", { required: true })
          }
        ),
        errors.message && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: errors.message.message })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-black text-white hover:bg-zinc-800",
          children: "Send"
        }
      ) })
    ] })
  ] });
}
function Footer({ siteInfo }) {
  var _a, _b, _c;
  console.log("Site Info in Footer:", siteInfo);
  const copyright = (siteInfo == null ? void 0 : siteInfo.copyright) ?? "© 2025 Chandra Prakash Pal. All rights reserved.";
  const socialLinks = (siteInfo == null ? void 0 : siteInfo.socialLinks) ?? [];
  return /* @__PURE__ */ jsx("footer", { className: "py-10 bg-white text-zinc-600 border-t border-zinc-200", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${container} flex flex-col md:flex-row items-center justify-between gap-4 text-sm`,
      children: [
        /* @__PURE__ */ jsx("p", { children: copyright }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-zinc-700", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: (_a = socialLinks.find((link) => link.name === "Github")) == null ? void 0 : _a.url,
              target: "_blank",
              className: "hover:text-black",
              children: /* @__PURE__ */ jsx(Github, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: (_b = socialLinks.find((link) => link.name === "Linkedin")) == null ? void 0 : _b.url,
              target: "_blank",
              className: "hover:text-black",
              children: /* @__PURE__ */ jsx(Linkedin, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `mailto:${(_c = socialLinks.find((link) => link.name === "Email")) == null ? void 0 : _c.url}`,
              className: "hover:text-black",
              children: /* @__PURE__ */ jsx(Mail, { size: 18 })
            }
          )
        ] })
      ]
    }
  ) });
}
async function loader(args) {
  console.log("Loading data for home route", args);
  const heroInfo = await getHeroSection();
  const aboutInfo = await getAboutMe();
  const experienceInfo = await getExperience();
  const skillsInfo = await getTechStack();
  const projectInfo = await getProjects();
  const siteInfo = await getSiteSettings();
  return {
    hero: heroInfo,
    about: aboutInfo,
    experience: experienceInfo,
    skills: skillsInfo,
    projects: projectInfo,
    site: siteInfo
  };
}
const home = UNSAFE_withComponentProps(function Page({
  loaderData
}) {
  const {
    hero,
    about,
    experience,
    skills,
    projects,
    site
  } = loaderData ?? {
    hero: void 0,
    about: void 0,
    experience: void 0,
    skills: void 0,
    projects: void 0,
    site: void 0
  };
  console.log("Loader data in component:", loaderData);
  return /* @__PURE__ */ jsxs("main", {
    className: "bg-white text-zinc-900 dark:bg-[#0B1220] dark:text-white",
    children: [/* @__PURE__ */ jsx(Hero, {
      heroInfo: hero
    }), /* @__PURE__ */ jsx(About, {
      aboutInfo: about
    }), /* @__PURE__ */ jsx(Experience, {
      experienceInfo: experience
    }), /* @__PURE__ */ jsx(Skills, {
      skillsInfo: skills
    }), /* @__PURE__ */ jsx(Projects, {
      projectsInfo: projects
    }), /* @__PURE__ */ jsx(Contact, {}), /* @__PURE__ */ jsx(Footer, {
      siteInfo: site
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const notFound = UNSAFE_withComponentProps(function NotFound() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0B1220] text-zinc-900 dark:text-white",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-bold mb-4",
      children: "404 - Page Not Found"
    }), /* @__PURE__ */ jsx("p", {
      className: "mb-8 text-lg text-zinc-500",
      children: "Sorry, the page you are looking for does not exist."
    }), /* @__PURE__ */ jsx("a", {
      href: "/",
      className: "px-5 py-2 rounded-xl bg-black text-white hover:bg-zinc-800",
      children: "Go Home"
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: notFound
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BLb4Mzu9.js", "imports": ["/assets/chunk-PVWAREVJ-DMgj7qrf.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-Cv0zcGMS.js", "imports": ["/assets/chunk-PVWAREVJ-DMgj7qrf.js"], "css": ["/assets/root-BBku7YO2.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CjuCxMDG.js", "imports": ["/assets/chunk-PVWAREVJ-DMgj7qrf.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "not-found": { "id": "not-found", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/not-found-DWB251o6.js", "imports": ["/assets/chunk-PVWAREVJ-DMgj7qrf.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-bd2bbb15.js", "version": "bd2bbb15", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/"];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "not-found": {
    id: "not-found",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
