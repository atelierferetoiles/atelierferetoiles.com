<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import '../app.css';
  import Nav from '$components/Nav.svelte';
  import Footer from '$components/Footer.svelte';
  import { page } from '$app/stores'; // Import the page store to access route-specific data.
  import getMetaTags from '$lib/metaTags';
  import { fade } from 'svelte/transition';

  export let data; // Exported so that child components/pages can provide data.

  $: metaTags = getMetaTags({
    pathName: $page.url.pathname,
    title: $page?.data?.title,
    description: $page?.data?.description,
    imagePath: $page?.data?.imagePath,
    additionalProps: $page?.data?.additionalProps,
  });
</script>

<MetaTags {...metaTags} />

<svelte:head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Atelier Fer e'Toiles",
      "url": "https://atelierferetoiles.com/"
    }
  </script>
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" />
  <link rel="preconnect" href="https://fonts.googleapis.com/" />

  <link
    href="https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Kalam:400,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="flex h-screen flex-col">
  <header class="fixed top-0 z-50 w-full">
    <Nav />
  </header>
  <main class="relative mt-16 pt-2 bg-whitesmoke">
    {#key data.url}
      <div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
        <slot />
      </div>
    {/key}
  </main>
  <footer class="mt-auto bg-vistablue">
    <Footer />
  </footer>
</div>
