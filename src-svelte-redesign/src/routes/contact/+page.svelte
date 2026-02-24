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
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
    <div class="text-center mb-16">
      <div in:fly={{ y: 20, duration: 500 }}>
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span class="text-sm font-medium text-blue-700">{CONTACT_CONTENT.badgeLabel}</span>
        </span>
      </div>

      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
        in:fly={{ y: 20, duration: 500, delay: 100 }}
      >
        {CONTACT_CONTENT.title}
      </h1>

      <p
        class="text-xl text-gray-600 mb-4 max-w-2xl mx-auto"
        in:fly={{ y: 20, duration: 500, delay: 200 }}
      >
        {CONTACT_CONTENT.description}
      </p>
    </div>
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
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <h2 class="text-2xl font-bold text-gray-900 text-center mb-8" in:fade={{ duration: 400, delay: 500 }}>Quick Info</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
      class="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 overflow-hidden"
      in:fade={{ duration: 500, delay: 700 }}
    >
      <!-- Background decorations -->
      <div class="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-2xl"></div>
      <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-indigo-200/20 rounded-full blur-3xl"></div>

      <!-- Floating particles -->
      <div class="absolute top-8 left-16 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div class="absolute top-20 right-24 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
      <div class="absolute bottom-16 right-16 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>

      <div class="relative text-center">
        <div class="mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {CONTACT_CONTENT.cta.heading}
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {CONTACT_CONTENT.cta.description}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <a href="mailto:{CONTACT_INFO.email}" class="btn-primary min-w-[180px]">
            <img src={ICON_PATHS.email} alt="" class="w-5 h-5" />
            <span>{CONTACT_CONTENT.cta.emailLabel}</span>
          </a>
          <span class="text-gray-400 font-medium">or</span>
          <a
            href={CONTACT_INFO.discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary min-w-[180px]"
            style="background: linear-gradient(135deg, #f97316, #9333ea);"
          >
            <img src={ICON_PATHS.discord} alt="" class="w-5 h-5" />
            <span>{CONTACT_CONTENT.cta.discordLabel}</span>
          </a>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200/50">
          <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            {#each CONTACT_CONTENT.cta.highlights as highlight}
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full {highlight.color} animate-pulse"></span>
                <span>{highlight.text}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}
