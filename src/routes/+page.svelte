<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import recipes from '../data/recipes.json';

	const recipesData = recipes['recipes'];
	console.log('recipesData', recipesData);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Recipe Shopping App" />
</svelte:head>

<section>
	<p>{recipesData.length}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
