<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { GEM_SERVER_CONTENT } from '$lib/content';
  import { MINECRAFT_GEMS } from '$lib/data';
  import { BACKGROUND_LAYERS, EXTERNAL_LINKS, ICON_PATHS } from '$lib/constants';

  let visible = $state(false);
  let expandedGems = $state(new Set<string>());
  let ipCopied = $state(false);

  const elementColors: Record<string, string> = {
    air: 'bg-sky-50 border-sky-200',
    fire: 'bg-red-50 border-red-200',
    water: 'bg-blue-50 border-blue-200',
    earth: 'bg-green-50 border-green-200',
    ice: 'bg-cyan-50 border-cyan-200',
    darkness: 'bg-slate-50 border-slate-200',
    light: 'bg-yellow-50 border-yellow-200',
  };

  function toggleGem(id: string) {
    const next = new Set(expandedGems);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    expandedGems = next;
  }

  async function copyIp() {
    try {
      await navigator.clipboard.writeText(GEM_SERVER_CONTENT.ip);
      ipCopied = true;
      setTimeout(() => (ipCopied = false), 2000);
    } catch {
      // Fallback: do nothing
    }
  }

  onMount(() => {
    visible = true;
  });
</script>

<SEO title="Gem SMP | HoneyBerries" description={GEM_SERVER_CONTENT.tagline} pathname="/projects/gem-smp" />
<GradientBackdrop layers={BACKGROUND_LAYERS.minecraftServer} />

{#if visible}
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <div class="text-center mb-16" in:fly={{ y: 20, duration: 500 }}>
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Gem SMP</h1>
      <button
        onclick={copyIp}
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur font-mono text-sm text-gray-800 hover:bg-white/80 transition-colors border border-gray-200 mb-4"
      >
        {GEM_SERVER_CONTENT.ip}
        <span class="text-xs text-gray-500">{ipCopied ? '✓ Copied!' : '📋 Copy'}</span>
      </button>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">{GEM_SERVER_CONTENT.tagline}</p>
    </div>

    <!-- Overview Section -->
    <div class="grid md:grid-cols-2 gap-6 mb-16" in:fly={{ y: 30, duration: 500, delay: 100 }}>
      <div class="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-3">Core Concept</h2>
        <p class="text-gray-600 leading-relaxed">{GEM_SERVER_CONTENT.overview.coreConcept}</p>
      </div>
      <div class="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-3">Key Features</h2>
        <ul class="space-y-2">
          {#each GEM_SERVER_CONTENT.overview.features as feature}
            <li class="flex items-start gap-2 text-gray-600">
              <span class="text-emerald-500 mt-1">●</span>
              {feature}
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Gems Section -->
    <div class="mb-16" in:fly={{ y: 30, duration: 500, delay: 200 }}>
      <p class="text-center text-lg text-gray-600 mb-8">{GEM_SERVER_CONTENT.gemsLead}</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each MINECRAFT_GEMS as gem, i}
          <div
            class="rounded-2xl border p-5 transition-shadow hover:shadow-md {elementColors[gem.color] ?? 'bg-gray-50 border-gray-200'}"
            in:fly={{ y: 20, duration: 400, delay: 250 + i * 80 }}
          >
            <div class="flex items-center gap-3 mb-3">
              <img src={gem.image} alt={gem.name} class="w-12 h-12" />
              <div>
                <h3 class="font-bold text-gray-900">{gem.name}</h3>
                <span class="inline-block text-xs px-2 py-0.5 rounded-full bg-white/80 text-gray-600 border border-gray-200">
                  {gem.element}
                </span>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-2"><span class="font-medium text-gray-700">Passive:</span> {gem.passive}</p>
            {#if expandedGems.has(gem.id)}
              <div transition:slide={{ duration: 200 }}>
                <p class="text-sm text-gray-600"><span class="font-medium text-gray-700">Active:</span> {gem.active}</p>
              </div>
            {/if}
            <button
              onclick={() => toggleGem(gem.id)}
              class="mt-2 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              {expandedGems.has(gem.id) ? 'Show Less' : 'Show More'}
            </button>
          </div>
        {/each}
      </div>
    </div>

    <!-- Details Section -->
    <div class="space-y-6 mb-16" in:fly={{ y: 30, duration: 500, delay: 300 }}>
      <!-- How Gem Crafting Works -->
      <div class="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4">How Gem Crafting Works</h2>
        <ol class="space-y-3">
          {#each GEM_SERVER_CONTENT.gemSteps as step, i}
            <li class="flex items-start gap-3 text-gray-600">
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              {step}
            </li>
          {/each}
        </ol>
      </div>

      <!-- Competitive Loop -->
      <div class="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-3">Competitive Loop</h2>
        <p class="text-gray-600 leading-relaxed">{GEM_SERVER_CONTENT.competitiveLoop}</p>
      </div>

      <!-- Rules -->
      <div class="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Rules</h2>
        <ul class="space-y-2">
          {#each GEM_SERVER_CONTENT.rules as rule}
            <li class="flex items-start gap-2 text-gray-600">
              <span class="text-red-400 mt-1">●</span>
              {rule}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Tech & Ops -->
      <div class="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Tech & Ops</h2>
        <ul class="space-y-2">
          {#each GEM_SERVER_CONTENT.techSpecs as spec}
            <li class="flex items-start gap-2 text-gray-600">
              <span class="text-blue-400 mt-1">●</span>
              {spec}
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8" in:fly={{ y: 30, duration: 500, delay: 400 }}>
      <h2 class="text-2xl font-bold text-gray-900 mb-3">{GEM_SERVER_CONTENT.cta.heading}</h2>
      <p class="text-gray-600 mb-6 max-w-xl mx-auto">{GEM_SERVER_CONTENT.cta.description}</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <button
          onclick={copyIp}
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md"
        >
          {ipCopied ? '✓ Copied!' : 'Copy Server IP'}
        </button>
        <a
          href={GEM_SERVER_CONTENT.cta.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          <img src={ICON_PATHS.discord} alt="" class="w-5 h-5" />
          {GEM_SERVER_CONTENT.cta.discordLabel}
        </a>
      </div>
    </div>
  </section>
{/if}
