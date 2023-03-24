<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let gameStarted
</script>

<div class="text-center p-4">
	<button
		on:click={() => dispatch('onStart', 'onStart')}
		class="btn-primary btn-lg btn py-3 px-4 text-2xl font-semibold">
		{gameStarted ? 'Restart Game' : 'Start Game'}</button>
</div>
