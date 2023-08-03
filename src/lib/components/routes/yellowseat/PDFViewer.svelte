<script>
	import { fly } from 'svelte/transition';

	import { PdfViewer } from 'svelte-pdf-simple';
	import { IconExternalLink, IconLoader } from '@tabler/icons-svelte';

	let pdfViewer;
	let pageNumber = 2;
	let totalPages = 0;
	let isPdfLoaded = false;

	function goToPage(page) {
		pdfViewer.goToPage(page);
	}

	function handlePageChanged(event) {
		pageNumber = event.detail.pageNumber;
	}

	function handleLoadedSuccess(event) {
		totalPages = event?.detail?.totalPages;
		pageNumber = 2;
		isPdfLoaded = true;
	}
</script>

{#if isPdfLoaded}
	<div class="my-5 flex flex-wrap justify-center gap-2">
		<button on:click={() => goToPage(2)} class="menu-button" class:page-active={pageNumber === 2}>
			Canapés
		</button>

		<button on:click={() => goToPage(3)} class="menu-button" class:page-active={pageNumber === 3}>
			Bowl food
		</button>

		<button on:click={() => goToPage(4)} class="menu-button" class:page-active={pageNumber === 4}>
			Set Plated Dinner
		</button>
	</div>
{/if}

<div transition:fly class:hidden={pageNumber === 4}>
	<PdfViewer
		bind:this={pdfViewer}
		props={{
			path: '/yellowseat/menus.pdf',
			page: 2,
			scale: 2
		}}
		style="box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); border-radius: 0.5rem; width: 100%;"
		on:load_success={handleLoadedSuccess}
		on:page_changed={handlePageChanged}
		><svelte:fragment slot="loading"
			><IconLoader class="mx-auto mt-10 h-10 w-10 animate-spin" /></svelte:fragment
		></PdfViewer
	>
</div>

{#if pageNumber === 4}
	<object
		data="/yellowseat/menus-set-plated.pdf"
		type="application/pdf"
		class="h-[400px] w-full rounded-lg bg-slate-50 shadow-md md:h-[550px] lg:h-[700px]"
		aria-label="Yellow Seat catering menus"
	/>
{/if}

{#if isPdfLoaded}
	<a
		href="/yellowseat/menus.pdf"
		target="_blank"
		class="button-link float-right mt-5 inline-flex items-center gap-1 rounded-lg p-2 text-base !text-black transition hover:bg-slate-200"
		>Open <IconExternalLink /></a
	>
{/if}

<style lang="postcss">
	.menu-button {
		@apply inline-flex items-center gap-1 rounded-lg px-3 py-1 transition hover:bg-slate-200;
	}

	.page-active {
		@apply bg-slate-600 text-gray-50 hover:bg-slate-600 hover:text-gray-50;
	}
</style>
