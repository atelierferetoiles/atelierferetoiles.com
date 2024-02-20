<script lang="ts">
  export let label: string;
  export let id: string;
  export let placeholder: string;
  export let name: string;
  export let defaultValue = '';
</script>

<div>
  <label class="text-sm text-darkblue" for={id}>{label}</label>
  <textarea
    {placeholder}
    {id}
    {name}
    class="flex h-24 w-full rounded-md border border-thunderblue bg-transparent bg-white px-3 py-2 text-sm ring-transparent ring-offset-lakeblue file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-thunderblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-lakeblue disabled:cursor-not-allowed disabled:opacity-50"
    >{defaultValue}</textarea
  >
</div>
