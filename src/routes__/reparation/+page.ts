import { linksCards } from '../../content/pages/home-page.json';

const imagePath = linksCards.find(({ link }) => link === '/reparation')?.image;

export async function load() {
  const data = await import('../../content/pages/reparation.md');

  const { title } = data.metadata;
  return {
    content: data.default,
    title,
    description:
      'Ibex Bike Shop répare tout type de vélo, électrique ou musculaire, de toutes marques.',
    imagePath,
  };
}
