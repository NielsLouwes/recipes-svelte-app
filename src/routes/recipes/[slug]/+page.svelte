<script>
	export let data;
	console.log('data', data);
	const { recipe } = data;
</script>

<h1>{recipe.name}</h1>
<p>{recipe.description}</p>
<p><strong>Cuisine:</strong> {recipe.cuisine}</p>
