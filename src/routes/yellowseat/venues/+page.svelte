<script>
	import Atropos from 'atropos';
	import 'atropos/css/min';

	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('.atropos').forEach((element) => {
			Atropos({
				el: element,
				shadow: false,
				rotateXMax: 15,
				rotateYMax: 15,
				rotateTouch: false
			});
		});
	});

	import Venue from '$lib/components/routes/yellowseat/Venue.svelte';

	const venues = [
		{
			name: 'Te Rauparaha Arena',
			url: 'https://terauparaha-arena.co.nz/',
			image: 'te-rauparaha-arena.jpg'
		},
		{
			name: 'Erskine Chapel',
			url: 'https://www.thewellingtoncompany.co.nz/projects/erskine/',
			image: 'erskine-chapel.jpg'
		}
	];
</script>

<svelte:head>
	<title>Partner Venues - Yellow Seat</title>
	<meta name="description" content="Partner Venues - Yellow Seat" />
</svelte:head>

<section class="text-xl">
	<div class="mb-16">
		<h2 class="page-heading mb-4">Partner Venues</h2>

		<div class="grid gap-8 md:grid-cols-2">
			{#each venues as venue}
				<Venue data={venue} />
			{/each}
		</div>
	</div>
</section>
