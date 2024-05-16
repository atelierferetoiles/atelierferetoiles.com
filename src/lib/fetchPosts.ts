export interface Metadata {
  date: string;
  title: string;
  draft: boolean;
  imgSrcList: Array<{ src: string; alt?: string }>;
  price: number;
  body: string; // rich text
}

export interface PostData {
  metadata: Metadata;
  path: string;
  previous?: { metadata: Metadata; path: string };
  next?: { metadata: Metadata; path: string };
}

export const fetchMarkdownPosts = async (): Promise<PostData[]> => {
  const allPostFiles = import.meta.glob<{ metadata: Metadata; default: any }>(
    '../content/posts/*.md'
  );
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata, default: body } = await resolver();
      const postPath = path.slice(17, -3);

      return {
        metadata,
        body,
        path: postPath,
      };
    })
  );

  const publicPosts = allPosts.filter(({ metadata: { draft } }) => !draft);

  publicPosts.sort(
    ({ metadata: { date: dateA } }, { metadata: { date: dateB } }) =>
      new Date(dateB).getTime() - new Date(dateA).getTime()
  );

  return publicPosts.map((post, i, posts) => ({
    ...post,
    previous: posts[i - 1],
    next: posts[i + 1],
  }));
};
