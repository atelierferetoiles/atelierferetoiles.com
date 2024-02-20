<script>
  import Actualites from '$components/Actualites.svelte';

  export let data;
</script>

<Actualites posts={data.posts} />
