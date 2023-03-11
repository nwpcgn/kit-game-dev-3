<script>
	import { fade } from 'svelte/transition'
	import { supabase } from '$lib/data'
	let loading = false
	let logout = false
	const toggle = () => {
		logout = !logout
	}
	async function signOut() {
		try {
			loading = true
			let { error } = await supabase.auth.signOut()
			if (error) throw error
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			loading = false
			logout = false
		}
	}
</script>

<div {...$$restProps}>
	<button
		on:click={toggle}
		type="button"
		class="btn logout"
		class:btn-danger={!logout}
		class:btn-light={logout}>{logout ? 'Cancel' : 'Logout'}</button>
	{#if logout}
		<button
			transition:fade
			on:click={signOut}
			type="button"
			class="btn btn-danger">{loading ? 'Loading' : 'Logout ?'}</button>
	{/if}
</div>

<style>
	.logout {
		transition: background 500ms width 400ms;
	}
</style>
