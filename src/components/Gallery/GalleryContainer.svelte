<script lang="ts">
  export let description = '';
</script>

<div class="bg-white rounded my-8 p-2 sm:p-4 md:p-8">
  {#if description}
    <p class="mb-4">
      {description}
    </p>
  {/if}
  <div class=" grid grid-cols-2 gap-4 md:grid-cols-3">
    <slot></slot>
  </div>
</div>
