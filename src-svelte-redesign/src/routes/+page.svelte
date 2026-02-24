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

<section class="relative overflow-hidden">
  <div class="max-w-6xl mx-auto px-4 py-20 sm:py-28">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Left: Text -->
      <div>
        {#if visible}
          <p
            class="text-sm font-semibold tracking-wider text-emerald-600 uppercase"
            in:fly={{ y: 20, duration: 500 }}
          >
            {HERO_CONTENT.eyebrow}
          </p>

          <h1
            class="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            in:fly={{ y: 20, duration: 500, delay: 100 }}
          >
            {#each HERO_CONTENT.headlineParts as part, i}
              {#if i > 0}{' '}{/if}<span class={part.accent ? 'accent-text' : ''}>{part.text}</span>
            {/each}
          </h1>

          <p
            class="mt-5 text-gray-600 max-w-xl"
            in:fly={{ y: 20, duration: 500, delay: 200 }}
          >
            {HERO_CONTENT.subhead}
          </p>

          <div class="mt-8 flex flex-wrap gap-3" in:fly={{ y: 20, duration: 500, delay: 300 }}>
            <a href="/projects" class="btn-primary">
              Explore Projects
            </a>
          </div>
        {/if}
      </div>

      <!-- Right: Hero Card with image + skills -->
      {#if visible}
        <div class="relative md:justify-self-end" in:fly={{ x: 30, duration: 600, delay: 200 }}>
          <div class="card-glass p-6 max-w-md">
            <div class="aspect-video w-full rounded-xl overflow-hidden">
              <img
                src="/assets/backgrounds/home-banner.webp"
                alt={HERO_CONTENT.bannerAlt}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="mt-4">
              <h3 class="font-semibold">{HERO_CONTENT.cardTitle}</h3>
              <p class="mt-1 text-sm text-gray-600">{HERO_CONTENT.cardDescription}</p>
              <div class="mt-3 flex flex-wrap gap-2">
                {#each SKILLS as skill}
                  <span class="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {skill}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="max-w-6xl mx-auto px-4 pb-16">
  {#if visible}
    <h2 class="sr-only">Featured capabilities</h2>
    <div class="grid sm:grid-cols-3 gap-6">
      {#each HOME_FEATURES as feature, i}
        <div
          class="card-glass p-6 h-full"
          in:fly={{ y: 30, duration: 500, delay: 400 + i * 100 }}
        >
          <h3 class="text-lg font-semibold">{feature.title}</h3>
          <p class="mt-2 text-sm text-gray-600">{feature.desc}</p>
        </div>
      {/each}
    </div>
  {/if}
</section>
