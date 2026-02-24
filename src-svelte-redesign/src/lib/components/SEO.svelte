<script lang="ts">
  import { BASE_URL } from '$lib/constants';

  let {
    title = 'HoneyBerries Portfolio',
    description = 'Developer focused on performant, clean, and delightful experiences.',
    pathname = '/',
    ogImage = '',
    jsonLd = undefined as Record<string, unknown> | undefined
  } = $props();

  const canonicalUrl = $derived(`${BASE_URL}${pathname}`);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />
  {#if ogImage}
    <meta property="og:image" content={ogImage} />
  {/if}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {#if jsonLd}
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
  {/if}
</svelte:head>
