import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, GraduationCap, Briefcase, Globe, Github, ExternalLink } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'B.Sc Computer Science', value: '2024' },
  { icon: Briefcase, label: 'Featured Projects', value: '2+' },
  { icon: Globe, label: 'Languages', value: '2' },
  { icon: Github, label: 'GitHub Repos', value: '10+' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-bg-primary relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="section-fade text-center mb-16">
          <p className="text-accent-light text-sm font-semibold tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar + decoration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-indigo-400 blur-xl opacity-20 scale-105" />
              {/* Avatar card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border border-[#1e293b] bg-bg-card overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-indigo-600/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-5xl">
                    👨‍💻
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">Snir Ben Nissim</div>
                    <div className="text-accent-light text-sm">CS Software Developer</div>
                    <div className="flex items-center justify-center gap-1 text-slate-500 text-xs mt-1">
                      <MapPin size={11} />
                      <span>Rishon LeZiyyon, Israel</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-xl px-3 py-2 text-white text-xs font-bold shadow-lg shadow-accent/30">
                Open to Work ✓
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a{' '}
                <span className="text-white font-medium">Computer Science graduate</span>{' '}
                from The Academic College of Tel Aviv-Yaffo (2020–2024), analytical and passionate
                about software development. I&apos;m skilled in multiple programming languages
                including Java, C#, C++, Python and JavaScript.
              </p>
              <p>
                I&apos;m known for strong interpersonal skills, quick learning, and a{' '}
                <span className="text-accent-light font-medium">team-first attitude</span>.
                I&apos;ve built real-time web apps with React and multiplayer games with Unity,
                and I thrive in fast-paced environments where quality and collaboration matter.
              </p>
              <p>
                Actively seeking an opportunity to grow as a developer and contribute to
                innovative tech solutions. Hebrew native · English high proficiency.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/snirbennissim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white border border-[#1e293b] hover:border-accent/40 rounded-lg px-4 py-2 transition-all"
              >
                <Github size={15} />
                GitHub Profile
                <ExternalLink size={12} className="text-slate-500" />
              </a>
              <a
                href="/portfolio/resume.pdf"
                download
                className="flex items-center gap-2 text-sm text-white bg-accent hover:bg-accent-dark rounded-lg px-4 py-2 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-bg-card border border-[#1e293b] hover:border-accent/30 transition-all duration-300 glow-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <Icon size={18} className="text-accent-light" />
              </div>
              <div className="text-3xl font-black text-white mb-1">{value}</div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
