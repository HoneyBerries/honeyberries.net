import React from 'react';
import PluginCard from '../../components/PluginCard';
import useModrinth from '../../hooks/useModrinth';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

/**
 * Page showing Modrinth-hosted plugins for HoneyBerries (excludes certain plugins)
 */
export default function MinecraftPlugins() {
  const exclude = [
  ];

  const { projects, loading, error } = useModrinth({ username: 'HoneyBerries', excludeKeywords: exclude });

  return (
    <>
      <SEO
        title="Minecraft Plugins — HoneyBerries"
        description="A collection of Minecraft plugins published by HoneyBerries on Modrinth. Browse plugin details, downloads, and features."
        ogImage="/assets/backgrounds/minecraft-plugin-background.webp"
        pathname="/projects/minecraft-plugins"
      />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Minecraft Plugins</h1>
            <p className="mt-2 text-sm text-gray-600">A collection of public plugins I published on Modrinth.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <div className="col-span-full text-center text-sm text-gray-500">Loading plugins...</div>}
          {error && <div className="col-span-full text-center text-sm text-red-500">Failed to load plugins.</div>}

          {!loading && projects.length === 0 && (
            <div className="col-span-full text-center text-sm text-gray-500">No plugins found.</div>
          )}

          {projects.map((p, idx) => (
            <div
              key={p.slug}
              className="opacity-0 animate-floatIn"
              style={{ animationDelay: `${Math.min(idx * 90, 800)}ms` }}
            >
              <PluginCard project={p} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
