// app/sitemap.js

// L'URL de votre site
const URL = 'https://mon-portfolio-wxtt-six.vercel.app/';

// Vos routes statiques
const SITE_ROUTES = ['', '/about', '/contact', '/project'];

// Vos routes dynamiques
// Ici, on utilisera plus souvent le résultat d'un call API
// ou bien une fonction qui va récupérer les chemins de vos pages
const getBlogPosts = () => {
	return [{ slug: 'nextjs-sitemap', date: '2023-08-23T08:42:00.284Z' }];
};

export default async function sitemap() {
	const posts = BLOG_POSTS.map(({ slug, date }) => ({
		url: `${URL}/blog/${slug}`,
		lastModified: date,
	}));

	const routes = SITE_ROUTES.map((route) => ({
		url: `${URL}${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes, ...posts];
}
