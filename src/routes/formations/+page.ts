export async function load() {
  const content = import.meta.glob<{ metadata: any; default: any }>(
    '../../content/pages/formations.md'
  );
  const { metadata, default: body } = await content['../../content/pages/formations.md']();

  return { metadata, body, title: 'Formations' };
}
