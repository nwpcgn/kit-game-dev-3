<script>
	import { addcomma } from './utils'
	import { _game } from '$lib/data'
	import Fa from 'svelte-fa'
	import { faCoins } from '@fortawesome/free-solid-svg-icons'
</script>

<div {...$$restProps}>
	<article>
		<nav>
			<strong>{addcomma($_game.money)}</strong>
			<span class="px-1" />
			<span>
				<Fa icon={faCoins} />
			</span>
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
		font-size: 1.4rem;
		font-weight: 700;
		padding: var(--bar-py) var(--bar-px);
	}
</style>
