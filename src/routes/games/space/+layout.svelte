<script>
	import { Page } from '$lib'
	import {_game} from '$lib/data'
	import LevelBar from './game/LevelBar.svelte'
	import ScoreBar from './game/ScoreBar.svelte'
	import Fa from 'svelte-fa'
	import {
		faCog,
		faShoppingCart,
		faAngleLeft,
		faGamepad,
		faMapLocation
	} from '@fortawesome/free-solid-svg-icons'
	export let data
	$: updates = $_game.money >= $_game.upcost || $_game.money >= $_game.catcost || $_game.money >= $_game.workercost
</script>


<Page>
<header class="bg-white sticky-top border-bottom">
	<nav class="navbar navbar-expand-md pb-0 pt-0">
		<div class="container-fluid">
			<div
				class="navbar-collapse pb-1 pt-1 collapse"
				id="navbarNavDropdown-2"
				style="">
				<div class="me-auto d-flex">
					<LevelBar />
					<ScoreBar />
				</div>
				<div class="align-items-center d-inline-flex gap-2 gap-lg-3 py-1">
					<a
						href="/games/space"
						class="align-items-center d-inline-flex gap-2 gap-lg-3 lh-1 text-decoration-none">
						<span class="text-bg-secondary lh-1 p-2 rounded">
							<Fa icon={faGamepad} size="lg" fw />
						</span>
						<div class="d-lg-block d-none">
							<div class="mb-1 small text-black-50">Game</div>
							<div class="fw-bold" class:text-secondary={data.pathname !== '/games/space'}>Main</div>
						</div>
					</a>
					<a
						href="/games/space/shop"
						class="align-items-center d-inline-flex gap-2 gap-lg-3 lh-1 text-decoration-none">
						<span class="lh-1 p-2 rounded" class:text-bg-secondary={!updates} class:text-bg-primary={updates}>
							<Fa icon={faShoppingCart} fw size="lg" />
						</span>
						<div class="d-lg-block d-none">
							<div class="mb-1 small text-black-50">Shop</div>
							<div class="fw-bold" class:text-secondary={data.pathname !== '/games/space/shop'}>Upgrades</div>
						</div>
					</a>
					<a
						href="/games/space/settings"
						class="align-items-center d-inline-flex gap-2 gap-lg-3 lh-1 text-decoration-none">
						<span class="text-bg-secondary lh-1 p-2 rounded">
							<Fa icon={faCog} size="lg" fw />
						</span>
						<div class="d-lg-block d-none">
							<div class="mb-1 small text-black-50">Setting</div>
							<div class="fw-bold" class:text-secondary={data.pathname !== '/games/space/settings'}>Game Settings</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>	
	<slot />
</Page>


