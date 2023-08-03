<script>
	export let data;

	import { IconExternalLink } from '@tabler/icons-svelte';
</script>

<div
	class="rounded-lg bg-slate-50 text-gray-800 shadow-md transition duration-300 hover:translate-y-2"
>
	<div>
		<a href={`${data.url}`} target="_blank" rel="noopener noreferrer nofollow">
			<img
				src={`/yellowseat/venues/${data.image}`}
				alt={`${data.name}`}
				width="320"
				height="207"
				class="mx-auto h-60 w-full rounded-t-lg"
			/></a
		>
	</div>
	<div class="p-5">
		<h2 class="text-center text-xl">
			<a
				href={`${data.url}`}
				target="_blank"
				rel="noopener noreferrer nofollow"
				class="animated-link inline-flex items-center gap-2"
				>{data.name} <IconExternalLink class="h-4 w-4" /></a
			>
		</h2>
	</div>
</div>
