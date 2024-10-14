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
  <div class="text-center my-8">
    <a
      href="/realisations"
      class="arrow hover:after:translate-x-1 after:align-top inline-block leading-6 after:duration-100 after:inline-block after:transition-transform relative after:ease-in-out bg-princeton_orange py-2 px-2 rounded-lg text-left border-2 border-princeton_orange hover:bg-blush hover:border-blush transition-colors"
    >
      <span class="font-semibold text-black">Découvrir mes créations</span>
    </a>
  </div>
</div>
