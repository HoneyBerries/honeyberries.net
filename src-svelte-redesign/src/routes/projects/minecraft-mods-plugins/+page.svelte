<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import { formatNumber } from '$lib/utils';
  import type { ModrinthProject } from '$lib/types';

  let { data } = $props();

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });

  const TYPE_LABELS: Record<string, string> = {
    mod: 'Mods',
    plugin: 'Plugins',
    datapack: 'Data Packs',
    resourcepack: 'Resource Packs',
    shader: 'Shaders'
  };

  const TYPE_ORDER = ['mod', 'plugin', 'datapack', 'resourcepack', 'shader'];

  let sections = $derived.by(() => {
    const grouped = new Map<string, ModrinthProject[]>();
    for (const project of data.projects) {
      const type = project.project_type;
      if (!grouped.has(type)) grouped.set(type, []);
      grouped.get(type)!.push(project);
    }
    return TYPE_ORDER.filter((t) => grouped.has(t)).map((t) => ({
      type: t,
      label: TYPE_LABELS[t] ?? t,
      projects: grouped.get(t)!
    }));
  });

  function modrinthUrl(project: ModrinthProject): string {
    return `https://modrinth.com/${project.project_type}/${project.slug}`;
  }
</script>

<SEO
  title="Minecraft Mods & Plugins | HoneyBerries"
  description="Browse Minecraft mods, plugins, and more by HoneyBerries on Modrinth."
  pathname="/projects/minecraft-mods-plugins"
/>

{#if visible}
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div in:fly={{ y: 20, duration: 500 }}>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Minecraft Mods &amp; Plugins
      </h1>
      <p class="text-lg text-gray-600 mb-12">
        All projects published on
        <a
          href="https://modrinth.com/user/HoneyBerries"
          target="_blank"
          rel="noopener noreferrer"
          class="text-emerald-600 hover:text-emerald-700 font-medium"
        >
          Modrinth
        </a>, fetched live with server-side caching.
      </p>
    </div>

    {#if data.error}
      <div class="text-center py-16" in:fly={{ y: 20, duration: 500 }}>
        <p class="text-gray-500 text-lg mb-2">Something went wrong loading projects.</p>
        <p class="text-sm text-gray-400">Try refreshing the page.</p>
      </div>
    {:else if data.projects.length === 0}
      <div class="text-center py-16" in:fly={{ y: 20, duration: 500 }}>
        <p class="text-gray-500 text-lg">No projects found.</p>
      </div>
    {:else}
      {#each sections as section, si}
        <div class="mb-12" in:fly={{ y: 20, duration: 500, delay: 100 + si * 100 }}>
          <h2 class="text-2xl font-bold text-gray-900 mb-6">{section.label}</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each section.projects as project, pi}
              <a
                href={modrinthUrl(project)}
                target="_blank"
                rel="noopener noreferrer"
                class="card-lift p-5 flex flex-col gap-3"
                in:fly={{ y: 30, duration: 500, delay: 200 + si * 100 + pi * 80 }}
              >
                <div class="flex items-start gap-3">
                  {#if project.icon_url}
                    <img
                      src={project.icon_url}
                      alt=""
                      class="w-12 h-12 rounded-lg flex-shrink-0"
                      loading="lazy"
                    />
                  {:else}
                    <div class="w-12 h-12 rounded-lg bg-gray-100 flex-shrink-0"></div>
                  {/if}
                  <div class="min-w-0">
                    <h3 class="font-semibold text-gray-900 truncate">{project.title}</h3>
                    <p class="text-xs text-gray-500">
                      {formatNumber(project.downloads)} downloads
                    </p>
                  </div>
                </div>
                <p class="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                <div class="flex flex-wrap gap-1 mt-auto">
                  {#each project.categories.slice(0, 4) as cat}
                    <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {cat}
                    </span>
                  {/each}
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/each}
    {/if}
  </section>
{/if}
