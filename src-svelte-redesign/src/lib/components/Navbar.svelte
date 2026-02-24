<script lang="ts">
  import { page } from '$app/state';
  import { slide, fade } from 'svelte/transition';
  import { NAV_LINKS } from '$lib/constants';

  let mobileOpen = $state(false);

  function isActive(path: string): boolean {
    if (path === '/') return page.url.pathname === '/';
    return page.url.pathname.startsWith(path);
  }

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2">
      <span class="text-lg font-bold text-gray-900">HoneyBerries</span>
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">
      {#each NAV_LINKS as link}
        <a
          href={link.path}
          class="px-3 py-2 text-sm font-medium rounded-md transition-colors {isActive(link.path)
            ? 'text-blue-700'
            : 'text-gray-700 hover:text-gray-900'}"
        >
          {link.name}
        </a>
      {/each}
    </div>

    <!-- Mobile menu button -->
    <button
      class="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 transition-colors"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if mobileOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <!-- Overlay -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="fixed inset-0 top-16 z-40"
      transition:fade={{ duration: 200 }}
      onclick={closeMobile}
      onkeydown={(e) => { if (e.key === 'Escape') closeMobile(); }}
    ></div>

    <!-- Menu -->
    <div
      class="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/60 p-4"
      transition:slide={{ duration: 300 }}
    >
      <div class="flex flex-col gap-1">
        {#each NAV_LINKS as link}
          <a
            href={link.path}
            class="px-3 py-2 text-sm font-medium rounded-md transition-colors {isActive(link.path)
              ? 'text-blue-700'
              : 'text-gray-700 hover:text-gray-900'}"
            onclick={closeMobile}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
