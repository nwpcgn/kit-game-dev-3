<script>
	import { Page } from '$lib'
	export let data
</script>

<Page location={data.pathname}>
	<slot />
</Page>
