import { writable } from 'svelte/store';

export const ingredients = writable<string[]>([]);
