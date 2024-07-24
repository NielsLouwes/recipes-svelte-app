<script>
	export let ingredient;
	export let removeIngredient;
</script>

<div class="ingredient-container">
	<p>{ingredient}</p>
	<div class="actions">
		<p class="action">edit</p>
		<button on:click={() => removeIngredient(ingredient)} class="action">remove</button>
	</div>
</div>

<style>
	.ingredient-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 75%;
		border: 1px solid black;
		border-radius: 8px;
		margin: 5px;
		padding: 5px 15px;
	}

	.ingredient-container:hover {
		background: lightgrey;
		cursor: pointer;
	}

	.actions {
		display: flex;
		gap: 10px;
	}

	.action {
		border: 1px solid black;
		border-radius: 8px;
		padding: 5px 10px;
		cursor: pointer;
	}

	button {
		background-color: transparent;
		border: none;
		padding: 0;
		cursor: pointer;
	}
</style>
