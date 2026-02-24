<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { MODCORD_CONTENT } from '$lib/content';
  import { BACKGROUND_LAYERS, ICON_PATHS } from '$lib/constants';

  let visible = $state(false);

  const iconMap: Record<string, string> = {
    discord: ICON_PATHS.discord,
    github: ICON_PATHS.github,
  };

  onMount(() => {
    visible = true;
  });
</script>

<SEO title="ModCord | HoneyBerries" description={MODCORD_CONTENT.headerLead} pathname="/projects/modcord" />
<GradientBackdrop layers={BACKGROUND_LAYERS.modcord} />

{#if visible}
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <div class="text-center mb-16" in:fly={{ y: 20, duration: 500 }}>
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{MODCORD_CONTENT.headerTitle}</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{MODCORD_CONTENT.headerLead}</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        {#each MODCORD_CONTENT.heroButtons as btn}
          <a
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            class={btn.variant === 'primary'
              ? 'inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md'
              : 'inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors'}
          >
            {#if iconMap[btn.icon]}
              <img src={iconMap[btn.icon]} alt="" class="w-5 h-5 {btn.variant === 'primary' ? 'invert' : ''}" />
            {/if}
            {btn.label}
          </a>
        {/each}
      </div>
    </div>

    <!-- Features Section -->
    <div class="grid md:grid-cols-2 gap-6 mb-16" in:fly={{ y: 30, duration: 500, delay: 100 }}>
      {#each MODCORD_CONTENT.features as feature, i}
        <div
          class="rounded-2xl border border-gray-200 bg-gradient-to-br {feature.gradient} backdrop-blur p-6 transition-transform hover:-translate-y-1 hover:shadow-md"
          in:fly={{ y: 20, duration: 400, delay: 150 + i * 100 }}
        >
          <h3 class="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p class="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      {/each}
    </div>

    <!-- CTA Section -->
    <div class="text-center rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8" in:fly={{ y: 30, duration: 500, delay: 300 }}>
      <h2 class="text-2xl font-bold text-gray-900 mb-3">{MODCORD_CONTENT.cta.heading}</h2>
      <p class="text-gray-600 mb-6 max-w-xl mx-auto">{MODCORD_CONTENT.cta.description}</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        {#each MODCORD_CONTENT.heroButtons as btn}
          <a
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            class={btn.variant === 'primary'
              ? 'inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md'
              : 'inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors'}
          >
            {#if iconMap[btn.icon]}
              <img src={iconMap[btn.icon]} alt="" class="w-5 h-5 {btn.variant === 'primary' ? 'invert' : ''}" />
            {/if}
            {btn.label}
          </a>
        {/each}
      </div>
    </div>
  </section>
{/if}
