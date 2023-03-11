export { default as supabase } from './supabase'

export { _loading, _user, _profile, _settings, _game, _battle } from './stores'

export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))
