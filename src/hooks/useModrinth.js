import { useEffect, useState } from 'react';

/**
 * Fetches public projects for a Modrinth user and filters out unwanted plugins.
 * Returns { projects, loading, error }
 *
 * Notes:
 * - This is a client-side fetch against Modrinth's public API v2.
 * - We intentionally keep the filtering simple (case-insensitive substring checks)
 *   to avoid needing exact slugs. You can change the `excludeKeywords` list later.
 */
export default function useModrinth({ username = 'HoneyBerries', excludeKeywords = [] } = {}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchProjects() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.modrinth.com/v2/user/${encodeURIComponent(username)}/projects`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Modrinth API error: ${res.status}`);
        const data = await res.json();

        // Filter out projects that match any exclude keyword in title or slug
        const filtered = data.filter(p => {
          const text = `${p.title} ${p.slug}`.toLowerCase();
          return !excludeKeywords.some(k => text.includes(k.toLowerCase()));
        });

        // Sort by reverse chronological order (most recent first)
        filtered.sort((a, b) => {
          const dateA = new Date(a.date_modified || a.updated || a.date_published || 0);
          const dateB = new Date(b.date_modified || b.updated || b.date_published || 0);
          return dateB - dateA;
        });

        setProjects(filtered);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
    return () => controller.abort();
  }, [username, excludeKeywords]);

  return { projects, loading, error };
}
