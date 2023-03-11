// import { base } from '$app/paths'
import { supabase } from '$lib/data'
// export const prerender = true
export const ssr = false

export async function load({ url: { pathname } }) {
	const {
		data: { user }
	} = await supabase.auth.getUser()

	return { pathname, user }
}
