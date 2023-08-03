<script>
	import Seat from '$lib/components/Seat.svelte';

	const data = {
		name: 'Orange Seat',
		slug: 'orangeseat'
	};
</script>

<svelte:head>
	<title>Orange Seat</title>
	<meta name="description" content="Orange Seat" />

	<link rel="preload" as="image" href="/orangeseat.png" />
	<link rel="preload" as="image" href="/orangeseat/banner.jpg" />
</svelte:head>

<Seat {data}
	><div class="space-y-5">
		<p>
			As Event and Catering specialists we offer and extensive range of hire equipment. We don't
			only supply the nice bits that guests will see and use - our product range extends to cash
			registers, flooring, marquees, catering equipment and the kitchen, from freezers to ovens, so
			we have your entire event covered.
		</p>

		<p>
			We have a proactive and flexible approach to every job. We can help with every last detail,
			from initial planning to delivery and collection.
		</p>

		<p>Contact us to discuss your next event.</p>
	</div>

	<p class="my-10 text-center">
		<a href="/contact" class="button-link from-blue-500 via-blue-600 to-blue-700">Get in touch</a>
	</p>

	<div class="seat-tabs">
		<h2>Event and Catering Equipment</h2>

		<div class="tab-grid items-center">
			<img src="./orangeseat/1.jpg" alt="Orange Seat gallery 1" loading="lazy" />
			<img src="./orangeseat/2.jpg" alt="Orange Seat gallery 2" loading="lazy" />
		</div>
	</div>
</Seat>
