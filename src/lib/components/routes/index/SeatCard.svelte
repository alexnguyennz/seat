<script>
	export let data;
</script>

<div class="flex flex-col overflow-hidden rounded-3xl border-2 border-gray-500 p-3 shadow-md">
	<a href={`/${data.slug}`}
		><img src={`./${data.slug}-sm.png`} alt={`${data.name} logo`} class="w-full" /></a
	>
	<div class="px-6 py-4">
		<p class="text-center">
			{data.description}
		</p>
	</div>
	<div class="mt-auto px-6 text-center">
		<a
			href={`/${data.slug}`}
			class="animated-link text-xl font-semibold tracking-tight text-black"
			aria-label={`${data.name}'s page`}>Learn More →</a
		>
	</div>
</div>
