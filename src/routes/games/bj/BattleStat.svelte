<script>
	import { sleep, _battle } from '$lib/data'

	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faDice,
		faLandmark,
		faUser,
		faHome,
		faMapLocation
	} from '@fortawesome/free-solid-svg-icons'
	export let player = false
	export let label = "Player"
</script>

<header class="d-flex align-items-center py-2">
	<div class="fs-5">
		{#if player}
			<Fa icon={faUser} fw /> <span> <slot>Player</slot></span>
			{:else}
			<Fa icon={faLandmark} fw /> <span> <slot>House</slot></span>
		{/if}
	</div>
	<span class="px-1" />
	<Fa icon={faDice} fw size="lg" />
	<span class="px-1" />
	<div class="fs-3"><slot name="score"></slot></div>
</header>


