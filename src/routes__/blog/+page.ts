import { fetchMarkdownPosts } from '$lib/fetchPosts';

export async function load() {
  const posts = await fetchMarkdownPosts();
  return { posts, title: 'Blog', description: "Articles du blog d'Ibex Bike Shop" };
}
