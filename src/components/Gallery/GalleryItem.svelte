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
  <a class="group rounded" href={`realisations/${path}`}>
    <div class="relative overflow-hidden rounded">
      <img
        class="rounded group-hover:scale-110 transition duration-300 ease-in-out"
        src={img.src}
        alt={img.alt}
      />
    </div>
    <span class="block px-2">{title}</span>
  </a>
{/if}
