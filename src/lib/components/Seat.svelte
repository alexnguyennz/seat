<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<img src={`${data.slug}.png`} alt={`${data.name} logo`} />
	<img
		src={`./${data.slug}/banner.jpg`}
		class="my-5 w-full rounded-xl"
		alt={`${data.name} banner`}
	/>
	<slot />
</div>
