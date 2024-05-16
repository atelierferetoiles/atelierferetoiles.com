<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
</script>

<figure class="flex flex-col justify-center">
  <div class="text-center">
    <img class="inline-block" {src} {alt} />
  </div>
  <figcaption class="text-center text-slate-600 text-sm">{title || ''}</figcaption>
</figure>
