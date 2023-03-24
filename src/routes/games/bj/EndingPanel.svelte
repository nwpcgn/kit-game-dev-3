<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	import { _battle } from '$lib/data'
	export let playerWon
</script>

<section>
	<header class="py-1">
		<svelte:element this={playerWon ? 'h6' : 'h1'}>
			Bank {playerWon ? '' : 'Wins'} ({$_battle.lost})
		</svelte:element>
		<svelte:element this={playerWon ? 'h1' : 'h6'}>
			Player {playerWon ? 'Wins' : ''} ({$_battle.won})
		</svelte:element>
	</header>
<!-- 	{#if playerWon}
		<div class="fs-6 px-5">
			Bank ({$_battle.lost})
		</div>
		<div class="fs-1 px-5 fw-bold">
			Player Wins ({$_battle.won})
		</div>
	{:else}
		<div class="fs-1 px-5 fw-bold">
			Bank Wins ({$_battle.lost})
		</div>
		<div class="fs-6 px-5">
			Player ({$_battle.won})
		</div>
	{/if} -->
	<article>
		<button
			on:click={() => dispatch('onStart', 'onStart')}
			class="{playerWon
				? 'btn-primary'
				: 'btn-secondary'} btn-lg btn py-3 px-4 text-2xl font-semibold">Restart Game</button>
	</article>
	<footer>
		<button
			on:click={() => dispatch('resetResult', 'resetResult')}
			type="button"
			class="btn btn-link">Reset Store</button>
	</footer>
</section>

<style>
	:root {
		--br: var(--bs-border-radius);
		--out-px: 	1rem;
		--out-py: 2rem;
		--px: 0.25rem;
		--py: 1.25rem;
		--my: 0.75rem;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		background-color: var(--bs-light);
		border-radius: var(--br);
		width: 400px;
		max-width: 100%;
		padding: var(--out-py) var(--out-px);
	}
	header, article, footer {
		text-align: center;
		padding: var(--py) var(--px);
	}
	h6 {
		color: var(--bs-gray-500);
		font-weight: 300;
		margin: var(--my) 0;
	}
	h1 {
		color: var(--bs-primary);
		font-weight: 700;
		margin: var(--my) 0;
	}
	small {
		font-size: 0.75rem;
	}
</style>
