<script>
  export let data;
  const { content, title } = data;
</script>

<article class="space-y-8 mt-8">
  <h1 class="mb-8 text-2xl font-semibold text-center">{title}</h1>
  <div class="mx-auto max-w-4xl px-2 sm:px-8 py-8">
    <svelte:component this={content} />
  </div>
</article>
