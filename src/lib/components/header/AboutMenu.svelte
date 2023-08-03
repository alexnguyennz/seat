<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { IconChevronDown } from '@tabler/icons-svelte';

	const {
		elements: { trigger, menu, item, arrow },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true
	});
</script>

<li>
	<button type="button" class="trigger" use:melt={$trigger} aria-label="Open About menu">
		<span
			class="animated-header-link flex h-8 items-center justify-between gap-1.5 tracking-tighter transition hover:text-blue-700"
			class:active={$page.url.pathname === '/team' || $page.url.pathname === '/gallery'}
			>About

			<IconChevronDown stroke={4} class={`h-5 w-5 transition ${$open ? '-rotate-180' : ''}`} />
		</span>

		<span class="sr-only">Open About menu</span>
	</button>
</li>

{#if $open}
	<ul class="menu" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<li class:subactive={$page.url.pathname === '/team'}>
			<a href="/team" class="item block" use:melt={$item}>Our team</a>
		</li>
		<li class:subactive={$page.url.pathname === '/gallery'}>
			<a href="/gallery" class="item block" use:melt={$item}>Gallery</a>
		</li>
		<li use:melt={$arrow} class="arrow" />
	</ul>
{/if}
