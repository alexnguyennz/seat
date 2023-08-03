<script lang="ts">
	import { slide } from 'svelte/transition';

	// Collapsible
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { IconChevronDown } from '@tabler/icons-svelte';

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();
	export let data;
</script>

<div>
	<div
		class="space-y-3 rounded-lg bg-slate-50 p-5 text-gray-800 shadow-md transition duration-300 hover:translate-y-2"
	>
		<a
			href={data.linkedin}
			target="_blank"
			rel="noopener noreferrer nofollow"
			aria-label={`${data.name} LinkedIn page`}
			><img
				src={`/team/${data.slug}.png`}
				alt={`${data.name} profile`}
				class="mx-auto rounded-full"
			/></a
		>
		<h2 class="text-center text-2xl font-bold tracking-tight">{data.name}</h2>
		<div class="flex justify-center">
			<a
				href={data.linkedin}
				target="_blank"
				rel="noopener noreferrer nofollow"
				aria-label={`${data.name} LinkedIn page`}
				class="transition active:translate-y-0.5"
			>
				<svg
					class="h-8 w-8"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><path
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					/></svg
				>
			</a>
		</div>

		<slot name="intro" />

		<div use:melt={$root}>
			{#if $open}
				<div use:melt={$content} transition:slide={{ duration: 200 }}>
					<slot name="more" />
				</div>
			{/if}

			<div class="flex justify-center">
				<button
					use:melt={$trigger}
					class="relative h-8 w-8 rounded-full p-5 transition hover:bg-slate-200"
				>
					<span class="abs-centers absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<IconChevronDown stroke="3" class={`transition ${$open ? '-rotate-180' : ''}`} />
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
