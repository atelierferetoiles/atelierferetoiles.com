<script lang="ts">
  import { cn } from '$lib/cn';

  export let className: string = '';
</script>

<h2 class={cn('text-3xl font-bold mb-8', className)}><slot /></h2>
