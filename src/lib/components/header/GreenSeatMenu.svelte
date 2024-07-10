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
    <button type="button" class="trigger" use:melt={$trigger} aria-label="Open Green Seat menu">
		<span
                class="animated-header-link flex h-8 items-center justify-between gap-1.5 tracking-tighter transition hover:text-blue-700"
                class:active={$page.url.pathname.startsWith('/greenseat')}
        >Green Seat

			<IconChevronDown stroke={4} class={`h-5 w-5 transition ${$open ? 'rotate-180' : ''}`} />
		</span>

        <span class="sr-only">Open Green Seat menu</span>
    </button>
</li>

{#if $open}
    <ul class="menu" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
        <li class:subactive={$page.url.pathname === '/greenseat'}>
            <a href="/greenseat/" class="item block" use:melt={$item}>Green Seat</a>
        </li>
        <li class:subactive={$page.url.pathname === '/greenseat/venues'}>
            <a href="/greenseat/venues" class="item block" use:melt={$item}>Venues</a>
        </li>
        <li use:melt={$arrow} class="arrow" />
    </ul>
{/if}
