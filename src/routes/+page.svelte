<script>
	import SeatCard from '$lib/components/routes/index/SeatCard.svelte';
	import ListItem from '$lib/components/routes/index/ListItem.svelte';

	import { seats } from '$lib/data.ts';

	import name from '$lib/assets/name.webp';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home - Seat" />

	<link rel="preload" as="image" href="./blueseat-sm.png" />
	<link rel="preload" as="image" href="./yellowseat-sm.png" />
	<link rel="preload" as="image" href="./orangeseat-sm.png" />
	<link rel="preload" as="image" href="./greenseat-sm.png" />
</svelte:head>

<section class="space-y-16">
	<div>
		<h2 class="page-heading">Our services</h2>
		<div class="grid gap-8 md:grid-cols-2">
			{#each seats as seat}
				<SeatCard data={seat} />
			{/each}
		</div>
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
				<ul class="ml-20 mt-1 list-disc space-y-2">
					<li>
						We support <a
							href="https://vsctrust.org.nz/dosomegood"
							target="_blank"
							class="animated-link"
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

	<div>
		<h2 class="page-heading mb-4">The story behind the name</h2>

		<div class="grid gap-10 md:grid-cols-2">
			<img
				src={name}
				alt="blue seats"
				width="535"
				height="346"
				class="mx-auto mt-2 w-full"
				loading="lazy"
			/>

			<div class="space-y-5">
				<p>
					As a Melbourne boy, Australian Football League is in Brad's blood. From the day he was
					born, Brad has been a Carlton Football Club Member. His Grandfather and Mother were both
					lifetime members as well.
				</p>

				<p>
					For every game, Brad and his mother would go to Princes Park and sit in the same blue
					seats, Number 19 and Number 20. They sat in those seats for over 25 years. Brad's passion
					for sports and live events began in those seats and helped determined his lifelong career
					path in events.
				</p>

				<p>
					Blue Seat, Yellow Seat, Green Seat, and Orange Seat are a family run by event and
					management professionals passionate about people, food, hospitality, and creating truly
					memorable occasions.
				</p>
			</div>
		</div>
	</div>
</section>
