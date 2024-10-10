import { type PostData } from './posts';

export interface GroupCategory {
  name: string;
  order: number;
}

export interface Category {
  name: string;
  group_category: string;
  order: number;
}

export const fetchCategories = async () => {
  const allCategoriesFiles = import.meta.glob<Category>('../content/categories/*.json');
  const iterableCategoriesFiles = Object.entries(allCategoriesFiles);

  const allCategories = await Promise.all(
    iterableCategoriesFiles.map(async ([path, resolver]) => {
      const file = await resolver();
      return { ...file, path };
    })
  );
  return allCategories;
};

export const fetchSingleCategory = async (slug: string) => {
  const { name } = await import(`../content/categories/${slug}.json`);
  return { name, slug };
}

export const fetchGroupCategories = async () => {
  const allGroupsFiles = import.meta.glob<GroupCategory>('../content/group_categories/*.json');

  const iterableGroupsFiles = Object.entries(allGroupsFiles);

  const allGroups = await Promise.all(
    iterableGroupsFiles.map(async ([path, resolver]) => {
      const file = await resolver();
      return { ...file, path };
    })
  );
  return allGroups;
};

export const getFileName = (path: string) => {
  const split = path.split('/');
  return split[split.length - 1];
};

export const getPostsForCategory = (
  categoryFileName: string,
  posts: PostData[],
  limit?: number
): PostData[] => {
  const result: PostData[] = [];

  let count = 0;

  for (const post of posts) {
    if (getFileName(post.metadata.category) === categoryFileName) {
      result.push(post);
      count++;
    }
    if (limit && count >= limit) {
      break;
    }
  }

  return result;
};
