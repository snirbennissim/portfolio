import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { Star, GitFork, ExternalLink, Github, Clock, AlertCircle } from 'lucide-react';

const LANG_COLORS = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  Rust: '#CE412B',
  Go: '#00ADD8',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Shell: '#89E051',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#CC342D',
};

function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-bg-card border border-[#1e293b] p-6 animate-pulse">
      <div className="h-4 bg-[#1e293b] rounded mb-4 w-3/4" />
      <div className="h-3 bg-[#1e293b] rounded mb-2" />
      <div className="h-3 bg-[#1e293b] rounded mb-2 w-4/5" />
      <div className="h-3 bg-[#1e293b] rounded w-2/3" />
      <div className="flex gap-3 mt-6">
        <div className="h-6 w-16 bg-[#1e293b] rounded" />
        <div className="h-6 w-16 bg-[#1e293b] rounded" />
      </div>
    </div>
  );
}

function ProjectCard({ repo }) {
  const langColor = LANG_COLORS[repo.language] || '#94a3b8';
  const updatedAt = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="group flex flex-col rounded-2xl bg-bg-card border border-[#1e293b] hover:border-accent/40 p-6 transition-all duration-300 hover:-translate-y-1 glow-hover">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Github size={16} className="text-slate-500 flex-shrink-0" />
          <h3 className="text-white font-semibold text-base group-hover:text-accent-light transition-colors truncate">
            {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
          </h3>
        </div>
        <div className="flex gap-2 flex-shrink-0 ml-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Github size={15} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-slate-500 hover:text-accent-light transition-colors"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
        {repo.description || 'No description provided.'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs text-accent-light bg-accent/10 border border-accent/20 rounded-full px-2 py-0.5"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-[#1e293b]">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={12} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={12} />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Clock size={11} />
          {updatedAt}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollAnimation();
  const { projects, loading, error } = useGitHubProjects();

  return (
    <section id="projects" className="py-24 bg-bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="section-fade text-center mb-16">
          <p className="text-accent-light text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A live feed from my GitHub — the projects I&apos;ve built and maintain.
          </p>
        </div>

        {/* Error state */}
        {error && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8 text-red-400 text-sm max-w-md mx-auto">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>Failed to load projects: {error}</span>
          </div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : projects.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
        </div>

        {/* GitHub CTA */}
        {!loading && (
          <div className="text-center mt-12">
            <a
              href="https://github.com/snirbennissim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1e293b] hover:border-accent/40 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 glass hover:-translate-y-0.5"
            >
              <Github size={16} />
              View All on GitHub
              <ExternalLink size={14} className="text-slate-500" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
