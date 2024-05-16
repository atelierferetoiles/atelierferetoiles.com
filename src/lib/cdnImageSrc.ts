import { dev } from '$app/environment';

interface Options {
  url: string;
  w?: number;
  h?: number;
  fit?: 'contain' | 'cover' | 'fill';
}

const cdnImageSrc = (options: Options): string => {
  const { url } = options;
  if (dev) {
    return url;
  }
  const optionsStr = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `?${optionsStr}`;
};

export default cdnImageSrc;
