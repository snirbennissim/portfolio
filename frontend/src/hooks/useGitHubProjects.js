import { useState, useEffect } from 'react';

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'snirbennissim';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';

export function useGitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const headers = {
          Accept: 'application/vnd.github.v3+json',
        };
        if (TOKEN) {
          headers.Authorization = `token ${TOKEN}`;
        }

        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=20&type=public`,
          { headers }
        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = await res.json();

        // Filter out forks, sort by stars then updated date
        const filtered = data
          .filter((repo) => !repo.fork && repo.name !== USERNAME && !['kaplat-ex1-snir-ben-nissim', 'fabricated'].includes(repo.name))
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 9);

        setProjects(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
