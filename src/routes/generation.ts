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
		main_region: 'Kanto'
	},
	{
		id: 4,
		name: 'Generation IV',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Kanto'
	},
	{
		id: 5,
		name: 'Generation V',
		games: ['red', 'yellow', 'blue'],
		main_region: 'Kanto'
	}
];
