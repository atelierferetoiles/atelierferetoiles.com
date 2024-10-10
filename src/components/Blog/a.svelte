<script lang="ts">
  import { cn } from '$lib/cn';

  export let href: string;
  export let className: string = '';
</script>

<a class={cn('text-[#DB5375]', className)} {href}><slot /></a>
