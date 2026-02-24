<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import { PROJECTS_COPY } from '$lib/content';
  import { PROJECTS } from '$lib/data';
  import { EXTERNAL_LINKS, ICON_PATHS } from '$lib/constants';
  import { gradientFromSeed } from '$lib/styles';

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<SEO title="Projects | HoneyBerries" description="Explore projects built by HoneyBerries." pathname="/projects" />

{#if visible}
  <section class="max-w-6xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="flex items-end justify-between gap-4" in:fly={{ y: 20, duration: 500 }}>
      <div>
        <h1 class="text-3xl sm:text-4xl font-bold"><span class="accent-text">My Projects</span></h1>
      </div>
      <a
        href={EXTERNAL_LINKS.githubProfile}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors gap-2 group"
      >
        <span class="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
          <img src={ICON_PATHS.github} alt="GitHub" class="w-3 h-3" />
        </span>
        <span>{PROJECTS_COPY.githubCtaLabel}</span>
      </a>
    </div>

    <!-- Project Grid -->
    <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each PROJECTS as project, i}
        <a
          href={project.href}
          class="group block card-hover overflow-hidden h-full"
          in:fly={{ y: 30, duration: 500, delay: 100 + i * 120 }}
        >
          <div class="flex flex-col h-full">
            <!-- Image container -->
            <div class="relative overflow-hidden">
              <div class="aspect-video w-full bg-gray-100">
                {#if project.imageUrl}
                  <img
                    src={project.imageUrl}
                    alt="{project.title} project preview"
                    class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                {:else}
                  <div class="h-full w-full bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100"></div>
                {/if}
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p class="mt-1 text-sm text-gray-600">{project.description}</p>
              </div>
              <div class="mt-6">
                <span
                  class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  style="background: {gradientFromSeed(project.id)}"
                >
                  Click Me
                </span>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>
{/if}
