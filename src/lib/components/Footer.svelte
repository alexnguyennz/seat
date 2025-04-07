<script>
	import { IconMessageCircle2Filled } from '@tabler/icons-svelte';

	import blueseat from '$lib/assets/logo/blueseat-sm.png';
	import yellowseat from '$lib/assets/logo/yellowseat-sm.png';
	import orangeseat from '$lib/assets/logo/orangeseat-sm.png';
	import greenseat from '$lib/assets/logo/greenseat-sm.png';
</script>

<footer class="mt-20 bg-slate-800 px-5 py-8 text-gray-200">
	<div class="container mx-auto grid gap-10 text-center sm:text-left md:grid-cols-3">
		<div class="justify-self-center">
			<h3>Our services</h3>
			<ul>
				<li class="icon">
					<img src={blueseat} width="24" height="33" alt="Blue Seat logo" /><a href="/blueseat"
						>Blue Seat</a
					>
				</li>
				<li class="icon">
					<img src={yellowseat} width="24" height="33" alt="Yellow Seat logo" /><a
						href="/yellowseat">Yellow Seat</a
					>
				</li>

				<li class="icon">
					<img src={orangeseat} width="24" height="33" alt="Orange Seat logo" /><a
						href="/orangeseat">Orange Seat</a
					>
				</li>

				<li class="icon">
					<img src={greenseat} width="24" height="33" alt="Green Seat logo" /><a href="/greenseat"
						>Green Seat</a
					>
				</li>
			</ul>
		</div>
		<div class="justify-self-center">
			<h3>About</h3>
			<ul>
				<li>
					<a href="/team">Our team</a>
				</li>
				<li>
					<a href="/gallery">Gallery</a>
				</li>
			</ul>
		</div>
		<div class="justify-self-center">
			<h3>Contact us</h3>
			<ul>
				<li class="icon">
					<IconMessageCircle2Filled /><a href="/contact">Get in touch</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="mt-8 text-center">
		<span>&copy; {new Date().getFullYear()} The Seats</span>
	</div>
</footer>

<style lang="postcss">
	h3 {
		@apply mb-2 text-2xl font-semibold;
	}

	ul {
		@apply space-y-3;
	}

	a {
		position: relative;
	}

	a:before {
		content: '';
		position: absolute;
		width: 0;
		bottom: -2px;
		left: 0;
		height: 3px;
		background-color: white;
		transition: all 0.15s ease-in-out;
	}

	a:hover:before {
		width: 100%;
	}

	li.icon {
		@apply flex items-center justify-center gap-2;
		@apply sm:justify-normal;
	}
</style>
