<script lang="ts">
  import { cn } from '$lib/cn';

  export let className: string = '';
</script>

<h1 class={cn('text-4xl font-bold mb-8', className)}><slot /></h1>
