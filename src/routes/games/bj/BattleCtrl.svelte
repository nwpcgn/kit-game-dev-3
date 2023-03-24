<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let loading
</script>

<footer>
	<button
		class="btn btn-primary"
		on:click={() => dispatch('onHit', 'onHit')}
		disabled={loading}>
		<span class="fs-5">Hit</span>
		<small>Eine weitere Karte</small>
	</button>
	<span class="px-1"></span>
	<button
		class="btn btn-secondary"
		on:click={() => dispatch('onStay', 'onStay')}
		disabled={loading}>
		<span class="fs-5">Stay</span>
		<small>Keine weitere Karte</small>
	</button>
	{#if loading}
		<aside>
	
				<div class="spinner-border text-primary" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
		
		</aside>
	{/if}
</footer>

<style>
	:root {
		--br: var(--bs-border-radius);
		--px: 0.5rem;
		--py: 0.5rem;
	}
	footer {
		position: relative;
		display: flex;
		padding: var(--py) var(--px);
		border-radius: var(--br);
	}
	button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	aside {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: var(--br);
	}
	
</style>
