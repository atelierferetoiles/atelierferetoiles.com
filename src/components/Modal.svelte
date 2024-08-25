<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let open: boolean;
  export let onClose: Function;
  export let title = '';
</script>

{#if false}
  <div
    transition:fade={{ duration: 150, easing: sineIn }}
    class="fixed top-0 bottom-0 left-0 right-0 grid justify-center items-center"
  >
    <div
      on:click={() => onClose()}
      class="absolute top-0 bottom-0 left-0 right-0 bg-gray-900/90"
      style="z-index: 1000;"
    />
    <div
      class="relative rounded shadow-sm w-screen sm:w-[80vw] sm:max-w-[800px] h-screen sm:h-auto bg-white"
      style="z-index: 1000;"
    >
      <slot />
    </div>
  </div>
{/if}

{#if open}
  <!-- component -->
  <div
    transition:fade={{ duration: 150, easing: sineIn }}
    class="fixed z-50 inset-0 flex items-center justify-center overflow-hidden"
  >
    <div class=" fixed inset-0 transition-opacity">
      <div
        class="absolute inset-0 bg-gray-900/90"
        aria-hidden="true"
        on:click={() => onClose()}
      ></div>
    </div>

    <div
      class="bg-white rounded-lg text-left shadow-xl transform transition-all max-w-sm sm:max-w-lg w-full pt-5 pb-4 sm:p-6 sm:pb-4"
    >
      <div class="bg-white px-4 overflow-y-auto max-h-[calc(100vh-106px)]">
        <h3 class="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <div class="mt-4">
          <slot />
        </div>
      </div>
    </div>
  </div>{/if}
