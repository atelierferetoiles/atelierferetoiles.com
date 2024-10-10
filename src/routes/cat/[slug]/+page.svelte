<script>
  import H1 from '$components/Blog/h1.svelte';
  import GalleryContainer from '$components/Gallery/GalleryContainer.svelte';
  import GalleryItem from '$components/Gallery/GalleryItem.svelte';
  import SearchPost from '$components/Realisations/SearchPost.svelte';

  export let data;

  const { name, posts, searchable } = data;
</script>

<div>
  <div class="container mx-auto max-w-5xl my-8">
    <H1 className="text-center">{name}</H1>
    <SearchPost {posts} {searchable} />
    <div class="mt-6 pt-2 mb-16">
      <GalleryContainer>
        {#each posts as post (post.path)}
          <GalleryItem {post} />
        {/each}
      </GalleryContainer>
    </div>
  </div>
</div>
