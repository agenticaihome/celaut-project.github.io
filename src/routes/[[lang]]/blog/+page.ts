import { POSTS, loadPost, summarize } from '$lib/blog/posts';

export { entries } from '../entries.js';

export async function load({ params }: { params: { lang?: string } }) {
	const posts = await Promise.all(
		POSTS.map(async ({ slug, date }) => {
			const { lang, md } = await loadPost(slug, params.lang ?? 'en');
			return { slug, date, lang, ...summarize(md) };
		})
	);
	return { posts };
}
