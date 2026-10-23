import { error } from '@sveltejs/kit';
import { LOCALES, DEFAULT_LOCALE } from '$lib/i18n/index.js';
import { POSTS, loadPost, summarize } from '$lib/blog/posts';

// Every post, once unprefixed and once per non-default locale.
export function entries() {
	const langs = [undefined, ...LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => l.code)];
	return POSTS.flatMap(({ slug }) => langs.map((lang) => (lang ? { lang, slug } : { slug })));
}

export async function load({ params }: { params: { lang?: string; slug: string } }) {
	const post = POSTS.find((p) => p.slug === params.slug);
	if (!post) throw error(404, 'Not found');
	const { lang, md } = await loadPost(post.slug, params.lang ?? 'en');
	return { date: post.date, lang, md, ...summarize(md) };
}
