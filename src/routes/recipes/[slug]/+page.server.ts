import recipes from '../../../data/recipes.json';

// params object has available the slug of the webpage you traveled to when using dynamic [slug] routes.

export function load({ params }) {
	const recipe = recipes.recipes.find((r) => r.name === params.slug);

	if (recipe) {
		return {
			recipe
		};
	}

	return {
		status: 404
	};
}
