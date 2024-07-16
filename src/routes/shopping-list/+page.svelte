<script>
	import { ingredients } from '../../stores/ingredient-store';

	console.log('$ingredients', $ingredients);
</script>

<svelte:head>
	<title>Shopping List</title>
	<meta name="shopping-list" content="Shopping list" />
</svelte:head>

<div class="text-column">
	<h1>Shopping List</h1>
	<ul>
		{#each $ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>
</div>

<style>
	.text-column {
		border: 3px solid black;
		border-radius: 15px;
		padding: 15px;
		border-top: 12px solid purple;
		margin-top: 30px;
	}
</style>
