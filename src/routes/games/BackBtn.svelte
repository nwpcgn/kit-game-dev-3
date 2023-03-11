<script>
	import { goto } from '$app/navigation'
</script>

<a
	href="/"
	on:click|preventDefault={() => goto('/games')}
	class="fw-semibold text-primary px-1">Back</a>
