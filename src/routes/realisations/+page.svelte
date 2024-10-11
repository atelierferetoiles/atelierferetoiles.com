<script lang="ts">
  import A from '$components/Blog/a.svelte';
  import H1 from '$components/Blog/h1.svelte';
  import H2 from '$components/Blog/h2.svelte';
  import H3 from '$components/Blog/h3.svelte';
  import GalleryContainer from '$components/Gallery/GalleryContainer.svelte';
  import GalleryItem from '$components/Gallery/GalleryItem.svelte';
  import { cn } from '$lib/cn';
  import { getFileName } from '$lib/categories';
  import SearchPost from '$components/Realisations/SearchPost.svelte';

  export let data;
  const { fullGroups, posts, searchable } = data;

  console.log(fullGroups);
</script>

<div class="container mx-auto max-w-5xl my-8">
  <H1 className="text-center">Mes réalisations</H1>
  <SearchPost {posts} {searchable} />
  {#each fullGroups as group (group.name)}
    <div class="mt-6 pt-2 mb-16">
      <H2 className="ml-4 mb-0 font-display md:ml-16">{group.name}</H2>
      {#each group.categories as category, i}
        <GalleryContainer description={i === 0 ? group.description : ''}>
          <div class="flex flex-col justify-center pl-8">
            <H3 className="mb-2">{category.name}</H3>
            <A
              className="arrow hover:after:translate-x-2 h-6 font-semibold text-lg inline-block leading-6 after:duration-100 after:transition-transform relative after:ease-in-out"
              href={`/cat/${getFileName(category.path).replace('.json', '')}`}
              >Voir tous les produits</A
            >
          </div>

          {#each category.posts as post, index (post.metadata.title)}
            <GalleryItem {post} className={cn({ [`hidden sm:block ${index}`]: index >= 3 })} />
          {/each}
        </GalleryContainer>
      {/each}
    </div>
  {/each}
</div>
