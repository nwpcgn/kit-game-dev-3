<script>
	import {Section} from '$lib'
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faAngleLeft,
		faHome,
		faMapLocation
	} from '@fortawesome/free-solid-svg-icons'
	export let data
	let { path, name, titel, body } = data.pageDb.games[2]
</script>

<header class="bg-white sticky-top shadow">
	<nav class="navbar navbar-expand-md pb-0 pt-0">
		<div class="container-md">
			<div
				class="navbar-collapse pb-1 pt-1 collapse"
				id="navbarNavDropdown-2"
				style="">
				<ul class="me-auto navbar-nav">
					<li class="nav-item">
						<a class="link-dark nav-link fs-5" aria-label="Back" href="/games"
							><Fa icon={faAngleLeft} size="lg" fw /> <span>Back</span></a>
					</li>
				</ul>
				<div class="align-items-center d-inline-flex gap-2 gap-lg-3 py-1">
					<a
						href="/"
						on:click|preventDefault
						class="align-items-center d-inline-flex gap-2 lh-1 text-decoration-none">
						<span class="bg-primary lh-1 p-2 rounded text-white">
							<Fa icon={faHome} size="lg" fw />
						</span>
						<div class="d-lg-block d-none">
							<div class="mb-1 small text-black-50">Call Us</div>
							<div class="fw-bold">+0-123-456-789</div>
						</div>
					</a>
					<a
						href="/"
						on:click|preventDefault
						class="align-items-center d-inline-flex gap-2 lh-1 text-decoration-none">
						<span class="bg-primary lh-1 p-2 rounded text-white">
							<Fa icon={faMapLocation} size="lg" fw />
						</span>
						<div class="d-lg-block d-none">
							<div class="mb-1 small text-black-50">Our Location</div>
							<div class="fw-bold">Fairground Ave., New York</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>

<Section hero>
	<h1>{titel}</h1>
	<p class="text-muted py-4">
		{body}
	</p>
</Section>
