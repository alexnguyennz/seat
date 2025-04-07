<script>
    import Venue from '$lib/components/routes/yellowseat/Venue.svelte';

    import { greenSeatVenues } from '$lib/data.ts';
</script>

<svelte:head>
    <title>Green Seat Venues - The Seats</title>
    <meta name="description" content="Venues - Green Seat" />
</svelte:head>

<section>
    <div>
        <h2 class="page-heading">Venues</h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each greenSeatVenues as venue}
                <Venue data={venue} />
            {/each}
        </div>
    </div>
</section>
