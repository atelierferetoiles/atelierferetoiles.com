import type { MetaTagsProps } from 'svelte-meta-tags';
import { urlRoot } from './constants';

interface MetaTagsArguments {
  pathName: string;
  title?: string;
  description?: string;
  imagePath?: string;
  additionalProps?: MetaTagsProps;
}

const defaultTitle = "Atelier Fer e'Toiles";
const defaultDescription = "Atelier Fer e'Toiles";
const defaultImagePath = '/static/asset/267327189_105633231974178_2711986790843941340_n.jpg';

const getMetaTags = ({
  pathName,
  title = defaultTitle,
  description = defaultDescription,
  imagePath = defaultImagePath,
  additionalProps = {},
}: MetaTagsArguments): MetaTagsProps => {
  return {
    title,
    titleTemplate: "%s | Atelier Fer e'Toiles",
    description,
    openGraph: {
      type: 'website',
      locale: 'fr-fr',
      siteName: "Atelier Fer e'Toiles",
      title,
      description,
      url: new URL(pathName, urlRoot).href,
      images: [{ url: new URL(imagePath, urlRoot).href }],
    },
    ...additionalProps,
  };
};

export default getMetaTags;
