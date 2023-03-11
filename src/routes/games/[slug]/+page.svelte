<script>
	import { page } from '$app/stores'
	import BackBtn from '../BackBtn.svelte'
	import Blackjack from './blackjack.svelte'
	import { Section } from '$lib'
	export let data
	$: ({ titel, body } = data.pageDb.games[$page.params.slug]
		? data.pageDb.games[$page.params.slug]
		: { titel: 'Titel', body: 'Content' })
</script>

<Section hero>
	<h1>{titel}</h1>
	<p>
		<BackBtn />
	</p>
	{#if $page.params.slug == 1}
		<Blackjack />
	{:else}
		<p class="text-muted py-4">
			{body}
		</p>
	{/if}
</Section>
