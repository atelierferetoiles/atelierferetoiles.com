<script>
  import Caesar from '$components/Caesar.svelte';
  import { tel, email } from '$lib/constants';
</script>

<svelte:head>
  <title>Mentions légales | Atelier Fer e'Toiles</title>
</svelte:head>
<div class="flex flex-col justify-center">
  <article class="container mx-auto max-w-[700px] space-y-4 px-4 py-16">
    <h1 class="text-xl font-semibold">Mentions légales</h1>
    <p>
      <bold>Editeur / Directeur de publication :</bold> M Jean-Michel DEFRAITEUR, et l'entreprise
      Atelier Fer e 'Toiles, immatriculée au répertoire des métiers : 487 972 515, domicilié au 226
      rue du Haut Prieur, 62400 Locon. <Caesar content={tel} />, <Caesar content={email} />
    </p>
    <p>
      <bold>Hébergement :</bold> Netlify - 610 22nd Street, Suite 315 CA 94107 San Francisco +1 (844)
      899-7312, USA
    </p>
    <p>
      Informatique et libertés : Les informations recueillies font l'objet d'un traitement
      informatique destiné à répondre aux demandes des internautes et, plus généralement à des fins
      de gestion administrative et commerciale. Par respect du secret professionnel, toute
      information est à destination unique de l'avocat et de son personnel habilité.
    </p>
    <p>
      Le responsable de traitement de données à caractère personnel est M Jean-Michel DEFRAITEUR,
      domicilié à l'adresse susmentionnée. Le présent site internet avec son formulaire de contact
      en interface avec la messagerie du magasin. Pour des motifs légitimes, l'internaute peut
      s'opposer au traitement des données le concernant.
    </p>
    <p>
      Conformément à la loi informatique et libertés du 6 janvier 1978 modifiée en 2004,
      l'internaute dispose d'un droit d'accès, de rectification et de suppression sur les données à
      caractère personnel le concernant. Pour ce faire, il droit écrire un courrier électronique au
      responsable de traitement à l'adresse mèl suivante : <Caesar content={email} />, en joignant
      la copie d'un titre d'identité en cours.
    </p>
    <p>
      Pour toutes réclamations, il est invité d'écrire un courriel à l'adresse suivante :
      <Caesar content={email} />.
    </p>
  </article>
</div>

<style>
  bold {
    font-weight: 700;
  }
</style>
