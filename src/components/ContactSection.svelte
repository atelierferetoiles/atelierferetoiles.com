<script lang="ts">
  import caesar from '$lib/caesar';
  import { navLinks, caesarKey, email, tel } from '$lib/constants';
  import Copy from '../icons/Copy.svelte';
  import { onMount } from 'svelte';
  import OffsetAnchor from './OffsetAnchor.svelte';

  import { address, addressLink, facebook } from '$content/pages/footer.json';

  const getContactItems = (emailVal: string, bureauVal: string, hidden: boolean) => [
    {
      href: `tel:${bureauVal.replace(/ /g, '')}`,
      value: bureauVal,
      label: 'Téléphone',
      hidden: hidden,
    },
    {
      href: `mailto:${emailVal}`,
      value: emailVal,
      label: 'Email',
      hidden: hidden,
    },
    {
      href: addressLink,
      value: address,
      label: 'Adresse',
      hidden: false,
    },
    {
      href: facebook,
      label: 'Facebook',
      value: "Atelier Fer e'Toiles",
    },
  ];

  let hidden = true;
  let _tel = tel;
  let _email = email;

  let contactItems = getContactItems(_email, _tel, hidden);

  onMount(() => {
    _email = caesar(email, caesarKey);
    _tel = caesar(tel, caesarKey);
    hidden = false;
  });

  $: {
    contactItems = getContactItems(_email, _tel, hidden);
  }
</script>

<OffsetAnchor id={navLinks[1].id} />
<section class="min-h-[60vh] pt-16 text-black">
  <div class="container m-auto max-w-7xl px-4 py-8 sm:py-12 md:px-8">
    <div class="relative -top-16 right-3 h-0 w-0 opacity-0 sm:-top-[70px]" id="contact"></div>
    <h2 class="mb-16 text-2xl antialiased">Contact</h2>
    <div class="flex flex-col gap-8 lg:flex-row lg:justify-between">
      {#each contactItems as item}
        <div class="itemWrapper">
          <h5 class="mb-1">
            {item.label}
            <span class="copyButton transition-opacity">
              <Copy className="inline" value={item.value} />
            </span>
          </h5>
          <div class="font-semibold sm:whitespace-nowrap" class:hidden={item.hidden}>
            {#if !item.hidden}
              <a
                href={item.href}
                class="underline decoration-transparent transition-colors hover:decoration-current"
              >
                {item.value}
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @media (hover: hover) {
    .copyButton {
      opacity: 0;
    }
  }
  .itemWrapper:hover .copyButton {
    opacity: 1;
  }
</style>
