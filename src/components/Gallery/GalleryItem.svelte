<script lang="ts">
  import cdnImageSrc from '$lib/cdnImageSrc';
  import { cn } from '$lib/cn';
  import type { PostData } from '$lib/posts';

  export let post: PostData;
  export let className: string = '';
  const {
    metadata: { imgSrcList = [], title },
    path,
  } = post;
  const [img] = imgSrcList;

  const width = 320;
  const height = 240;
</script>

{#if img}
  <a class={cn('group rounded', className)} href={`/realisations/${path}`}>
    <div class="relative overflow-hidden rounded">
      <img
        class="rounded group-hover:scale-110 transition duration-300 ease-in-out"
        loading="lazy"
        {width}
        {height}
        src={cdnImageSrc({ url: img.src, w: width, h: height, fit: 'cover' })}
        alt={img.alt}
      />
    </div>
    <span class="block px-2">{title}</span>
  </a>
{/if}
