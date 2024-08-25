<script lang="ts">
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';

  export let textareaDefault = '';
  export let productId: string;
</script>

<form name="commande" data-netlify="true" method="POST" class="max-w-md space-y-6">
  <div>
    <Input
      value={productId}
      name="produit"
      id="produit"
      type="text"
      label="Produit"
      disabled
      hidden
    />
  </div>
  <div class="grid sm:grid-cols-2 gap-x-4 gap-y-6">
    <Input
      name="prenom"
      id="prenom"
      autocomplete="given-name"
      type="text"
      label="Prénom"
      placeholder="Jean"
      required
    />
    <Input
      name="nom"
      id="nom"
      autocomplete="family-name"
      type="text"
      label="Nom"
      placeholder="Bombeur"
      required
    />
    <Input
      name="telephone"
      id="tel"
      autocomplete="tel"
      type="telephone"
      label="Téléphone"
      placeholder="0612345678"
      required
    />
    <Input
      name="email"
      id="email"
      autocomplete="email"
      type="text"
      label="Email"
      placeholder="jeanbombeur@gmail.com"
      required
    />
  </div>
  <Textarea
    defaultValue={textareaDefault}
    name="message"
    id="message"
    label="Votre message"
    placeholder=""
  />
  <div class=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    <button
      type="submit"
      class="w-full inline-flex justify-center border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm rounded-sm bg-blush px-4 py-2 text-sm font-black uppercase text-black transition-colors hover:bg-vistablue"
      >Envoyer</button
    >
  </div>
</form>
