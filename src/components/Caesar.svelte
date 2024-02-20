<script lang="ts">
  import caesar from '$lib/caesar';
  import { caesarKey } from '$lib/constants';
  import { onMount } from 'svelte';
  export let content: string;
  let ct = content;
  onMount(() => {
    ct = caesar(content, caesarKey);
  });
</script>

<span>{ct}</span>
