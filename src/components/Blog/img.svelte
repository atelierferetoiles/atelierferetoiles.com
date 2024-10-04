<script lang="ts">
  import cdnImageSrc from '$lib/cdnImageSrc';

  export let src: string;
  export let alt: string;
  export let title: string;
</script>

{#if alt?.endsWith('>')}
  <figure class="text-center sm:float-right sm:pl-6 py-6">
    <img class="inline-block" src={cdnImageSrc({ url: src, w: 280 })} width="280" {alt} />
    <figcaption class="text-center text-slate-600 text-sm">{title || ''}</figcaption>
  </figure>
{:else if alt?.endsWith('<')}
  <figure class="text-center sm:float-left sm:pr-6 py-6">
    <img class="inline-block" src={cdnImageSrc({ url: src, w: 280 })} width="280" {alt} />
    <figcaption class="text-center text-slate-600 text-sm">{title || ''}</figcaption>
  </figure>
{:else}
  <figure class="flex flex-col justify-center">
    <div class="text-center">
      <img class="inline-block" src={cdnImageSrc({ url: src, w: 752 })} {alt} />
    </div>
    <figcaption class="text-center text-slate-600 text-sm">{title || ''}</figcaption>
  </figure>
{/if}
