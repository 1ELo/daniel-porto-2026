<script lang="ts">
  import { intersect } from '$lib/utils/intersect';

  const achievements = [
    {
      metric: '↑ 80% throughput · ↓ 80% latency',
      description: 'Migrated monolithic AI healthcare platform to microservices (FastAPI, Redis, Celery, MinIO), validated via k6 load testing.'
    },
    {
      metric: 'End-to-end encryption',
      description: 'Designed AES-256-GCM + ECIES encryption for AI chatbot infrastructure, securing sensitive healthcare data while maintaining JWT-based auth compatibility.'
    },
    {
      metric: 'Distributed DICOM imaging pipeline',
      description: 'Built async, fault-tolerant medical image processing using MinIO, Celery, Redis, and Azure Blob Storage with real-time tracking.'
    },
    {
      metric: 'Semantic search system',
      description: 'Dual-database architecture (PostgreSQL + vector store) with unified querying via Trino and OpenCLIP for healthcare dataset retrieval.'
    },
    {
      metric: 'Healthcare data integration re-architecture',
      description: 'Replaced Mirth Connect with Supabase Edge Functions (Deno), engineering a Node.js bridge for HTTP-to-TCP communication with dcm4chee.'
    },
    {
      metric: 'FHIR R4 compliant REST API',
      description: 'Built spec-compliant API on Supabase covering 8 resource types, validated through API contract testing.'
    }
  ];

  const techStack = [
    'FastAPI', 'Redis', 'Celery', 'MinIO', 'Deno', 'PostgreSQL',
    'Azure', 'FHIR R4', 'JWT', 'AES-256-GCM', 'OpenCLIP', 'Trino', 'k6'
  ];

  const domainTags = ['Healthcare', 'AI Infrastructure', 'Distributed Systems'];
</script>

<section id="experience" class="experience">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// experience</span>
      <h2 class="section-title">Where I've Grown</h2>
    </div>

    <div class="exp-card reveal" use:intersect>
      <!-- Decorative branch -->
      <svg class="decorative-branch" width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path d="M50 10 C40 20, 30 15, 20 30 C15 38, 25 45, 10 50" stroke="var(--accent-primary)" stroke-width="1" fill="none" opacity="0.15" />
        <circle cx="50" cy="10" r="2" fill="var(--accent-primary)" opacity="0.2" />
        <circle cx="10" cy="50" r="2" fill="var(--accent-primary)" opacity="0.2" />
      </svg>

      <div class="exp-header">
        <div>
          <h3 class="company-name">PT Kalbe Farma Tbk</h3>
          <p class="company-desc">Southeast Asia's largest pharmaceutical company</p>
        </div>
        <div class="exp-meta">
          <p class="exp-role">Software Engineer Intern — Back-End</p>
          <p class="exp-period">Feb 2025 – Apr 2026</p>
          <p class="exp-format">Remote · Jakarta, Indonesia</p>
        </div>
      </div>

      <div class="domain-tags">
        {#each domainTags as tag}
          <span class="domain-tag">{tag}</span>
        {/each}
      </div>

      <!-- Wavy divider -->
      <svg class="exp-divider" viewBox="0 0 600 12" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,6 C150,12 450,0 600,6" stroke="var(--border)" stroke-width="1" fill="none" />
      </svg>

      <div class="achievements">
        {#each achievements as ach}
          <div class="achievement">
            <svg class="leaf-bullet" width="6" height="6" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z" fill="var(--accent-primary)" />
            </svg>
            <div>
              <strong class="ach-metric">{ach.metric}</strong>
              <p class="ach-desc">{ach.description}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="tech-tags">
        {#each techStack as tech}
          <span class="tech-pill">{tech}</span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .experience {
    padding: 4rem 1.25rem;
    background: var(--bg-surface);
  }

  @media (min-width: 768px) {
    .experience {
      padding: 6rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .experience {
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

  .exp-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent-primary);
    border-radius: var(--radius-card);
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
  }

  .decorative-branch {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .exp-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .company-name {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--text-xl);
    color: var(--text-primary);
  }

  .company-desc {
    font-size: var(--text-xs);
    color: var(--text-muted);
    font-style: italic;
  }

  .exp-role {
    font-size: var(--text-base);
    color: var(--text-secondary);
    font-weight: 600;
  }

  .exp-period {
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  .exp-format {
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .domain-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .domain-tag {
    padding: 0.3rem 0.75rem;
    border-radius: var(--radius-pill);
    font-size: var(--text-xs);
    font-weight: 600;
    color: var(--accent-amber);
    background: rgba(217, 119, 6, 0.1);
    border: 1px solid rgba(217, 119, 6, 0.2);
  }

  .exp-divider {
    width: 100%;
    height: 12px;
    margin-bottom: 1.5rem;
  }

  .achievements {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }

  .achievement {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .leaf-bullet {
    flex-shrink: 0;
    margin-top: 0.5rem;
  }

  .ach-metric {
    display: block;
    color: var(--accent-primary);
    font-size: var(--text-sm);
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .ach-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }

  .tech-pill {
    padding: 0.3rem 0.7rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    background: rgba(74, 222, 128, 0.04);
    border: 1px solid var(--border);
  }

  @media (min-width: 768px) {
    .exp-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .exp-meta {
      text-align: right;
    }
  }
</style>
