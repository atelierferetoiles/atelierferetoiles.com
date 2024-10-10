<div
  class="bandeau absolute font-bold left-0 right-0 top-0 py-4 px-2 sm:px-8 bg-princeton_orange text-black text-xl whitespace-nowrap overflow-hidden"
>
  <span class="pl-[100%] inline-block">
    <slot />
  </span>
</div>

<style>
  span {
    animation: bandeau 20s linear infinite;
  }
  div:hover span {
    animation-play-state: paused;
  }

  @keyframes bandeau {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
</style>
