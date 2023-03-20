<script>
	import SeatCard from '$lib/components/seat-card.svelte';
	import ListItem from '$lib/components/list-item.svelte';

	const seats = [
		{
			name: 'Blue Seat',
			slug: 'blueseat',
			description:
				'Event consulting, management, delivery, licensing, retail, corporate player, artist catering and large events'
		},
		{
			name: 'Yellow Seat',
			slug: 'yellowseat',
			description:
				'Cafes, boarding schools, residence halls, private hospitals, canteens, consulting, and any other catering requirements'
		},
		{
			name: 'Orange Seat',
			slug: 'orangeseat',
			description:
				'Catering and event equipment hire from tills, flooring to marquees and kitchen equipment'
		},
		{
			name: 'Green Seat',
			slug: 'greenseat',
			description: 'Corporate cleaning, carpets, and upholstery'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home - Seat" />

	<link rel="preload" as="image" href="./blueseat.png" />
	<link rel="preload" as="image" href="./yellowseat.png" />
	<link rel="preload" as="image" href="./orangeseat.png" />
	<link rel="preload" as="image" href="./greenseat.png" />
</svelte:head>

<section class="space-y-5 text-xl">
	<div>
		<h2 class="page-heading">Our services</h2>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each seats as seat}
			<SeatCard data={seat} />
		{/each}
	</div>

	<div>
		<h2 class="page-heading">Our social promises</h2>

		<ul>
			<ListItem>Skills and a career path</ListItem>
			<ListItem
				>We will support people with their workplace progression - regardless of when and where they
				start</ListItem
			>
			<ListItem
				>We will establish clear pathways to progression for all employees, offer support and
				mentorship programmes</ListItem
			>
			<ListItem>Helping the next generation</ListItem>

			<li>
				<ul class="ml-20 list-disc">
					<li>
						We support <a
							href="https://vsctrust.org.nz/dosomegood"
							target="_blank"
							class="link link-hover"
							rel="noreferrer">Do Some Good</a
						> who bridges the gap between businesses and low decile schools
					</li>
					<li>
						Kiwi kids living in hardship deserve more support, opportunities and experiences from
						the wider community
					</li>
					<li>
						With many businesses seeking to promote corporate social responsibility, we aim to
						direct their focus and their customised offer of support to kids that need it the most
					</li>
				</ul>
			</li>
		</ul>
	</div>

	<h2 class="page-heading">The story behind the name</h2>

	<div class="grid md:grid-cols-2 gap-10">
		<img
			src="./name.webp"
			alt="blue seats"
			width="320"
			height="207"
			class="w-full mx-auto rounded-lg"
		/>

		<div class="space">
			<p>
				As a Melbourne boy Australian Football League is in Brad's blood. From the day he was born,
				Brad has been a Carlton Football Club Member. His Grandfather and Mother were both lifetime
				members as well.
			</p>

			<p>
				For every game, Brad and his mother would go to Princes Park and sit in the same blue seats,
				Number 19 and Number 20. They sat in those seats for over 25 years. Brad's passion for
				sports and live events began in those seats and helped determined his lifelong career path
				in events.
			</p>

			<p>
				Blue Seat, Yellow Seat, Green Seat, and Orange Seat are a family run by event and management
				professionals passionate about people, food, hospitality, and creating truly memorable
				occasions.
			</p>
		</div>
	</div>
</section>
