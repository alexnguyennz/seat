<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -30, duration: 400, delay: 400 }} out:fly={{ x: 10, duration: 300 }}>
		<slot />
	</div>
{/key}
