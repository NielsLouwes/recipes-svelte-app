import { writable } from 'svelte/store';

export type Ingredient = {
	id: number;
	recipeName: string;
};

export const ingredients = writable<Ingredient[]>([]);
