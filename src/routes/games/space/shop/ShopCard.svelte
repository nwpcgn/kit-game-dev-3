<script>
	import { addcomma } from '../game/utils'
	import { _game } from '$lib/data'
	import Fa from 'svelte-fa'
	import {
		faUser,
		faCat,
		faHatWizard,
		faCoins
	} from '@fortawesome/free-solid-svg-icons'
	export let price = 0
	export let effect = 0
	export let modul = 0
	const modul_name = ["Production", "Cats", "Wizards"]
	const modul_icon = [faUser, faCat, faHatWizard]
</script>

<div class="col">
	<div class="card">
		<div class=" bg-white card-header flex-bar">
			<slot name="header">
				<span><Fa icon={modul_icon[modul]} /> <span>{modul_name[modul]}</span></span>
				<span class="badge bg-primary">
					{#if modul == 1}
					{addcomma($_game.catown)}
					{:else if modul == 2}
					{addcomma($_game.workerown)}
					{:else}
					{addcomma($_game.upown)}
					{/if}
				</span>
			</slot>
		</div>
		<img src="http://pinegrow.com/placeholders/img15.jpg" class="w-100" />
		<div class="card-body">
			<header class="flex-bar h5">
				<b>Upgrade</b>
				<span />
			</header>
			<ul class="list-unstyled mb-4">
				<li class="flex-bar">
					<span>Price</span>
					<span>
						<span>{price}</span>
						<span><Fa icon={faCoins} fw /></span>
					</span>
				</li>
				<li class="flex-bar">
					<span>Effect</span>
					<span>
						<em>{effect}</em>
						<span
							><Fa icon={faCoins} fw size="xs" />/{modul == 0
								? 'click'
								: 'sec'}</span>
					</span>
				</li>
			</ul>
			<footer class="flex-bar">
				<slot>
			
				</slot>
			</footer>
		</div>
	</div>
</div>

<style>
	.flex-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
