<script>
	import RecipeCard from '../components/RecipeCard.svelte';
	import recipes from '../data/recipes.json';

	const recipesData = recipes['recipes'];
	console.log('recipesData', recipesData);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Recipe Shopping App" />
</svelte:head>

<section>
	{#each recipesData as { name, description, cuisine }}
		<RecipeCard {name} {description} {cuisine} />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
