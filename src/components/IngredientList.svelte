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
