<script>
  import {slide} from "svelte/transition";
  export let open = false;

  const toggle = () => (open = !open);
</script>

<slot name="trigger" {open} {toggle} />

{#if open}
  <div transition:slide>
    <slot />
  </div>
{/if}

<style>
  div {
    padding: var(--p, 0);
    margin: var(--m, 0);
  }
</style>
