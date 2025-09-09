import { Github, Linkedin, Mail } from "lucide-react";
import { container } from "./ui/Section";

export default function Footer() {
  return (
    <footer className="py-10 bg-white text-zinc-600 border-t border-zinc-200">
      <div
        className={`${container} flex flex-col md:flex-row items-center justify-between gap-4 text-sm`}
      >
        <p>
          © {new Date().getFullYear()} Chandra Prakash Pal. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4 text-zinc-700">
          <a href="#" className="hover:text-black">
            <Github size={18} />
          </a>
          <a href="#" className="hover:text-black">
            <Linkedin size={18} />
          </a>
          <a href="#" className="hover:text-black">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
