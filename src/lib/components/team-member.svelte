<script lang="ts">
	function readMore(member: string) {
		const more = document.getElementById(member);
		const arrow = document.getElementById(`${member}-arrow`);

		more!.classList.toggle('toggle');
		arrow!.classList.toggle('fa-arrow-up');
	}

	interface Member {
		name: string;
		slug: string;
		linkedin: string;
	}

	export let data: Member;
</script>

<div>
	<!-- Avatar -->
	<img src={`/team/${data.slug}.png`} alt={`${data.name} profile`} />

	<!-- Details -->
	<div>
		<div>
			<!-- Name -->
			<h2>{data.name}</h2>

			<!-- Social Icons -->
			<div class="linkedin">
				<a
					href={data.linkedin}
					target="_blank"
					rel="noopener noreferrer nofollow"
					aria-label={`${data.name} LinkedIn page`}
				>
					<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/></svg
					>
				</a>
			</div>
		</div>

		<slot />

		<div class="hr">
			<button on:click={() => readMore(data.slug)}
				><i id={`${data.slug}-arrow`} class="fa-solid fa-arrow-down" /></button
			>
		</div>
	</div>
</div>

<style>
	img {
		margin-left: auto;
		margin-right: auto;
		border-radius: 1.5rem;
	}

	h2 {
		margin-top: 1rem;
		text-align: center;
		font-weight: 700;
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	.linkedin {
		display: flex;
		justify-content: center;
		opacity: 0.8;
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.linkedin:hover {
		opacity: 1;
	}

	.linkedin svg {
		width: 2rem;
		height: 2rem;
	}

	.hr {
		display: flex;
		flex-direction: row;
		align-items: center;

		margin-top: 1rem;
		margin-bottom: 1rem;
		height: 1rem;
		white-space: nowrap;
	}

	.hr:not(:empty) {
		gap: 1rem;
	}

	.hr:before {
		background-color: rgb(197, 197, 197);
	}

	.hr:after {
		background-color: rgb(197, 197, 197);
	}

	.hr:before,
	.hr:after {
		content: '';
		flex-grow: 1;
		height: 0.125rem;
		width: 100%;
	}
</style>
