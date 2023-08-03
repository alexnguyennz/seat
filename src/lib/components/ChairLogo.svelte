<script>
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { page } from '$app/stores';
	export let pathname = '';
	let colourStroke = '';
	let colourFill = '';
	let drawn = false;
	let mounted = false;

	/* change logo colour based on current page */
	$: if ($page.url.pathname.startsWith('/yellowseat')) {
		colourStroke = '#E8D731';
		colourFill = 'yellowseat';
	} else if ($page.url.pathname === '/blueseat') {
		colourStroke = '#4C7AD1';
		colourFill = 'blueseat';
	} else if ($page.url.pathname === '/greenseat') {
		colourStroke = '#66B031';
		colourFill = 'greenseat';
	} else if ($page.url.pathname === '/orangeseat') {
		colourStroke = '#F2600F';
		colourFill = 'orangeseat';
	} else {
		colourStroke = 'black';
		colourFill = 'black';
	}

	// animate the logo on mount or app load, not just on route change
	onMount(() => (mounted = true));
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="80" height="111" viewBox="0 0 200 279"
	>{#if mounted}
		{#key pathname}
			<path
				class={`transition duration-500 ${drawn && colourFill}`}
				stroke={colourStroke}
				stroke-width="2px"
				in:draw={{ duration: 1500, easing: quintInOut }}
				out:draw={{ duration: 2000, easing: quintInOut }}
				on:introstart={() => (drawn = false)}
				on:introend={() => (drawn = true)}
				d="M108 2.7c-1.9.2-7.3 1.1-12 1.9-29.6 5.2-46.5 13.9-52 26.6-3.2 7.4-2.4 13.5 3.5 27.8 12 28.8 17.1 48 13 48-3.6 0-51.1 14.2-52.2 15.6-.6.9-1.5 5-1.9 9.1-.6 7.1-.5 7.7 1.6 9.3 2.2 1.6 2.2 1.7 1.1 16.6-1.7 21.5-3.9 54.9-5.3 77.7-1 17.1-1 20 .3 20.8 2.6 1.6 5.9 1 6.8-1.4.4-1.2 2.9-26.3 5.6-55.7 2.6-29.4 4.9-53.7 5.1-53.9.3-.3 44.2 6.5 54.6 8.5l2.8.6.2 37c.3 34.1.4 37.2 2.1 38.2 1.2.8 2.2.8 3.5 0 1.7-1.1 2-7 3.1-66.7l.1-7.8 17.3.6c9.4.3 19.5.8 22.3 1.1l5.1.5.7 38.7c.8 47.4 2.3 78.1 3.8 79.9 1.3 1.7 5.4 1.7 6.5 0 .4-.6.6-27.6.4-59.9l-.3-58.7 11.1-5.6c6.1-3 11.1-5.3 11.1-5.1 0 3.5 16.4 97.4 17.2 98.3 1.5 1.8 4.2 1.6 6.1-.5 1.4-1.6 1.1-5.3-4.3-45.7-3.3-24.2-6.3-46.9-6.8-50.5-.9-6.2-.8-6.6 1.5-8.8 2.1-1.9 2.3-2.8 1.8-6.5-.7-4.7.8-25.1 3-40.2.8-5.5 4.3-21.2 7.6-34.9 7.2-29.3 7.4-33.4 1.9-39.1-9.8-10.1-37.1-16.7-67.8-16.3-8.1 0-16.3.3-18.2.5zm42 9.4c12.1 1.5 23.2 4.5 31.1 8.4 7.9 4 9 6 5.9 11-3.6 5.7-4.3 9.7-12.1 63.5-1.7 12.4-3.5 22.8-3.8 23.2-.4.4-3.6-.1-7.1-1.2-20.9-6.4-46.9-10-75.5-10.6l-22-.4-.2-3.7c-.6-8.3-2.7-16.6-8.9-35.5-8.6-26.3-8.5-31.1.3-38.8 7-6.2 25.2-12.9 41.8-15.4 10.9-1.7 38.9-2 50.5-.5zm41.1 41.8c-6 23.6-7.8 32-10 48.1-2.7 18.9-3.1 20.4-4.3 19.2-1.1-1.1 6.9-48.6 10.8-64.2 2.9-11.2 6.6-21.8 7.2-20.2.2.6-1.5 8.3-3.7 17.1zm-69.6 63.5c12.6 1.8 35.6 6.5 36.8 7.5.4.4-3.7 2.5-9 4.7l-9.8 3.9-22.5-.2c-12.4-.1-28.1-.7-35-1.3-14.9-1.4-45.9-5.6-49-6.8-1.8-.7.3-1.6 10.6-4.5 7.1-2 15.4-4.1 18.4-4.6 7.7-1.4 46.2-.5 59.5 1.3z"
			/>
		{/key}
	{/if}
</svg>

<style>
	path {
		fill: white;
	}

	.black {
		fill: black;
	}

	.blueseat {
		fill: #4c7ad1;
	}

	.yellowseat {
		fill: #e8d731;
	}

	.orangeseat {
		fill: #f2600f;
	}

	.greenseat {
		fill: #66b031;
	}
</style>
