export async function load({ params }: { params: { slug: string } }) {
  const allPosts = await fetchMarkdownPosts();

  const post = await import(`../../../content/posts/${params.slug}.md`);

  const postFromList = allPosts.find(({ path }) => path === params.slug);
  if (!postFromList) {
    throw new Error(
      `post "${params.slug}" not found in list: ${allPosts.map(({ path }) => path).join(', ')}`
    );
  }

  const { previous, next, metadata } = postFromList;

  const { title, date, chapo, smallImgSrc } = metadata;
  const content = post.default;

  return {
    content,
    title,
    description: chapo,
    imagePath: smallImgSrc,
    date,
    chapo,
    previous,
    next,
  };
}

import { fetchMarkdownPosts } from '$lib/fetchPosts';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
  const posts = await fetchMarkdownPosts();
  return posts.map(({ path }) => ({ slug: path }));
};

export const prerender = true;
