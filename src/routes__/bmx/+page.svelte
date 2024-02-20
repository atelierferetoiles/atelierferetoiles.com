<script>
  import BmxCarousel from '$components/BmxCarousel.svelte';
  import Form from '$components/Form/Form.svelte';

  export let data;
  const { title, content, images, textareaDefault } = data;
</script>

<div class="bg-blue-50">
  <div class="container mx-auto flex flex-col items-center px-4 py-12">
    <h1 class="mb-8 text-2xl font-semibold">{title}</h1>
    <div class="max-w-full sm:grid sm:grid-cols-2 mb-8">
      <div class="p-2 sm:p-8 ml-auto max-w-2xl">
        <svelte:component this={content} />
      </div>
      <BmxCarousel {images} />
    </div>
    <Form {textareaDefault} />
  </div>
</div>
