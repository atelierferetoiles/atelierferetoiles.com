<script lang="ts">
  import { navLinks } from '$lib/constants';
  import OffsetAnchor from './OffsetAnchor.svelte';

  let imageWrapperClass = '';
  let imageClass = '';
  $: {
    imageWrapperClass = `grid basix-[50%]`;
    imageClass = `h-full lg:w-2/3`;
  }

  export let photoHome: string;
  export let subTitle: string;
  export let announcement: string;
</script>

<OffsetAnchor id={navLinks[0].id} />
<section>
  <div
    class="flex flex-col min-h-[80vh] overflow-x-hidden bg-cover bg-center sm:grid sm:grid-cols-2 relative"
    style={`background-image: url('${photoHome}');`}
  >
    {#if announcement}
      <div
        class="absolute flex items-center justify-center font-bold left-0 right-0 top-0 py-4 px-2 sm:px-8 bg-slate-700 text-white text-xl text-center"
      >
        {announcement}
      </div>
    {/if}
    <!-- <div class="grid basix-[50%]">
      <div class="h-full lg:w-2/3" />
    </div> -->
    <div
      class="flex flex-grow flex-col items-end justify-center py-8 sm:py-4 md:px-8 xl:items-center"
    >
      <div class="px-4 py-8">
        <p class="bg-slate-300 p-8">
          Le site est en cours de construction. Vous pouvez toujours nous <a
            href="#contact"
            class="font-semibold underline"
          >
            contacter par email ou par téléphone.
          </a>
        </p>
      </div>
    </div>
  </div>
  {#if subTitle}
    <div
      class="flex flex-col overflow-x-hidden bg-cover bg-slate-300 bg-center sm:grid sm:grid-cols-2"
    >
      <div class={imageWrapperClass}>
        <div class={imageClass} />
      </div>
      <div
        class="flex flex-grow flex-col items-end justify-center md:px-8 xl:items-center sm:text-3xl text-xl font-semibold w-full uppercase tracking-widest text-right p-2 px-4"
      >
        <div class="px-4">
          <h2
            class="sm:mr-4 p-1 max-w-screen mr-4 text-right font-black tracking-wider text-neutral-900 antialiased sm:-ml-16"
          >
            {subTitle}
          </h2>
        </div>
      </div>
    </div>
  {/if}
</section>
