import type { PageLoad } from './$types';
export const load = (async ({ fetch }) => {
	const respones = await fetch('https://pokeapi.co/api/v2/pokemon?limit=120');
	const json = await respones.json();

	type IndexMonster = {
		name: string;
		url: string;
	};

	const monsters = json.results.map((monster: IndexMonster) => {
		const spilitUrl = monster.url.split('/');
		const id = spilitUrl[spilitUrl.length - 2];
		return {
			name: monster.name,
			url: monster.url,
			id
		};
	});

	return {
		monsters
	};
}) satisfies PageLoad;
