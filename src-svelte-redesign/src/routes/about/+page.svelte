<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { ABOUT_CONTENT } from '$lib/content';
  import { TIMELINE, CURRENT_PROJECTS } from '$lib/data';
  import { BACKGROUND_LAYERS } from '$lib/constants';

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<SEO title="About | HoneyBerries" description={ABOUT_CONTENT.introLead} pathname="/about" />
<GradientBackdrop layers={BACKGROUND_LAYERS.about} />

{#if visible}
  <!-- Intro Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
    <div in:fly={{ y: 20, duration: 500 }}>
      <span class="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {ABOUT_CONTENT.badgeLabel}
      </span>
    </div>

    <h1
      class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
      in:fly={{ y: 20, duration: 500, delay: 100 }}
    >
      {ABOUT_CONTENT.introTitle}
    </h1>

    <p
      class="text-xl text-gray-700 font-medium mb-4"
      in:fly={{ y: 20, duration: 500, delay: 200 }}
    >
      {ABOUT_CONTENT.introLead}
    </p>

    <p
      class="text-base text-gray-600 leading-relaxed"
      in:fly={{ y: 20, duration: 500, delay: 300 }}
    >
      {ABOUT_CONTENT.introBody}
    </p>
  </section>

  <!-- Stats Grid -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {#each ABOUT_CONTENT.stats as stat, i}
        <div
          class="card-glass p-5 text-center"
          in:fly={{ y: 20, duration: 500, delay: 400 + i * 80 }}
        >
          <div class="text-2xl mb-1">{stat.icon}</div>
          <div class="text-2xl font-bold {stat.color}">{stat.value}</div>
          <div class="text-xs text-gray-500 mt-1">{stat.label}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Skills Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each ABOUT_CONTENT.skillCategories as category, i}
        <div
          class="card-glass p-6"
          in:fly={{ y: 20, duration: 500, delay: 500 + i * 100 }}
        >
          <h3 class="text-lg font-semibold text-gray-900 mb-3 pl-3 border-l-4 border-transparent" style="border-image: linear-gradient({category.color}) 1;">
            {category.title}
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each category.skills as skill}
              <span class="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Timeline Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <h2
      class="text-2xl font-bold text-gray-900 mb-8"
      in:fade={{ duration: 400, delay: 600 }}
    >
      My Journey
    </h2>

    <div class="relative pl-8">
      <!-- Vertical line -->
      <div class="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>

      {#each TIMELINE as entry, i}
        <div
          class="relative mb-8 last:mb-0"
          in:fly={{ x: -20, duration: 500, delay: 650 + i * 120 }}
        >
          <!-- Dot -->
          <div class="absolute -left-5 top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow"></div>

          <p class="text-xs text-gray-400 uppercase tracking-wide mb-1">{entry.time}</p>
          <h3 class="text-base font-bold text-gray-900 mb-1">{entry.title}</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            {#if entry.hasLink && entry.linkUrl && entry.linkText}
              {@const parts = entry.desc.split(entry.linkText)}
              {parts[0]}<a href={entry.linkUrl} class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">{entry.linkText}</a>{parts[1] ?? ''}
            {:else}
              {entry.desc}
            {/if}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Current Projects -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div
      class="card-glass p-6"
      in:fly={{ y: 20, duration: 500, delay: 800 }}
    >
      <h2 class="text-lg font-semibold text-gray-900 mb-4">What I'm Working On</h2>
      <ul class="space-y-3">
        {#each CURRENT_PROJECTS as project}
          <li class="flex items-start gap-3 text-sm text-gray-600">
            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></span>
            {project}
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
    <div
      class="text-center"
      in:fade={{ duration: 500, delay: 900 }}
    >
      <p class="text-lg text-gray-700 mb-6">{ABOUT_CONTENT.cta.message}</p>
      <a href={ABOUT_CONTENT.cta.buttonTo} class="btn-primary">
        {ABOUT_CONTENT.cta.buttonLabel}
      </a>
    </div>
  </section>
{/if}
