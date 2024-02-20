<script>
  import { hours, hoursTitle } from '$content/pages/footer.json';
</script>

<h4 class="text-center font-semibold text-xl mb-2">{hoursTitle}</h4>
<div class="grid gap-2 horaires">
  {#each hours as { day, hours: opening }}
    <div class="text-right">{day}</div>
    <div>-</div>
    <div>{opening}</div>
  {/each}
</div>

<style>
  .horaires {
    grid-template-columns: 1fr 8px 1fr;
  }
</style>
