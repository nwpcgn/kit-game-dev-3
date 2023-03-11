// import { base } from '$app/paths'
/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		pageDb: {
         titel: 'Games Archiv',
         body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe maxime iste quasi voluptatem impedit nostrum nulla dolorem tenetur. Eius pariatur eum aut error assumenda modi iste quasi culpa earum iure!',
			games: [
				{ path: 'space', name: 'Spacebar', titel: 'Spacebar Game', body: 'Spacebar Lorem' },
				{ path: 'bj', name: 'Black Jack', titel: 'BlackJack Game', body: 'Spacebar Lorem' },
				{ path: 'battle', name: 'Battle Jam', titel: 'Battle Game', body: 'Spacebar Lorem' }
			]
		}
	}
}
