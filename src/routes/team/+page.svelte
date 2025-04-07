<script>
	import { IconAwardFilled } from '@tabler/icons-svelte';
	import TeamMember from '$lib/components/routes/team/TeamMember.svelte';

	let data = [
		{
			name: 'Clint Schoultz',
			slug: 'clint-schoultz',
			linkedin: 'https://www.linkedin.com/in/clint-schoultz-7833a337'
		},
		{
			name: 'Bradley Alford',
			slug: 'bradley-alford',
			linkedin: 'https://www.linkedin.com/in/brad-a-577a0721'
		},
		{
			name: 'Jessica Armstrong',
			slug: 'jessica-armstrong',
			linkedin: 'https://www.linkedin.com/in/jess-armstrong-0992b81b'
		}
	];
</script>

<svelte:head>
	<title>Our team - The Seats</title>
	<meta name="description" content="Our team" />

	<link rel="preload" as="image" href="/team/clint-schoultz.png" />
	<link rel="preload" as="image" href="/team/bradley-alford.png" />
	<link rel="preload" as="image" href="/team/jessica-armstrong.png" />
</svelte:head>

<section class="space-y-5">
	<h1 class="page-heading">Our team</h1>

	<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
		<TeamMember data={data[0]}>
			<div slot="intro" class="space-y-5">
				<ul>
					<li>
						<IconAwardFilled class="inline" />
						<span>Masters of Business Administration (Innovation & Leadership)</span>
					</li>
					<li>
						<IconAwardFilled class="inline" />
						<span>Masters of Hotel Management</span>
					</li>
				</ul>

				<p>
					Clint has worked in hospitality for over 20 years across fine dining, cafes, public and
					private health care, large events, residence halls and many more.
				</p>
			</div>

			<div slot="more" class="mb-5 space-y-5">
				<p>
					He uses his years of influential leadership and industry knowledge, to support his team to
					achieve great customer outcomes. He has led the service delivery for high profile
					sites/customers, like, as Villa Maria, Vector Arena, FIFA, Wellington City Council and
					Westpac Stadium.
				</p>
				<p>His previous roles include:</p>
				<ul class="ml-6 list-disc">
					<li>Catering Manager for Westpac Stadium</li>
					<li>National Catering Manager for FIFA U20 World Cup</li>
					<li>Operations Manager Food and Beverage for Vector Arena</li>
					<li>Regional Manager for Spotless</li>
				</ul>

				<p>
					He uses the insights gained from managing the service delivery for these high profile
					clients/sites, to provide his teams with the right support, resources and training to
					deliver consistent quality services.
				</p>
			</div>
		</TeamMember>

		<TeamMember data={data[1]}>
			<div slot="intro" class="space-y-5">
				<p>
					Brad has worked in the hospitality industry for 20+ years in various management roles.
				</p>
			</div>

			<div slot="more" class="mb-5 space-y-5">
				<p>During his tenure, he has managed numerous stadiums including:</p>
				<ul class="ml-6 list-disc">
					<li>Westpac Stadium</li>
					<li>Mt Smart Stadium</li>
					<li>Subiaco Oval</li>
					<li>NIB Stadium</li>
				</ul>

				<p>
					His Major Event experience throughout Australasia and Europe is extensive. Managing major
					events including:
				</p>
				<ul class="ml-6 list-disc">
					<li>V8 events</li>
					<li>Bathurst 1000</li>
					<li>Sydney 500</li>
					<li>Phillip Island</li>
					<li>Tasmania</li>
					<li>Spring Racing Carnival</li>
					<li>Australian Open Golf</li>
					<li>Sydney Myer Music Bowl</li>
					<li>Melbourne Grand Prix</li>
					<li>The President's Cup in South Korea</li>
					<li>4 months as a Plot Manager in the Olympic Village at the London 2012 Olympics</li>
				</ul>

				<p>
					He has also worked in the Education Sector with his sites providing over 4000 meals per
					day to boarding and day students. Brad thrives on managing teams to bring a project
					together - each person contributing differently to achieve a positive outcome.
				</p>

				<p>Brad's passion is delivering for client and key stakeholders truly successful events.</p>
			</div>
		</TeamMember>

		<TeamMember data={data[2]}>
			<div slot="intro" class="space-y-5">
				<p>
					With over 20 years of experience in the hospitality sector Jessica (Jess) brings a wealth
					of knowledge and a can do attitude to any event she works on. From small private
					functions, to arenas, stadiums and green sites Jess has seen it all.
				</p>
			</div>

			<div slot="more" class="mb-5 space-y-5">
				<p>
					She has attended year 1 and 2 at the Venue Management School in Kingscliff Australia and
					is a long standing member of EVANZ.
				</p>
				<p>
					Through Jess's career she has worked with The Orange Group, Vector Arena, Liquid Events,
					Westpac Stadium, Reliance Risk and most recently as the Venues Operations Manager for
					Venues Wellington overlooking the event operations of:
				</p>
				<ul class="ml-6 list-disc">
					<li>TSB Arena</li>
					<li>Michael Fowler Centre</li>
					<li>St James Theatre</li>
					<li>The Opera House</li>
					<li>Shed 6 Auditorium</li>
				</ul>

				<p>
					Jess is passionate about building relationships with clients and co-workers, collaborating
					for the very best out come and chipping in anywhere she is needed.
				</p>
			</div>
		</TeamMember>
	</div>
</section>
