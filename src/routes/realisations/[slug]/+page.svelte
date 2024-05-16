<script lang="ts">
  import Description from '$components/Realisations/Description.svelte';
  import Images from '$components/Realisations/Images.svelte';

  export let data;

  const { post } = data;
  const {
    metadata: { imgSrcList },
  } = post;
</script>

<div class="py-2 sm:p-4 md:p-8">
  <div class="flex flex-col sm:flex-row gap-4 md:gap-8 container mx-auto">
    <div class="basis-2/3 lg:basis-1/2 shrink-0">
      <Images {imgSrcList} />
    </div>
    <div class="basis-1/2 lg:basis-1/3">
      <Description {post} Body={post.body} />
    </div>
  </div>
</div>
