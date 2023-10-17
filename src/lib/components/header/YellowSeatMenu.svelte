<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { IconExternalLink, IconChevronDown } from '@tabler/icons-svelte';

	const {
		elements: { trigger, menu, item, arrow },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true
	});
</script>

<li>
	<button type="button" class="trigger" use:melt={$trigger} aria-label="Open Yellow Seat menu">
		<span
			class="animated-header-link flex h-8 items-center justify-between gap-1.5 tracking-tighter transition hover:text-blue-700"
			class:active={$page.url.pathname.startsWith('/yellowseat')}
			>Yellow Seat

			<IconChevronDown stroke={4} class={`h-5 w-5 transition ${$open ? '-rotate-180' : ''}`} />
		</span>

		<span class="sr-only">Open Yellow Seat menu</span>
	</button>
</li>

{#if $open}
	<ul class="menu" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<li class:subactive={$page.url.pathname === '/yellowseat'}>
			<a href="/yellowseat/" class="item block" use:melt={$item}>Yellow Seat</a>
		</li>
		<li>
			<a href="https://conceptfood.co.nz" target="_blank" class="item flex gap-1 items-center" use:melt={$item}>Catering <IconExternalLink stroke={3} class={`h-4 w-4`} /></a>
		</li>
		<li class:subactive={$page.url.pathname === '/yellowseat/venues'}>
			<a href="/yellowseat/venues" class="item block" use:melt={$item}>Partner venues</a>
		</li>
		<li use:melt={$arrow} class="arrow" />
	</ul>
{/if}
