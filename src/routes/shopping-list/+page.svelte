<script lang="ts">
	import IngredientList from '../../components/IngredientList.svelte';
	import Ingredient from '../../components/IngredientList.svelte';
	import InputForm from '../../components/InputForm.svelte';
	import { ingredients } from '../../stores/ingredient-store';

	console.log('$ingredients', $ingredients);

	const removeIngredient = (ingredient: string) => {
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
	<InputForm />

	{#if $ingredients.length === 0}
		<p>No ingredients added yet</p>
	{:else}
		<div>
			{#each $ingredients as ingredient}
				<IngredientList {ingredient} {removeIngredient} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.shopping-list {
		border: 3px solid black;
		border-radius: 15px;
		border-top: 12px solid purple;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
	}
</style>
