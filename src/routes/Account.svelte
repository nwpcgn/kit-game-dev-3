<script>
  import Logout from './Logout.svelte';

	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { _user, _profile, supabase } from '$lib/data'
	import { SignIn, SignOut, Page, Section, Spacer } from '$lib'
	export let data
	let loading = false
	let username = null
	let website = null
	let avatarUrl = null
	let logout = false
	const toggle = () => {
		logout = !logout
	}
	onMount(() => {
		getProfile()
	})

	const getProfile = async () => {
		try {
			loading = true
			let user = $_user

			const { data, error, status } = await supabase
				.from('profiles')
				.select(`id,username,full_name,avatar_url,website,avatar,daten`)
				.eq('id', user.id)
				.single()
			if (data) {
				_profile.set(data)
				username = data.username
				website = data.website
				avatarUrl = data.avatar_url
			}

			if (error && status !== 406) throw error
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			loading = false
		}
	}

	async function updateProfile() {
		try {
			loading = true
			let user = $_user

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date()
			}

			let { error } = await supabase.from('profiles').upsert(updates)

			if (error) throw error
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			loading = false
		}
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
	<h1 class="mb-2 fw-bold">Userpanel</h1>
	<h5 class="mb-2">{username}</h5>

	<p class="leed mb-4">{website}</p>
	<Logout></Logout>
</div>

<style>
	.logout {
		transition: background 500ms width 400ms;
	}
</style>
