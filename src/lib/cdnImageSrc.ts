import { base } from '$app/paths';

interface Options {
  url: string;
  w?: number;
  h?: number;
  fit?: 'contain' | 'cover' | 'fill';
}

const rootUrl = base;

const cdnImageSrc = (options: Options): string => {
  if (!rootUrl) {
    return options.url;
  }
  const optionsStr = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${rootUrl}/.netlify/images?${optionsStr}`;
};

export default cdnImageSrc;
