<script lang="ts">
	import { fly } from 'svelte/transition';

	// Select
	import { createSelect, melt } from '@melt-ui/svelte';
	import { IconChevronDown } from '@tabler/icons-svelte';

	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { valueLabel, open, value }
	} = createSelect({
		forceVisible: true,
		name: 'service',
		defaultValueLabel: '-',
		defaultValue: 'Blue Seat',
		required: true
	});

	const options = {
		service: ['Blue Seat', 'Yellow Seat', 'Orange Seat', 'Green Seat']
	};

	$: form = 'blue-seat';

	// set correct form based on selected option
	$: $value, $value === 'Blue Seat' ? (form = 'blue-seat') : (form = 'yellow-orange-green-seat');
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

			<div class="relative col-span-2 sm:col-span-1">
				<label for="name">Your name <span class="required">*</span></label>
				<input type="text" name="name" id="name" required />
			</div>

			<div class="relative col-span-2 sm:col-span-1">
				<label for="email">Your email <span class="required">*</span></label>
				<input type="email" name="email" id="email" required />
			</div>

			<div class="relative col-span-2 sm:col-span-1">
				<label for="website">Your website</label>
				<input type="url" name="website" id="website" />
			</div>

			<div class="relative col-span-2 sm:col-span-1">
				<label for="phone-number">Your phone number</label>
				<input type="text" name="phone-number" id="phone-number" />
			</div>

			<!-- hidden to pass Melt UI Select value on form submit -->
			<label for="service" class="hidden">Your service <span class="required">*</span></label>
			<input type="text" name="service" id="service" value={$value} class="hidden" required />

			<div class="relative col-span-2">
				<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
				<label use:melt={$label}>Service <span class="required">*</span></label>
				<button class="trigger w-full" use:melt={$trigger} aria-label="seat service select">
					{$valueLabel || '-'}
					<IconChevronDown stroke="2" class="h-5 w-5" />
				</button>

				{#if $open}
					<div class="select-menu" use:melt={$menu} transition:fly={{ duration: 100, y: -10 }}>
						{#each Object.entries(options) as [key, arr]}
							<div use:melt={$group(key)}>
								<div class="label" use:melt={$groupLabel(key)}>
									{key}
								</div>
								{#each arr as item}
									<div class="option" use:melt={$option({ value: item, label: item })}>
										{item}
									</div>
								{/each}
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="relative col-span-2">
				<label for="message">Your message <span class="required">*</span></label>
				<textarea name="message" id="message" class="h-56" required />
			</div>

			<div class="col-span-2 -mt-2 text-center">
				<button type="submit" class="button-link from-blue-500 via-blue-600 to-blue-700"
					>Send message</button
				>
			</div>
		</form>

		<!-- hidden Netlify forms -->
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

<style lang="postcss">
	input,
	select,
	textarea {
		@apply w-full rounded-xl border border-[#6b7280] p-4;
	}

	label {
		@apply absolute -top-4 left-2 bg-white text-base;
		padding: 5px 10px;
	}

	input:focus-visible,
	select:focus-visible,
	textarea:focus-visible,
	.trigger:focus,
	.trigger[data-state='open'] {
		border: 1px solid #1c64f2;
		outline: 1px solid transparent;
	}

	.required {
		@apply font-bold text-red-500;
	}

	/* Select */
	.label {
		@apply hidden;
	}
	.select-menu {
		@apply z-10 flex flex-col overflow-y-auto rounded-xl;
		@apply border border-[#6b7280] bg-white;
	}
	.option {
		@apply relative cursor-pointer py-2 pl-3 pr-4;
		@apply focus:z-10;
		@apply data-[highlighted]:bg-blue-500 data-[highlighted]:text-white;
		@apply data-[selected]:bg-blue-500 data-[selected]:text-white;
	}
	.trigger {
		@apply flex items-center justify-between rounded-xl border border-[#6b7280] bg-white py-4 pl-4 pr-3;
	}
</style>
