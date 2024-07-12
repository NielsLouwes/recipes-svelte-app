import recipes from '../../../data/recipes.json';

export function load({ params }) {
	const recipe = recipes.recipes.find((r) => r.name === params.slug);
	console.log('recipe', recipe);

	if (recipe) {
		return {
			recipe
		};
	}

	return {
		status: 404
	};
}
