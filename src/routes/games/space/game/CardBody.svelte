<script>
	export let label = 'Upgrade'
</script>

<article>
	<header>
		<h2>{label}</h2>
		<span />
	</header>
	<section>
		<h5>- Cost</h5>
		<h4>
			<slot><!-- optional fallback --></slot>
			<small>Coins</small>
		</h4>
	</section>
	{#if $$slots.click}
		<section>
			<h5>- Effect</h5>
			<h4>
				<slot name="click"><!-- optional fallback --></slot>
				<small>/ click</small>
			</h4>
		</section>
	{/if}
	{#if $$slots.end}
		<section>
			<h5>- Effect</h5>
			<h4>
				<slot name="end"><!-- optional fallback --></slot>
				<small>/ sec</small>
			</h4>
		</section>
	{/if}
</article>

<style>
	article {
		@apply flex-1 flex flex-col py-3;
	}
	header {
		@apply flex items-center justify-between px-4 space-x-2 mb-2;
	}
	section {
		@apply flex items-end justify-between px-4 space-x-2;
	}
	h2 {
		@apply text-base font-bold text-primary-600;
	}
	h4 {
		@apply font-bold text-2xl;
	}
	h5 {
		@apply font-light text-sm;
	}
</style>
