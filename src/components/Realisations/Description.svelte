<script lang="ts">
  import type { PostData } from '$lib/fetchPosts';
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
      <h2 class="text-md font-medium">{price} €</h2>
    {/if}
  </div>
  <div class="text-justify"><Body /></div>
</div>
