<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { cn } from '$lib/cn';
  import collapse from '$lib/collapse';
  import { navLinks } from '$lib/constants';
  import { onMount } from 'svelte';

  // mobile nav open
  let open = false;
  const closeMenu = () => {
    if (open) {
      open = false;
    }
  };
  const toggleMenu = () => {
    open = !open;
  };

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  // close the menu on navigation
  afterNavigate(closeMenu);
  // close the menu on click outside of the menu

  const linkClass =
    'flex p-2 sm:justify-center items-center uppercase text-neutral-200 whitespace-nowrap hover:text-blue-200 transition-colors hover:text-shadow hover:shadow-blue-700';
</script>

<div class="flex justify-center bg-[#333399]">
  <nav
    class="container flex flex-col justify-between bg-[#333399] px-6 py-4 sm:flex-row sm:px-4 md:px-6"
  >
    <div class="flex items-center justify-between pb-4 sm:pb-0">
      <div class="h-10 shrink-0">
        <a
          class=" -mt-4 block shrink-0 rounded-b-full bg-neutral-200"
          href="/#top"
          on:click={closeMenu}
        >
          <img src="/asset/logo.png" alt="Atelier Fer e'Toiles logo" class="h-24 w-24" />
        </a>
      </div>
      <div class="block sm:hidden">
        <button
          class="flex items-center rounded-full bg-stone-200 px-3 py-3 shadow-sm shadow-stone-200 transition-colors hover:text-blue-700"
          on:click={toggleMenu}
        >
          <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="hidden sm:flex">
      {#each navLinks as link}
        <a class={linkClass} href={link.href} on:click={closeMenu}>{link.label}</a>
      {/each}
    </div>

    <div
      class={cn('-mx-6 -mb-4 flex flex-col items-end pr-4 sm:hidden', { hidden: !mounted })}
      use:collapse={{ open, duration: 0.2, easing: 'ease' }}
    >
      {#each navLinks as link}
        <a class={linkClass} href={link.href} on:click={closeMenu}>{link.label}</a>
      {/each}
    </div>
  </nav>
</div>
