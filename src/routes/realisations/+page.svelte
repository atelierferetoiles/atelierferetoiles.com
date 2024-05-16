<script lang="ts">
  import GalleryItem from '$components/Gallery/GalleryItem.svelte';

  export let data;
  const { posts } = data;
</script>

<div class="grid sm:grid-cols-2 gap-4 mt-8 p-2 sm:p-4 md:grid-cols-3 md:p-8 xl:grid-cols-4">
  {#each posts as post}
    <GalleryItem {post} />
  {/each}
</div>
