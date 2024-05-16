interface Options {
  url: string;
  w?: number;
  h?: number;
  fit?: 'contain' | 'cover' | 'fill';
}

const cdnImageSrc = (options: Options): string => {
  if (!process.env.URL) {
    return options.url;
  }
  const optionsStr = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${process.env.URL}/.netlify/images?${optionsStr}`;
};

export default cdnImageSrc;
