<script>
	import Atropos from 'atropos';
	import 'atropos/css/min';

	import { onMount } from 'svelte';

	onMount(() => {
		Atropos({
			el: '.atropos',
			shadow: false,
			rotateXMax: 5,
			rotateYMax: 5,
			rotateTouch: false
		});
	});

	import { register } from 'swiper/element/bundle';
	register();

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="Gallery" />
</svelte:head>

<section class="space-y-5">
	<h1 class="page-heading">Gallery</h1>

	<div class="atropos">
		<div class="atropos-scale">
			<div class="atropos-rotate">
				<div class="atropos-inner rounded-3xl shadow-lg">
					<div class="carousel">
						<swiper-container navigation="true" loop="true" slides-per-view={1}>
							{#each data.images as image}
								<swiper-slide lazy="true"
									><img
										src={image.imgurl}
										alt={image.name}
										loading="lazy"
										class="m-auto h-96 rounded-xl"
									/></swiper-slide
								>
							{/each}
						</swiper-container>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.atropos {
		opacity: 0;
		animation: show 0.5s 1s forwards;
	}

	@keyframes show {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.carousel {
		padding: 1.25rem;
		background-color: rgb(254 243 199);
	}
</style>
