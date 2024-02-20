<script>
  import ContactSection from '$components/ContactSection.svelte';
  import Horaires from './Horaires.svelte';
  import {
    mapsEmbedLink,
    imageHoursAlt as alt,
    imageHoursSrc as src,
  } from '$content/pages/footer.json';
</script>

<div class="items-center md:flex">
  <div class="h-[450px] w-full shrink-0 md:w-1/2">
    <iframe
      src={mapsEmbedLink}
      title="google-map"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen={false}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
  <div class="relative flex items-center justify-center w-full h-[450px] md:w-1/2">
    <img
      {alt}
      {src}
      loading="lazy"
      class="absolute inset-0 h-[450px] w-full object-cover object-bottom"
    />
    <div class="">
      <div class="bg-slate-200 bg-opacity-60 p-4 backdrop-blur">
        <Horaires />
      </div>
    </div>
  </div>
</div>
<div class="container mx-auto">
  <ContactSection />

  <div
    class="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-8 leading-6 text-black sm:flex-row sm:items-center sm:justify-between md:px-8"
  >
    <a
      href="/mentions-legales"
      class="text-sm leading-6 underline decoration-transparent transition-colors hover:decoration-current"
      >Mentions légales</a
    >
    <a
      class="text-sm leading-6 underline decoration-transparent transition-colors hover:decoration-current"
      href="https://www.apollinai.re"
      target="_blank"
      rel="noreferrer noopener">Site réalisé par Apollinaire</a
    >
  </div>
</div>
