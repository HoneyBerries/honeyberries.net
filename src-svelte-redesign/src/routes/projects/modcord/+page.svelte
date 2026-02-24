<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { MODCORD_CONTENT } from '$lib/content';
  import { BACKGROUND_LAYERS, ICON_PATHS, EXTERNAL_LINKS } from '$lib/constants';
  import { GRADIENTS } from '$lib/styles';

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
  <div class="relative z-10">
    <article class="max-w-6xl mx-auto px-4 py-12">
      <!-- Header -->
      <header class="text-center mb-16 max-w-4xl mx-auto" in:fly={{ y: 20, duration: 500 }}>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Modcord: <span class="accent-text">Smart AI Moderation</span> for Your Discord Server
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">{MODCORD_CONTENT.headerLead}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {#each MODCORD_CONTENT.heroButtons as btn}
            <a
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              class={btn.variant === 'primary'
                ? 'btn-primary rounded-lg whitespace-nowrap gap-2'
                : 'inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors whitespace-nowrap'}
              style={btn.variant === 'primary' && btn.gradientKey ? `background: ${GRADIENTS[btn.gradientKey] ?? ''}` : ''}
            >
              {#if iconMap[btn.icon]}
                <img src={iconMap[btn.icon]} alt="" class="w-5 h-5" />
              {/if}
              {btn.label}
            </a>
          {/each}
        </div>
      </header>

      <!-- Features Section -->
      <section class="mb-12">
        <div class="text-center mb-12" in:fly={{ y: 20, duration: 500, delay: 80 }}>
          <h3 class="text-3xl font-bold text-gray-950 mb-2">Why Choose ModCord over Others?</h3>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {#each MODCORD_CONTENT.features as feature, i}
            <div
              class="card-glass p-8 h-full bg-gradient-to-br {feature.gradient}"
              in:fly={{ y: 20, duration: 400, delay: 150 + i * 100 }}
            >
              <h3 class="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p class="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          {/each}
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center" in:fly={{ y: 30, duration: 500, delay: 300 }}>
        <div class="card-glass p-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{MODCORD_CONTENT.cta.heading}</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">{MODCORD_CONTENT.cta.description}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EXTERNAL_LINKS.modcordInvite}
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
              style="background: {GRADIENTS.emeraldBlueBright}"
            >
              Get Started
            </a>
            <a
              href="/contact"
              class="btn-primary"
              style="background: {GRADIENTS.orangePurple}"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </article>
  </div>
{/if}
