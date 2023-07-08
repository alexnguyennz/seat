<script>
	import { IconArrowRight } from '@tabler/icons-svelte';
	export let data;
</script>

<div class="flex flex-col overflow-hidden rounded-3xl border-2 border-gray-500 shadow-md">
	<a href={`/${data.slug}`}
		><img src={`./${data.slug}-sm.png`} alt={`${data.name} logo`} class="w-full" /></a
	>
	<div class="px-6 py-4">
		<p class="text-center">
			{data.description}
		</p>
	</div>
	<div class="mx-auto mt-auto px-6 pt-4 pb-2">
		<a
			href={`/${data.slug}`}
			class="mb-2 flex items-start gap-2 rounded-full bg-gray-600 px-4 pt-2 pb-1 text-lg font-semibold text-gray-100 transition hover:bg-gray-700"
			>Learn More <IconArrowRight /></a
		>
	</div>
</div>
