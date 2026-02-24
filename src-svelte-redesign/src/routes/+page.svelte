<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import { HERO_CONTENT } from '$lib/content';
  import { HOME_FEATURES } from '$lib/data';
  import { SKILLS, SITE_INFO } from '$lib/constants';

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<SEO title={SITE_INFO.title} description={SITE_INFO.description} pathname="/" />

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
  <div class="grid lg:grid-cols-2 gap-12 items-center">
    <!-- Left: Text -->
    <div>
      {#if visible}
        <p
          class="text-sm font-medium text-emerald-600 tracking-wide uppercase mb-4"
          in:fly={{ y: 20, duration: 500 }}
        >
          {HERO_CONTENT.eyebrow}
        </p>

        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          in:fly={{ y: 20, duration: 500, delay: 100 }}
        >
          {#each HERO_CONTENT.headlineParts as part, i}
            {#if i > 0}{' '}{/if}<span class={part.accent ? 'accent-text' : ''}>{part.text}</span>
          {/each}
        </h1>

        <p
          class="text-lg text-gray-600 mb-8 max-w-lg"
          in:fly={{ y: 20, duration: 500, delay: 200 }}
        >
          {HERO_CONTENT.subhead}
        </p>

        <div in:fly={{ y: 20, duration: 500, delay: 300 }}>
          <a href="/projects" class="btn-primary">
            Explore Projects
          </a>
        </div>
      {/if}
    </div>

    <!-- Right: Card + Image -->
    <div class="flex flex-col gap-6">
      {#if visible}
        <div
          class="card-glass p-6"
          in:fly={{ x: 30, duration: 600, delay: 200 }}
        >
          <h2 class="text-lg font-semibold text-gray-900 mb-2">
            {HERO_CONTENT.cardTitle}
          </h2>
          <p class="text-sm text-gray-600 mb-4">
            {HERO_CONTENT.cardDescription}
          </p>
          <div class="flex flex-wrap gap-2">
            {#each SKILLS as skill}
              <span class="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {skill}
              </span>
            {/each}
          </div>
        </div>

        <div in:fly={{ x: 30, duration: 600, delay: 350 }}>
          <img
            src="/assets/backgrounds/home-banner.webp"
            alt={HERO_CONTENT.bannerAlt}
            class="w-full rounded-2xl shadow-md object-cover"
          />
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
  {#if visible}
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each HOME_FEATURES as feature, i}
        <div
          class="card-glass p-6"
          in:fly={{ y: 30, duration: 500, delay: 400 + i * 100 }}
        >
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p class="text-sm text-gray-600">{feature.desc}</p>
        </div>
      {/each}
    </div>
  {/if}
</section>
