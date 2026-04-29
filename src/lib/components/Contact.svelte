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

      <a href="mailto:hendradaniel61@gmail.com" class="email-display">
        hendradaniel61@gmail.com
      </a>

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

    <!-- Contact Form -->
    <form class="contact-form reveal" use:intersect method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="your@email.com" />
      </div>
      <div class="form-group full-width">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message 🌱</button>
    </form>
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
    margin-bottom: 3rem;
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

  .email-display {
    display: inline-block;
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    color: var(--accent-primary);
    text-decoration: none;
    margin-bottom: 2rem;
    transition: text-shadow 0.2s ease;
  }
  .email-display:hover {
    text-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
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

  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .form-group.full-width {
    grid-column: 1 / -1;
  }

  .form-group label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    font-weight: 500;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.1);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--text-muted);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    grid-column: 1 / -1;
    padding: 0.8rem 2rem;
    background: var(--accent-primary);
    color: #080d0a;
    border: none;
    border-radius: var(--radius-pill);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    justify-self: center;
  }

  .submit-btn:hover {
    box-shadow: var(--glow-md);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    .contact-form {
      grid-template-columns: 1fr;
    }
  }
</style>
