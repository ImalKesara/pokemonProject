export type Generation = {
	id: number;
	name: string;
	games: string[];
	main_region: string;
	pokemon_species?: string[];
};

export const generations: Generation[] = [
	{
		id: 1,
		name: 'Generation I',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Kanto'
	},
	{
		id: 2,
		name: 'Generation II',
		games: ['glod', 'yellow', 'Black'],
		main_region: 'Johto'
	},
	{
		id: 3,
		name: 'Generation III',
		games: ['red', 'yellow', 'blue'],
		main_region: 'hoenn'
	},
	{
		id: 4,
		name: 'Generation IV',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Sinnoh'
	},
	{
		id: 5,
		name: 'Generation V',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Unova'
	},
	{
		id: 6,
		name: 'Generation V',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Kalos'
	},
	{
		id: 7,
		name: 'Generation V',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Alola'
	},
	{
		id: 8,
		name: 'Generation V',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Galar'
	}
];
