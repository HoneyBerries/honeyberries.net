import { useEffect, useState } from 'react';

/**
 * Custom hook for fetching Modrinth projects by username
 * Returns projects sorted by download count, with optional filtering
 * @param {Object} options - Hook options
 * @param {string} options.username - Modrinth username
 * @param {string[]} options.excludeKeywords - Keywords to filter out
 * @returns {Object} { projects, loading, error }
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
        const res = await fetch(
          `https://api.modrinth.com/v2/user/${encodeURIComponent(username)}/projects`,
          { signal: controller.signal }
        );
        
        if (!res.ok) throw new Error(`Modrinth API error: ${res.status}`);
        
        const data = await res.json();

        // Filter out projects matching exclude keywords
        const filtered = data.filter(p => {
          const text = `${p.title} ${p.slug}`.toLowerCase();
          return !excludeKeywords.some(k => text.includes(k.toLowerCase()));
        });

        // Sort by downloads (descending), then by date (newest first)
        function getDownloads(p) {
          const candidates = [p.downloads, p.total_downloads, p.download_count, p.totalDownloads];
          for (const c of candidates) {
            if (c != null && !Number.isNaN(Number(c))) return Number(c);
          }
          return 0;
        }

        function getDate(p) {
          return new Date(p.date_modified || p.updated || p.date_published || 0).getTime();
        }

        filtered.sort((a, b) => {
          const da = getDownloads(a);
          const db = getDownloads(b);
          if (db !== da) return db - da;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, JSON.stringify(excludeKeywords)]);

  return { projects, loading, error };
}
