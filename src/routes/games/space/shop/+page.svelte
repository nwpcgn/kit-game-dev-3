<script>
	import ShopCard from './ShopCard.svelte'
	import { Section } from '$lib'
	import { _game } from '$lib/data'
	import { resetValues, addcomma } from '../game/utils'
	$: ({
		money,
		moneyup,
		msec,
		upcost,
		catcost,
		workercost,
		upown,
		catown,
		workerown,
		catadd,
		workadd,
		cboost,
		wboost,
		catmax,
		workmax
	} = $_game)
	const resetStore = () => {
		_game.set(resetValues)
	}
	const updateStore = () => {
		_game.set({
			money,
			moneyup,
			msec,
			upcost,
			catcost,
			workercost,
			upown,
			catown,
			workerown,
			catadd,
			workadd,
			cboost,
			wboost,
			catmax,
			workmax
		})
	}
	const upgrade = (name) => {
		if (name === 'kitten') {
			if (money >= catcost && catown < 50) {
				if (catown <= 13) {
					msec += catadd
					catadd++
					cboost = 1
				} else if (catown == 14) {
					msec += catadd
					catadd++
					cboost = 200
				} else if (catown <= 23) {
					msec += 200 * catadd
					catadd++
					cboost = 200
				} else if (catown == 24) {
					msec += 200 * catadd
					catadd++
					cboost = 5000
				} else if (catown <= 48) {
					msec += 5000 * catadd
					catadd++
					cboost = 5000
				} else if (catown == 49) {
					msec += 5000 * catadd
					catadd++
					cboost = 15000
				} else {
					msec += 15000 * catadd
					catadd++
					cboost = 15000
				}
				catown += 1
				money -= catcost
				catcost = catcost * 2
			}
		}
		if (name === 'worker') {
			if (money >= workercost && workerown < 50) {
				if (workerown <= 13) {
					msec += workadd
					workadd++
					wboost = 1
				} else if (workerown == 14) {
					msec += workadd
					workadd++
					wboost = 200
				} else if (workerown <= 23) {
					msec += 200 * workadd
					workadd++
					wboost = 200
				} else if (workerown == 24) {
					msec += 200 * workadd
					workadd++
					wboost = 5000
				} else if (workerown <= 48) {
					msec += 5000 * workadd
					workadd++
					wboost = 5000
				} else if (workerown == 49) {
					msec += 5000 * workadd
					workadd++
					wboost = 15000
				} else {
					msec += 15000 * workadd
					workadd++
					wboost = 15000
				}
				workerown += 1
				money -= workercost
				workercost = workercost * 3
			}
		}

		if (name === 'upgrade') {
			if (money >= upcost) {
				moneyup += upcost / 15
				money -= upcost
				upown += 1
				upcost = upcost * 5
				if (catown == 50) {
					msec -= catmax
					catmax = Math.floor(moneyup * 0.15)
					msec += catmax
				}
				if (workerown == 50) {
					msec -= workmax
					workmax = Math.floor(moneyup * 0.35)
					msec += workmax
				}
			}
		}

		updateStore()
	}
	// $: updateStore(money)
</script>

<Section space={4}>
	<nav class="flex items-center py-4">
		<h3>Game Shop</h3>
	</nav>
	<div class="g-2 row row-cols-1 row-cols-sm-3">
		<ShopCard modul={0} price={addcomma($_game.upcost)} effect={addcomma($_game.upcost/15 + $_game.moneyup)}>
		
				<button
					on:click={() => {
						console.log('Upgrade')
						upgrade('upgrade')
					}}
					class="btn btn-primary"
					disabled={$_game.upcost > $_game.money}>Upgrade</button>
				<span class="text-danger">
					{addcomma($_game.upcost)} Coins
				</span>

		</ShopCard>
		<ShopCard modul={1} price={addcomma($_game.catcost)} effect={addcomma($_game.catadd * $_game.cboost)}>

				<button
					on:click={() => {
						console.log('Upgrade')
						upgrade('kitten')
					}}
					class="btn btn-primary"
					disabled={$_game.catcost > $_game.money || $_game.catown >= 50}
					>Upgrade</button>
				<span class="text-danger">
					{addcomma($_game.catcost)} Coins
				</span>

		</ShopCard>
		<ShopCard modul={2} price={addcomma($_game.workercost)} effect={addcomma($_game.workadd * $_game.wboost)}>
					<button
					on:click={() => {
						console.log('Upgrade')
						upgrade('worker')
					}}
					class="btn btn-primary"
					disabled={$_game.workercost > $_game.money || $_game.workerown >= 50}
					>Upgrade</button>

				<span class="text-danger">
					{addcomma($_game.workercost)} Coins
				</span>
	
		</ShopCard>
	</div>
</Section>

