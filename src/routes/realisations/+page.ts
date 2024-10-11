import {
  fetchCategories,
  fetchGroupCategories,
  getFileName,
  getPostsForCategory,
} from '$lib/categories';
import { fetchMarkdownPosts } from '$lib/posts';
import uFuzzy from '@leeoniya/ufuzzy';

export async function load() {
  const posts = await fetchMarkdownPosts();
  const searchable = uFuzzy.latinize(
    posts.map(({ metadata: { title, body } }) => title + ' ' + (body || ''))
  );

  const groups = await fetchGroupCategories();
  const categories = await fetchCategories();

  const fullGroups = groups
    .map((group) => {
      return {
        ...group,
        categories: categories
          .filter((cate) => cate && getFileName(cate.group_category) === getFileName(group.path))
          .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
          .map((cate) => ({
            ...cate,
            posts: getPostsForCategory(getFileName(cate.path), posts, 5),
          })),
      };
    })
    .sort(({ order: orderA }, { order: orderB }) => orderA - orderB);

  return {
    posts,
    fullGroups,
    searchable,
    title: 'Mes réalisations',
    description: "Réalisations de l'atelier Fer e'Toiles",
  };
}
