import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const MODRINTH_USER = 'HoneyBerries';
const TTL_SECONDS = 60 * 30; // 30 minutes

export const GET: RequestHandler = async ({ setHeaders }) => {
  try {
    const res = await fetch(
      `https://api.modrinth.com/v2/user/${encodeURIComponent(MODRINTH_USER)}/projects`,
      {
        headers: {
          'User-Agent': 'honeyberries.net/1.0 (contact: henry.rainbowfish@gmail.com)'
        }
      }
    );

    if (!res.ok) {
      return json({ error: `Modrinth API returned ${res.status}` }, { status: 502 });
    }

    const data = await res.json();

    const projects = data.map((p: Record<string, unknown>) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      categories: p.categories,
      client_side: p.client_side,
      server_side: p.server_side,
      project_type: p.project_type,
      downloads: p.downloads,
      icon_url: p.icon_url,
      date_created: p.date_created,
      date_modified: p.date_modified,
      loaders: p.loaders
    }));

    projects.sort(
      (
        a: { downloads: number; date_modified: string },
        b: { downloads: number; date_modified: string }
      ) => {
        if (b.downloads !== a.downloads) return b.downloads - a.downloads;
        return new Date(b.date_modified).getTime() - new Date(a.date_modified).getTime();
      }
    );

    setHeaders({
      'Cache-Control': `public, max-age=${TTL_SECONDS}`
    });

    return json(projects);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return json({ error: message }, { status: 502 });
  }
};
