<script>
	import Seat from '$lib/components/Seat.svelte';

	const data = {
		name: 'Yellow Seat',
		slug: 'yellowseat'
	};
</script>

<svelte:head>
	<title>Yellow Seat</title>
	<meta name="description" content="Yellow Seat" />

	<link rel="preload" as="image" href="/yellowseat.png" />
	<link rel="preload" as="image" href="/yellowseat/banner.jpg" />
</svelte:head>

<Seat {data}
	><div class="space-y-5">
		<p>
			At Yellow Seat we take the time to listen and guarantee that we are continuously providing
			consistent food services that suits your needs. We strive for honest relationships which is
			built on trust and integrity. Food and service is our passion.
		</p>

		<p>
			Though our business relationships we build long term partnerships with our clients and
			demonstrate our care and dedication though our social promises, pathways to progression for
			all employees, food safety, regular site visits, and quarterly performance reviews.
		</p>

		<p>
			Yellow Seat believes that each customer expects consistency in every aspect of their meal
			experience. We take care of all aspects of the service delivery, the right way, which means
			that you can focus on - running your business.
		</p>

		<h3 class="mb-4 text-2xl font-bold">Great food and service brings people together.</h3>
		<p class="mb-4 text-xl">
			It starts with locally sourced ingrediency combined with our passion of food which allows us
			to create food that is tasty, enjoyable, and nutritious.
		</p>
		<p class="mb-4 text-xl">
			With Yellow Seats meals, you can tell the food was prepared with care and made specifically
			for your students. Yellow Seat will ensure everyone who eats their meal isn't just enjoying
			tasty food, but also getting vital nutrition at great value. Our team select local freshest
			ingredients to deliver dishes to delight, exactly how you want them. We understand our world
			is diverse and students often have different needs. We are sensitive to lifestyle, cultural
			and medical requirements and can offer delicious diary options.
		</p>
		<p class="mb-8 text-xl">Contact us to discuss our pricing models.</p>
	</div>

	<p class="mt-8 text-center">
		<a href="/contact" class="button-link from-blue-500 via-blue-600 to-blue-700">Get in touch</a>
	</p>

	<div class="mt-8 flex justify-center gap-5">
		<a href="/yellowseat/menus" class="button-link from-slate-600 via-slate-700 to-slate-800"
			>Catering Menus</a
		>

		<a href="/yellowseat/venues" class="button-link from-slate-600 via-slate-700 to-slate-800"
			>Partner Venues</a
		>
	</div>

	<div class="seat-tabs space-y-5">
		<div class="grid gap-5 sm:grid-cols-2">
			<h2
				class="active inline-block w-full rounded-md border border-b-4 border-black bg-white p-3 text-center text-2xl font-medium disabled:cursor-not-allowed"
			>
				Caf&#233;s
			</h2>
			<h2
				class="active inline-block w-full rounded-md border border-b-4 border-black bg-white p-3 text-center text-2xl font-medium disabled:cursor-not-allowed"
			>
				Residence Halls & Boarding Schools
			</h2>
		</div>

		<div class="tab-grid">
			<img src="./yellowseat/cafe1.jpg" alt="Yellow Seat gallery 1" loading="lazy" />
			<img src="./yellowseat/cafe2.jpg" alt="Yellow Seat gallery 2" loading="lazy" />
			<img src="./yellowseat/residence1.jpg" alt="Yellow Seat gallery 3" loading="lazy" />
			<img src="./yellowseat/residence2.jpg" alt="Yellow Seat gallery 4" loading="lazy" />
		</div>
	</div>
</Seat>
