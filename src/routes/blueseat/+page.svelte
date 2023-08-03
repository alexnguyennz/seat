<script>
	import Seat from '$lib/components/Seat.svelte';

	const data = {
		name: 'Blue Seat',
		slug: 'blueseat'
	};
</script>

<svelte:head>
	<title>Blue Seat</title>
	<meta name="description" content="Blue Seat" />

	<link rel="preload" as="image" href="/blueseat.png" />
	<link rel="preload" as="image" href="/blueseat/banner.jpg" />
</svelte:head>

<Seat {data}
	><div class="mb-10 space-y-5">
		<p>
			Blue Seat is passionate about running safe and successful events. We believe that food, safety
			and hospitality are key to the customer experience and draw on over 40 years of event
			experience to be able to deliver event management, consultation or operational advice. We
			thrive on building open and honest relationships, continual learning and transparency.
		</p>

		<p>
			Through our business relationships we are able to build long term partnerships with clients,
			venues suppliers and staff. And can offer an end to end event management service or consulting
			on any project. We specialise in corporate and retail catering for events, alcohol management,
			liquor licensing, health and safety and event plans. In addition we are able to advise and
			negotiate on food and beverage contracts, tenders, sponsorships deals, boarding school
			requirements and so much more!
		</p>

		<p>
			Through our social promises we are dedicated to developing future career paths for all of our
			staff, food safety, the safe service of alcohol and boots on the ground support.
		</p>

		<p>
			Our clients, patrons, contacts, suppliers and staff are the beating heart of Blue Seat and we
			take care to deliver excellent events and advice to each and every stakeholder.
		</p>
	</div>

	<p class="my-10 text-center">
		<a href="/contact" class="button-link from-blue-500 via-blue-600 to-blue-700">Get in touch</a>
	</p>

	<div class="seat-tabs">
		<h2>Event Management</h2>

		<div class="tab-grid">
			<img src="./blueseat/1.jpg" alt="Blue Seat gallery 1" loading="lazy" />
			<img src="./blueseat/2.jpg" alt="Blue Seat gallery 2" loading="lazy" />
			<img src="./blueseat/3.jpg" alt="Blue Seat gallery 3" loading="lazy" />
			<img src="./blueseat/4.jpg" alt="Blue Seat gallery 4" loading="lazy" />
		</div>
	</div>
</Seat>
