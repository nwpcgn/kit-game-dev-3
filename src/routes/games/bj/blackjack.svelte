<script>
	import BottomSpacer from './BottomSpacer.svelte'
	import BattleStat from './BattleStat.svelte'
	import StartBtn from './StartBtn.svelte'
	import EndingPanel from './EndingPanel.svelte'
	import BattleCtrl from './BattleCtrl.svelte'
	import { Layer } from '$lib'
	import { sleep, _battle } from '$lib/data'
	import SuitClubs from './svg/SuitClubs.svg'
	import SuitDiamonds from './svg/SuitDiamonds.svg'
	import SuitHearts from './svg/SuitHearts.svg'
	import SuitSpades from './svg/SuitSpades.svg'
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faDice,
		faLandmark,
		faUser,
		faHome,
		faMapLocation
	} from '@fortawesome/free-solid-svg-icons'
	const resetResult = () => {
		_battle.set({ points: 0, lost: 0, won: 0, name: '' })
	}
	let suits = ['Herz', 'Kreuz', 'Karo', 'Pick']
	let values = [
		'Ass',
		'König',
		'Dame',
		'Bube',
		'Neun',
		'Acht',
		'Sieben',
		'Sechs',
		'Fünf',
		'Vier',
		'Drei',
		'Zwei'
	]

	let loading
	let gameStarted = false,
		gameOver = false,
		playerWon = false,
		deck = [],
		showGame = false,
		showStart = true,
		dealerCards = [],
		playerCards = []

	$: dealerScore = getScore(dealerCards)
	$: playerScore = getScore(playerCards)
	$: dealerCardString = `${dealerCards.map((x) => getCardTemp(x)).join('')}`
	$: playerCardString = `${playerCards.map((x) => getCardTemp(x)).join('')}`
	// $: showStatus(dealerCards, playerCards)

	const getIconTemp = (str) => {
		switch (str) {
			case 'Kreuz':
				return SuitClubs
				break
			case 'Herz':
				return SuitHearts
				break
			case 'Karo':
				return SuitDiamonds
				break
			default:
				return SuitSpades
				break
		}
	}
	const getCardTemp = (
		card
	) => `<div class="game-card px-2 rounded border me-2">
				 <article class="text-end">
					 <h2 class="fw-bold"> ${getCardNumVal(card)}</h2>
				 </article>
				 <figure class="mb-0 px-4 py-2">
					 <img src="${getIconTemp(
							card.suit
						)}" class="img-fluid" width="40" height="40" alt="" />
				 </figure>
				 <article>
					 <h2 class="fw-bold"> ${getCardNumVal(card)}</h2>
				 </article>
			 </div>`

	function getCardNumVal(card) {
		switch (card.value) {
			case 'Ass':
				return 1
			case 'Zwei':
				return 2
			case 'Drei':
				return 3
			case 'Vier':
				return 4
			case 'Fünf':
				return 5
			case 'Sechs':
				return 6
			case 'Sieben':
				return 7
			case 'Acht':
				return 8
			case 'Neun':
				return 9
			default:
				return 10
		}
	}
	function shuffleDeck(deck) {
		for (let i = 0; i < deck.length; i++) {
			let swapIndex = Math.trunc(Math.random() * deck.length)
			let temp = deck[swapIndex]
			deck[swapIndex] = deck[i]
			deck[i] = temp
		}
	}
	function createDeck() {
		let deck = []
		for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
			for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
				let card = {
					value: values[valueIndex],
					suit: suits[suitIndex]
				}
				deck.push(card)
			}
		}
		return deck
	}
	function getNextCard() {
		return deck.shift()
	}
	function getScore(cards) {
		let score = 0
		let hasAss = false
		for (let i = 0; i < cards.length; i++) {
			let card = cards[i]
			score += getCardNumVal(card)
			if (card.value === 'Ass') {
				hasAss = true
			}
		}
		if (hasAss && score + 10 <= 21) {
			return score + 10
		}

		return score
	}
	function updateScores() {
		dealerScore = getScore(dealerCards)
		playerScore = getScore(playerCards)
	}
	async function showStatus() {
		if (!gameStarted) {
			console.log('Welcome to BlackJack Game')
			return
		}
		updateScores()
		dealerCardString = ''
		for (let i = 0; i < dealerCards.length; i++) {
			dealerCardString += getCardTemp(dealerCards[i])
		}

		playerCardString = ''
		for (let i = 0; i < playerCards.length; i++) {
			playerCardString += getCardTemp(playerCards[i])
		}

		if (gameOver) {
			await sleep(600)
			if (playerWon) {
				$_battle.won++
				// console.log('PLAYER WON')
			} else {
				$_battle.lost++
				// console.log('Bank WON')
			}

			showGame = false
			showStart = true
		}
	}

	function checkForEndGame() {
		updateScores()
		if (gameOver) {
			// let delar take cards
			while (
				dealerScore < playerScore &&
				playerScore <= 21 &&
				dealerScore <= 21
			) {
				dealerCards.push(getNextCard())
				updateScores()
			}
		}

		if (playerScore > 21) {
			playerWon = false
			gameOver = true
		} else if (dealerScore > 21) {
			playerWon = true
			gameOver = true
		} else if (gameOver) {
			if (playerScore > dealerScore) {
				playerWon = true
			} else {
				playerWon = false
			}
		}
	}
	const onStart = async () => {
		loading = true
		gameOver = false
		playerWon = false
		gameStarted = true
		deck = createDeck()
		shuffleDeck(deck)
		dealerCards = [getNextCard(), getNextCard()]
		playerCards = [getNextCard(), getNextCard()]
		showGame = true
		showStart = false
		showStatus()
		loading = false
	}
	const onHit = async () => {
		loading = true
		await sleep(1000)
		playerCards.push(getNextCard())
		checkForEndGame()
		showStatus()
		loading = false
	}
	const onStay = async () => {
		loading = true
		await sleep(1000)
		gameOver = true
		checkForEndGame()
		showStatus()
		loading = false
	}
	// $: console.log('DD', playerCards)
</script>

<Layer bind:show={gameStarted}>
	<div class="spieltisch-wrapper" class:opacity-25={!showGame}>
		<article class="spieltisch bg-red-50">
			<BattleStat player={false}>
				<span slot="score">{dealerScore}</span>
			</BattleStat>
			<nav class="shadow p-2">
				{@html dealerCardString}
			</nav>
		</article>

		<article class="spieltisch">
			<BattleStat player={true}>
				<span slot="score">{playerScore}</span>
			</BattleStat>

			<nav class="shadow p-2">
				{@html playerCardString}
			</nav>
		</article>
	</div>
	{#if showGame}
		<BattleCtrl on:onHit={onHit} on:onStay={onStay} bind:loading />
	{/if}
</Layer>
<Layer overlay center bind:show={showStart}>
	{#if gameOver}
		<EndingPanel
			bind:playerWon
			on:onStart={onStart}
			on:resetResult={resetResult} />
	{:else}
		<StartBtn bind:gameStarted on:onStart={onStart} />
	{/if}
</Layer>
<BottomSpacer />

<style>
	article.game {
		position: absolute;
		inset: 0;
	}
	.spieltisch-wrapper {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.spieltisch {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.spieltisch nav {
		display: flex;
		align-items: center;
	}
	.game-card {
		display: flex;
		flex-direction: column;
	}
</style>
