<script lang="ts">
  import WaveDivider from './WaveDivider.svelte';
  import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<footer class="footer">
  <WaveDivider />

  <div class="footer-inner">
    <div class="footer-left">
      <span>Daniel Hendra Susanto · <em class="logo-mark">el.</em></span>
    </div>

    <div class="footer-social">
      <a href="https://github.com/1ELo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github size={16} />
      </a>
      <a href="https://www.linkedin.com/in/daniel-hendra-89499716b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={16} />
      </a>
      <a href="mailto:hendradaniel61@gmail.com" aria-label="Email">
        <Mail size={16} />
      </a>
    </div>

    <div class="footer-right">
      <span>Built with SvelteKit · 2026</span>
    </div>
  </div>

  <p class="footer-note">Made with patience, caffeine, and respect for nature.</p>
</footer>

<style>
  .footer {
    padding: 0 1.5rem 2rem;
    background: var(--bg-base);
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .footer-left span,
  .footer-right span {
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .logo-mark {
    font-family: var(--font-heading);
    color: var(--accent-primary);
    font-style: italic;
  }

  .footer-social {
    display: flex;
    gap: 1rem;
  }

  .footer-social a {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }
  .footer-social a:hover {
    color: var(--accent-primary);
  }

  .footer-note {
    text-align: center;
    font-size: 0.7rem;
    color: var(--text-muted);
    opacity: 0.5;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 640px) {
    .footer-inner {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
