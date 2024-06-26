import type { PageLoad } from './$types';

type apiMonster = {
	name: string;
	url: string;
};

export type indexMonster = apiMonster & {
	id: string;
	image: string;
};

export const load = (async ({ fetch }) => {
	const respones = await fetch('https://pokeapi.co/api/v2/pokemon?limit=120');
	const json = await respones.json();
	const monsters: indexMonster[] = json.results.map((monster: IndexMonster) => {
		const spilitUrl = monster.url.split('/');
		const id = spilitUrl[spilitUrl.length - 2];
		return {
			name: monster.name,
			url: monster.url,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});

	return {
		monsters
	};
}) satisfies PageLoad;
