<script>
	export let label = "Label"
</script>

<header class="flex items-center justify-between px-4 space-x-2 py-2">
		<span class="text-2xl font-semibold font-serif">{label}</span>
		<slot><!-- optional fallback --></slot>
</header>

