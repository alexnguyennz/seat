<script>
	export let data;
</script>

<div class="space-y-3">
	<h2 class="text-center text-2xl">
		<a
			href="https://terauparaha-arena.co.nz/"
			target="_blank"
			rel="noopener noreferrer nofollow"
			class="animated-link">{data.name}</a
		>
	</h2>

	<div class="atropos">
		<div class="atropos-scale">
			<div class="atropos-rotate">
				<div class="atropos-inner">
					<a
						href={`${data.url}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
						class="animated-link"
					>
						<img
							src={`/yellowseat/venues/${data.image}`}
							alt={`${data.name}`}
							width="320"
							height="207"
							class="mx-auto h-60 w-full rounded-lg"
						/></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
