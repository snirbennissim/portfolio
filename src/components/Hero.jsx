import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const ROLES = [
  'Software Developer',
  'React Developer',
  'Java & C# Engineer',
  'CS Graduate',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent-light text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
          Snir{' '}
          <span className="gradient-text">Ben Nissim</span>
        </h1>

        {/* Animated role */}
        <div className="h-12 flex items-center justify-center mb-8">
          <h2 className="text-xl sm:text-3xl font-semibold text-slate-300">
            <span className="text-accent-light">&lt;</span>
            <span className="mx-2">{displayed}</span>
            <span className="inline-block w-0.5 h-6 bg-accent-light animate-pulse ml-0.5 align-middle" />
            <span className="text-accent-light"> /&gt;</span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Motivated CS graduate, analytical and passionate about software development.
          Skilled in Java, C#, Python, JavaScript and React — known for quick learning
          and a team-first attitude.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <ExternalLink size={18} />
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 border border-[#1e293b] hover:border-accent/50 text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 glass"
          >
            <Mail size={18} />
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { icon: Github, href: 'https://github.com/snirbennissim', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/snir-ben-nissim', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:snir.ben.n@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-slate-600 hover:text-slate-400 transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
