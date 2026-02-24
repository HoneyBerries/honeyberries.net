<script lang="ts">
  import { page } from '$app/state';
  import { fly, fade } from 'svelte/transition';
  import { NOT_FOUND_CONTENT } from '$lib/content';
</script>

{#if page.status === 404}
  <div class="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden" in:fade={{ duration: 400 }}>
    <!-- Floating decorative elements -->
    {#each NOT_FOUND_CONTENT.floatingElements as el, i}
      {@const colors: Record<string, string> = { 'pink-400': '#f472b6', 'red-500': '#ef4444', 'yellow-400': '#facc15', 'orange-500': '#f97316', 'green-400': '#4ade80', 'teal-500': '#14b8a6', 'indigo-400': '#818cf8', 'purple-500': '#a855f7' }}
      <div
        class="absolute rounded-full opacity-20 blur-sm animate-float"
        style="
          width: {el.size * 0.25}rem; height: {el.size * 0.25}rem;
          background: linear-gradient(to bottom right, {colors[el.from] ?? el.from}, {colors[el.to] ?? el.to});
          {el.top ? `top: ${el.top}rem;` : ''}
          {el.bottom ? `bottom: ${el.bottom}rem;` : ''}
          {el.left ? `left: ${el.left};` : ''}
          {el.right ? `right: ${el.right};` : ''}
          animation-delay: {el.delay}ms;
        "
      ></div>
    {/each}

    <div class="relative z-10 text-center max-w-2xl mx-auto">
      <!-- 404 large text -->
      <div in:fly={{ y: -30, duration: 600 }}>
        <h1 class="error-code text-[10rem] sm:text-[14rem] font-extrabold leading-none select-none animate-pulse-subtle">
          404
        </h1>
      </div>

      <!-- Heading -->
      <div in:fly={{ y: 20, duration: 500, delay: 150 }}>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
          {NOT_FOUND_CONTENT.heading}
        </h2>
      </div>

      <!-- Lead & subtext -->
      <div in:fly={{ y: 20, duration: 500, delay: 250 }}>
        <p class="text-lg text-gray-300 mb-2">{NOT_FOUND_CONTENT.lead}</p>
        <p class="text-gray-400 mb-4">{NOT_FOUND_CONTENT.subtext}</p>
        <p class="text-sm text-emerald-400 mb-8">{NOT_FOUND_CONTENT.tip}</p>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-wrap gap-4 justify-center mb-10" in:fly={{ y: 20, duration: 500, delay: 350 }}>
        <a
          href="/"
          class="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Go Home
        </a>
        <a
          href="/projects"
          class="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          View Projects
        </a>
      </div>

      <!-- Suggested links card -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8" in:fly={{ y: 20, duration: 500, delay: 450 }}>
        <p class="text-sm text-gray-400 mb-3">Quick links you might like:</p>
        <div class="flex flex-wrap gap-3 justify-center">
          {#each NOT_FOUND_CONTENT.suggestedLinks as link}
            {@const bgColors: Record<string, string> = { 'emerald-500': '#10b981', 'blue-500': '#3b82f6', 'purple-500': '#a855f7' }}
            <a
              href={link.to}
              class="px-4 py-2 rounded-full text-sm font-medium text-white hover:opacity-90 transition"
              style="background-color: {bgColors[link.bg] ?? link.bg};"
            >
              {link.label}
            </a>
          {/each}
        </div>
      </div>

      <!-- Easter egg -->
      <p class="text-xs text-gray-600" in:fade={{ duration: 800, delay: 600 }}>
        {NOT_FOUND_CONTENT.easterEgg}
      </p>
    </div>
  </div>
{:else}
  <div class="min-h-[80vh] flex items-center justify-center px-4" in:fade={{ duration: 400 }}>
    <div class="text-center">
      <h1 class="text-[8rem] font-extrabold leading-none text-white/10 select-none">
        {page.status}
      </h1>
      <h2 class="text-2xl font-bold text-white mt-4 mb-2">Something went wrong</h2>
      <p class="text-gray-400 mb-8">{page.error?.message ?? 'An unexpected error occurred.'}</p>
      <a
        href="/"
        class="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
      >
        Go Home
      </a>
    </div>
  </div>
{/if}

<style>
  .error-code {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.85; }
  }

  .animate-pulse-subtle {
    animation: pulse-subtle 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
</style>
