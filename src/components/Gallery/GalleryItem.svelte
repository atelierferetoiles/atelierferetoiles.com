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
  <a href={`realisations/${path}`}>
    <img class="" src={img.src} alt={img.alt} />
    <span class="text-center block">{title}</span>
  </a>
{/if}
