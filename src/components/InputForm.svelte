<script>
	import { ingredients } from '../stores/ingredient-store';

	let newShoppingItem = '';

	const addIngredient = () => {
		if (newShoppingItem.trim()) {
			ingredients.update((currentIngredients) => {
				return [...currentIngredients, newShoppingItem];
			});

			newShoppingItem = '';
		}
	};
</script>

<form action="submit" on:submit|preventDefault={addIngredient}>
	<input id="input" type="text" bind:value={newShoppingItem} placeholder="Add item" />
	<button type="submit">Add</button>
</form>

<style>
	form {
		margin-left: 7px;
		margin-bottom: 10px;
	}
</style>
