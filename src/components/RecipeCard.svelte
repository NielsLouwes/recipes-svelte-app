<script>
	export let name;
	export let description;
	export let cuisine;
</script>

<a href="/">
	<div class="card">
		<h3>{name}</h3>
		<p>{description}</p>
		<p><strong class="strong">Cuisine:</strong> {cuisine}</p>
	</div>
</a>

<style>
	.card {
		border: 1px solid white;
		border-radius: 15px;
		padding: 10px 15px;
		border: 3px solid rgb(36, 34, 36);
		color: rgb(36, 34, 36);
		margin-bottom: 15px;
		width: 350px;
	}

	.card:hover {
		background: lightgray;
	}

	.strong {
		color: #9853ed;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
		cursor: pointer;
	}

	p {
		width: 98%;
	}
</style>
