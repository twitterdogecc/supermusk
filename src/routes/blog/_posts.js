// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: 'What is Twitter Doge?',
    slug: 'what-is-sapper',
    html: `
			<p>First, you have to know what <a href='https://twitterdoge.cc'>Twitter Doge</a> is. Twitter Doge is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://twitterdoge.cc/blog'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='https://twitterdoge.cc'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`,
  },

  {
    title: 'How to use Twitter Doge',
    slug: 'how-to-use-sapper',
    html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://twitterdoge.cc'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='https://twitterdoge.cc</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`,
  },

  {
    title: 'Where are ours GitHub?',
    slug: 'why-the-name',
    html: `
			<p>Create ours project on GitHub <a href='https://github.com/twitterdogecc/supermusk'>Twitter Doge</a>:</p>
		`,
  },

  {
    title: 'How is Twitter Doge different from Shib Token?',
    slug: 'how-is-sapper-different-from-next',
    html: `
			<p><a href='https://twitterdoge.cc'>Shib Token</a> is a React framework from <a href='https://twitterdoge.cc'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://twitterdoge.cc'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].html</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='https://twitterdoge.cc'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='https://twitterdoge.cc'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`,
  },

  {
    title: 'How can I get involved?',
    slug: 'how-can-i-get-involved',
    html: `
			<p>We're so glad you asked! Come on over to the <a href='https://twitterdoge.cc'>Svelte</a> and <a href='https://twitterdoge.cc'>Sapper</a> repos, and join us in the <a href='https://twitter.com/twiterdoge_'>Twitter 推特</a>. Everyone is welcome, especially you!</p>
		`,
  },
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
