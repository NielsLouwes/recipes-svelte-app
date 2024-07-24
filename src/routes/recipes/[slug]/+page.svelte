<script>
	import Swal from 'sweetalert2';
	import { ingredients } from '../../../stores/ingredient-store';

	export let data;
	const { recipe } = data;

	const totalCookingTime = (recipe) => {
		return Number(recipe['cooking-time'] || 0) + Number(recipe['prep-time'] || 0);
	};

	const addIngredients = () => {
		ingredients.update((currentIngredients) => {
			const updatedIngredients = [...currentIngredients, ...recipe.ingredients];
			Swal.fire({
				title: 'Success!',
				text: 'Ingredients added successfully',
				icon: 'success',
				timer: 1500,
				showConfirmButton: false
			});
			return updatedIngredients;
		});
	};
</script>

<h1>{recipe.name}</h1>
<p>{recipe.description}</p>
<p><strong>Cuisine:</strong> {recipe?.cuisine}</p>

<div class="container stats">
	<div>
		<p class="heading">Cooking time</p>
		{#if recipe['cooking-time']}
			<p>{recipe['cooking-time']} mins</p>
		{/if}
	</div>
	<div>
		<p class="heading">Prep time</p>
		{#if recipe['prep-time']}
			<p>{recipe['prep-time']} mins</p>
		{/if}
	</div>
	<div>
		<p class="heading">Total time</p>
		<p>{totalCookingTime(recipe)} mins</p>
	</div>

	<div>
		<p class="heading">Serves</p>
		<p>{recipe.serves} people</p>
	</div>

	<div>
		<p class="heading">Difficulty</p>
		<p>Difficulty: {recipe.difficulty}</p>
	</div>
</div>
<div class="container">
	<div class="ingredients-section">
		<h2>Ingredients</h2>
		<button class="add-btn" on:click={addIngredients}>Add</button>
	</div>
	<ul>
		{#each recipe.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>
</div>
<div class="container">
	<h2>Directions</h2>
	<ol>
		{#each recipe.instructions as instruction}
			<li>{instruction}</li>
		{/each}
	</ol>
</div>

<style>
	.container {
		border: 3px solid black;
		border-radius: 15px;
		padding: 15px;
		border-top: 12px solid purple;
		margin-top: 30px;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;

		@media (width < 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	h2 {
		font-size: 1.5rem;
		font-weight: bolder;
	}

	h1 {
		font-weight: bolder;
	}

	.heading {
		font-weight: bolder;
	}

	.ingredients-section {
		display: flex;
		justify-content: space-between;
	}

	.add-btn {
		background: black;
		color: white;
		cursor: pointer;
		padding: 0 20px;
		border-radius: 9px;
		font-size: 1.5rem;
	}
</style>
