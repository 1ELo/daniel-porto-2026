<script lang="ts">
  const leaves = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 10,
    size: 8 + Math.random() * 6,
    opacity: 0.03 + Math.random() * 0.05,
    drift: -50 + Math.random() * 100,
    rotation: Math.random() * 360
  }));
</script>

<div class="leaf-particles" aria-hidden="true">
  {#each leaves as leaf (leaf.id)}
    <svg
      class="leaf"
      style="
        left: {leaf.left}%;
        animation-delay: {leaf.delay}s;
        animation-duration: {leaf.duration}s;
        width: {leaf.size}px;
        height: {leaf.size}px;
        opacity: {leaf.opacity};
        --drift: {leaf.drift}px;
        --rotation: {leaf.rotation}deg;
      "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z"
        fill="var(--accent-primary)"
      />
    </svg>
  {/each}
</div>

<style>
  .leaf-particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .leaf {
    position: absolute;
    top: -20px;
    animation: leafDrift linear infinite;
  }

  @keyframes leafDrift {
    0% {
      transform: translateY(0) translateX(0) rotate(var(--rotation));
      opacity: var(--leaf-opacity, 0.05);
    }
    100% {
      transform: translateY(calc(100svh + 40px)) translateX(var(--drift)) rotate(calc(var(--rotation) + 180deg));
      opacity: 0;
    }
  }
</style>
