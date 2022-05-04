<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Twitter Doge</title>
</svelte:head>

<h1>Twitter Doge!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE! </figcaption>
</figure>

<p><strong>Great success IDO is coming</strong></p>
<p><strong>Shall we to the Mars</strong></p>

<video width="320" height="240" controls>
  <source src="movie.mp4"  type="video/mp4">
  <source src="movie.ogg"  type="video/ogg">
</video>
