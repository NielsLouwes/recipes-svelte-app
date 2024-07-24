<script>
	import Ingredient from '../../components/Ingredient.svelte';
	import { ingredients } from '../../stores/ingredient-store';

	console.log('$ingredients', $ingredients);

	const removeIngredient = (ingredient) => {
		ingredients.update((currentIngredients) => {
			const updatedIngredients = currentIngredients.filter(
				(currentIngredient) => currentIngredient !== ingredient
			);
			return updatedIngredients;
		});
	};
</script>

<svelte:head>
	<title>Shopping List</title>
	<meta name="shopping-list" content="Shopping list" />
</svelte:head>

<div class="shopping-list">
	<h1>Shopping List</h1>
	{#if $ingredients.length === 0}
		<p>No ingredients added yet</p>
	{:else}
		<div>
			{#each $ingredients as ingredient}
				<Ingredient {ingredient} {removeIngredient} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.shopping-list {
		border: 3px solid black;
		border-radius: 15px;
		padding: 15px;
		border-top: 12px solid purple;
		margin-top: 30px;
		display: flex;
		flex-direction: column;
	}
</style>
