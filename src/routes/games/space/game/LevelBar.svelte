<script>
	import { addcomma } from './utils'
	import { _game } from '$lib/data'
	import Fa from 'svelte-fa'
	import {
		faCoins,
		faUser,
		faCat,
		faHatWizard
	} from '@fortawesome/free-solid-svg-icons'
	export let score = false
</script>

<section>
	{#if score}
		<div>
			<span class="me-1"><Fa icon={faCoins} fw size="lg" /></span>
			<strong>{addcomma($_game.money)}</strong>
		</div>
	{/if}
	<div class:update={$_game.money >= $_game.upcost}>
		<span>
			<Fa icon={faUser} fw size="1x" />
		</span>
		<strong>{$_game.upown}</strong>
	</div>
	<div class:update={$_game.money >= $_game.catcost && $_game.catown < 50}>
		<span><Fa icon={faCat} fw size="1x" /></span>
		<strong>{$_game.catown}</strong>
	</div>
	<div
		class:update={$_game.money >= $_game.workercost && $_game.workerown < 50}>
		<span><Fa icon={faHatWizard} fw size="1x" /></span>
		<strong>{$_game.workerown}</strong>
	</div>
</section>

<style>
	section {
		display: flex;
		border: 1px dashed #ddd;
	}
	div {
		--px: 0.25rem;
		--py: 0;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--py) var(--px);
	}
	strong {
		font-size: 1.2rem;
		font-weight: 600;
	}
	.update {
		color: var(--bs-primary);
	}
</style>
