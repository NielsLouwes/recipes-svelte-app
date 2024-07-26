<script>
	import Ingredient from '../../components/Ingredient.svelte';
	import { ingredients } from '../../stores/ingredient-store';

	console.log('$ingredients', $ingredients);

	let newShoppingItem = '';

	const removeIngredient = (ingredient) => {
		ingredients.update((currentIngredients) => {
			const updatedIngredients = currentIngredients.filter(
				(currentIngredient) => currentIngredient !== ingredient
			);
			return updatedIngredients;
		});
	};

	const addIngredient = () => {
		if (newShoppingItem.trim()) {
			ingredients.update((currentIngredients) => {
				return [...currentIngredients, newShoppingItem];
			});

			newShoppingItem = '';
		}
	};

	console.log('newShoppingItem', newShoppingItem);
</script>

<svelte:head>
	<title>Shopping List</title>
	<meta name="shopping-list" content="Shopping list" />
</svelte:head>

<div class="shopping-list">
	<h1>Shopping List</h1>
	<form action="submit" on:submit|preventDefault={addIngredient}>
		<label for="input">Add item: </label>
		<input id="input" type="text" bind:value={newShoppingItem} />
	</form>
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
		display: flex;
		flex-direction: column;
	}
</style>
