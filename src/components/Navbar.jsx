import { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'ABOUT',    href: '#about' },
  { label: 'TECH',     href: '#tech' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'glass bevel-light shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo — metal badge */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="btn-metal w-8 h-8 rounded flex items-center justify-center">
              <Terminal size={14} className="text-blue-DEFAULT" />
            </div>
            <span className="font-mono text-xs font-semibold text-metal-100 tracking-widest group-hover:text-blue-DEFAULT transition-colors">
              SBN.DEV
            </span>
            <span className="hidden sm:block w-px h-4 bg-metal-600" />
            <span className="hidden sm:block font-mono text-[10px] text-metal-400 tracking-wider">
              v1.0
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="group flex items-center gap-1.5 px-4 py-1.5 rounded transition-all duration-150"
              >
                <span className="font-mono text-[10px] text-metal-600 group-hover:text-blue-dim transition-colors">
                  //
                </span>
                <span className="font-mono text-[11px] font-medium text-metal-300 group-hover:text-metal-50 tracking-widest transition-colors">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status dot */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[10px] text-metal-400">ONLINE</span>
            </div>
            <a
              href="/portfolio/resume.pdf"
              download
              className="btn-blue flex items-center gap-1.5 px-4 py-1.5 rounded text-xs"
            >
              <Download size={12} />
              RESUME
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden btn-metal w-8 h-8 rounded flex items-center justify-center text-metal-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-metal-700/50">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="flex items-center gap-2 w-full text-left px-3 py-2.5 rounded transition-colors hover:bg-metal-800"
              >
                <span className="font-mono text-[10px] text-blue-dim">//</span>
                <span className="font-mono text-xs text-metal-200 tracking-widest">{link.label}</span>
              </button>
            ))}
            <a
              href="/portfolio/resume.pdf"
              download
              className="btn-blue flex items-center justify-center gap-2 w-full py-2 rounded text-xs mt-3"
            >
              <Download size={12} />
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
