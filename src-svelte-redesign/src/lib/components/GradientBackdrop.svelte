<script lang="ts">
  import type { BackgroundLayer } from '$lib/types';

  let { layers = [] }: { layers: BackgroundLayer[] } = $props();
</script>

<div class="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
  {#each layers as layer}
    <div
      class="{layer.className} {layer.animation === 'pulse' ? 'animate-pulse-slow' : ''}"
      style={layer.delay ? `animation-delay: ${layer.delay}s` : ''}
    ></div>
  {/each}
</div>
