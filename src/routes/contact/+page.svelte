<script lang="ts">
	export let form = 'blue-seat';

	// change form name to use the right one for Netlify's Forms
	function selectForm(service: string) {
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
		<form name={form} method="POST" data-netlify="true" class="grid gap-8 sm:grid-cols-2">
			<input type="hidden" name="form-name" value={form} />

			<div class="relative">
				<label for="name">Your name <span class="text-red-500">*</span></label>
				<input type="text" name="name" id="name" required />
			</div>

			<div class="relative">
				<label for="email">Your email <span class="text-red-500">*</span></label>
				<input type="email" name="email" id="email" required />
			</div>

			<div class="relative">
				<label for="website">Your website</label>
				<input type="url" name="website" id="website" />
			</div>

			<div class="relative">
				<label for="phone-number">Your phone number</label>
				<input type="text" name="phone-number" id="phone-number" />
			</div>

			<div class="relative col-span-2">
				<label for="service">Service <span class="text-red-500">*</span></label>
				<select name="service" id="service" required on:change={(e) => selectForm(e.target.value)}>
					<option disabled selected value="" />
					<option value="Yellow Seat">Yellow Seat</option>
					<option value="Blue Seat">Blue Seat</option>
					<option value="Orange Seat">Orange Seat</option>
					<option value="Green Seat">Green Seat</option>
				</select>
			</div>

			<div class="relative col-span-2">
				<label for="message">Your message <span class="text-red-500">*</span></label>
				<textarea name="message" id="message" class="h-56" required />
			</div>

			<div class="col-span-2 -mt-2 text-center">
				<button type="submit" class="button-link from-blue-500 via-blue-600 to-blue-700"
					>Send message</button
				>
			</div>
		</form>

		<!-- hidden Netlify form -->
		<form name="yellow-orange-green-seat" method="POST" data-netlify="true" class="hidden">
			<input type="hidden" name="form-name" value="yellow-orange-green-seat" />

			<div>
				<input type="text" name="name" required />
				<input type="email" name="email" required />
				<input type="url" name="website" />
				<input type="text" name="phone-number" />
			</div>

			<div>
				<select name="service" required>
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
	input,
	select,
	textarea {
		width: 100%;
		padding: 1rem;
		border: 1px solid #6b7280;
	}

	label {
		position: absolute;
		top: -1rem;
		left: 1rem;
		padding: 5px 10px;
		background: white;
	}

	input:focus-visible,
	select:focus-visible,
	textarea:focus-visible {
		border: 1px solid #1c64f2;
		outline: 1px solid #1c64f2;
	}

	/* remove default arrow */
	select {
		appearance: none;
	}

	select:not([size]) {
		background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
		background-position: right 0.75rem center;
		background-repeat: no-repeat;
		background-size: 0.75em 0.75em;
		padding-right: 2.5rem;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}
</style>
