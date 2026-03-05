import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Crosshair, Cpu, Layers, Network, Github, ArrowUpRight, Radar } from 'lucide-react';

const stats = [
  { icon: Cpu,       label: 'B.Sc Computer Science', value: '2024',  sub: 'The Academic College of Tel Aviv-Yaffo' },
  { icon: Layers,    label: 'Featured Projects',     value: '2+',    sub: 'Web & Game Dev' },
  { icon: Radar,     label: 'Military Service',      value: '3 YRS', sub: 'IDF Ordnance Corps' },
  { icon: Network,   label: 'Languages',             value: '2',     sub: 'Hebrew · English' },
];

function Screw() {
  return (
    <span className="absolute w-[7px] h-[7px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
  );
}

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-metal-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div ref={ref} className="section-fade mb-14">
          <p className="mono-label mb-2">// SECTION 01 — ABOUT</p>
          <h2 className="text-4xl sm:text-5xl font-black text-metal-50 tracking-tight">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: ID card (metal module) */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-80">
              {/* Blue ambient glow behind card */}
              <div className="absolute -inset-4 rounded-2xl bg-blue-DEFAULT/5 blur-2xl" />

              {/* Card */}
              <div className="relative module-card with-screws rounded-lg overflow-hidden">
                {/* Top status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-metal-800/80 border-b border-metal-700/50">
                  <span className="font-mono text-[10px] text-metal-400 tracking-widest">OPERATOR ID</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-green-400">ACTIVE</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col items-center gap-4">
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center text-4xl metal-surface bevel"
                    style={{ background: 'linear-gradient(180deg,#2a2a2a,#141414)' }}
                  >
                    👨‍💻
                  </div>
                  <div className="text-center">
                    <div className="text-metal-50 font-bold text-lg mb-0.5">Snir Ben Nissim</div>
                    <div className="font-mono text-xs text-blue-DEFAULT tracking-widest mb-2">
                      FULLSTACK / FRONTEND / BACKEND
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-metal-500 text-xs">
                      <Crosshair size={10} />
                      <span className="font-mono text-[10px]">Rishon LeZiyyon, IL</span>
                    </div>
                  </div>

                  {/* Spec rows */}
                  <div className="w-full space-y-1.5 mt-2">
                    {[
                      ['EDU',  'B.Sc Computer Science'],
                      ['LANG', 'Hebrew · English'],
                      ['SPEC', 'Web & Game Dev'],
                    ].map(([key, val]) => (
                      <div key={key} className="flex gap-3 items-center py-1.5 border-b border-metal-700/40 last:border-0">
                        <span className="font-mono text-[9px] text-metal-500 w-10 flex-shrink-0">{key}</span>
                        <span className="font-mono text-[10px] text-metal-300">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom screws */}
                <Screw />
                <span className="absolute bottom-[8px] left-[8px] w-[7px] h-[7px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
                <span className="absolute bottom-[8px] right-[8px] w-[7px] h-[7px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
              </div>

              {/* Open to work badge */}
              <div className="absolute -bottom-3 -right-3 btn-blue px-3 py-1.5 rounded text-[10px] font-mono font-black tracking-widest">
                OPEN TO HIRE ✓
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div className="space-y-5">
            <div className="space-y-4 text-metal-300 leading-relaxed text-[15px]">
              <p>
                I&apos;m a{' '}
                <span className="text-metal-50 font-semibold">Computer Science graduate</span>{' '}
                from The Academic College of Tel Aviv-Yaffo (2020–2024), analytical and passionate
                about software development. I&apos;m skilled in multiple programming languages
                including Java, C#, C++, Python and JavaScript.
              </p>
              <p>
                Known for strong interpersonal skills, quick learning, and a{' '}
                <span className="text-blue-DEFAULT font-medium">team-first attitude</span>.
                I&apos;ve built real-time web apps with React and multiplayer games with Unity,
                and I thrive in fast-paced environments where quality and collaboration matter.
              </p>
              <p>
                Actively seeking an opportunity to grow as a developer and contribute to
                innovative tech solutions.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/snirbennissim"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metal flex items-center gap-2 px-4 py-2 rounded text-xs text-metal-200 hover:text-metal-50"
              >
                <Github size={13} />
                <span className="font-mono tracking-wider">GITHUB PROFILE</span>
                <ArrowUpRight size={10} className="text-metal-500" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-blue flex items-center gap-2 px-4 py-2 rounded text-xs"
              >
                <span className="font-mono tracking-wider">DOWNLOAD CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16">
          {stats.map(({ icon: Icon, label, value, sub }) => ( // eslint-disable-line no-unused-vars
            <div
              key={label}
              className="module-card with-screws rounded-lg p-5 text-center group"
            >
              <span className="absolute bottom-2 left-2 w-[7px] h-[7px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
              <span className="absolute bottom-2 right-2 w-[7px] h-[7px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
              <div className="w-8 h-8 rounded btn-metal flex items-center justify-center mx-auto mb-3">
                <Icon size={15} className="text-blue-DEFAULT" />
              </div>
              <div className="text-2xl font-black text-metal-50 mb-0.5">{value}</div>
              <div className="font-mono text-[9px] text-metal-400 tracking-widest leading-tight">{label}</div>
              <div className="font-mono text-[9px] text-metal-600 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
