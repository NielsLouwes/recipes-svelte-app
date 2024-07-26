<script>
	export let ingredient;
	export let removeIngredient;
</script>

<div class="ingredient-container">
	<p class="ingredient">{ingredient}</p>
	<div class="actions">
		<p class="action">edit</p>
		<p on:click={() => removeIngredient(ingredient)} class="action">remove</p>
	</div>
</div>

<style>
	.ingredient-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;

		border: 1px solid black;
		border-radius: 8px;
		margin-bottom: 5px;

		@media (width > 768px) {
			width: 75%;
			flex-direction: row;
			padding: 5px 15px;
		}
	}

	.ingredient {
		width: 90%;

		@media (width > 768px) {
			width: 70%;
		}
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

	.action:hover {
		background: purple;
		color: white;
	}
</style>
