<script>
	export let hero = false
	export let fluid = false
	export let space = 0 
</script>

<section class="py-{hero ? 5 : space}" {...$$restProps}>
	<div class={fluid ? "container-fluid" : "container-md"}>
		<slot />
	</div>
</section>

<style>
	:root {
		--px: 0.5rem;
		--py: 1rem;
		--pyh: 4rem;
	}
	div {
		width: 100%;
		margin: 0 auto;
	}
</style>
