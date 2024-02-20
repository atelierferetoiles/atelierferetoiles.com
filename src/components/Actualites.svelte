<script lang="ts">
  import type { PostData } from '$lib/fetchPosts';
  import formatDate from '$lib/formatDate';

  export let posts: Array<PostData>;
</script>

{#if posts.length > 0}
  <section class="bg-slate-300">
    <div class="max-w-2xl mx-auto px-2 sm:px-4 py-8">
      <a href="/blog" class="block text-4xl mb-8 font-medium">Blog</a>
      <div class="space-y-8">
        {#each posts as { path, metadata: { date, title, chapo, smallImgSrc, smallImgAlt } }}
          <a href={`/blog/${path}`} class="group -mx-2 sm:m-0 bg-slate-200 block text-xl">
            <div class="flex flex-col sm:flex-row">
              <div class="w-full sm:h-40 sm:w-40 shrink-0">
                <img
                  loading="lazy"
                  class="transition-transform w-full sm:h-40 sm:w-40 sm:group-hover:scale-[1.2]"
                  src={smallImgSrc}
                  alt={smallImgAlt}
                />
              </div>
              <div class="flex flex-col px-2 py-2 sm:px-4">
                <div>
                  {title}
                </div>
                <p class="grow text-gray-600 text-base">
                  {chapo}
                </p>
                <div class="flex justify-between text-gray-600 text-sm items-end">
                  <div>
                    {formatDate(date)}
                  </div>
                  <div class="mt-1 bg-slate-950 py-1 px-4 text-slate-100">Lire la suite</div>
                </div>
              </div>
            </div>
          </a>
        {/each}
        <slot />
      </div>
    </div>
  </section>
{/if}
