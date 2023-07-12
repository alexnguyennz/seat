<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="text-xl">
	<a href={`/${data.slug}/`}><img src={`${data.slug}.png`} alt={`${data.name} logo`} /></a>
	<img
		src={`./${data.slug}/banner.jpg`}
		class="mb-6 w-full rounded-xl"
		alt={`${data.name} banner`}
	/>

	<slot />
</div>
