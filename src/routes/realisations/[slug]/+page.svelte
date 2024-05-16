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
  <div class="flex flex-col sm:flex-row gap-4 md:gap-8">
    <div class="basis-2/3">
      <Images {imgSrcList} />
    </div>
    <div class="grow basis-1/3 shrink-0">
      <Description {post} />
    </div>
  </div>
</div>
