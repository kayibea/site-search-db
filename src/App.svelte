<script lang="ts">
  import { engines, type Engine } from "./data/engines";
  import { searchs } from "./data/searchs";

  let uri = $state(engines[0].uri as Engine["uri"]);
  let filter = $state("");
  let category = $state("");

  const categories = new Set(searchs.map((search) => search.category).flat(1));
</script>

<div class="container">
  <header>
    <h1>Site Search DB</h1>
    <div class="controls">
      <input
        bind:value={filter}
        type="text"
        placeholder="Filter..."
        aria-label="Filter"
      />
      <select bind:value={category} aria-label="Select by category">
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
      <select bind:value={uri} aria-label="Select Engine">
        {#each engines as engine}
          <option selected={engine.name === engines[0].name} value={engine.uri}>
            {engine.name}
          </option>
        {/each}
      </select>
      <button id="export">Export</button>
    </div>
  </header>

  <main id="entry-list">
    {#each searchs as search}
      <article class="entry">
        <input type="checkbox" aria-label={search.name} />
        <div class="info">
          <h2 class="name">{search.name}</h2>
          <div class="shortcut">
            <span>shortcut</span>
            <code>{search.shortcut}</code>
          </div>
          <div class="url">{uri}%s+site:{search.site}</div>
        </div>
      </article>
    {/each}
  </main>
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
