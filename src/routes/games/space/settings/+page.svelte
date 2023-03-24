<script>
	import Fa from 'svelte-fa'
	import {
		faCog,
		faAngleLeft
	} from '@fortawesome/free-solid-svg-icons'
	import { Section } from '$lib'
	import { _game } from '$lib/data'
	import { resetValues } from '../game/utils'
	const resetStore = () => {
		_game.set(resetValues)
	}

</script>


<Section>
	<nav class="flex items-center">
		<button on:click={() => history.back()}>
			<Fa icon={faAngleLeft} fw size="2x" />
		</button>
		<h3>Game Settings</h3>
	</nav>
	<hr />
	<article class="py-4 px-2 space-y-2">
		<h4>Reset Game</h4>
		<p>
			<button blue on:click={resetStore}>Reset</button>
		</p>
	</article>
</Section>