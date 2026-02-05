/**
 * Modrinth API helper for fetching project files
 */

/**
 * Fetches the direct file URL of the latest Modrinth version for a given project
 * @param {Object} params - Parameters object
 * @param {string} params.projectId - Project UUID
 * @param {string} params.slug - Project slug
 * @returns {Promise<string>} Direct download URL
 */
export async function fetchLatestFileUrl({ projectId, slug } = {}) {
  if (!projectId && !slug) throw new Error('Either projectId or slug must be provided');

  const identifier = projectId || slug;
  const url = `https://api.modrinth.com/v2/project/${encodeURIComponent(identifier)}/version`;

  let versions;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    versions = await res.json();
  } catch (err) {
    throw new Error(`Failed to fetch Modrinth versions: ${err.message}`);
  }

  if (!Array.isArray(versions) || versions.length === 0) {
    throw new Error('No versions found for this project');
  }

  // Get the latest version by newest date
  const latest = versions.reduce((latestSoFar, current) => {
    const latestDate = new Date(latestSoFar.date_published || latestSoFar.date_created || 0);
    const currentDate = new Date(current.date_published || current.date_created || 0);
    return currentDate > latestDate ? current : latestSoFar;
  });

  if (!latest.files?.length) throw new Error('No files available for the latest version');

  // Return primary file if exists, otherwise first
  const file = latest.files.find(f => f.primary) || latest.files[0];
  if (!file.url) throw new Error('File URL missing in latest version');

  return file.url;
}
