<script>
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { IconExternalLink, IconChevronDown } from '@tabler/icons-svelte';
	import { page } from '$app/stores';

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();
</script>

<li use:melt={$root} class="group relative">
	<button use:melt={$trigger} class="flex w-full items-center justify-between">
		<span
			class="py-0.5 tracking-tighter transition hover:text-blue-700"
			class:active={$page.url.pathname.startsWith('/yellowseat')}>Yellow Seat</span
		>
		<IconChevronDown
			stroke={4}
			class={`h-5 w-5 text-gray-700 transition ${$open ? 'rotate-180' : ''}`}
		/>
	</button>

	{#if $open}
		<ul use:melt={$content} transition:slide={{ duration: 200 }} class="ml-6 mt-3 space-y-3">
			<li>
				<a
					href="/yellowseat/"
					class:subactive={$page.url.pathname === '/yellowseat'}
					class="block py-0.5 tracking-tighter">Yellow Seat</a
				>
			</li>
			<li>
				<a
					href="https://conceptfood.co.nz" target="_blank"
					class:subactive={$page.url.pathname === '/yellowseat/menus'}
					class="py-0.5 tracking-tighter flex gap-1 items-center">Catering <IconExternalLink stroke={3} class={`h-4 w-4`} /></a
				>
			</li>
			<li>
				<a
					href="/yellowseat/venues"
					class:subactive={$page.url.pathname === '/yellowseat/venues'}
					class="block py-0.5 tracking-tighter">Venues</a
				>
			</li>
		</ul>
	{/if}
</li>
