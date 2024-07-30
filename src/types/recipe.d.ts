export type Recipe = {
	id: number;
	name: string;
	description: string;
	ingredients: string[];
	nutrition: never[];
	spices: never[];
	instructions: string[];
	tips: never[];
	'prep-time': null;
	'cooking-time': number;
	serves: string;
	difficulty: number;
	cuisine: string;
	calories: null;
	tags: string[];
	slug: string;
};
