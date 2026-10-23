/*
 * Blog posts are markdown files under ./<locale>/<slug>.md. A post need
 * not exist in every locale: `loadPost` falls back to English, and says
 * so (`lang`), so the page can mark the text with the right `lang`
 * attribute instead of passing English off as the visitor's language.
 * Title and excerpt come from the markdown itself, so a post needs no
 * dictionary entries.
 */
import { DEFAULT_LOCALE } from '$lib/i18n/index.js';

/** Newest first. */
export const POSTS = [{ slug: 'function-vs-competitive-goods', date: '2026-10-23' }];

const files = import.meta.glob<string>('./*/*.md', { query: '?raw', import: 'default' });

export async function loadPost(slug: string, locale: string) {
	for (const lang of [locale, DEFAULT_LOCALE]) {
		const load = files[`./${lang}/${slug}.md`];
		if (load) return { lang, md: await load() };
	}
	throw new Error(`No blog post "${slug}"`);
}

/** The `# Title`, and the first plain paragraph (not the italic byline). */
export function summarize(md: string) {
	const title = /^#\s+(.+)$/m.exec(md)?.[1] ?? '';
	const first = md.split(/\n{2,}/).find((b) => b.trim() && !/^[#*]/.test(b.trim())) ?? '';
	const excerpt = first.length > 260 ? first.slice(0, 260).replace(/\s+\S*$/, '') + '…' : first;
	return { title, excerpt };
}
