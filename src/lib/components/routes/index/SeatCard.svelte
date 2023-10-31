<script>
	import { IconArrowNarrowRight } from '@tabler/icons-svelte';

	export let data;
</script>

<article
	class="flex origin-top flex-col rounded-xl border border-slate-500 bg-white p-3 text-center shadow transition duration-300 hover:scale-[1.03] hover:shadow-md"
>
	<a href={`/${data.slug}`}
		><img src={`./${data.slug}-sm.png`} width="600" height="169" alt={`${data.name} logo`} /></a
	>

	<p class="my-5">
		{data.description}
	</p>
</article>
