<script>
  import HomeSection from '$components/HomeSection.svelte';
  export let data;
  const {
    metadata: { photoHome, announcement, subTitle },
  } = data;
  const Body = data.body;
</script>

<HomeSection {photoHome} {subTitle} {announcement} />
<div class="container mx-auto max-w-3xl mt-4 px-2">
  <Body />
</div>
