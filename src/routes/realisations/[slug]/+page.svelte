<script lang="ts">
  import Description from '$components/Realisations/Description.svelte';
  import Images from '$components/Realisations/Images.svelte';

  export let data;

  const { post } = data;
  const {
    metadata: { imgSrcList },
  } = post;
</script>

<div class="py-8 sm:py-16 sm:px-4 md:px-8">
  <div class="flex flex-col sm:flex-row gap-4 md:gap-8 container mx-auto">
    <div class="basis-2/3 lg:basis-1/2 shrink-0">
      <Images {imgSrcList} />
    </div>
    <div class="basis-1/2">
      <Description {post} Body={post.body} />
    </div>
  </div>
</div>
