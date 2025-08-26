/**
 * Minimal helpers for Modrinth API operations used by the site.
 *
 * We intentionally keep these small and robust: they accept either a project
 * id (uuid) or slug and return a direct file URL for the latest version.
 */

export async function fetchLatestFileUrl({ projectId, slug } = {}) {
  if (!projectId && !slug) throw new Error('projectId or slug required');

  const identifier = projectId || slug;
  const url = `https://api.modrinth.com/v2/project/${encodeURIComponent(identifier)}/version`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Modrinth versions fetch failed: ${res.status}`);

  const versions = await res.json();
  if (!Array.isArray(versions) || versions.length === 0) throw new Error('No versions found');

  // Choose latest version by published date (descending)
  versions.sort((a, b) => new Date(b.date_published || b.date_created || 0) - new Date(a.date_published || a.date_created || 0));
  const latest = versions[0];
  if (!latest.files || latest.files.length === 0) throw new Error('No files available for latest version');

  // Prefer the 'primary' file flag when present
  const primary = latest.files.find(f => f.primary) || latest.files[0];
  if (!primary.url) throw new Error('File URL not present');

  return primary.url;
}
