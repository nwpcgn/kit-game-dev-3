<script>
	import { _user } from '$lib/data'
	import { Section } from '$lib'
	export let data
	$: ({ titel, body, games } = data.pageDb)
</script>


	<Section hero>
		<h1>{titel ? titel : 'Games'}</h1>
		<p>
			Visit <a href="/">Start</a> to read the documentation
		</p>
		<p class="text-muted py-4">
			{body ? body : ''}
		</p>
	<!-- Hover added -->
		{#if Array.isArray(games)}
			<div class="py-2">
				<nav class="list-group list-group-flush rounded">
					{#each games as { path, name }, i}
						<a
							href="/games/{path}"
							data-slug={path}
							role="button"
							class="list-group-item list-group-item-action fs-5">
							{name}
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</Section>
