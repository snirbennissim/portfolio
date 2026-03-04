import { Github, Linkedin, Mail, Download, Heart, Code2 } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/snirbennissim', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/snir-ben-nissim', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:snir.ben.n@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white">snirbennissim</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              CS Graduate & Software Developer building web apps and games with clean code and a team-first attitude.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Download & Socials */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="/portfolio/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
              >
                <Download size={14} />
                Download Resume
              </a>
              <div className="flex gap-3 pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-[#1e293b] flex items-center justify-center text-slate-500 hover:text-white hover:border-accent/40 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {year} Snir Ben Nissim. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs flex items-center gap-1">
            Built with <Heart size={11} className="text-red-500 mx-0.5" /> using React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
