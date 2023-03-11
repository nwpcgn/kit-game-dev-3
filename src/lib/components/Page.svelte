<script>
	import { fly } from 'svelte/transition'
	export let center = false
	export let location
</script>

{#key location}
	<section
		class:center
		in:fly={{ x: -40, duration: 400, delay: 200 }}
		out:fly={{ x: 40, duration: 400 }}>
		<slot />
	</section>
{/key}

<style>
	section {
		position: absolute;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	section.center {
		align-items: center;
		justify-content: center;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
