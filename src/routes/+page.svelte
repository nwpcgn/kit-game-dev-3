<script>
	import Account from './Account.svelte'
	import Logout from './Logout.svelte'
	export let data
	import { _user } from '$lib/data'
	import { SignIn, Page, Section, Spacer } from '$lib'
</script>

{#if !$_user}
	<Page center>
		<SignIn />
	</Page>
{:else}
	<Page center>
		<Section hero>
			<div class="row">
				<div class="col">
					<div class="text-center">
						<h1 class="display-2 fw-bold py-3">Game-Area</h1>
						<h2 class="py-3 mb-5">
							Visit <a href="/games">Games</a> Page
						</h2>
						<Logout />
					</div>
				</div>
			</div>
		</Section>
	</Page>
{/if}
