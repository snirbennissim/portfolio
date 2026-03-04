import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { techStack, categories } from '../data/techStack';
import { useState } from 'react';

export default function TechStack() {
  const ref = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  return (
    <section id="tech" className="py-24 bg-metal-950 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="section-fade mb-12">
          <p className="mono-label mb-2">// SECTION 02 — TECH_STACK</p>
          <h2 className="text-4xl sm:text-5xl font-black text-metal-50 tracking-tight">
            Tool<span className="gradient-text">kit</span>
          </h2>
          <p className="text-metal-400 mt-3 max-w-xl text-sm">
            Technologies I work with to build fast, scalable, and maintainable products.
          </p>
        </div>

        {/* Category toggle switches */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative flex items-center gap-2 px-4 py-1.5 rounded text-xs font-mono tracking-widest transition-all duration-150 ${
                activeCategory === cat
                  ? 'btn-blue'
                  : 'btn-metal text-metal-300 hover:text-metal-50'
              }`}
            >
              {/* Toggle indicator dot */}
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeCategory === cat ? 'bg-metal-900' : 'bg-metal-600'
                }`}
              />
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((tech, i) => (
            <div
              key={tech.name}
              className="module-card with-screws rounded-lg p-4 flex flex-col items-center gap-3 group cursor-default"
            >
              {/* Bottom screws */}
              <span className="absolute bottom-2 left-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
              <span className="absolute bottom-2 right-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />

              {/* Module index */}
              <span className="absolute top-2 right-9 font-mono text-[8px] text-metal-600">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110 metal-surface"
                style={{
                  background: `linear-gradient(180deg, ${tech.color}18, ${tech.color}08)`,
                  border: `1px solid ${tech.color}28`,
                }}
              >
                {tech.icon}
              </div>

              {/* Name & category */}
              <div className="text-center">
                <div className="text-metal-100 text-xs font-semibold">{tech.name}</div>
                <div className="font-mono text-[9px] text-metal-500 tracking-widest mt-0.5">
                  {tech.category.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] text-metal-600 mt-10 text-center tracking-widest">
          // CONTINUOUSLY EXPANDING TOOLKIT
        </p>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
