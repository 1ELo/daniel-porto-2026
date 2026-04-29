<script lang="ts">
  import { publications } from '$lib/data/publications';
  import { organizations } from '$lib/data/organizations';
  import { personalProjects } from '$lib/data/projects';
  import { intersect } from '$lib/utils/intersect';
  import { ExternalLink, ChevronDown, X } from 'lucide-svelte';

  // Sub-section tabs
  type AcademicTab = 'research' | 'organizations' | 'projects';
  let activeTab = $state<AcademicTab>('research');

  // Org modal
  let expandedOrg = $state<number | null>(null);
  function openOrgModal(index: number) { expandedOrg = index; }
  function closeOrgModal() { expandedOrg = null; }

  // Image lightbox
  let lightboxSrc = $state<string | null>(null);
  let lightboxCaption = $state('');
  function openLightbox(src: string, caption: string) {
    lightboxSrc = src;
    lightboxCaption = caption;
  }
  function closeLightbox() {
    lightboxSrc = null;
    lightboxCaption = '';
  }

  const tabs: { key: AcademicTab; label: string; icon: string }[] = [
    { key: 'research', label: 'Research', icon: '📄' },
    { key: 'organizations', label: 'Organizations', icon: '🤝' },
    { key: 'projects', label: 'Academic Projects', icon: '🎓' }
  ];

  // Botanical SVG paths
  const botanicals = [
    'M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8',
    'M6 18L12 4l6 14',
    'M3 12c2-3 5-5 9-5s7 2 9 5'
  ];
</script>

<section id="academic" class="academic">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// academic</span>
      <h2 class="section-title">Seeds of Knowledge</h2>
      <p class="section-subtitle">Research, community leadership, and academic exploration.</p>
    </div>

    <!-- Tab bar -->
    <div class="tab-bar reveal" use:intersect>
      {#each tabs as tab}
        <button
          class="tab-btn"
          class:active={activeTab === tab.key}
          onclick={() => activeTab = tab.key}
          type="button"
        >
          <span class="tab-icon">{tab.icon}</span>
          {tab.label}
        </button>
      {/each}
    </div>

    <!-- ═══ Research Tab ═══ -->
    {#if activeTab === 'research'}
      <div class="tab-content">
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
    {/if}

    <!-- ═══ Organizations Tab ═══ -->
    {#if activeTab === 'organizations'}
      <div class="tab-content">
        <div class="org-grid">
          {#each organizations as org, i}
            <button
              class="org-card reveal"
              use:intersect
              style="transition-delay: {i * 80}ms"
              onclick={() => openOrgModal(i)}
              type="button"
            >
              <!-- Icon -->
              <svg class="org-icon" width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="8" r="3" stroke="var(--accent-primary)" stroke-width="1" fill="none" opacity="0.3" />
                <circle cx="8" cy="24" r="3" stroke="var(--accent-primary)" stroke-width="1" fill="none" opacity="0.3" />
                <circle cx="24" cy="24" r="3" stroke="var(--accent-primary)" stroke-width="1" fill="none" opacity="0.3" />
                <line x1="16" y1="11" x2="8" y2="21" stroke="var(--accent-primary)" stroke-width="0.75" opacity="0.2" />
                <line x1="16" y1="11" x2="24" y2="21" stroke="var(--accent-primary)" stroke-width="0.75" opacity="0.2" />
              </svg>

              <h3 class="org-name">{org.name}</h3>
              <p class="org-role">{org.role}</p>
              <p class="org-period">{org.period}</p>
              <p class="org-desc">{org.description}</p>

              <div class="card-footer">
                <span class="org-badge">{org.badge}</span>
              </div>

              <div class="view-details-bar">
                <ChevronDown size={14} />
                <span>View Details</span>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/if}

    <!-- ═══ Academic Projects Tab ═══ -->
    {#if activeTab === 'projects'}
      <div class="tab-content">
        <div class="projects-grid">
          {#each personalProjects as project, i}
            <div
              class="project-card reveal"
              use:intersect
              style="transition-delay: {i * 80}ms"
            >
              <svg class="botanical" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d={botanicals[i]} stroke="var(--accent-primary)" stroke-width="1.5" opacity="0.2" />
              </svg>

              <span class="type-tag">{project.type}</span>
              <h4 class="project-title">{project.title}</h4>
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
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- ═══ Org Detail Modal ═══ -->
{#if expandedOrg !== null}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="org-modal-overlay" onclick={closeOrgModal} onkeydown={(e) => e.key === 'Escape' && closeOrgModal()}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="org-modal" onclick={(e) => e.stopPropagation()}>
      <button class="modal-close" onclick={closeOrgModal} aria-label="Close">
        <X size={22} />
      </button>

      <div class="modal-header">
        <h3 class="modal-title">{organizations[expandedOrg].name}</h3>
        <p class="modal-role">{organizations[expandedOrg].role}</p>
        <p class="modal-period">{organizations[expandedOrg].period}</p>
        <span class="modal-badge">{organizations[expandedOrg].badge}</span>
      </div>

      <p class="modal-details">{organizations[expandedOrg].details}</p>

      {#if organizations[expandedOrg].images.length > 0}
        <div class="modal-gallery">
          {#each organizations[expandedOrg].images as image}
            <figure class="gallery-item">
              <button class="gallery-btn" type="button" onclick={() => openLightbox(image.src, image.caption)}>
                <img src={image.src} alt={image.caption} loading="lazy" />
                <div class="img-zoom-hint" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
              </button>
              <figcaption>{image.caption}</figcaption>
            </figure>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<!-- ═══ Image Lightbox ═══ -->
{#if lightboxSrc}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="lightbox-overlay" onclick={closeLightbox} onkeydown={(e) => e.key === 'Escape' && closeLightbox()}>
    <button class="lightbox-close" onclick={closeLightbox} aria-label="Close lightbox">
      <X size={24} />
    </button>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
      <img src={lightboxSrc} alt={lightboxCaption} />
      {#if lightboxCaption}
        <p class="lightbox-caption">{lightboxCaption}</p>
      {/if}
    </div>
  </div>
{/if}

<style>
  .academic {
    padding: 4rem 1.25rem;
    background: var(--bg-surface);
  }

  @media (min-width: 768px) {
    .academic {
      padding: 6rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .academic {
      padding: 8rem 2rem;
    }
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header { margin-bottom: 2rem; }

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

  /* ── Tab Bar ── */
  .tab-bar {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 2.5rem;
    padding: 0.35rem;
    background: var(--bg-elevated);
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);
    width: 100%;
    max-width: fit-content;
  }

  /* hide scrollbar for tabs */
  .tab-bar::-webkit-scrollbar {
    display: none;
  }
  .tab-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-pill);
    background: transparent;
    border: none;
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .tab-btn:hover {
    color: var(--text-secondary);
  }

  .tab-btn.active {
    background: rgba(74, 222, 128, 0.1);
    color: var(--accent-primary);
    font-weight: 600;
  }

  .tab-icon { font-size: 0.9rem; }

  .tab-content {
    animation: tabFadeIn 0.3s ease;
  }

  @keyframes tabFadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── Research Papers ── */
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
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    transition: box-shadow 0.2s ease;
  }

  .paper-card:hover { box-shadow: var(--glow-sm); }

  .paper-content { flex: 1; }

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
  .paper-link:hover { color: var(--accent-primary); text-decoration: underline; }

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

  /* ── Org Cards ── */
  .org-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .org-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 1.75rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    color: inherit;
    display: flex;
    flex-direction: column;
  }

  .org-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--glow-sm);
    border-color: var(--border-hover);
  }

  .org-icon { margin-bottom: 0.75rem; }

  .org-name {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--text-base);
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .org-role {
    font-size: var(--text-sm);
    color: var(--accent-soft);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .org-period {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: 0.75rem;
  }

  .org-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.6;
    flex: 1;
  }

  .card-footer {
    margin-top: 1rem;
  }

  .org-badge {
    display: inline-block;
    padding: 0.3rem 0.75rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--accent-primary);
    background: rgba(74, 222, 128, 0.08);
    border: 1px solid var(--border);
  }

  .view-details-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
    font-size: var(--text-xs);
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .org-card:hover .view-details-bar {
    color: var(--accent-primary);
  }

  /* ── Org Modal ── */
  .org-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(8, 13, 10, 0.92);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn 0.2s ease;
  }

  .org-modal {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 20px;
    max-width: 960px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 3rem;
    position: relative;
    animation: slideUp 0.3s ease;
  }

  .modal-close {
    position: sticky;
    top: 0;
    float: right;
    background: var(--bg-base);
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-muted);
    transition: all 0.2s ease;
    z-index: 10;
  }

  .modal-close:hover {
    color: var(--accent-primary);
    border-color: var(--accent-primary);
  }

  .modal-header {
    margin-bottom: 2rem;
    padding-right: 3.5rem;
  }

  .modal-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .modal-role {
    font-size: var(--text-base);
    color: var(--accent-soft);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .modal-period {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-bottom: 0.75rem;
  }

  .modal-badge {
    display: inline-block;
    padding: 0.35rem 0.85rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--accent-primary);
    background: rgba(74, 222, 128, 0.08);
    border: 1px solid var(--border);
  }

  .modal-details {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.9;
    margin-bottom: 2.5rem;
  }

  .modal-gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .gallery-item { margin: 0; }

  .gallery-btn {
    position: relative;
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
    border-radius: var(--radius-card);
    overflow: hidden;
  }

  .gallery-btn img {
    width: 100%;
    border-radius: var(--radius-card);
    border: 1px solid var(--border);
    transition: border-color 0.2s ease, transform 0.3s ease;
    display: block;
  }

  .gallery-btn:hover img {
    border-color: var(--accent-primary);
    transform: scale(1.01);
  }

  .img-zoom-hint {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: rgba(8, 13, 10, 0.7);
    backdrop-filter: blur(4px);
    border-radius: 8px;
    padding: 0.4rem;
    color: var(--text-secondary);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .gallery-btn:hover .img-zoom-hint {
    opacity: 1;
  }

  .gallery-item figcaption {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-align: center;
    margin-top: 0.5rem;
    font-style: italic;
  }

  /* ── Projects in Academic ── */
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

  /* ── Lightbox ── */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 3000;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    animation: fadeIn 0.2s ease;
    cursor: zoom-out;
  }

  .lightbox-close {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;
    z-index: 3001;
  }

  .lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .lightbox-content {
    max-width: 90vw;
    max-height: 85vh;
    cursor: default;
    text-align: center;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
    object-fit: contain;
  }

  .lightbox-caption {
    color: rgba(255, 255, 255, 0.7);
    font-size: var(--text-sm);
    margin-top: 1rem;
    font-style: italic;
  }

  /* ── Animations ── */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Scrollbar for modal */
  .org-modal::-webkit-scrollbar { width: 3px; }
  .org-modal::-webkit-scrollbar-track { background: transparent; }
  .org-modal::-webkit-scrollbar-thumb { background: var(--accent-glow); border-radius: 2px; }

  @media (min-width: 768px) {
    .org-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .modal-gallery {
      grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
