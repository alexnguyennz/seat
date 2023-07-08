<script>
	import { IconMessageCircle2Filled } from '@tabler/icons-svelte';
</script>

<footer class="mt-20 bg-[#183153] py-7 px-4 text-xl text-gray-200">
	<div class="container mx-auto grid justify-center gap-10 text-center md:grid-cols-3">
		<div class="justify-self-center">
			<h3 class="mb-2 text-2xl font-semibold">Our services</h3>
			<ul class="space-y-2">
				<li>
					<a href="/blueseat">Blue Seat</a>
				</li>
				<li>
					<a href="/yellowseat">Yellow Seat</a>
				</li>
				<li>
					<a href="/orangeseat">Orange Seat</a>
				</li>
				<li>
					<a href="/greenseat">Green Seat</a>
				</li>
			</ul>
		</div>
		<div class="justify-self-center">
			<h3 class="mb-2 text-2xl font-semibold">About</h3>
			<ul class="space-y-2">
				<li>
					<a href="/team">Our team</a>
				</li>
				<li>
					<a href="/gallery">Gallery</a>
				</li>
			</ul>
		</div>
		<div class="justify-self-center">
			<h3 class="mb-2 text-2xl font-semibold">Contact us</h3>
			<ul>
				<li>
					<IconMessageCircle2Filled class="mr-2 mb-1 inline" /><a href="/contact">Get in touch</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="mt-6 flex justify-center">
		<span>&copy; {new Date().getFullYear()} <a href="/">Seat</a>. All rights reserved. </span>
	</div>
</footer>

<style>
	footer a {
		position: relative;
	}

	footer a:before {
		content: '';
		position: absolute;
		width: 0;
		bottom: -5px;
		left: 0;
		height: 2px;
		background-color: white;
		transition: all 0.15s ease-in-out;
	}

	footer a:hover:before {
		width: 100%;
	}
</style>
