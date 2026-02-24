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
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
    <div class="text-center mb-16">
      <div in:fly={{ y: 20, duration: 500 }}>
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-sm font-medium text-emerald-700">{ABOUT_CONTENT.badgeLabel}</span>
        </span>
      </div>

      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
        in:fly={{ y: 20, duration: 500, delay: 100 }}
      >
        {ABOUT_CONTENT.introTitle}
      </h1>

      <p
        class="text-xl text-gray-600 mb-6 max-w-3xl mx-auto"
        in:fly={{ y: 20, duration: 500, delay: 200 }}
      >
        {ABOUT_CONTENT.introLead}
      </p>

      <p
        class="text-gray-500 max-w-2xl mx-auto"
        in:fly={{ y: 20, duration: 500, delay: 300 }}
      >
        {ABOUT_CONTENT.introBody}
      </p>
    </div>
  </section>

  <!-- Stats Grid -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <h2
      class="text-3xl font-bold text-gray-900 text-center mb-8"
      in:fade={{ duration: 400, delay: 500 }}
    >
      Skills & Technologies
    </h2>
    <div class="grid md:grid-cols-3 gap-6">
      {#each ABOUT_CONTENT.skillCategories as category, i}
        <div
          class="card-lift p-6"
          in:fly={{ y: 20, duration: 500, delay: 500 + i * 100 }}
        >
          <div class="w-12 h-12 bg-gradient-to-r {category.color} rounded-xl flex items-center justify-center mb-4">
            <span class="text-white font-bold text-lg">{category.title.charAt(0)}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
          <div class="flex flex-wrap gap-2">
            {#each category.skills as skill}
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Timeline Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <h2
      class="text-3xl font-bold text-gray-900 text-center mb-8"
      in:fade={{ duration: 400, delay: 600 }}
    >
      My Journey
    </h2>

    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>

      <div class="space-y-8">
        {#each TIMELINE as entry, i}
          <div
            class="relative card-lift p-6 ml-16"
            in:fly={{ x: -20, duration: 500, delay: 650 + i * 120 }}
          >
            <!-- Dot -->
            <div class="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white"></div>

            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class="text-xl font-bold text-gray-900">{entry.title}</h3>
              <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm shrink-0">{entry.time}</span>
            </div>
            <p class="text-gray-600 leading-relaxed">
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
    </div>
  </section>

  <!-- Current Projects -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <h2
      class="text-3xl font-bold text-gray-900 text-center mb-8"
      in:fade={{ duration: 400, delay: 800 }}
    >
      What I'm Working On
    </h2>
    <div class="grid sm:grid-cols-2 gap-6">
      {#each CURRENT_PROJECTS as project, i}
        <div
          class="card-lift p-6 h-full"
          in:fly={{ y: 20, duration: 500, delay: 800 + i * 80 }}
        >
          <div class="flex items-start gap-3">
            <span class="relative flex h-2 w-2 mt-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p class="text-gray-700 leading-relaxed flex-1">{project}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
    <div
      class="mt-12 text-center"
      in:fade={{ duration: 500, delay: 900 }}
    >
      <p class="text-gray-600 mb-6">{ABOUT_CONTENT.cta.message}</p>
      <a href={ABOUT_CONTENT.cta.buttonTo} class="btn-primary">
        {ABOUT_CONTENT.cta.buttonLabel}
      </a>
    </div>
  </section>
{/if}
