<script>
	import IngredientItem from './IngredientItem.svelte';

	export let ingredient;
	export let removeIngredient;

	const recipeIngredients = ingredient['ingredients'];
</script>

<section>
	<div class="ingredient-container">
		<h2>{ingredient.recipeName}</h2>
		{#each recipeIngredients as ingredientItem}
			<IngredientItem {ingredientItem} {removeIngredient} />
		{/each}
	</div>
</section>

<style>
	h2 {
		color: var(--color-theme-1);
		font-weight: bolder;
		font-size: 1.2rem;
	}
</style>
