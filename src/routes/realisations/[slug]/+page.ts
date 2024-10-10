import cdnImageSrc from '$lib/cdnImageSrc.js';
import { fetchSinglePost } from '$lib/posts';

export async function load({ params: { slug } }) {
  const post = await fetchSinglePost(slug);
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
