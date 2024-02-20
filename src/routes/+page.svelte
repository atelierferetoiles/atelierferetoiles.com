<script>
  import HomeSection from '$components/HomeSection.svelte';
  export let data;
  const {
    page: { photoHome, announcement, subTitle },
  } = data;
</script>

<HomeSection {photoHome} {subTitle} {announcement} />
