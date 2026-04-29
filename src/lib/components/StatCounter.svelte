<script lang="ts">
  import { onMount } from 'svelte';

  let { value, suffix = '', label }: { value: number; suffix?: string; label: string } = $props();

  let displayValue = $state(0);
  let hasAnimated = $state(false);
  let el: HTMLElement;

  function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function startCounting() {
    if (hasAnimated) return;
    hasAnimated = true;

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      displayValue = Math.round(eased * value);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  });
</script>

<div class="stat-counter" bind:this={el}>
  <span class="stat-value">{displayValue}{suffix}</span>
  <span class="stat-label">{label}</span>
</div>

<style>
  .stat-counter {
    text-align: center;
    padding: 1.5rem 1rem;
  }

  .stat-value {
    display: block;
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: 800;
    color: var(--accent-primary);
    line-height: 1;
  }

  .stat-label {
    display: block;
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    margin-top: 0.5rem;
  }
</style>
