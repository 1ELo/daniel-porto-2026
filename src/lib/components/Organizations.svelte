<script lang="ts">
  import { organizations } from "$lib/data/organizations";
  import { intersect } from "$lib/utils/intersect";
  import { ChevronDown, X } from "lucide-svelte";

  let expandedOrg = $state<number | null>(null);

  function toggleOrg(index: number) {
    expandedOrg = expandedOrg === index ? null : index;
  }

  function closeModal() {
    expandedOrg = null;
  }
</script>

<section id="organizations" class="organizations">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// organizational experience</span>
      <h2 class="section-title">Growing Together</h2>
    </div>

    <div class="org-grid">
      {#each organizations as org, i}
        <button
          class="org-card reveal"
          class:active={expandedOrg === i}
          use:intersect
          style="transition-delay: {i * 80}ms"
          onclick={() => toggleOrg(i)}
          type="button"
        >
          <!-- Organic nodes icon -->
          <svg
            class="org-icon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="16"
              cy="8"
              r="3"
              stroke="var(--accent-primary)"
              stroke-width="1"
              fill="none"
              opacity="0.3"
            />
            <circle
              cx="8"
              cy="24"
              r="3"
              stroke="var(--accent-primary)"
              stroke-width="1"
              fill="none"
              opacity="0.3"
            />
            <circle
              cx="24"
              cy="24"
              r="3"
              stroke="var(--accent-primary)"
              stroke-width="1"
              fill="none"
              opacity="0.3"
            />
            <line
              x1="16"
              y1="11"
              x2="8"
              y2="21"
              stroke="var(--accent-primary)"
              stroke-width="0.75"
              opacity="0.2"
            />
            <line
              x1="16"
              y1="11"
              x2="24"
              y2="21"
              stroke="var(--accent-primary)"
              stroke-width="0.75"
              opacity="0.2"
            />
            <line
              x1="11"
              y1="24"
              x2="21"
              y2="24"
              stroke="var(--accent-primary)"
              stroke-width="0.75"
              opacity="0.2"
            />
          </svg>

          <h3 class="org-name">{org.name}</h3>
          <p class="org-role">{org.role}</p>
          <p class="org-period">{org.period}</p>
          <p class="org-desc">{org.description}</p>

          <div class="card-footer">
            <span class="org-badge">{org.badge}</span>
            <span class="expand-hint">
              <ChevronDown size={14} />
              {expandedOrg === i ? "Close" : "View Details"}
            </span>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Modal overlay for expanded org details -->
{#if expandedOrg !== null}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="org-modal-overlay"
    onclick={closeModal}
    onkeydown={(e) => e.key === "Escape" && closeModal()}
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="org-modal" onclick={(e) => e.stopPropagation()}>
      <button class="modal-close" onclick={closeModal} aria-label="Close">
        <X size={20} />
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
              <img src={image.src} alt={image.caption} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .organizations {
    padding: 6rem 1.5rem;
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
  }

  .org-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .org-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 2rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    color: inherit;
  }

  .org-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--glow-sm);
    border-color: var(--border-hover);
  }

  .org-card.active {
    border-color: var(--accent-primary);
    box-shadow: var(--glow-sm);
  }

  .org-icon {
    margin-bottom: 1rem;
  }

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
    margin-bottom: 1rem;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .expand-hint {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: var(--text-xs);
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .org-card:hover .expand-hint {
    color: var(--accent-primary);
  }

  /* Modal */
  .org-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(8, 13, 10, 0.9);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    animation: fadeIn 0.2s ease;
  }

  .org-modal {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 16px;
    max-width: 800px;
    width: 100%;
    max-height: 85vh;
    overflow-y: auto;
    padding: 2.5rem;
    position: relative;
    animation: slideUp 0.3s ease;
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-muted);
    transition: all 0.2s ease;
  }

  .modal-close:hover {
    color: var(--accent-primary);
    border-color: var(--accent-primary);
  }

  .modal-header {
    margin-bottom: 1.5rem;
    padding-right: 3rem;
  }

  .modal-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .modal-role {
    font-size: var(--text-sm);
    color: var(--accent-soft);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .modal-period {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: 0.75rem;
  }

  .modal-badge {
    display: inline-block;
    padding: 0.3rem 0.75rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--accent-primary);
    background: rgba(74, 222, 128, 0.08);
    border: 1px solid var(--border);
  }

  .modal-details {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .modal-gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .gallery-item {
    margin: 0;
  }

  .gallery-item img {
    width: 100%;
    border-radius: var(--radius-card);
    border: 1px solid var(--border);
    transition: border-color 0.2s ease;
  }

  .gallery-item img:hover {
    border-color: var(--border-hover);
  }

  .gallery-item figcaption {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-align: center;
    margin-top: 0.5rem;
    font-style: italic;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Custom scrollbar for modal */
  .org-modal::-webkit-scrollbar {
    width: 3px;
  }
  .org-modal::-webkit-scrollbar-track {
    background: transparent;
  }
  .org-modal::-webkit-scrollbar-thumb {
    background: var(--accent-glow);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    .org-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .modal-gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
