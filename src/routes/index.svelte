<style>
	h1, figure, p, div {
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
		margin: 0 0 1em 0;
	}
	
	div {
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
	
	body {
 		margin: 0;
 		padding: 0;
 	}
 
 #three_canvas {
 position: absolute;
 width: 100%;
 height: 100%;
 }

	@media (min-width: 480px) {
		h1 {
			font-size: 2em;
		}
	}
</style>

<svelte:head>
	<title>Twitter Doge</title>
	<script src="http://sqimg.qq.com/qq_product_operations/mma/javanli_test/lib/three.min.js"></script>
</svelte:head>

<h1>Twitter Doge!</h1>

<figure>
	<img alt='great success' src='great-success.png'>
	<figcaption>HIGH FIVE! </figcaption>
</figure>
<p><strong>Great success IDO is coming</strong></p>
<p><strong>Shall we to the Mars</strong></p>

<div>
<video  width="320" height="240" controls loop>
  <source src="movie.mp4"  type="video/mp4">
  <source src="movie.ogg"  type="video/ogg">
</video>
</div>

<body>
<canvas id="three_canvas"></canvas>
<script>
 var renderer, camera, scene, light, object;
 var width, height;
 function initRenderer() {
 width = document.getElementById('three_canvas').clientWidth;
 height = document.getElementById('three_canvas').clientHeight;
 renderer = new THREE.WebGLRenderer({
 canvas: document.getElementById('three_canvas')
 });
 renderer.setSize(width, height);
 renderer.setClearColor(0xFFFFFF, 1.0);
 }
 
 function initCamera() {
 camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
 camera.position.x = 0;
 camera.position.y = 0;
 camera.position.z = 200;
 camera.up.x = 0;
 camera.up.y = 1;
 camera.up.z = 0;
 camera.lookAt({
 x: 0,
 y: 0,
 z: 0
 });
 }
 function initScene() {
 scene = new THREE.Scene();
 }
 function initObject() {
 var geometry = new THREE.CubeGeometry(100, 100, 100);
 object = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
 scene.add(object);
 }
 function render() {
 requestAnimationFrame(render);
 object.rotation.x += 0.05;
 object.rotation.y += 0.05;
 renderer.render(scene, camera);
 }
 function threeStart() {
 initRenderer();
 initCamera();
 initScene();
 initObject();
 render();
 }
 window.onload = threeStart();
</script>
</body>
