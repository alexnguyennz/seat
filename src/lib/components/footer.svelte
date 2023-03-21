<script>
</script>

<footer>
	<div class="footer-group container">
		<div>
			<ul>
				<li>
					<h3>Our services</h3>
				</li>
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
		<div>
			<ul>
				<li>
					<h3>About</h3>
				</li>
				<li>
					<a href="/team">Our team</a>
				</li>
				<li>
					<a href="/gallery">Gallery</a>
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>
					<h3>Contact us</h3>
				</li>
				<li class="flex gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="#D1D5DB"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
					</svg><a href="/contact">Get in touch</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="copyright">
		<span>&copy; {new Date().getFullYear()} <a href="/">Seat</a>. All rights reserved. </span>
	</div>
</footer>

<style>
	footer {
		padding: 1.25rem;
		background-color: #183153;
		color: rgb(209 213 219);
		font-size: 1.25rem;
		line-height: 1.75rem;
	}

	.footer-group {
		display: grid;
		gap: 1.25rem;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 768px) {
		.footer-group {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			justify-content: space-between;
		}

		.footer-group div {
			display: flex;
			justify-content: center;
		}
	}

	a:hover {
		text-decoration: underline;
	}

	li,
	.copyright {
		margin-bottom: 1rem;
	}

	h3 {
		margin-bottom: 1.5rem;
		font-weight: 600;
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	@media (min-width: 640px) {
		.copyright {
			display: flex;
			justify-content: center;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
