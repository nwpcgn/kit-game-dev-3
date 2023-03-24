<nav {...$$restProps}>
  <span>
    <slot></slot>
  </span>
  <span>
    <slot name="end"></slot>
  </span>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    display: flex;
    align-items: center;
  }
</style>

