<script>
  export let data;
  const { content, title, brandTitle, brands } = data;
</script>

<article class="space-y-8 mt-8">
  <h1 class="mb-8 text-2xl font-semibold text-center">{title}</h1>
  <div class="mx-auto max-w-4xl px-2 sm:px-8 py-8">
    <svelte:component this={content} />
  </div>

  {#if brandTitle}
    <h2 class="mb-8 text-2xl font-semibold text-center">{brandTitle}</h2>
  {/if}

  {#if brands?.length > 0}
    <div class="grid gap-4 px-2 grid-cols-2 sm:grid-cols-4 max-w-4xl mx-auto">
      {#each brands as { src, alt }}
        <img {src} {alt} class="aspect-square object-contain" />
      {/each}
    </div>
  {/if}
</article>
