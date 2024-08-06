<script lang="ts">
	import CrossIcon from '../icons/CrossIcon.svelte';

	export let ingredientItem: string;
	export let removeIngredient;
</script>

<div class="ingredient-container">
	<p>{ingredientItem}</p>
	<div class="actions"></div>
	<CrossIcon on:click={() => removeIngredient(ingredient)} />
</div>

<style>
	.ingredient-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		min-width: 350px;
		border: 1px solid black;
		border-radius: 8px;
		margin-bottom: 5px;

		@media (width > 768px) {
			width: 75%;
			flex-direction: row;
			padding: 5px 15px;
		}
	}

	.ingredient-container:hover {
		background: lightgrey;
		cursor: pointer;
	}

	p {
		font-size: 1rem;
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
