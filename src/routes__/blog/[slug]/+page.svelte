<script>
	import formatDate from '$lib/formatDate';

	export let data;
	const { date, content, title, chapo } = data;
</script>

<article class="mx-auto bg-slate-200 max-w-4xl px-2 sm:px-8 py-8">
	<h1 class="mb-12 text-3xl sm:text-4xl lg:text-5xl text-slate-800 font-bold">{title}</h1>
	<p class="mb-4 text-2xl lg:text-3xl">{chapo}</p>
	<p class="mb-4">Le {formatDate(date)}</p>

	<hr class="border-t border-slate-400 my-4 w-full" />

	<div class="mx-auto max-w-2xl">
		<svelte:component this={content} />
	</div>
</article>
