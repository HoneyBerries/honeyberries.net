<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { BACKGROUND_LAYERS } from '$lib/constants';
  import { page } from '$app/state';
  import { fade } from 'svelte/transition';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <GradientBackdrop layers={BACKGROUND_LAYERS.layout} />
  <Navbar />
  <main class="flex-1 pt-16">
    {#key page.url.pathname}
      <div in:fade={{ duration: 300, delay: 100 }} out:fade={{ duration: 200 }}>
        {@render children()}
      </div>
    {/key}
  </main>
  <Footer />
</div>
