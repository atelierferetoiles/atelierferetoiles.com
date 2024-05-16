<script lang="ts">
  import cdnImageSrc from '$lib/cdnImageSrc';
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
        src={cdnImageSrc({ url: img.src, h: 400, w: 300 })}
        alt={img.alt}
      />
    </div>
    <span class="block px-2">{title}</span>
  </a>
{/if}
