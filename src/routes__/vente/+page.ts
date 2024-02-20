import { linksCards } from '../../content/pages/home-page.json';

const imagePath = linksCards.find(({ link }) => link === '/vente')?.image;

export async function load() {
  const data = await import('../../content/pages/vente.md');

  const { title, brandTitle, brands } = data.metadata;
  return {
    content: data.default,
    title,
    brandTitle,
    brands,
    imagePath,
    description:
      "Acheter votre vélo chez Ibex Bike Shop, c'est la garantie d'un conseil et d'un suivi de qualité.",
  };
}
