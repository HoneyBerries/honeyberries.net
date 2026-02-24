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
  <div class="relative z-10">
    <article class="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <!-- Header -->
      <section>
        <header class="text-center max-w-4xl mx-auto" in:fly={{ y: 20, duration: 500 }}>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span class="accent-text">Gem SMP</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">{GEM_SERVER_CONTENT.tagline}</p>

          <div class="card-glass border-emerald-200 p-6 shadow-lg max-w-2xl mx-auto">
            <p class="font-mono text-lg">
              <span class="font-bold text-gray-900">Server IP:</span>
              <button
                onclick={copyIp}
                class="ml-3 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg font-semibold border border-emerald-300 hover:border-emerald-400 transition-colors"
              >
                {ipCopied ? '✓ Copied!' : GEM_SERVER_CONTENT.ip}
              </button>
            </p>
            <p class="text-gray-600 mt-2">Java 1.21.4+ and Bedrock on port 19132</p>
          </div>
        </header>
      </section>

      <!-- Overview Section -->
      <section in:fly={{ y: 30, duration: 500, delay: 100 }}>
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="card-glass p-8">
            <h2 class="text-2xl font-bold mb-4">Core Concept</h2>
            <p class="text-gray-600 leading-relaxed">{GEM_SERVER_CONTENT.overview.coreConcept}</p>
          </div>
          <div class="card-glass p-8">
            <h2 class="text-2xl font-bold mb-4">Key Features</h2>
            <ul class="space-y-2">
              {#each GEM_SERVER_CONTENT.overview.features as feature}
                <li class="feature-item">
                  <span class="feature-bullet"></span>
                  <span class="text-gray-600">{feature}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Gems Section -->
      <section in:fly={{ y: 30, duration: 500, delay: 200 }}>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Elemental Gems & Abilities</h2>
        <p class="text-gray-600 mb-6">{GEM_SERVER_CONTENT.gemsLead}</p>
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
      </section>

      <!-- Details Section -->
      <section in:fly={{ y: 30, duration: 500, delay: 300 }}>
        <div class="space-y-16">
          <div class="grid lg:grid-cols-2 gap-12">
            <div class="card-glass p-8">
              <h2 class="text-2xl font-bold mb-4">How Gem Crafting Works</h2>
              <ul class="space-y-3">
                {#each GEM_SERVER_CONTENT.gemSteps as step, i}
                  <li class="step-item">
                    <span class="step-number">{i + 1}</span>
                    <span class="text-gray-600">{step}</span>
                  </li>
                {/each}
              </ul>
            </div>
            <div class="card-glass p-8">
              <h2 class="text-2xl font-bold mb-4">Competitive Loop</h2>
              <p class="text-gray-600 leading-relaxed">{GEM_SERVER_CONTENT.competitiveLoop}</p>
            </div>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div class="card-glass p-8">
              <h2 class="text-2xl font-bold mb-4">Rules Snapshot</h2>
              <ul class="space-y-2">
                {#each GEM_SERVER_CONTENT.rules as rule}
                  <li class="feature-item">
                    <span class="feature-bullet"></span>
                    <span class="text-gray-600">{rule}</span>
                  </li>
                {/each}
              </ul>
              <p class="text-sm text-gray-500 mt-2">See full rules in the in-depth server docs.</p>
            </div>
            <div class="card-glass p-8">
              <h2 class="text-2xl font-bold mb-4">Tech & Ops</h2>
              <ul class="space-y-2">
                {#each GEM_SERVER_CONTENT.techSpecs as spec}
                  <li class="feature-item">
                    <span class="feature-bullet"></span>
                    <span class="text-gray-600">{spec}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <!-- CTA -->
          <div class="card-glass p-8 max-w-4xl mx-auto text-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{GEM_SERVER_CONTENT.cta.heading}</h2>
            <p class="text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto">{GEM_SERVER_CONTENT.cta.description}</p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <button
                onclick={copyIp}
                class="btn-primary"
              >
                {ipCopied ? '✓ Copied!' : GEM_SERVER_CONTENT.cta.primaryLabel}
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
        </div>
      </section>
    </article>
  </div>
{/if}
