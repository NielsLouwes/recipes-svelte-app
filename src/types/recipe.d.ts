import type { Ingredient } from '../stores/ingredient-store';

export type Recipe = {
	id: number;
	name: string;
	description: string;
	ingredients: string[];
	nutrition: string[];
	spices: string[];
	instructions: Ingredient[];
	tips: string[];
	'prep-time': null;
	'cooking-time': number;
	serves: string;
	difficulty: number;
	cuisine: string;
	calories: null;
	tags: string[];
	slug: string;
};
