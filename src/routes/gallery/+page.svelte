<script>
	import { Carousel } from 'flowbite-svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="Gallery" />
</svelte:head>

<section class="space-y-5">
	<h1 class="page-heading">Gallery</h1>

	<div class="carousel">
		<Carousel
			images={data.images}
			showCaptions={false}
			showThumbs={false}
			showIndicators={false}
			divClass="carousel"
		/>
	</div>
</section>

<style>
	.carousel {
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
		padding: 1.25rem;
		background-color: rgb(254 243 199);
		border-radius: 1.5rem;
	}
</style>
