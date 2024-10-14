<script lang="ts">
  import Form from '$components/Form/Form.svelte';
  import { cn } from '$lib/cn';
  import collapse from '$lib/collapse';
  import ChevronDown from '../../icons/ChevronDown.svelte';

  export let productId: string;

  let open = false;
  const toggle = () => {
    open = !open;
  };

  $: open_class = open ? 'bg-blush border-blush' : 'bg-princeton_orange border-princeton_orange';
</script>

<div>
  <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> -->
  <button
    class="{open_class} py-2 px-2 rounded-lg text-left border-2 hover:bg-blush hover:border-blush transition-colors"
    on:click={toggle}
  >
    <span class="flex justify-between">
      <span class="font-semibold text-black">ENVIE DE COMMANDER OU BESOIN D’INFOS</span>
      <ChevronDown
        className={cn('transition-transform ease-in-out duration-300', { 'rotate-180': open })}
      />
    </span>
  </button>
</div>

<div class="" use:collapse={{ open, duration: 0.2, easing: 'ease' }}>
  <Form {productId} />
</div>
