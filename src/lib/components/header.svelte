<script>
	import { page } from '$app/stores';

	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		DropdownItem,
		Chevron
	} from 'flowbite-svelte';

	/* change logo based on current services page */
	let logo = 'logo';

	$: if (
		$page.url.pathname === '/yellowseat' ||
		$page.url.pathname === '/blueseat' ||
		$page.url.pathname === '/orangeseat' ||
		$page.url.pathname === '/greenseat'
	) {
		logo = $page.url.pathname;
	} else {
		logo = '/logo';
	}
</script>

<header>
	<Navbar
		let:hidden
		let:toggle
		navClass="px-5 py-2 w-full"
		navDivClass="mx-auto flex flex-wrap md:flex-nowrap justify-between items-center"
	>
		<NavBrand href="/"
			><img src={`/logo${logo}.png`} alt="Seat logo" width="80" height="111" /></NavBrand
		>
		<div class="flex md:order-2">
			<a
				href="/contact"
				class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-xl px-8 py-3"
				>Get in touch</a
			>
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl
			{hidden}
			ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 text-xl font-bold"
		>
			<NavLi href="/" active={$page.url.pathname === '/'}>Home</NavLi>
			<NavLi href="/blueseat" active={$page.url.pathname === '/blueseat'} class="transition"
				>Blue Seat</NavLi
			>
			<NavLi href="/yellowseat" active={$page.url.pathname === '/yellowseat'} class="transition"
				>Yellow Seat</NavLi
			>
			<NavLi href="/orangeseat" active={$page.url.pathname === '/orangeseat'} class="transition"
				>Orange Seat</NavLi
			>
			<NavLi href="/greenseat" active={$page.url.pathname === '/greenseat'} class="transition"
				>Green Seat</NavLi
			>

			<li>
				<div class="dropdown dropdown-hover w-full">
					<ul>
						<NavLi
							tabindex="0"
							id="nav-menu1"
							class="cursor-pointer transition"
							data-dropdown-trigger="hover"
							active={$page.url.pathname === '/team' || $page.url.pathname === '/gallery'}
							><Chevron aligned>About</Chevron></NavLi
						>

						<li>
							<ul class="dropdown-content menu p-2 shadow bg-white rounded-box w-full md:w-52">
								<!-- tabindex="0" -->
								<DropdownItem
									href="/team"
									defaultClass="bg-white font-bold py-2 px-4 text-xl hover:bg-gray-100 dark:hover:bg-gray-600"
									><span class:text-blue-700={$page.url.pathname === '/team'}>Our team</span
									></DropdownItem
								>
								<DropdownItem
									href="/gallery"
									defaultClass="bg-white font-bold py-2 px-4 text-xl hover:bg-gray-100 dark:hover:bg-gray-600"
									><span class:text-blue-700={$page.url.pathname === '/gallery'}>Gallery</span
									></DropdownItem
								>
							</ul>
						</li>
					</ul>
				</div>
			</li>
		</NavUl>
	</Navbar>
</header>

<style>
</style>
