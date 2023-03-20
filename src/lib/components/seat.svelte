<script>
	import { Tabs, TabItem } from 'flowbite-svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<div class="content">
		<a href={`/${data.slug}/`}><img src={`${data.slug}.png`} alt={`${data.name} logo`} /></a>
		<img src={`./${data.slug}/banner.jpg`} class="seat-banner" alt={`${data.name} banner`} />

		<slot />
	</div>
</div>

<style>
	div {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}

	.seat-banner {
		width: 100%;
		border-radius: 1.5rem;
		margin-bottom: 2rem;
	}
</style>
