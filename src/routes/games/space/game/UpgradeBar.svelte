<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	import Card from './Card.svelte'
	import CardBody from './CardBody.svelte'
	import CardFooter from './CardFooter.svelte'
	import CardHeader from './CardHeader.svelte'
	import { addcomma } from './utils'
	import { _game } from '$lib/data'
</script>

<section {...$$restProps}>
	<Card>
		<CardHeader label="Production">
			<span class="text-xl font-serif">{addcomma($_game.upown)}</span>
		</CardHeader>
		<CardBody>
			{addcomma($_game.upcost)}
			<span slot="click">{addcomma($_game.upcost/15 + $_game.moneyup)}</span>
		</CardBody>
		<CardFooter>
			<button
				on:click={() => {
					console.log('Upgrade')
					dispatch('upgrade', 'upgrade')
				}}
				class="btn {$_game.upcost >= $_game.money
					? 'btn-gray opacity-50'
					: 'btn-blue'}"
				disabled={$_game.upcost > $_game.money}>Upgrade</button>
			<span slot="red">
				- {addcomma($_game.upcost)} Coins
			</span>
		</CardFooter>
	</Card>
	<Card>
		<CardHeader label="Cats">
			<span class="text-xl font-serif">{addcomma($_game.catown)}</span>
		</CardHeader>
		<CardBody>
			{addcomma($_game.catcost)}
			<span slot="end">
				{addcomma($_game.catadd * $_game.cboost)}
			</span>
		</CardBody>
		<CardFooter>
			<button
				on:click={() => {
					console.log('Upgrade')
					dispatch('upgrade', 'kitten')
				}}
				class="btn {$_game.catcost >= $_game.money || $_game.catown >= 50
					? 'btn-gray opacity-50'
					: 'btn-blue'}"
				disabled={$_game.catcost > $_game.money || $_game.catown >= 50}>Upgrade</button>
			<span slot="red">
				- {addcomma($_game.catcost)} Coins
			</span>
		</CardFooter>
	</Card>
	<Card>
		<CardHeader label="Karens">
			<span class="text-xl font-serif">{addcomma($_game.workerown)}</span>
		</CardHeader>
		<CardBody>
			{addcomma($_game.workercost)}
			<span slot="end">
				{addcomma($_game.workadd * $_game.wboost)}
			</span>
		</CardBody>
		<CardFooter>
			<button
			on:click={() => {
				console.log('Upgrade')
				dispatch('upgrade', 'worker')
			}}
			class="btn {$_game.workercost >= $_game.money || $_game.workerown >= 50 ? 'btn-gray opacity-50' : 'btn-blue'}"
			disabled={$_game.workercost > $_game.money || $_game.workerown >= 50}>Upgrade</button>
			<span slot="red">
				- {addcomma($_game.workercost)} Coins
			</span>
		</CardFooter>
	</Card>
</section>

<style>
	section {
		@apply w-full grid gap-2;
	}
</style>
