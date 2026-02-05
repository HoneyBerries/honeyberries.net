import { PluginCard } from '@components/cards';
import useModrinth from '@hooks/useModrinth';
import SEO from '@components/SEO';
import { motion } from 'framer-motion';

const LOADERS = {
  plugin: ['paper', 'spigot', 'purpur', 'bukkit', 'velocity', 'bungeecord', 'waterfall', 'sponge'],
  mod: ['fabric', 'forge', 'quilt', 'neoforge'],
  datapack: ['datapack'],
  resourcepack: ['resourcepack']
};

const EXCLUDED_KEYWORDS = [];

function getProjectKinds(project) {
  const loaders = Array.isArray(project?.loaders) ? project.loaders.map(l => String(l).toLowerCase()) : [];
  const kinds = new Set();

  Object.entries(LOADERS).forEach(([kind, loaderList]) => {
    if (loaders.some(loader => loaderList.includes(loader))) kinds.add(kind);
  });

  const type = String(project?.project_type || project?.projectType || '').toLowerCase();
  if (['datapack', 'resourcepack'].includes(type)) kinds.add(type);

  return Array.from(kinds);
}

const SECTIONS = [
  { key: 'mod', title: 'Mods', description: 'Fabric & Forge mods for Minecraft.', emptyLabel: 'No mods found.' },
  { key: 'plugin', title: 'Plugins', description: 'Server-side plugins for PaperMC and forks.', emptyLabel: 'No plugins found.' },
  { key: 'datapack', title: 'Datapacks', description: 'World and gameplay tweaks via datapacks.', emptyLabel: 'No datapacks found.' },
  { key: 'resourcepack', title: 'Resource Packs', description: 'Cool texture packs for PVP and survival.', emptyLabel: 'No resource packs found.' }
];

/**
 * Minecraft Mods & Plugins page
 * Displays projects from Modrinth categorized by type
 */
export default function MinecraftModsPlugins() {
  const { projects, loading, error } = useModrinth({ username: 'HoneyBerries', excludeKeywords: EXCLUDED_KEYWORDS });

  // Categorize projects
  const categorized = SECTIONS.reduce((acc, { key }) => {
    acc[key] = projects.filter(p => getProjectKinds(p).includes(key));
    return acc;
  }, {});

  return (
    <>
      <SEO
        title="Minecraft Mods & Plugins"
        description="Browse Minecraft mods and plugins published by HoneyBerries on Modrinth, separated into dedicated sections."
        ogImage="/assets/backgrounds/minecraft-plugin-background.webp"
        pathname="/projects/minecraft-mods-plugins"
      />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Minecraft <span className="accent-text">Mods, Plugins</span> & More
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            A collection of my public Minecraft projects on Modrinth, separated into dedicated sections for mods, plugins, datapacks, and resource packs.
          </p>
        </div>

        {error && (
          <div className="mt-6 text-center text-sm text-red-500">
            Failed to load Modrinth projects.
          </div>
        )}

        {SECTIONS.map(section => (
          <Section
            key={section.key}
            {...section}
            loading={loading}
            projects={categorized[section.key] || []}
          />
        ))}
      </section>
    </>
  );
}

function Section({ title, description, loading, projects, emptyLabel }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        {description}
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && (
          <div className="col-span-full text-center text-sm text-gray-500">Loading...</div>
        )}
        {!loading && projects.length === 0 && (
          <div className="col-span-full text-center text-sm text-gray-500">{emptyLabel}</div>
        )}
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.5) }}
          >
            <PluginCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
