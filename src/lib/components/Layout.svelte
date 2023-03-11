<script>
  export let title = "Nwp-Docs";
</script>
<div class="container-fluid py-2">
  <div class="card">
    {#if title}
    <div class="card-header">{title}</div>
    {/if}
    <div class="card-body" id="nwp-docs">
      <slot>
        <!-- the mdsvex content will be slotted in here -->
      </slot>
    </div>
  </div>  
</div>

<style>
  :global(#nwp-docs pre) {
    background-color: var(--bs-light);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
  }
</style>