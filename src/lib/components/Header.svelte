<script>
	import { page } from '$app/stores';

	import { IconChevronDown, IconX, IconMenu2 } from '@tabler/icons-svelte';

	export let pathname = '';

	let toggle = false;

	import ChairLogo from '$lib/components/ChairLogo.svelte';
</script>

<header class="mb-20">
	<div class="container mx-auto mt-3 flex items-center justify-between px-5">
		<div class="flex items-center gap-5">
			<a href="/"><ChairLogo {pathname} /></a>

			<button class="lg:hidden" on:click={() => (toggle = !toggle)}>
				{#if !toggle}
					<IconMenu2 class="h-6 w-6" />
				{:else}
					<IconX class="h-6 w-6" />
				{/if}
			</button>
		</div>

		<nav class="hidden lg:block">
			<ul class="flex gap-8 text-xl text-gray-700">
				<li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
				<li class:active={$page.url.pathname === '/blueseat'}>
					<a href="/blueseat">Blue Seat</a>
				</li>
				<li class="group relative">
					<a
						href="/yellowseat"
						class="flex items-center justify-between gap-1"
						class:active={$page.url.pathname.startsWith('/yellowseat')}
						>Yellow Seat <IconChevronDown
							stroke={3}
							class="h-5 w-5 transition group-hover:-rotate-180"
						/></a
					>

					<ul
						class="invisible absolute z-10 mx-auto w-48 scale-75 space-y-2 rounded-md pb-6 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100"
					>
						<li>
							<a
								href="/yellowseat/menus"
								class:subactive={$page.url.pathname === '/yellowseat/menus'}>Catering Menus</a
							>
						</li>
						<li>
							<a
								href="/yellowseat/venues"
								class:subactive={$page.url.pathname === '/yellowseat/venues'}>Partner Venues</a
							>
						</li>
					</ul>
				</li>
				<li class:active={$page.url.pathname === '/orangeseat'}>
					<a href="/orangeseat">Orange Seat</a>
				</li>
				<li class:active={$page.url.pathname === '/greenseat'}>
					<a href="/greenseat">Green Seat</a>
				</li>
				<li class="group relative">
					<span
						class:active={$page.url.pathname === '/team' || $page.url.pathname === '/gallery'}
						class="flex cursor-default items-center justify-between gap-1 transition hover:text-blue-700"
						>About <IconChevronDown
							stroke={3}
							class="h-5 w-5 transition group-hover:-rotate-180"
						/></span
					>

					<ul
						class="invisible absolute z-10 mx-auto w-48 scale-75 space-y-2 rounded-md pb-6 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100"
					>
						<li class:subactive={$page.url.pathname === '/team'}>
							<a href="/team">Our team</a>
						</li>
						<li class:subactive={$page.url.pathname === '/gallery'}>
							<a href="/gallery">Gallery</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>

		<a
			href="/contact"
			class="rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-3 text-xl  font-medium text-white transition-all hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
			>Get in touch</a
		>
	</div>

	<!-- mobile header -->
	<nav class="mt-6 lg:hidden">
		{#if toggle}
			<ul class="flex w-full flex-col gap-5 bg-gray-100 p-5 text-xl text-gray-700">
				<li class:active={$page.url.pathname === '/'}><a href="/" class="block">Home</a></li>
				<li class:active={$page.url.pathname === '/blueseat'}>
					<a href="/blueseat" class="block">Blue Seat</a>
				</li>
				<li class="group relative">
					<a
						href="/yellowseat"
						class="flex items-center justify-between gap-1"
						class:active={$page.url.pathname.startsWith('/yellowseat')}>Yellow Seat</a
					>

					<ul class="ml-6 mt-3 space-y-2">
						<li>
							<a
								href="/yellowseat/menus"
								class:subactive={$page.url.pathname === '/yellowseat/menus'}
								class="block">— Catering Menus</a
							>
						</li>
						<li>
							<a
								href="/yellowseat/venues"
								class:subactive={$page.url.pathname === '/yellowseat/venues'}
								class="block">— Partner Venues</a
							>
						</li>
					</ul>
				</li>
				<li class:active={$page.url.pathname === '/orangeseat'}>
					<a href="/orangeseat" class="block">Orange Seat</a>
				</li>
				<li class:active={$page.url.pathname === '/greenseat'}>
					<a href="/greenseat" class="block">Green Seat</a>
				</li>
				<li class="group relative">
					<span
						class:active={$page.url.pathname === '/team' || $page.url.pathname === '/gallery'}
						class="flex cursor-default items-center justify-between gap-1 transition hover:text-blue-700"
						>About</span
					>

					<ul class="ml-6 mt-3 space-y-2">
						<li class:subactive={$page.url.pathname === '/team'}>
							<a href="/team" class="block">— Our team</a>
						</li>
						<li class:subactive={$page.url.pathname === '/gallery'}>
							<a href="/gallery" class="block">— Gallery</a>
						</li>
					</ul>
				</li>
			</ul>
		{/if}
	</nav>
</header>

<style>
	.active {
		position: relative;
	}

	.active:before {
		content: '';
		position: absolute;
		width: 0;
		bottom: -5px;
		left: 0;
		height: 4px;
		background-color: #1d4ed8;
		animation: animation 0.25s forwards;
	}

	@keyframes animation {
		0% {
			width: 0;
		}

		100% {
			width: 100%;
		}
	}
</style>
