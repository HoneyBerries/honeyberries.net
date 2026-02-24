<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import GradientBackdrop from '$lib/components/GradientBackdrop.svelte';
  import { BACKGROUND_LAYERS } from '$lib/constants';

  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <GradientBackdrop layers={BACKGROUND_LAYERS.layout} />
  <Navbar />
  <main class="flex-1 pt-16">
    {@render children()}
  </main>
  <Footer />
</div>
