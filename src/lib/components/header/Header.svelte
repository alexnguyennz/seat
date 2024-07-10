<script>
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';

	import ChairLogo from '$lib/components/ChairLogo.svelte';
	import YellowSeatMobileMenu from '$lib/components/header/YellowSeatMobileMenu.svelte';
	import GreenSeatMobileMenu from "$lib/components/header/GreenSeatMobileMenu.svelte";
	import AboutMobileMenu from '$lib/components/header/AboutMobileMenu.svelte';

	// Collapsible
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { IconX, IconMenu2 } from '@tabler/icons-svelte';
	import YellowSeatMenu from '$lib/components/header/YellowSeatMenu.svelte';
	import GreenSeatMenu from "$lib/components/header/GreenSeatMenu.svelte";
	import AboutMenu from '$lib/components/header/AboutMenu.svelte';

	const open = writable(false);

	const {
		elements: { root, content, trigger }
	} = createCollapsible({ open });

	export let pathname = '';
	$: pathname, open.set(false); // close mobile menu when navigating
</script>

<header class="mb-28">
	<div class="mx-auto mt-3 flex items-center justify-between px-5 xl:container">
		<div class="flex items-center gap-5">
			<a href="/" aria-label="home page"><ChairLogo {pathname} /></a>

			<div class="flex justify-center lg:hidden">
				<button
					use:melt={$trigger}
					class="button-link relative h-8 w-8 rounded-full !text-black transition hover:bg-slate-200"
					aria-label="toggle mobile menu"
				>
					<span class="abs-centers absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						{#if $open}
							<IconX />
						{:else}
							<IconMenu2 />
						{/if}
					</span>
				</button>
			</div>
		</div>

		<nav class="hidden lg:block">
			<ul class="flex items-center gap-8 text-xl tracking-tighter text-gray-700 xl:gap-8">
				<li class="animated-header-link" class:active={$page.url.pathname === '/'}>
					<a href="/">Home</a>
				</li>
				<li class="animated-header-link" class:active={$page.url.pathname === '/blueseat'}>
					<a href="/blueseat">Blue Seat</a>
				</li>
				<YellowSeatMenu />
				<li class="animated-header-link" class:active={$page.url.pathname === '/orangeseat'}>
					<a href="/orangeseat">Orange Seat</a>
				</li>
				<GreenSeatMenu />
				<AboutMenu />
			</ul>
		</nav>

		<a href="/contact" class="button-link from-blue-500 via-blue-600 to-blue-700">Get in touch</a>
	</div>

	<!-- Mobile menu -->
	<div use:melt={$root} class="mt-4 shadow-lg">
		{#if $open}
			<div use:melt={$content} transition:slide={{ duration: 300 }}>
				<nav class="lg:hidden">
					<ul
						class="flex w-full flex-col gap-5 border-t border-slate-100 bg-slate-50 p-5 text-xl tracking-tight text-gray-700"
					>
						<li class:active={$page.url.pathname === '/'}>
							<a href="/" class="block py-0.5 tracking-tighter">Home</a>
						</li>
						<li class:active={$page.url.pathname === '/blueseat'}>
							<a href="/blueseat" class="block py-0.5 tracking-tighter">Blue Seat</a>
						</li>
						<YellowSeatMobileMenu />
						<li class:active={$page.url.pathname === '/orangeseat'}>
							<a href="/orangeseat" class="block py-0.5 tracking-tighter">Orange Seat</a>
						</li>
						<GreenSeatMobileMenu />
						<AboutMobileMenu />
					</ul>
				</nav>
			</div>
		{/if}
	</div>
</header>
