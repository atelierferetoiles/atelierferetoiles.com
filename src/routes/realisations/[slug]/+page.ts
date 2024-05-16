import cdnImageSrc from '$lib/cdnImageSrc.js';
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
    imagePath: cdnImageSrc({ url: post.metadata.imgSrcList[0]?.src, w: 1200, h: 627 }),
  };
}
