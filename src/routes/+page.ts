export async function load() {
  const content = import.meta.glob<{ metadata: any; default: any }>(
    '../content/pages/home-page.md'
  );
  const { metadata, default: body } = await content['../content/pages/home-page.md']();
  return { metadata, body, title: 'Accueil' };
}
