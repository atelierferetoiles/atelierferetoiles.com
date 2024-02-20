<script>
  import { onMount } from 'svelte';

  export let className = '';
  export let value = '';

  let copied = false;
  let show = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let copy = () => {};

  onMount(() => {
    if (!navigator?.clipboard) {
      show = false;
      return;
    }

    show = true;

    copy = async () => {
      try {
        await navigator.clipboard.writeText(value);
        copied = true;

        setTimeout(() => {
          copied = false;
        }, 5000);
      } catch (error) {
        alert('impossible de copier la valeur dans le presse-papier');
      }
    };
  });
</script>

{#if show}
  <button on:click={copy} aria-label="copier">
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      ><path fill="none" d="M0 0h24v24H0z" /><path
        class="fill-current transition-colors duration-500"
        class:fill-green-400={copied}
        d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
      /></svg
    >
  </button>
{/if}
