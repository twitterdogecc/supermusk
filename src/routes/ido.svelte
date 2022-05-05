
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0 0 0.5em 0;
	}
	figure {
		margin: 0 0 1em auto;
	}
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}
	p {
		margin: 1em auto;
	}
	div {
		text-align: center;
		margin: 0 auto;
	}
	
	@media (min-width: 480px) {
		h1 {
			font-size: 2em;
		}
	}
</style>


<svelte:head>
	<title>twitterdoge</title>
</svelte:head>

<h1>IDO is coming soon...</h1>

<figure>
	<img alt='pink' src='pink.png'>
	<figcaption>TwitterDoge × PinkSale</figcaption>
</figure>

<p><a href= "https://www.pinksale.finance/">www.pinksale.finance</a></p>
<p><strong>0x...?</strong></p>

<body>
<div id="main">
<div id="show_time">
<script>
//setInterval("show_time.innerHTML= new Date().toLocaleString()",1000);
setInterval("show_time.innerHTML=new Date().toLocaleString()+'0123456'.charAt(new Date().getDay());",1000);
</script>
</div>
</div>
</body>
