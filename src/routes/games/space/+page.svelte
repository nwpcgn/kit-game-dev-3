<script>
	import Fa from 'svelte-fa'
	import {
		faCog,
		faShoppingCart,
		faAngleLeft,
		faGamepad,
		faMapLocation
	} from '@fortawesome/free-solid-svg-icons'
	import StatBar from './game/StatBar.svelte'
	import MainBar from './game/MainBar.svelte'
	import Trigger from './game/Trigger.svelte'
	import ScoreBar from './game/ScoreBar.svelte'
	import LevelBar from './game/LevelBar.svelte'
	import { _game } from '$lib/data'
	import { onInterval, resetValues } from './game/utils'
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
	const clicked = () => {
		money += moneyup
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
	}
	const myTimer = () => {
		money += msec
	}

	let active = false
	const onKeyDown = (e) => {
		if (e.keyCode == 32) {
			active = true
			clicked()
		}
	}
	const onKeyUp = (e) => {
		if (e.keyCode == 32) {
			active = false
		}
	}

	onInterval(myTimer, 1000)
	$: updateStore(money)
	// $: updates = money >= upcost || money >= catcost || money >= workercost
	let scoreXl = true
</script>



<div
	class="d-flex justify-content-between align-items-center px-2 py-2 border-bottom">
	<StatBar />
	{#if scoreXl}
		<MainBar />
	{:else}
		<ScoreBar />
	{/if}
	<LevelBar />
</div>

<div
	class="flex-grow-1 h-100 d-flex flex-column align-items-center justify-content-center px-4">
	<Trigger on:click={clicked} bind:active />
</div>


<svelte:window
	on:keyup|preventDefault={onKeyUp}
	on:keydown|preventDefault={onKeyDown} />

<style>
</style>
