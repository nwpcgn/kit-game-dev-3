<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let active
</script>

<div {...$$restProps}>
	<button class:active on:click={() => dispatch('click', 'Trigger')}>
		<span class="font-bold text-slate-600 font-mono text-2xl"> Spacebar </span>
	</button>
</div>

<style>
	div {
		@apply py-20;
	}
	button {
		transition: transform 80ms ease-in;
		background: rgb(239, 242, 221);
		background: linear-gradient(
			180deg,
			rgba(239, 242, 221, 1) 0%,
			rgba(177, 180, 149, 1) 100%
		);
		@apply block w-full pt-6 pb-4 rounded-2xl border-stone-700 text-stone-600 border-4 border-b-24;
	}
	button:active,
	button.active {
		@apply border-stone-800 text-stone-700 tracking-wider;
		transform: scaleX(90%) scaleY(90%);
		transition: transform 40ms ease-in;
	}
</style>
