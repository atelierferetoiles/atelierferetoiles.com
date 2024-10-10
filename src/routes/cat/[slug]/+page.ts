import { fetchSingleCategory, getPostsForCategory } from '$lib/categories.js';
import { fetchMarkdownPosts } from '$lib/posts.js';
import uFuzzy from '@leeoniya/ufuzzy';

export async function load({ params: { slug } }) {
  const { name } = await fetchSingleCategory(slug);
  const allPosts = await fetchMarkdownPosts();

  const posts = getPostsForCategory(`${slug}.json`, allPosts);
  const searchable = uFuzzy.latinize(
    posts.map(({ metadata: { title, body } }) => title + ' ' + (body || ''))
  );

  return { name, posts, slug, searchable };
}
