<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title: string;
</script>

<figure>
	<img {src} {alt} />
	<figcaption class="text-center text-slate-600 text-sm">{title}</figcaption>
</figure>
