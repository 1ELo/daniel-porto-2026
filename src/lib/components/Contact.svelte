<script lang="ts">
  import { intersect } from '$lib/utils/intersect';
  import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<section id="contact" class="contact">
  <div class="container">
    <div class="section-header reveal" use:intersect>
      <span class="section-label">// contact</span>
      <h2 class="section-title">Let's Build Something Together</h2>
    </div>

    <div class="contact-content reveal" use:intersect>
      <p class="contact-copy">
        I'm open to full-time backend engineering roles, particularly in
        distributed systems, healthcare technology, or AI infrastructure.
        Whether you have a role, a project, or just want to talk tech —
        my inbox is always open.
      </p>

      <div class="social-row">
        <a href="https://github.com/1ELo" target="_blank" rel="noopener noreferrer" class="social-card">
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/daniel-hendra-89499716b" target="_blank" rel="noopener noreferrer" class="social-card">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:hendradaniel61@gmail.com" class="social-card">
          <Mail size={20} />
          <span>Email</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 4rem 1.25rem;
    background: var(--bg-surface);
  }

  @media (min-width: 768px) {
    .contact {
      padding: 6rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .contact {
      padding: 8rem 2rem;
    }
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 2rem;
    text-align: center;
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

  .contact-content {
    text-align: center;
  }

  .contact-copy {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .social-row {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .social-card {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-pill);
    color: var(--text-secondary);
    text-decoration: none;
    font-size: var(--text-sm);
    transition: all 0.2s ease;
  }
  .social-card:hover {
    color: var(--accent-primary);
    border-color: var(--border-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow-sm);
  }
</style>
