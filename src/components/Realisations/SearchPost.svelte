<script lang="ts">
  import uFuzzy from '@leeoniya/ufuzzy';
  import Search from '../../icons/Search.svelte';
  import type { PostData } from '$lib/posts';
  import GalleryItem from '$components/Gallery/GalleryItem.svelte';

  export let posts: PostData[];
  export let searchable: string[];
  let value = '';
  let searchedValue = '';
  let searchResults: any[] = [];

  const uf = new uFuzzy({});
  const search = (e: any) => {
    e.preventDefault();
    if (!value) {
      searchResults = [];
      searchedValue = '';
      return;
    }
    const indices = uf.filter(searchable, value) || [];
    const info = uf.info(indices, searchable, value);
    const order = uf.sort(info, searchable, value);

    searchResults = order.map((val) => posts[info.idx[val]]);
    searchedValue = value;
  };
</script>

<form on:submit={search} class="flex justify-center ml-4 md:ml-8 mt-8 relative">
  <input
    bind:value
    class="inline-block rounded-md px-4 py-2 pr-8"
    placeholder="Chercher un produit..."
    on:blur={() => {
      if (!value.trim()) {
        searchResults = [];
      }
    }}
  />
  <button class="inline-block text-gray-500 relative right-10" type="submit"><Search /></button>
</form>

{#if searchResults.length}
  <div class="grid sm:grid-cols-2 gap-4 my-8 p-2 sm:p-4 md:grid-cols-3 md:p-8">
    {#each searchResults as post (post.metadata.title)}
      <GalleryItem {post} />
    {/each}
  </div>
{/if}

{#if value === searchedValue && !!value.trim() && !searchResults.length}
  <p class="text-center">Aucun résultat</p>
{/if}
