<script lang="ts">
  import type { PostData } from '$lib/fetchPosts';

  export let imgSrcList: PostData['metadata']['imgSrcList'];
  let img = imgSrcList[0];

  function changeImg(newImg: { src: string; alt?: string }) {
    img = newImg;
  }
</script>

<div class="w-full max-h-[90vh] mb-4">
  <img class=" w-full" src={img.src} alt={img.alt} />
</div>
<div class="flex flex-row flex-wrap gap-4 px-4 sm:px-0">
  {#each imgSrcList as imgData}
    <img
      on:mouseenter={() => changeImg(imgData)}
      class="h-8 w-8 block object-cover md:h-12 md:w-12"
      src={imgData.src}
      alt={imgData.alt}
    />
  {/each}
</div>
