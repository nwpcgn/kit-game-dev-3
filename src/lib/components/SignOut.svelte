<script>
	import { supabase } from '../data'
	const signOut = async () => {
		let { error } = await supabase.auth.signOut()
	}
</script>

<span on:click={signOut} {...$$restProps}>
	<slot><!-- optional fallback --></slot>
</span>
