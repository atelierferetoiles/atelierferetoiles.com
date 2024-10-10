<script lang="ts">
  import { cn } from '$lib/cn';

  export let className: string = '';
</script>

<h3 class={cn('text-2xl font-semibold mb-6', className)}><slot /></h3>
