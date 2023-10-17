<script>
	import { IconExternalLink } from '@tabler/icons-svelte';

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

<Seat {data}>
	<div class="space-y-5">
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
	</div>

	<div class="mt-10 space-y-5">
		<h2 class="text-center text-2xl font-bold">Residence halls and schools</h2>

		<h3 class="text-center font-bold tracking-tight">
			Great food and service brings people together.
		</h3>
		<p>
			It starts with locally sourced ingrediency combined with our passion of food which allows us
			to create food that is tasty, enjoyable, and nutritious.
		</p>
		<p>
			With Yellow Seats meals, you can tell the food was prepared with care and made specifically
			for your students. Yellow Seat will ensure everyone who eats their meal isn't just enjoying
			tasty food, but also getting vital nutrition at great value. Our team select local freshest
			ingredients to deliver dishes to delight, exactly how you want them. We understand our world
			is diverse and students often have different needs. We are sensitive to lifestyle, cultural
			and medical requirements and can offer delicious diary options.
		</p>
		<p>Contact us to discuss our pricing models.</p>
	</div>

	<p class="my-10 text-center">
		<a href="/contact" class="button-link from-blue-500 via-blue-600 to-blue-700">Get in touch</a>
	</p>

	<div class="my-10 grid gap-16 md:grid-cols-2">
		<div class="flex flex-col justify-center gap-3">
			<h3 class="text-center text-2xl font-bold tracking-tight">Catering</h3>

			<p>
				<strong>Yellow Seat</strong> was founded out of a love of cuisine, our passion for service, and
				a drive to excel in the industry. We take great pleasure in being able to produce almost any
				delectable dish you can think of and deliver it with unmatched service. Every wedding and event
				that we cater for is exceptional and one-of-a-kind, not just for you but also for us. Going the
				extra mile is the foundation of our reputation. The connections we make with our clients and
				the positive remarks and feedback we get drive us the most. Anything you can think of, let us
				assist you in making it a reality.
			</p>

			<div class="mx-auto mt-5">
				<a href="https://conceptfood.co.nz" target="_blank" class="button-link item flex gap-1 items-center from-slate-600 via-slate-700 to-slate-800"
					>Catering <IconExternalLink stroke={3} class={`h-4 w-4`} /></a
				>
			</div>
		</div>

		<div class="flex flex-col gap-3">
			<h3 class="text-center text-2xl font-bold tracking-tight">Partner venues</h3>

			<p>
				Please look over our list of some of the most popular places in town. Whether you're looking
				for a one-of-a-kind historic venue, a modern space, or simply a plain blank canvas, our
				experienced staff can point you in the direction of the most appropriate site to bring your
				ideas to life.
			</p>

			<div class="mx-auto mt-auto">
				<a href="/yellowseat/venues" class="button-link from-slate-600 via-slate-700 to-slate-800"
					>Venues</a
				>
			</div>
		</div>
	</div>

	<div class="seat-tabs">
		<div class="grid gap-8 sm:grid-cols-2">
			<h2>Caf&#233;s</h2>
			<h2>Residence Halls & Boarding Schools</h2>
		</div>

		<div class="tab-grid">
			<img src="./yellowseat/cafe1.jpg" alt="Yellow Seat gallery 1" loading="lazy" />
			<img src="./yellowseat/cafe2.jpg" alt="Yellow Seat gallery 2" loading="lazy" />
			<img src="./yellowseat/residence1.jpg" alt="Yellow Seat gallery 3" loading="lazy" />
			<img src="./yellowseat/residence2.jpg" alt="Yellow Seat gallery 4" loading="lazy" />
		</div>
	</div>
</Seat>
