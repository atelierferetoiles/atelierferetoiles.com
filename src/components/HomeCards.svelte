<script lang="ts">
  import HomeCard from './HomeCard.svelte';
  export let linksCards: Array<{ title: string; text: string; link: string; image: string }>;
</script>

{#if linksCards.length > 0}
  <section class="bg-slate-950">
    <div class="grid p-8 px-2 sm:px-8 sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each linksCards as { image, link, text, title }}
        <HomeCard imgSrc={image} imgAlt="BMX" {title} {text} {link} />
      {/each}
    </div>
  </section>
{/if}
