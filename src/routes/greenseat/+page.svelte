<script>
	import Seat from '$lib/components/Seat.svelte';

	const data = {
		name: 'Green Seat',
		slug: 'greenseat'
	};
</script>

<svelte:head>
	<title>Green Seat - The Seats</title>
	<meta name="description" content="Green Seat" />

	<link rel="preload" as="image" href="/greenseat.png" />
	<link rel="preload" as="image" href="/greenseat/banner.jpg" />
</svelte:head>

<Seat {data}
	><div class="space-y-5">
		<p>
			At Green Seat we take the time to listen and guarantee that we are continuously providing
			consistent cleaning services that suits your needs. We strive for honest relationships which
			is built on trust and integrity. Service is our passion as we strive for excellence.
		</p>

		<p>
			Though our business relationships we build long term partnerships with our clients, we view
			this as an important investment offering innovative cost-effective long-term solutions to add
			value and continually improve service delivery. We offer environmentally and social conscious
			products where appropriate, innovation, monthly cleaning audits, regular site visits, and
			quarterly performance reviews.
		</p>

		<p>
			Green Seat we understand the expectations around cleaning. We take care of all aspects of
			service delivery, the right way, which means that you can focus on - running your business.
		</p>

		<p>
			We are happy to work to an existing specification or provide a full cleaning programme to suit
			your company's needs.
		</p>

		<p>
			For a quality, reliable and affordable cleaning solution, contact a member of our team for a
			free no obligation quote.
		</p>
	</div>

	<p class="my-10 text-center">
		<a href="/contact" class="button-link from-blue-500 via-blue-600 to-blue-700">Get in touch</a>
	</p>

	<div class="seat-tabs">
		<h2>Cleaning Equipment</h2>

		<div class="tab-grid">
			<img src="./greenseat/1.jpg" alt="Green Seat gallery 1" loading="lazy" />
			<img src="./greenseat/2.jpg" alt="Green Seat gallery 2" loading="lazy" />
		</div>
		<img
			src="./greenseat/3.jpg"
			alt="Green Seat gallery 1"
			loading="lazy"
			class="mx-auto w-full rounded-xl shadow-lg md:w-auto"
		/>
	</div>
</Seat>
