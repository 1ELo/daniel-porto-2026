<script lang="ts">
  import { publications } from '$lib/data/publications';
  import { intersect } from '$lib/utils/intersect';
  import { ExternalLink } from 'lucide-svelte';
</script>

<section id="research" class="publications">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// research</span>
      <h2 class="section-title">Seeds of Knowledge</h2>
      <p class="section-subtitle">Peer-reviewed research at the intersection of AI, UX, and emerging technology.</p>
    </div>

    <div class="papers">
      {#each publications as pub, i}
        <div
          class="paper-card reveal"
          use:intersect
          style="transition-delay: {i * 100}ms"
        >
          <div class="paper-content">
            <h3 class="paper-title">{pub.title}</h3>
            <p class="paper-venue">{pub.venue}</p>
            <p class="paper-summary">{pub.summary}</p>
            {#if pub.url !== '#'}
              <a href={pub.url} target="_blank" rel="noopener noreferrer" class="paper-link">
                <ExternalLink size={14} /> Read Paper ↗
              </a>
            {/if}
          </div>
          <span class="year-badge">{pub.year}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .publications {
    padding: 6rem 1.5rem;
    background: var(--bg-surface);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-label {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 0.5rem;
  }

  .section-title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--text-2xl);
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: var(--text-base);
  }

  .papers {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .paper-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent-amber);
    border-radius: var(--radius-card);
    padding: 2rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    transition: box-shadow 0.2s ease;
  }

  .paper-card:hover {
    box-shadow: var(--glow-sm);
  }

  .paper-content {
    flex: 1;
  }

  .paper-title {
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: var(--text-lg);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .paper-venue {
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: 0.75rem;
    font-family: var(--font-mono);
  }

  .paper-summary {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .paper-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: var(--text-xs);
    color: var(--accent-amber);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
  }
  .paper-link:hover {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .year-badge {
    flex-shrink: 0;
    height: fit-content;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--accent-amber);
    background: rgba(217, 119, 6, 0.1);
    border: 1px solid rgba(217, 119, 6, 0.2);
  }
</style>
