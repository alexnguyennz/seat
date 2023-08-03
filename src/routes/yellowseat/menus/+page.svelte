<script>
	import { IconExternalLink } from '@tabler/icons-svelte';

	import PDFViewer from '$lib/components/routes/yellowseat/PDFViewer.svelte';
</script>

<svelte:head>
	<title>Catering menus - Yellow Seat</title>
	<meta name="description" content="Catering Menus - Yellow Seat" />
</svelte:head>

<section>
	<p class="mb-5">
		<strong>Yellow Seat</strong> was founded out of a love of cuisine, our passion for service, and a
		drive to excel in the industry. We take great pleasure in being able to produce almost any delectable
		dish you can think of and deliver it with unmatched service. Every wedding and event that we cater
		for is exceptional and one-of-a-kind, not just for you but also for us. Going the extra mile is the
		foundation of our reputation. The connections we make with our clients and the positive remarks and
		feedback we get drive us the most. Anything you can think of, let us assist you in making it a reality.
	</p>

	<h3 class="mb-3 text-center text-2xl font-bold tracking-tight">Catering</h3>

	<p class="mb-5">
		If exceptional food is what you desire, then prepare to have your taste buds tantalised! We have
		put together a collection of example menus that we hope will prove both appealing and
		appropriate for your special occasion. These menus are merely a starting point to whet your
		appetite and we look forward to creating a fully bespoke menu that reflects your idea of
		culinary creativity.
	</p>

	<p class="mb-5">
		Our team of talented chefs are happy to create a more tailored menu specific to your needs and
		to go with any theme of your event if desired.
	</p>

	<h2 class="page-heading mb-4">Catering menus</h2>

	<div class="lg:hidden">
		<object
			data="/yellowseat/menus.pdf"
			type="application/pdf"
			class="h-[400px] w-full rounded-lg bg-slate-50 shadow-md md:h-[550px] lg:h-[700px]"
			aria-label="Yellow Seat catering menus"
		/>
		<a
			href="/yellowseat/menus.pdf"
			target="_blank"
			class="button-link float-right mt-5 inline-flex items-center gap-1 rounded-lg p-2 text-base !text-black transition hover:bg-slate-200"
			>Open <IconExternalLink /></a
		>
	</div>

	<div class="hidden lg:block">
		<PDFViewer />
	</div>
</section>
