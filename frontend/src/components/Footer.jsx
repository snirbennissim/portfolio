import { Github, Linkedin, AtSign, HardDrive, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'ABOUT',    href: '#about' },
  { label: 'TECH',     href: '#tech' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT',  href: '#contact' },
];

const socials = [
  { icon: Github,   href: 'https://github.com/snirbennissim',        label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/snir-ben-nissim', label: 'LinkedIn' },
  { icon: AtSign,   href: 'mailto:snir.ben.n@gmail.com',             label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-metal-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="btn-metal w-8 h-8 rounded flex items-center justify-center">
                <Terminal size={13} className="text-blue-DEFAULT" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-metal-100 tracking-widest">SBN.DEV</div>
                <div className="font-mono text-[9px] text-metal-600 tracking-widest">v1.0 — PORTFOLIO</div>
              </div>
            </div>
            <p className="font-mono text-[11px] text-metal-500 leading-relaxed max-w-xs">
              Full-Stack, Frontend & Backend Developer — building web apps and games with clean code and a team-first attitude.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mono-label mb-4">// NAVIGATION</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 group font-mono text-[11px] text-metal-500 hover:text-metal-200 transition-colors"
                  >
                    <span className="text-metal-700 group-hover:text-blue-dim transition-colors">//</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mono-label mb-4">// CONNECT</p>
            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download
                className="btn-blue inline-flex items-center gap-2 px-4 py-2 rounded text-xs"
              >
                <HardDrive size={12} />
                <span className="font-mono tracking-widest">DOWNLOAD RESUME</span>
              </a>
              <div className="flex gap-2 pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="btn-metal w-8 h-8 rounded flex items-center justify-center text-metal-400 hover:text-blue-DEFAULT transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom system bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-metal-600">
            © {year} SNIR BEN NISSIM — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-4 font-mono text-[10px] text-metal-700">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              SYSTEM ONLINE
            </span>
            <span>BUILT WITH REACT + TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
