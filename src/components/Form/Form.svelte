<script lang="ts">
  import Input from './Input.svelte';
  import Radio from './Radio.svelte';
  import Textarea from './Textarea.svelte';

  export let textareaDefault = '';

  const options = [
    {
      value: '20"',
      label: '20"',
    },
    {
      value: '24"',
      label: '24"',
    },
  ];
</script>

<form action="https://fabform.io/f/u1e3VNa" method="post" class="max-w-md space-y-6">
  <div class="grid grid-cols-2 gap-x-4 gap-y-6">
    <Input
      name="prenom"
      id="prenom"
      autocomplete="given-name"
      type="text"
      label="Prénom"
      placeholder="Tony"
      required
    />
    <Input
      name="nom"
      id="nom"
      autocomplete="family-name"
      type="text"
      label="Nom"
      placeholder="Hawk"
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
      placeholder="tonyhawk@gmail.com"
      required
    />
  </div>
  <Textarea
    defaultValue={textareaDefault}
    name="description"
    id="description"
    label="Vos exigences"
    placeholder=""
  />
  <div class="relative w-[140px]">
    <Input
      className="text-right pr-5"
      type="number"
      name="budget"
      label="Budget"
      required
      id="budget"
      placeholder=""
    />
    <span class="absolute bottom-2 right-2">€</span>
  </div>
  <div>
    <Radio {options} label="Taille des roues" name="taille" defaultValue={options[0].value} />
  </div>

  <button
    type="submit"
    class="mr-4 inline-block rounded-sm bg-blush px-4 py-2 text-sm font-black uppercase text-black transition-colors hover:bg-vistablue"
    >Envoyer</button
  >
</form>
