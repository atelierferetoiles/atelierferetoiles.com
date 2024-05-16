export async function load() {
  const content = import.meta.glob<{ metadata: any; default: any }>(
    '../../content/pages/expo-vente.md'
  );
  const { metadata, default: body } = await content['../../content/pages/expo-vente.md']();

  return { metadata, body, title: 'Expo-vente' };
}
