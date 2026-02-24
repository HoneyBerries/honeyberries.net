import type { PageServerLoad } from './$types';
import type { ModrinthProject } from '$lib/types';

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const res = await fetch('/api/modrinth/projects');
    if (!res.ok) {
      return { projects: [] as ModrinthProject[], error: 'Failed to load projects' };
    }
    const projects: ModrinthProject[] = await res.json();
    return { projects, error: null };
  } catch {
    return { projects: [] as ModrinthProject[], error: 'Failed to load projects' };
  }
};
