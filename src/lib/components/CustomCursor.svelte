<script lang="ts">
  import { lerp } from '$lib/utils/lerp';
  import { onMount } from 'svelte';

  let cursorX = $state(0);
  let cursorY = $state(0);
  let targetX = $state(0);
  let targetY = $state(0);
  let isHovering = $state(false);
  let isVisible = $state(false);
  let isFine = $state(false);

  onMount(() => {
    isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) isVisible = true;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label[for]')) {
        isHovering = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label[for]')) {
        isHovering = false;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    let animId: number;
    function animate() {
      cursorX = lerp(cursorX, targetX, 0.12);
      cursorY = lerp(cursorY, targetY, 0.12);
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  });
</script>

{#if isFine}
  <div
    class="custom-cursor"
    class:hovering={isHovering}
    class:visible={isVisible}
    style="transform: translate({cursorX - 4}px, {cursorY - 4}px)"
    aria-hidden="true"
  >
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z"
        fill="var(--accent-primary)"
      />
    </svg>
  </div>
{/if}

<style>
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
    mix-blend-mode: screen;
  }

  .custom-cursor.visible {
    opacity: 1;
  }

  .custom-cursor.hovering svg {
    transform: scale(1.4);
    filter: drop-shadow(0 0 6px var(--accent-glow));
  }

  .custom-cursor svg {
    transition: transform 0.2s ease, filter 0.2s ease;
  }
</style>
