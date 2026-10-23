<script lang="ts">
	/* /blog — the list of posts. */
	import SiteTopbar from '$lib/components/immersive/SiteTopbar.svelte';
	import { t, href } from '$lib/i18n/index.js';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{$t('blog.meta.title')}</title>
	<meta name="description" content={$t('blog.meta.description')} />
</svelte:head>

<div class="blog-page">
	<SiteTopbar title={$t('blog.topbarTitle')} position="sticky" />

	<main>
		<h1>{$t('blog.topbarTitle')}</h1>
		<p class="lede">{$t('blog.meta.description')}</p>

		{#each data.posts as post}
			<article class="post" lang={post.lang}>
				<time datetime={post.date}>{post.date}</time>
				<h2><a href={$href(`/blog/${post.slug}`)}>{post.title}</a></h2>
				<p>{post.excerpt}</p>
				<a class="more" href={$href(`/blog/${post.slug}`)}>{$t('blog.read')}</a>
			</article>
		{/each}
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
		max-width: 820px;
		margin: 0 auto;
		padding: 48px 24px 96px;
		line-height: 1.7;
	}

	h1,
	h2 {
		font-family: var(--font-heading, 'Playfair Display', serif);
		line-height: 1.25;
		margin: 0;
	}

	h1 {
		font-size: 2.1rem;
	}

	.lede {
		color: var(--on-surface-muted);
		margin: 8px 0 40px;
	}

	.post {
		background-color: var(--surface-raised);
		border: 1px solid var(--border);
		border-top: 3px solid var(--accent);
		border-radius: 10px;
		padding: 22px 26px;
		box-shadow: var(--shadow-sm);
	}

	time {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--on-surface-subtle);
	}

	h2 {
		font-size: 1.45rem;
		margin: 6px 0 10px;
	}

	h2 a {
		color: var(--on-surface);
		text-decoration: none;
	}

	h2 a:hover {
		color: var(--accent-text);
	}

	.post p {
		margin: 0 0 14px;
		color: var(--on-surface-muted);
	}

	.more {
		color: var(--accent-text);
		font-weight: 700;
		text-decoration: none;
	}

	.more:hover {
		text-decoration: underline;
	}
</style>
