<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<div class="wave-divider {className}" aria-hidden="true">
  <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0,20 C360,40 1080,0 1440,20"
      stroke="var(--border)"
      stroke-width="1"
      fill="none"
    />
  </svg>
</div>

<style>
  .wave-divider {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    padding: 1rem 0;
  }

  .wave-divider svg {
    width: 100%;
    height: 40px;
  }
</style>
