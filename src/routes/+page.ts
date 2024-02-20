import page from '$content/pages/home-page.json';

export async function load() {
  return { page, title: 'Accueil' };
}
