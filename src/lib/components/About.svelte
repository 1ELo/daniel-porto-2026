<script lang="ts">
  import StatCounter from "./StatCounter.svelte";
  import { intersect } from "$lib/utils/intersect";
</script>

<section id="about" class="about">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// about</span>
      <h2 class="section-title">Rooted in Systems, Growing in Complexity</h2>
    </div>

    <div class="about-grid">
      <!-- Info Card -->
      <div class="info-card reveal" use:intersect>
        <div class="info-row">
          <span class="info-label">Name</span>
          <span class="info-value">Daniel Hendra Susanto</span>
        </div>
        <div class="info-row">
          <span class="info-label">University</span>
          <span class="info-value">Binus University, Malang</span>
        </div>
        <div class="info-row">
          <span class="info-label">Degree</span>
          <span class="info-value">B.Sc. Computer Science</span>
        </div>
        <div class="info-row">
          <span class="info-label">GPA</span>
          <span class="info-value">3.82 / 4.0</span>
        </div>
        <div class="info-row">
          <span class="info-label">Graduation</span>
          <span class="info-value">March 2026</span>
        </div>
        <div class="info-row">
          <span class="info-label">Location</span>
          <span class="info-value">Malang, Indonesia</span>
        </div>

        <!-- Languages stacked -->
        <div class="languages">
          <span class="info-label">Languages</span>
          <div class="lang-list">
            <div class="lang-item">
              <span class="lang-name">Indonesian</span>
              <span class="lang-level">Native</span>
            </div>
            <div class="lang-item">
              <span class="lang-name">English</span>
              <span class="lang-level">Professional Working</span>
            </div>
          </div>
        </div>

        <div class="status-badge">
          <span class="status-dot">🟢</span> Open to Opportunities
        </div>
      </div>

      <!-- Bio -->
      <div class="bio reveal" use:intersect>
        <p>
          I'm a Computer Science graduate from Binus University with 14 months
          of production engineering experience at PT Kalbe Farma Tbk — one of
          Southeast Asia's largest pharmaceutical companies.
        </p>
        <p>
          I work at the intersection of distributed systems, healthcare data
          standards, and AI infrastructure. I've migrated monolithic platforms
          to microservices, secured sensitive medical data with end-to-end
          encryption, and built FHIR R4-compliant APIs used in live clinical
          environments.
        </p>
        <p>
          Like a forest, the systems I build are layered — each part serving the
          whole. I care about code that scales, documentation that lasts, and
          technology that genuinely improves lives.
        </p>

        <!-- Stats -->
        <div class="stats-row">
          <StatCounter value={14} label="months production experience" />
          <StatCounter value={2} label="published research papers" />
          <StatCounter
            value={8}
            suffix="+"
            label="community events organized"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    background: var(--bg-surface);
    padding: 4rem 1.25rem;
  }

  @media (min-width: 768px) {
    .about {
      padding: 6rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .about {
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
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .info-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent-primary);
    border-radius: 16px;
    padding: 2rem;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border);
  }

  .info-label {
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-weight: 500;
  }

  .info-value {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    text-align: right;
  }

  /* Languages stacked layout */
  .languages {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
  }

  .lang-list {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .lang-item {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0.75rem;
    background: rgba(74, 222, 128, 0.04);
    border-radius: 8px;
  }

  .lang-name {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    font-weight: 500;
  }

  .lang-level {
    font-size: var(--text-xs);
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    background: rgba(74, 222, 128, 0.1);
    border-radius: var(--radius-pill);
    font-size: var(--text-xs);
    color: var(--accent-soft);
  }

  .status-dot {
    font-size: 0.6rem;
  }

  .bio {
    color: var(--text-secondary);
    line-height: 1.8;
  }

  .bio p {
    margin-bottom: 1rem;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
    padding: 1.5rem;
    background: var(--bg-elevated);
    border-radius: var(--radius-card);
    border: 1px solid var(--border);
  }

  @media (min-width: 768px) {
    .about-grid {
      grid-template-columns: 380px 1fr;
    }
  }
</style>
