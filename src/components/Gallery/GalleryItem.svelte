<script lang="ts">
  import cdnImageSrc from '$lib/cdnImageSrc';
  import type { PostData } from '$lib/fetchPosts';
  export let post: PostData;
  const {
    metadata: { imgSrcList = [], title },
    path,
  } = post;
  const [img] = imgSrcList;
</script>

{#if img}
  <a class="group rounded" href={`realisations/${path}`}>
    <div class="relative overflow-hidden rounded">
      <img
        class="rounded group-hover:scale-110 transition duration-300 ease-in-out"
        loading="lazy"
        width="640"
        height="480"
        src={cdnImageSrc({ url: img.src, w: 640, h: 480, fit: 'cover' })}
        alt={img.alt}
      />
    </div>
    <span class="block px-2">{title}</span>
  </a>
{/if}
