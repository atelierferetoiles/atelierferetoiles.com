<script lang="ts">
  export let imgSrc = '';
  export let imgAlt = '';
  export let title = '';
  export let text = '';
  export let link = '';
</script>

<a
  class="flex p-2 gap-2 bg-transparent text-slate-200 items-center flex-col max-w-[256px] mx-auto"
  href={link}
>
  {#if !!imgSrc}
    <img
      class="aspect-square transition-transform w-48 h-48 sm:h-auto sm:w-72 object-cover"
      src={imgSrc}
      alt={imgAlt}
    />
  {/if}
  <div class="">
    <p class="my-2 uppercase font-semibold text-center">{title}</p>
    <p class="text-center">{text}</p>
  </div>
</a>

<style>
  a:hover img {
    transform: scale(1.2);
  }
</style>
