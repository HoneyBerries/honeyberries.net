import { useState } from 'react';
import { fetchLatestFileUrl } from '../lib/modrinth';

// Simple string hash -> number for deterministic gradients
function hashStringToNumber(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function seededHues(seed) {
  const n = hashStringToNumber(seed || '') % 360;
  const n2 = (n + 60 + (hashStringToNumber(seed + 'b') % 60)) % 360;
  return [n, n2];
}

function gradientFromSeed(seed) {
  const [h1, h2] = seededHues(seed);
  const color1 = `hsl(${h1} 80% 60%)`;
  const color2 = `hsl(${h2} 75% 50%)`;
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
}

function fmtNumber(n) {
  if (n == null) return '';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k';
  return String(n);
}

export default function PluginCard({ project }) {
  if (!project) return null;

  const projectUrl = `https://modrinth.com/project/${project.slug}`;
  const seed = project.slug || project.title || String(project.id) || Math.random().toString();
  const iconGradient = gradientFromSeed(seed);
  const cardGradient = gradientFromSeed(seed + 'card');

  const icon = project.icon_url || project.icon || '';
  const downloads = project.downloads ?? project.total_downloads ?? null;
  const followers = project.followers ?? null;
  const updated = project.date_modified ?? project.updated ?? project.date_published ?? null;

  return (
    <div
      className="block card-hover group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
      style={{ backgroundImage: cardGradient }}
    >
      <div className="p-1">
        <div className="bg-white/95 border border-gray-100 rounded-md">
          <div className="flex gap-4 p-4">
            <div className="flex-shrink-0">
              <div style={{ backgroundImage: iconGradient }} className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center p-1">
                <div className="w-full h-full rounded-md flex items-center justify-center overflow-hidden bg-white/0">
                  {icon ? (
                    <img src={icon} alt={`${project.title} icon`} className="w-full h-full object-contain" loading="lazy" />
                  ) : (
                    <div className="text-white font-semibold text-sm text-center px-2">{project.title}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <div className="text-right text-sm text-gray-500 flex-shrink-0">
                  <div className="flex flex-col items-end space-y-1">
                    {downloads != null && <span className="text-gray-700 font-medium">{fmtNumber(downloads)} downloads</span>}
                    {followers != null && <span className="text-xs text-gray-400">{fmtNumber(followers)} followers</span>}
                    {updated && <span className="text-xs text-gray-400">Updated {new Date(updated).toLocaleDateString()}</span>}
                  </div>
                </div>
              </div>

              <p className="mt-2 text-sm text-gray-600">{project.description || project.short_description || ''}</p>

              <div className="mt-4 flex items-center gap-3 text-sm">
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
                >
                  View
                </a>

                <DownloadButton project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadButton({ project }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleDownload(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const url = await fetchLatestFileUrl({ slug: project.slug, projectId: project.id });
      if (!url) throw new Error('No downloadable file found');
      window.open(url, '_blank', 'noopener');
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col flex-1">
      <button
        onClick={handleDownload}
        className="w-full inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-green-600 text-white shadow-sm hover:bg-green-700 hover:shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? 'Downloading...' : 'Download'}
      </button>
      {error && (
        <span className="text-xs text-red-600 mt-1 text-center" title={error}>
          Error downloading
        </span>
      )}
    </div>
  );
}
