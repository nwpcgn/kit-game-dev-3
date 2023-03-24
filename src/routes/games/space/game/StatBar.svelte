<script>
	import { addcomma } from './utils'
	import { _game } from '$lib/data'
	import Fa from 'svelte-fa'
	import { faCoins, faChartLine } from '@fortawesome/free-solid-svg-icons'
	export let pre = false
</script>

<div {...$$restProps}>
	<article>
		<nav>
				{#if pre}<strong><Fa icon={faChartLine} fw size="lg" /></strong>{/if}
				<b>{addcomma($_game.moneyup)}</b>
				<span><Fa icon={faCoins} /></span>
				<span>/click </span>	 
            <span> | </span>
            <b> {addcomma($_game.msec)}</b>
				<span><Fa icon={faCoins} /></span>
				<span>/sec </span>
		</nav>
	</article>
</div>

<style>
	:root {
      --bar-px: 0.5rem;
      --bar-py: 0rem;
		--px: 0.25rem;
		--py: 0;
	}
   div {
		border: 1px dashed #ddd;
   }
	article {
		display: flex;
      justify-content: space-between;
		align-items: center;
	}
	nav {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--bar-py) var(--bar-px);
	}
	strong {
		font-size: 1rem;
		color: var(--bs-primary);
	}
   b {
      padding: var(--py) var(--px);
   }
	.update {
		color: var(--bs-primary);
	}

	
</style>
