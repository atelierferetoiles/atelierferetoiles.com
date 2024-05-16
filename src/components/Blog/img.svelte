<script lang="ts">
  import cdnImageSrc from '$lib/cdnImageSrc';

  export let src: string;
  export let alt: string;
  export let title: string;
</script>

<figure class="flex flex-col justify-center">
  <div class="text-center">
    <img class="inline-block" src={cdnImageSrc({ url: src, w: 700 })} {alt} />
  </div>
  <figcaption class="text-center text-slate-600 text-sm">{title || ''}</figcaption>
</figure>
