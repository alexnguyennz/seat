<script lang="ts">
	import { Label } from 'flowbite-svelte';

	$: form = 'blue-seat';

	// change form name to use the right one for Netlify's Forms
	function selectForm(service: string) {
		console.log('test', service);

		if (service === 'Blue Seat') {
			form = 'blue-seat';
		} else {
			form = 'yellow-orange-green-seat';
		}
	}
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact" />
</svelte:head>

<section class="space-y-5">
	<h1 class="page-heading">Get in touch</h1>

	<div>
		<form name={form} method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value={form} />

			<div class="inputs">
				<input type="text" name="name" placeholder="Your name" required />
				<input type="email" name="email" placeholder="Your email" required />
				<input type="url" name="website" placeholder="Your website" />
				<input type="text" name="phone-number" placeholder="Your phone number" />
			</div>

			<div>
				<select name="service" id="service" required on:change={(e) => selectForm(e.target.value)}>
					<option disabled selected value="">Type of service</option>
					<option value="Yellow Seat">Yellow Seat</option>
					<option value="Blue Seat">Blue Seat</option>
					<option value="Orange Seat">Orange Seat</option>
					<option value="Green Seat">Green Seat</option>
				</select>
			</div>

			<div>
				<textarea name="message" placeholder="Your message" required />
			</div>

			<div class="button-container">
				<button
					type="submit"
					class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-xl px-8 py-3"
					>Send message</button
				>
			</div>
		</form>

		<!-- hidden Netlify form -->
		<form name="yellow-orange-green-seat" method="POST" data-netlify="true" class="hidden-form">
			<input type="hidden" name="form-name" value="yellow-orange-green-seat" />

			<div>
				<input type="text" name="name" required />
				<input type="email" name="email" required />
				<input type="url" name="website" />
				<input type="text" name="phone-number" />
			</div>

			<div>
				<select name="service" id="service" required>
					<option disabled selected value="">Type of Service</option>
					<option value="yellowseat">Yellow Seat</option>
					<option value="blueseat">Blue Seat</option>
					<option value="orangeseat">Orange Seat</option>
					<option value="greenseat">Green Seat</option>
				</select>
			</div>

			<div>
				<textarea name="message" required />
			</div>

			<div>
				<button type="submit">Send message</button>
			</div>
		</form>
	</div>
</section>

<style>
	.button-container {
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.hidden-form {
		display: none;
	}

	.inputs {
		display: grid;
		gap: 1.25rem;
	}

	input,
	select,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border-width: 0;
		border-bottom-width: 2px;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}

	textarea {
		height: 10rem;
	}

	.inputs input:focus {
		border-color: #1c64f2;
	}

	/* workaround for poor League Spartan spacing in select options */
	select option {
		font-family: Tahoma;
	}

	@media (min-width: 768px) {
		.inputs {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
