<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	span {
		display: block;
		float: right;
	}
	.selected {
		position: relative;
		display: inline-block;
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	
	.item-right {
   		 margin-left: 5cm;
 	 }
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
		
		<li><a class='{segment === "ido" ? "selected" : ""}' href='ido'>ido</a></li>
		<li><a class='{segment === "nft" ? "selected" : ""}' href='nft'>nft</a></li>
		<li><a class='{segment === "market" ? "selected" : ""}' href= "https://www.binance.com/en/nft/home">market</a></li>
		<span><li><a class='{segment === "wallet" ? "selected" : ""} "item-right"' href= "https://metamask.io/">wallet</a></li></span>
	</ul>
	
</nav>
