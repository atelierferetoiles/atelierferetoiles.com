import { fetchMarkdownPosts } from '$lib/fetchPosts';

export async function load({ params: { slug } }) {
  const posts = await fetchMarkdownPosts();
  const post = posts.find(({ path }) => path === slug);
  if (!post) {
    throw new Error('no post');
  }

  return {
    post,
    slug,
    title: post?.metadata.title,
    description: '',
  };
}
