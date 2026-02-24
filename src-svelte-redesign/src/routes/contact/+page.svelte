<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { CONTACT_CONTENT } from '$lib/content';
  import { CONTACT_INFO, BACKGROUND_LAYERS, ICON_PATHS, EXTERNAL_LINKS } from '$lib/constants';

  let visible = $state(false);
  let emailCopied = $state(false);
  let discordCopied = $state(false);

  onMount(() => {
    visible = true;
  });

  function copyToClipboard(text: string, type: 'email' | 'discord') {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      emailCopied = true;
      setTimeout(() => (emailCopied = false), 2000);
    } else {
      discordCopied = true;
      setTimeout(() => (discordCopied = false), 2000);
    }
  }
</script>

<SEO title="Contact | HoneyBerries" description={CONTACT_CONTENT.description} pathname="/contact" />
<GradientBackdrop layers={BACKGROUND_LAYERS.contact} />

{#if visible}
  <!-- Header -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
    <div in:fly={{ y: 20, duration: 500 }}>
      <span class="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        {CONTACT_CONTENT.badgeLabel}
      </span>
    </div>

    <h1
      class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
      in:fly={{ y: 20, duration: 500, delay: 100 }}
    >
      {CONTACT_CONTENT.title}
    </h1>

    <p
      class="text-lg text-gray-600 leading-relaxed"
      in:fly={{ y: 20, duration: 500, delay: 200 }}
    >
      {CONTACT_CONTENT.description}
    </p>
  </section>

  <!-- Contact Cards -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Email Card -->
      <div
        class="card-glass overflow-hidden"
        in:fly={{ y: 20, duration: 500, delay: 300 }}
      >
        <div class="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div class="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm mb-3">
            <img src={ICON_PATHS.email} alt="" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900">{CONTACT_CONTENT.emailCard.title}</h3>
          <p class="text-sm text-gray-600 mt-1">{CONTACT_CONTENT.emailCard.subtitle}</p>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="font-mono text-sm bg-white/60 px-3 py-2 rounded-lg flex-1 truncate">{CONTACT_INFO.email}</span>
            <button
              onclick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
              class="shrink-0 px-3 py-2 text-xs font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {emailCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <a
            href="mailto:{CONTACT_INFO.email}"
            class="btn-primary w-full text-center block"
          >
            {CONTACT_CONTENT.emailCard.ctaLabel}
          </a>
          <div class="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <span class="relative flex h-2 w-2">
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {CONTACT_CONTENT.emailCard.responseNote}
          </div>
        </div>
      </div>

      <!-- Discord Card -->
      <div
        class="card-glass overflow-hidden"
        in:fly={{ y: 20, duration: 500, delay: 400 }}
      >
        <div class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div class="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm mb-3">
            <img src={ICON_PATHS.discord} alt="" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900">{CONTACT_CONTENT.discordCard.title}</h3>
          <p class="text-sm text-gray-600 mt-1">{CONTACT_CONTENT.discordCard.subtitle}</p>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="font-mono text-sm bg-white/60 px-3 py-2 rounded-lg flex-1 truncate">{CONTACT_INFO.discordUsername}</span>
            <button
              onclick={() => copyToClipboard(CONTACT_INFO.discordUsername, 'discord')}
              class="shrink-0 px-3 py-2 text-xs font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {discordCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <a
            href={CONTACT_INFO.discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full text-center block"
          >
            {CONTACT_CONTENT.discordCard.inviteLabel}
          </a>
          <div class="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <span class="relative flex h-2 w-2">
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {CONTACT_CONTENT.discordCard.statusNote}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Grid -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="grid grid-cols-3 gap-4">
      {#each CONTACT_CONTENT.stats as stat, i}
        <div
          class="card-glass p-5 text-center"
          in:fly={{ y: 20, duration: 500, delay: 500 + i * 80 }}
        >
          <div class="text-2xl font-bold {stat.color}">{stat.value}</div>
          <div class="text-xs text-gray-500 mt-1">{stat.label}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
    <div
      class="card-glass p-8 text-center"
      in:fade={{ duration: 500, delay: 700 }}
    >
      <h2 class="text-2xl font-bold text-gray-900 mb-3">{CONTACT_CONTENT.cta.heading}</h2>
      <p class="text-gray-600 mb-6 max-w-xl mx-auto">{CONTACT_CONTENT.cta.description}</p>

      <div class="flex flex-wrap justify-center gap-3 mb-6">
        {#each CONTACT_CONTENT.cta.highlights as highlight}
          <span class="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full">
            <span class="w-2 h-2 rounded-full {highlight.color}"></span>
            {highlight.text}
          </span>
        {/each}
      </div>

      <div class="flex flex-col sm:flex-row justify-center gap-3">
        <a href="mailto:{CONTACT_INFO.email}" class="btn-primary">
          {CONTACT_CONTENT.cta.emailLabel}
        </a>
        <a
          href={CONTACT_INFO.discordInviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {CONTACT_CONTENT.cta.discordLabel}
        </a>
      </div>
    </div>
  </section>
{/if}
