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
    <section id="tech" className="py-24 bg-bg-secondary relative">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="section-fade text-center mb-12">
          <p className="text-accent-light text-sm font-semibold tracking-widest uppercase mb-3">
            My Toolkit
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies I work with to build fast, scalable, and maintainable products.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-bg-card border border-[#1e293b] text-slate-400 hover:text-white hover:border-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-bg-card border border-[#1e293b] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-default glow-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${tech.color}15`, border: `1px solid ${tech.color}30` }}
              >
                {tech.icon}
              </div>
              <div className="text-center">
                <div className="text-white text-sm font-semibold">{tech.name}</div>
                <div className="text-slate-500 text-xs mt-0.5">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 text-sm mt-10">
          ...and always learning more.
        </p>
      </div>
    </section>
  );
}
