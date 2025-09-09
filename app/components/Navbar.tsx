import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { container } from "./ui/Section";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const items = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur">
      <div className={`${container} h-14 flex items-center justify-between`}>
        <span className="font-extrabold text-zinc-300">
          Chandra Prakash Pal
        </span>

        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-white">
              {i.label}
            </a>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-lg hover:bg-white/5"
            aria-label="toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen((o) => !o)}
          aria-label="menu"
        >
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className={`${container} py-3 grid gap-3 text-sm text-zinc-300`}>
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="hover:text-white"
              >
                {i.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
