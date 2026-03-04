import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { Zap, GitFork, ArrowUpRight, Github, Gauge, AlertTriangle } from 'lucide-react';

const LANG_COLORS = {
  JavaScript: '#F7DF1E', TypeScript: '#3178C6', Python: '#3776AB',
  Rust: '#CE412B', Go: '#00ADD8', HTML: '#E34F26', CSS: '#1572B6',
  Shell: '#89E051', Java: '#b07219', 'C++': '#f34b7d', 'C#': '#9B4F96',
  C: '#555555', Ruby: '#CC342D',
};

function SkeletonCard() {
  return (
    <div className="module-card with-screws rounded-lg p-5 animate-pulse">
      <span className="absolute bottom-2 left-2 w-[6px] h-[6px] rounded-full bg-metal-700 border border-white/10" />
      <span className="absolute bottom-2 right-2 w-[6px] h-[6px] rounded-full bg-metal-700 border border-white/10" />
      <div className="h-3 bg-metal-700 rounded mb-4 w-3/4" />
      <div className="h-2.5 bg-metal-800 rounded mb-2" />
      <div className="h-2.5 bg-metal-800 rounded mb-2 w-4/5" />
      <div className="h-2.5 bg-metal-800 rounded w-2/3" />
      <div className="flex gap-2 mt-5">
        <div className="h-5 w-14 bg-metal-700 rounded" />
        <div className="h-5 w-14 bg-metal-700 rounded" />
      </div>
    </div>
  );
}

function ProjectCard({ repo, index }) {
  const langColor = LANG_COLORS[repo.language] || '#666';
  const updatedAt = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short', year: 'numeric',
  });
  const moduleId = `MOD-${String(index + 1).padStart(3, '0')}`;

  const blueprintBg = {
    backgroundImage: [
      'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
      'linear-gradient(rgba(0,212,255,0.015) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(0,212,255,0.015) 1px, transparent 1px)',
      'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.15) 100%)',
    ].join(', '),
    backgroundSize: '20px 20px, 20px 20px, 80px 80px, 80px 80px, 100% 100%',
  };

  return (
    <div className="module-card with-screws rounded-lg flex flex-col group" style={blueprintBg}>
      {/* Bottom screws */}
      <span className="absolute bottom-2 left-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />
      <span className="absolute bottom-2 right-2 w-[6px] h-[6px] rounded-full bg-gradient-to-br from-metal-500 to-metal-800 border border-white/10" />

      {/* Module top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-metal-800/60 border-b border-metal-700/40">
        <span className="font-mono text-[9px] text-metal-500 tracking-widest">{moduleId}</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="font-mono text-[9px] text-green-400 tracking-widest">ACTIVE</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title + links */}
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="text-metal-100 font-semibold text-sm group-hover:text-blue-DEFAULT transition-colors capitalize leading-tight">
            {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-metal-500 hover:text-metal-200 transition-colors"
            >
              <Github size={14} />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="text-metal-500 hover:text-blue-DEFAULT transition-colors"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-metal-400 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
          {repo.description || '// no description provided'}
        </p>

        {/* Topics */}
        {repo.topics?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="font-mono text-[9px] text-blue-dim bg-blue-DEFAULT/8 border border-blue-DEFAULT/20 rounded px-2 py-0.5 tracking-widest"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer metadata */}
        <div className="flex items-center gap-3 text-[10px] font-mono text-metal-500 pt-3 border-t border-metal-700/40">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Zap size={10} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={10} />
            {repo.forks_count}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Gauge size={10} />
            {updatedAt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollAnimation();
  const { projects, loading, error } = useGitHubProjects();

  return (
    <section id="projects" className="py-24 bg-metal-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="section-fade mb-14">
          <p className="mono-label mb-2">// SECTION 03 — PROJECTS</p>
          <h2 className="text-4xl sm:text-5xl font-black text-metal-50 tracking-tight">
            Deployed <span className="gradient-text">Modules</span>
          </h2>
          <p className="text-metal-400 mt-3 max-w-xl text-sm">
            Live feed from GitHub — projects I&apos;ve built and maintain.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded p-4 mb-8 text-red-400 text-xs font-mono max-w-md">
            <AlertTriangle size={14} className="flex-shrink-0" />
            ERR: {error}
          </div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : projects.map((repo, i) => <ProjectCard key={repo.id} repo={repo} index={i} />)}
        </div>

        {/* CTA */}
        {!loading && (
          <div className="mt-10">
            <a
              href="https://github.com/snirbennissim"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metal inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs text-metal-200 hover:text-metal-50"
            >
              <Github size={14} />
              <span className="font-mono tracking-widest">VIEW ALL REPOSITORIES</span>
              <ArrowUpRight size={11} className="text-metal-500" />
            </a>
          </div>
        )}
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
