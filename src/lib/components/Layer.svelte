<script>
	import { fade } from 'svelte/transition'
	export let show = true
	export let center
	export let overlay
	export let body
	const close = () => {
		show = false
	}
</script>

{#if show}
	{#if center}
		<section class:overlay in:fade={{ duration: 400, delay: 200 }} out:fade>
			<header class="px-4">
				<slot {close} />
			</header>
		</section>
	{:else}
		<article class:overlay transition:fade={{ duration: 400 }}>
			<div class="container-fluid">
				<slot {close} />
			</div>
			{#if $$slots.end}
				<footer><slot name="end" /></footer>
			{/if}
		</article>
	{/if}
{/if}

<style>
	article {
		position: absolute;
		inset: 0;
		width: 100%;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		z-index: auto;
	}
	div {
		flex: 1;
	}
	section {
		position: absolute;
		inset: 0;
		width: 100%;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: +1;
	}
	.body {
		background-color: var(--bs-body-bg);
	}
	.overlay {
		background-color: rgba(17, 17, 17, 0.4);
	}
</style>
