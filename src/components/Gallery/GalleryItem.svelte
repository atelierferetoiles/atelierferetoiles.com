<script lang="ts">
  import type { PostData } from '$lib/fetchPosts';
  export let post: PostData;
  const {
    metadata: { imgSrcList, title },
    path,
  } = post;
  const [img] = imgSrcList;
</script>

{#if img}
  <a class="group rounded hover:bg-" href={`realisations/${path}`}>
    <img class="rounded" src={img.src} alt={img.alt} />
    <span class="block px-2 group-hover:underline">{title}</span>
  </a>
{/if}
