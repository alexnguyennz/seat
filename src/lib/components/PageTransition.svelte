<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -10, duration: 300, delay: 300 }} out:fly={{ x: 5, duration: 300 }}>
		<slot />
	</div>
{/key}
