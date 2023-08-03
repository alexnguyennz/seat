<script>
	import '../main.css';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import PageTransition from '$lib/components/PageTransition.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="flex min-h-screen flex-col">
	<Header pathname={data.pathname} />

	<main class="container mx-auto flex max-w-6xl flex-1 flex-col px-5">
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>
