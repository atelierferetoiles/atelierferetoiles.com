<script lang="ts">
  import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
  let carousel;
  export let images: Array<{ src: string; alt: string }>;
  const imagesWithSrc = images.filter(({ src }) => !!src);
</script>

{#if browser && imagesWithSrc.length}
  <div class="aspect-video max-w-3xl w-full">
    <Carousel autoplay dots={false} autoplayDuration={8000} let:loaded bind:this={carousel}>
      <button
        let:showPrevPage
        slot="prev"
        on:click={showPrevPage}
        class="custom-arrow custom-arrow-prev"
      >
        <i />
      </button>
      {#each imagesWithSrc as { src, alt }, imageIndex (src + imageIndex)}
        <div class="">
          {#if loaded.includes(imageIndex)}
            <img draggable="false" {src} {alt} />
          {/if}
        </div>
      {/each}
      <button
        let:showNextPage
        on:click={showNextPage}
        slot="next"
        class="custom-arrow custom-arrow-next"
      >
        <i />
      </button>
    </Carousel>
  </div>
{/if}

<style>
  .custom-arrow {
    width: 40px;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: opacity 150ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .custom-arrow:hover {
    opacity: 0.7;
  }
  .custom-arrow > i {
    border: solid #1e1e1e;
    border-width: 0 5px 5px 0;
    padding: 5px;
    position: relative;
  }
  .custom-arrow-prev {
    left: 0;
  }
  .custom-arrow-prev > i {
    transform: rotate(135deg);
    right: -4px;
  }
  .custom-arrow-next {
    right: 0;
  }
  .custom-arrow-next > i {
    transform: rotate(-45deg);
    left: -4px;
  }
</style>
