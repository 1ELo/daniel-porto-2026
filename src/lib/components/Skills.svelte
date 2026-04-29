<script lang="ts">
  import { skillGroups } from '$lib/data/skills';
  import { intersect } from '$lib/utils/intersect';

  // Botanical SVG paths for each card
  const botanicalIcons = [
    'M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z',
    'M7 20l5-16 5 16M8 14h8',
    'M12 22V8M5 12l7-4 7 4M5 16l7-4 7 4',
    'M12 3v18M3 12h18',
    'M2 12c3-6 7-9 10-9s7 3 10 9c-3 6-7 9-10 9s-7-3-10-9z'
  ];
</script>

<section id="skills" class="skills">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// skills</span>
      <h2 class="section-title">The Tools of the Canopy</h2>
      <p class="section-subtitle">Technologies I've used in production environments.</p>
    </div>

    <div class="skills-grid">
      {#each skillGroups as group, i}
        <div
          class="skill-card reveal-sprout"
          use:intersect
          style="transition-delay: {i * 60}ms"
        >
          <div class="card-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={botanicalIcons[i]} stroke="var(--accent-primary)" stroke-width="1.5" fill="none" opacity="0.4" />
            </svg>
          </div>
          <h3 class="group-title">{group.icon} {group.title}</h3>
          <div class="pills">
            {#each group.skills as skill}
              <span class="pill">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills {
    padding: 4rem 1.25rem;
  }

  @media (min-width: 768px) {
    .skills {
      padding: 6rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .skills {
      padding: 8rem 2rem;
    }
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

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 1.5rem;
    position: relative;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .skill-card:hover {
    border-color: var(--border-hover);
  }

  .card-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .group-title {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .pill {
    display: inline-block;
    padding: 0.35rem 0.85rem;
    background: rgba(74, 222, 128, 0.06);
    border: 1px solid var(--border);
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-secondary);
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.3s ease;
    cursor: default;
  }

  .pill:hover {
    border-color: var(--border-hover);
    background: rgba(74, 222, 128, 0.12);
    animation: rustle 0.3s ease;
  }

  @media (min-width: 640px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
