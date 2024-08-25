<script lang="ts">
  import { cn } from '$lib/cn';

  export let value = '';
  export let label: string;
  export let id: string;
  export let placeholder = '';
  export let type: string;
  export let name: string;
  export let autocomplete = '';
  export let required = false;
  export let className = '';
  export let disabled = false;
  export let hidden = false;
</script>

<div>
  <label class={cn('text-sm text-darkblue', { 'text-thunderblue': disabled, hidden })} for={id}
    >{label}</label
  >
  <input
    {placeholder}
    {value}
    {id}
    {type}
    {name}
    {autocomplete}
    {required}
    {disabled}
    {hidden}
    class={cn(
      'flex h-10 w-full rounded-md border border-thunderblue bg-transparent bg-white px-3 py-2 text-sm ring-transparent ring-offset-lakeblue file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-thunderblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-lakeblue disabled:cursor-not-allowed disabled:opacity-50',
      { '': disabled, hidden },
      className
    )}
  />
</div>

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
