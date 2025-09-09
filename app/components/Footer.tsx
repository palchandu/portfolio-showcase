import { Github, Linkedin, Mail } from 'lucide-react';
import { container } from './ui/Section';
import type { ISiteSettings } from '~/interface/interface';

export default function Footer({ siteInfo }: { readonly siteInfo: ISiteSettings | undefined }) {
  console.log('Site Info in Footer:', siteInfo);
  const copyright = siteInfo?.copyright ?? '© 2025 Chandra Prakash Pal. All rights reserved.';
  const socialLinks = siteInfo?.socialLinks ?? [];
  return (
    <footer className="py-10 bg-white text-zinc-600 border-t border-zinc-200">
      <div
        className={`${container} flex flex-col md:flex-row items-center justify-between gap-4 text-sm`}>
        <p>{copyright}</p>
        <div className="flex items-center gap-4 text-zinc-700">
          <a
            href={socialLinks.find((link) => link.name === 'Github')?.url}
            target="_blank"
            className="hover:text-black">
            <Github size={18} />
          </a>
          <a
            href={socialLinks.find((link) => link.name === 'Linkedin')?.url}
            target="_blank"
            className="hover:text-black">
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${socialLinks.find((link) => link.name === 'Email')?.url}`}
            className="hover:text-black">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
