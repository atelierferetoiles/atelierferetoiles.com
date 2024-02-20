export async function load() {
  const bmx = await import('../../content/pages/bmx.md');
  const { title, images, textareaDefault } = bmx.metadata;

  return {
    content: bmx.default,
    title,
    imagePath: images?.[0]?.src,
    description:
      'Ibex Bike Shop crée des BMX de haute qualité sur mesure, où tous les paramètres peuvent être choisis.',
    images,
    textareaDefault,
  };
}
