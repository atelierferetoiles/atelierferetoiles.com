<script lang="ts">
  import type { PostData } from '$lib/posts';
  import CommandeForm from './CommandeForm.svelte';
  export let post: PostData;
  export let Body: any;
  const {
    metadata: { price, title },
  } = post;
</script>

<div class="px-4 sm:px-0">
  <div class="mb-4">
    <h1 class="text-xl font-semibold">{title}</h1>
    {#if price}
      <h2 class="text-lg font-semibold">{price} €</h2>
    {/if}
    <div class="mt-4 text-justify"><Body /></div>
    <div class="mt-4">
      <CommandeForm productId={title} />
    </div>
  </div>
</div>
