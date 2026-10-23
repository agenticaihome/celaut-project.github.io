<script lang="ts">
	/*
	 * /blog/<slug> — one post, rendered from markdown.
	 *
	 * Root-relative links in the markdown ("/paradigm") are rewritten
	 * through `$href` so they keep the visitor's locale prefix; external
	 * links open in a new tab, as on /paradigm.
	 */
	import { marked } from 'marked';
	import SiteTopbar from '$lib/components/immersive/SiteTopbar.svelte';
	import { t, href } from '$lib/i18n/index.js';

	/** @type {import('./$types').PageData} */
	export let data;

	$: html = (marked.parse(data.md, { async: false }) as string)
		// The title is shown in the header block, not repeated in the body.
		.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '')
		.replace(/href="(\/[^"]*)"/g, (_m, p) => `href="${$href(p)}"`)
		.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
</script>

<svelte:head>
	<title>{data.title} — Celaut</title>
	<meta name="description" content={data.excerpt} />
</svelte:head>

<div id="top" class="blog-page">
	<SiteTopbar title={$t('blog.topbarTitle')} position="sticky" />

	<main lang={data.lang}>
		<a class="back" href={$href('/blog')}>{$t('blog.back')}</a>
		<header>
			<time datetime={data.date}>{data.date}</time>
			<h1>{data.title}</h1>
		</header>

		<div class="prose">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html html}
		</div>
	</main>
</div>

<style>
	.blog-page {
		background-color: var(--surface);
		color: var(--on-surface);
		min-height: 100vh;
		font-family: var(--font-body, 'Lato', sans-serif);
	}

	main {
		max-width: 760px;
		margin: 0 auto;
		padding: 40px 24px 96px;
		line-height: 1.75;
	}

	.back {
		color: var(--accent-text);
		font-weight: 700;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.back:hover {
		text-decoration: underline;
	}

	header {
		margin: 24px 0 32px;
		padding-bottom: 24px;
		border-bottom: 2px solid var(--accent);
	}

	time {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--on-surface-subtle);
	}

	h1,
	.prose :global(h2),
	.prose :global(h3) {
		font-family: var(--font-heading, 'Playfair Display', serif);
		line-height: 1.25;
		color: var(--on-surface);
	}

	h1 {
		font-size: clamp(1.7rem, 4vw, 2.3rem);
		margin: 8px 0 0;
	}

	.prose :global(h2) {
		font-size: 1.55rem;
		margin: 44px 0 14px;
	}

	.prose :global(h3) {
		font-size: 1.2rem;
		margin: 30px 0 10px;
		color: var(--accent-text);
	}

	.prose :global(p),
	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 18px;
	}

	.prose :global(ul),
	.prose :global(ol) {
		padding-inline-start: 26px;
	}

	.prose :global(li) {
		margin: 6px 0;
	}

	.prose :global(a) {
		color: var(--accent-text);
		text-underline-offset: 2px;
	}

	.prose :global(a:hover) {
		color: var(--on-surface);
	}

	.prose :global(blockquote) {
		margin: 20px 0;
		padding: 8px 20px;
		border-inline-start: 4px solid var(--accent);
		background-color: var(--accent-soft);
		border-radius: 8px;
	}

	.prose :global(blockquote p) {
		margin: 8px 0;
	}

	/* Wide tables scroll sideways inside themselves, not the page. */
	.prose :global(table) {
		display: block;
		overflow-x: auto;
		border-collapse: collapse;
		margin: 0 0 24px;
		font-size: 0.92rem;
		line-height: 1.5;
	}

	.prose :global(th),
	.prose :global(td) {
		border: 1px solid var(--border);
		padding: 8px 12px;
		text-align: start;
		vertical-align: top;
	}

	.prose :global(thead th) {
		background-color: var(--surface-raised);
	}

	.prose :global(em) {
		color: var(--on-surface-muted);
	}

	/*
	 * Inline SVG charts written into the markdown. Colours come from the
	 * theme tokens, so they follow dark and light; the two series also
	 * differ by dash, so colour is never the only cue.
	 */
	.prose :global(figure.chart) {
		margin: 8px auto 28px;
		max-width: 560px;
	}

	.prose :global(figure.chart svg) {
		display: block;
		width: 100%;
		height: auto;
		font-family: inherit;
	}

	.prose :global(figure.chart figcaption) {
		margin-top: 6px;
		font-size: 0.85rem;
		line-height: 1.5;
		color: var(--on-surface-subtle);
		text-align: center;
	}

	.prose :global(.chart .axis) {
		stroke: var(--on-surface-subtle);
		stroke-width: 1;
	}

	.prose :global(.chart .grid),
	.prose :global(.chart .guide) {
		stroke: var(--border);
		stroke-width: 1;
	}

	.prose :global(.chart .guide) {
		stroke-dasharray: 3 4;
	}

	.prose :global(.chart text) {
		font-size: 14px;
		fill: var(--on-surface-muted);
	}

	.prose :global(.chart .tick) {
		font-size: 13px;
		fill: var(--on-surface-subtle);
	}

	.prose :global(.chart .series) {
		font-weight: 700;
		fill: var(--on-surface);
	}

	.prose :global(.chart .curve) {
		fill: none;
		stroke-width: 2.5;
		stroke-linecap: round;
	}

	.prose :global(.chart .curve.flat) {
		stroke: var(--on-surface-muted);
		stroke-dasharray: 7 5;
	}

	.prose :global(.chart .curve.rise) {
		stroke: var(--accent-text);
	}

	.prose :global(.chart .dot) {
		stroke: var(--surface);
		stroke-width: 2;
	}

	.prose :global(.chart .dot.flat) {
		fill: var(--on-surface-muted);
	}

	.prose :global(.chart .dot.rise) {
		fill: var(--accent-text);
	}
</style>
