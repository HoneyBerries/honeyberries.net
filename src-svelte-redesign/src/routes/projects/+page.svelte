<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import { PROJECTS_COPY } from '$lib/content';
  import { PROJECTS } from '$lib/data';
  import { EXTERNAL_LINKS, ICON_PATHS } from '$lib/constants';

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<SEO title="Projects | HoneyBerries" description="Explore projects built by HoneyBerries." pathname="/projects" />

{#if visible}
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10" in:fly={{ y: 20, duration: 500 }}>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900">Projects</h1>
      <a
        href={EXTERNAL_LINKS.githubProfile}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
      >
        <img src={ICON_PATHS.github} alt="" class="w-5 h-5 invert" />
        {PROJECTS_COPY.githubCtaLabel}
      </a>
    </div>

    <!-- Project Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each PROJECTS as project, i}
        <a
          href={project.href}
          class="card-lift overflow-hidden group"
          in:fly={{ y: 30, duration: 500, delay: 100 + i * 120 }}
        >
          <div class="aspect-video overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-5">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
            <p class="text-sm text-gray-600 mb-4">{project.description}</p>
            <span class="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
              View Project <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      {/each}
    </div>
  </section>
{/if}
