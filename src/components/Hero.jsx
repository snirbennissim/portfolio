import { useState, useEffect } from 'react';
import { ChevronsDown, Github, Linkedin, AtSign, MoveRight } from 'lucide-react';

const ROLES = [
  'Full-Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'React & Java Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-metal-950"
    >
      {/* Blueprint grid overlay — slightly stronger in hero */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Single electric blue ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-DEFAULT/5 blur-[100px] pointer-events-none" />

      {/* Scan-line animation */}
      <div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-DEFAULT/40 to-transparent pointer-events-none animate-scan"
        style={{ top: 0 }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in pt-16">

        {/* Terminal prompt bar */}
        <div className="inline-flex items-center gap-2 module-card rounded px-4 py-2 mb-10 with-screws">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="font-mono text-[11px] text-metal-400">
            SBN@workspace:~${' '}
          </span>
          <span className="font-mono text-[11px] text-blue-DEFAULT">
            ./portfolio --mode=interactive
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-metal-50 mb-3 tracking-tight leading-none">
          Snir{' '}
          <span className="gradient-text">Ben Nissim</span>
        </h1>

        {/* Subtitle / role typewriter */}
        <div className="h-10 flex items-center justify-center mb-8">
          <p className="font-mono text-sm sm:text-base text-metal-400">
            <span className="text-blue-DEFAULT">&#62;_</span>
            <span className="ml-2 text-metal-200">{displayed}</span>
            <span className="inline-block w-0.5 h-4 bg-blue-DEFAULT animate-pulse ml-0.5 align-middle" />
          </p>
        </div>

        {/* Bio */}
        <p className="text-metal-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          CS graduate seeking roles in Full-Stack, Frontend & Backend development.
          Skilled in React, Java, C#, Python and JavaScript — known for quick learning
          and a team-first attitude.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-blue flex items-center gap-2 px-6 py-2.5 rounded text-sm"
          >
            <MoveRight size={15} />
            VIEW PROJECTS
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-metal flex items-center gap-2 px-6 py-2.5 rounded text-sm text-metal-200 hover:text-metal-50"
          >
            <AtSign size={15} />
            GET IN TOUCH
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mb-14">
          {[
            { icon: Github,   href: 'https://github.com/snirbennissim',          label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/snir-ben-nissim',   label: 'LinkedIn' },
            { icon: AtSign,   href: 'mailto:snir.ben.n@gmail.com',               label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="btn-metal w-9 h-9 rounded flex items-center justify-center text-metal-400 hover:text-blue-DEFAULT transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-metal-600 hover:text-blue-DEFAULT transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronsDown size={20} />
        </button>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
