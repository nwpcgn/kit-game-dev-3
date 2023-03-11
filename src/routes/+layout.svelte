<script>
	import '../app.scss'
	import { goto } from '$app/navigation'
	import { _user, supabase, sleep, _loading } from '$lib/data'
	import NwpLogo from '$lib/components/_NwpLogo.svelte'
	import { onMount } from 'svelte'
	export let data
	onMount(() => _user.set(data.user))
	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_OUT') _user.set(null)
		if (event == 'SIGNED_IN') _user.set(session.user)
	})
	$: if (!$_user) {
		goto('/')
	}
</script>

<nav class="navbar navbar-expand navbar-light bg-light px-2 sticky-top">
	<NwpLogo on:click={() => goto('/')} style="cursor: pointer;" />
	{#if $_user}
		<div class="nav navbar-nav ms-auto">
			<a class="nav-item nav-link" class:active={data.pathname === '/'} href="/"
				>Home</a>
			<a
				class="nav-item nav-link"
				class:active={data.pathname === '/games'}
				href="/games">Games</a>
		</div>
	{/if}
</nav>
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		position: relative;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}
</style>
