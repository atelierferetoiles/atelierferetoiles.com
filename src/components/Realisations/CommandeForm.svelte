<script lang="ts">
  import Form from '$components/Form/Form.svelte';
  import collapse from '$lib/collapse';
  import ChevronDown from '../../icons/ChevronDown.svelte';

  export let productId: string;

  let open = false;
  const toggle = () => {
    open = !open;
  };
</script>

<div>
  <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> -->
  <button class="py-2 text-left w-full" on:click={toggle}>
    <span class="flex justify-between text-egyptianblue">
      <span class="font-semibold"> Commander </span>
      <ChevronDown />
    </span>
  </button>
</div>

<div class="border-t border-gray-400" use:collapse={{ open, duration: 0.2, easing: 'ease' }}>
  <Form {productId} />
</div>
