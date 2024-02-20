import type { MetaTagsProps } from 'svelte-meta-tags';
import { photoHome } from '../content/pages/home-page.json';
import { urlRoot } from './constants';

interface MetaTagsArguments {
  pathName: string;
  title?: string;
  description?: string;
  imagePath?: string;
  additionalProps?: MetaTagsProps;
}

const defaultTitle = 'Atelier Fer e\'Toiles';
const defaultDescription =
  'Atelier Fer e\'Toiles';
const defaultImagePath = photoHome;

const getMetaTags = ({
  pathName,
  title = defaultTitle,
  description = defaultDescription,
  imagePath = defaultImagePath,
  additionalProps = {},
}: MetaTagsArguments): MetaTagsProps => {
  return {
    title,
    titleTemplate: '%s | Atelier Fer e\'Toiles',
    description,
    openGraph: {
      type: 'website',
      locale: 'fr-fr',
      siteName: 'Atelier Fer e\'Toiles',
      title,
      description,
      url: new URL(pathName, urlRoot).href,
      images: [{ url: new URL(imagePath, urlRoot).href }],
    },
    ...additionalProps,
  };
};

export default getMetaTags;
