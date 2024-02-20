<script context="module">
	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import h3 from './h3.svelte';
	import h4 from './h4.svelte';
	import h5 from './h5.svelte';
	import h6 from './h6.svelte';
	import p from './p.svelte';
	import ul from './ul.svelte';
	import ol from './ol.svelte';
	import img from './img.svelte';
	import blockquote from './blockquote.svelte';

	// eslint-disable-next-line no-import-assign
	export { h1, h2, h3, h4, h5, h6, p, ul, ol, img, blockquote };
</script>

<div class="text-lg">
	<slot />
</div>
