import { useState, useMemo } from 'react';
import { fetchLatestFileUrl } from '../../lib/modrinth';
import { formatNumber, gradientFromSeed } from '../../lib/utils';
import { Button } from '../ui';

export default function PluginCard({ project }) {
  // Use useMemo to ensure stable seed value across re-renders
  const seed = useMemo(() => 
    project?.slug || project?.title || String(project?.id) || 'fallback',
    [project]
  );
  
  const iconGradient = useMemo(() => gradientFromSeed(seed), [seed]);
  const cardGradient = useMemo(() => gradientFromSeed(seed + 'card'), [seed]);

  if (!project) return null;

  const projectUrl = `https://modrinth.com/project/${project.slug}`;
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
            <div className="shrink-0">
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
                <div className="text-right text-sm text-gray-500 shrink-0">
                  <div className="flex flex-col items-end space-y-1">
                    {downloads != null && <span className="text-gray-700 font-medium">{formatNumber(downloads)} downloads</span>}
                    {followers != null && <span className="text-xs text-gray-400">{formatNumber(followers)} followers</span>}
                    {updated && <span className="text-xs text-gray-400">Updated {new Date(updated).toLocaleDateString()}</span>}
                  </div>
                </div>
              </div>

              <p className="mt-2 text-sm text-gray-600">{project.description || project.short_description || ''}</p>

              <div className="mt-4 flex items-center gap-3 text-sm">
                <Button
                  as="a"
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="success"
                  size="sm"
                  className="whitespace-nowrap justify-center"
                >
                  View
                </Button>

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
    <div className="flex flex-col flex-1 gap-2">
      <Button
        as="button"
        onClick={handleDownload}
        variant="success"
        size="sm"
        disabled={loading}
        className="w-full whitespace-nowrap justify-center"
      >
        {loading ? 'Downloading...' : 'Download'}
      </Button>
      {error && (
        <span className="text-xs text-red-600 text-center" title={error}>
          Error downloading
        </span>
      )}
    </div>
  );
}
