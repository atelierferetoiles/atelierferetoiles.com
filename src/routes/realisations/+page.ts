import { fetchMarkdownPosts } from '$lib/fetchPosts';

export async function load() {
  const posts = await fetchMarkdownPosts();
  return {
    posts,
    title: 'Nos réalisations',
    description: "Réalisations de l'atelier Fer e'Toiles",
  };
}
