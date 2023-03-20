<script>
	import '../main.css';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import PageTransition from '$lib/components/PageTransition.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="app">
	<Header />

	<main class="container">
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 72rem;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 2.5rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		color: rgb(31 41 55);
	}
</style>
