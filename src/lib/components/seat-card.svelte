<script>
	export let data;
</script>

<div class="rounded-3xl overflow-hidden shadow-md border-gray-500 border-2 flex flex-col">
	<a href={`/${data.slug}`}
		><img src={`./${data.slug}-sm.png`} alt={`${data.name} logo`} class="w-full" /></a
	>
	<div class="px-6 py-4">
		<p class="text-gray-700">
			{data.description}
		</p>
	</div>
	<div class="px-6 pt-4 pb-2 mt-auto">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-lg"
			><a href={`/${data.slug}`} class="link link-hover">Learn More &#8594;</a></span
		>
	</div>
</div>
