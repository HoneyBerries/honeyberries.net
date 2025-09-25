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

        // Sort primarily by total downloads (descending). If download counts are equal or missing,
        // fall back to reverse chronological order (most recent first).
        function getDownloads(p) {
          // Modrinth payloads may use different fields: 'downloads', 'total_downloads', or nested counts.
          // Coerce to number and treat non-numeric/missing as 0 so projects without data appear lower.
          const candidates = [p.downloads, p.total_downloads, p.download_count, p.totalDownloads];
          for (const c of candidates) {
            if (c != null && !Number.isNaN(Number(c))) return Number(c);
          }
          // Some projects may include downloads on versions rather than project root; treat as 0 here.
          return 0;
        }

        function getDate(p) {
          return new Date(p.date_modified || p.updated || p.date_published || 0).getTime();
        }

        filtered.sort((a, b) => {
          const da = getDownloads(a);
          const db = getDownloads(b);
          if (db !== da) return db - da; // more downloads first
          // tie-breaker: newer first
          return getDate(b) - getDate(a);
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
    // Using JSON.stringify to create a stable dependency for the array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, JSON.stringify(excludeKeywords)]);

  return { projects, loading, error };
}
