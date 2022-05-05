<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0 0 0.5em 0;
	}
	
	ul {
	        margin: 0 0 1em 0;
		line-height: 1.5;
		background-image: url(great-success.png);
		background-size: 180px;
		background-position: right bottom;
		background-repeat:no-repeat;		
	}
	
	div {
		text-align: center;
		margin: 0 auto;
	}
	
	@media (min-width: 480px) {
		h1 {
			font-size: 2em;
		}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Developer Ecosystem</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>

<div>
<video  width="320" height="240" controls>
  <source src="movie1.mp4"  type="video/mp4">
  <source src="movie1.ogg"  type="video/ogg">
</video>
</div>
