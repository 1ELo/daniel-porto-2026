<script lang="ts">
  import { professionalProjects, additionalContributions } from '$lib/data/projects';
  import { intersect } from '$lib/utils/intersect';
  import { ExternalLink } from 'lucide-svelte';

  const botanicals = [
    'M8 3C5 5 3 8 3 11c0 4 3 6 5 6s4-1 5-4',
    'M10 3v14M5 8l5-3 5 3',
    'M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8'
  ];
</script>

<section id="projects" class="projects">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// projects</span>
      <h2 class="section-title">Things I've Cultivated</h2>
      <p class="section-subtitle">Production systems built at PT Kalbe Farma Tbk.</p>
    </div>

    <div class="projects-grid">
      {#each professionalProjects as project, i}
        <div
          class="project-card reveal"
          use:intersect
          style="transition-delay: {i * 80}ms"
        >
          <svg class="botanical" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={botanicals[i]} stroke="var(--accent-primary)" stroke-width="1.5" opacity="0.2" />
          </svg>

          <span class="type-tag">{project.type}</span>
          <h3 class="project-title">{project.title}</h3>
          <p class="project-desc">{project.description}</p>

          <div class="project-stack">
            {#each project.stack as tech}
              <span class="stack-pill">{tech}</span>
            {/each}
          </div>

          <div class="project-links">
            {#each project.links as link}
              {#if link.url !== '#'}
                <a href={link.url} target="_blank" rel="noopener noreferrer" class="project-link">
                  <ExternalLink size={14} /> {link.label}
                </a>
              {:else}
                <span class="project-link muted">{link.label}</span>
              {/if}
            {/each}
          </div>
        </div>
      {/each}

      <!-- Additional Engineering Contributions -->
      <div class="additional-card reveal" use:intersect>
        <h4 class="additional-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z" fill="var(--accent-primary)" />
          </svg>
          Additional Engineering Contributions (Production Systems)
        </h4>
        <ul class="contrib-list">
          {#each additionalContributions as contrib}
            <li class="contrib-item">
              <svg class="leaf-bullet" width="6" height="6" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z" fill="var(--accent-primary)" />
              </svg>
              <span>{contrib.description}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 4rem 1.25rem;
  }

  @media (min-width: 768px) {
    .projects {
      padding: 6rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .projects {
      padding: 8rem 2rem;
    }
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header { margin-bottom: 3rem; }

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

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-top: 2px solid transparent;
    border-radius: var(--radius-card);
    padding: 2rem;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-top-color 0.2s ease;
  }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--glow-sm);
    border-top-color: var(--accent-primary);
  }

  .botanical {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .type-tag {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: 0.75rem;
    margin-left: 2rem;
  }

  .project-title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--text-lg);
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  .project-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .project-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .stack-pill {
    padding: 0.25rem 0.6rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent-soft);
    background: rgba(74, 222, 128, 0.06);
    border: 1px solid var(--border);
  }

  .project-links { display: flex; gap: 1rem; }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: var(--text-xs);
    color: var(--accent-primary);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .project-link:hover { text-decoration: underline; }
  .project-link.muted { color: var(--text-muted); }

  .additional-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent-amber);
    border-radius: var(--radius-card);
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .additional-title {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--accent-amber);
    margin-bottom: 1.5rem;
  }

  .contrib-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contrib-item {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .leaf-bullet {
    flex-shrink: 0;
    margin-top: 0.35rem;
  }

  @media (min-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
