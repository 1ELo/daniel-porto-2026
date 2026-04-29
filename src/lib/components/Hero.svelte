<script lang="ts">
  import LeafParticles from './LeafParticles.svelte';
  import { onMount } from 'svelte';
  import { Github, Linkedin, Briefcase } from 'lucide-svelte';

  let mounted = $state(false);
  let typedName = $state('');
  const fullName = 'Daniel Hendra Susanto';
  let showCursor = $state(true);

  onMount(() => {
    mounted = true;

    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullName.length) {
        typedName = fullName.slice(0, i + 1);
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => { showCursor = false; }, 2000);
      }
    }, 60);

    return () => clearInterval(typeInterval);
  });
</script>

<section id="hero" class="hero">
  <LeafParticles />

  <div class="hero-inner" class:mounted>
    <!-- Text side -->
    <div class="hero-text">
      <div class="hero-label anim-1">
        <span>🌿</span> Software Engineer
      </div>

      <h1 class="hero-name anim-2">
        {typedName}{#if showCursor}<span class="cursor">|</span>{/if}
      </h1>

      <p class="hero-subtitle anim-3">
        Building distributed systems, AI infrastructure,<br class="desktop-br" />
        and healthcare technology — one commit at a time.
      </p>

      <div class="hero-cta anim-4">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="/DanielHendra_CV.pdf" target="_blank" rel="noopener" class="btn btn-outline">Download CV</a>
      </div>

      <div class="hero-social anim-5">
        <a href="https://github.com/1ELo" target="_blank" rel="noopener noreferrer" class="social-link">
          <Github size={18} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/daniel-hendra-89499716b" target="_blank" rel="noopener noreferrer" class="social-link">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href="mailto:hendradaniel61@gmail.com" class="social-link">
          <Briefcase size={18} /> Contact
        </a>
      </div>
    </div>

    <!-- Photo side -->
    <div class="hero-photo anim-photo">
      <div class="photo-frame">
        <img src="/daniel-hero.jpeg" alt="Daniel Hendra Susanto" class="hero-img" />
        <div class="photo-overlay" aria-hidden="true"></div>
      </div>
      <!-- Decorative ring -->
      <div class="photo-ring" aria-hidden="true"></div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator" aria-hidden="true">
    <svg class="falling-leaf" width="12" height="12" viewBox="0 0 24 24">
      <path d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z" fill="var(--accent-primary)" />
    </svg>
  </div>
</section>

<style>
  .hero {
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6rem 1.25rem 4rem;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .hero {
      padding: 6rem 2rem 4rem;
    }
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    flex-direction: column-reverse;
  }

  .hero-text {
    flex: 1;
  }

  /* Staggered animations */
  .anim-1, .anim-2, .anim-3, .anim-4, .anim-5, .anim-photo {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .mounted .anim-1 { opacity: 1; transform: translateY(0); transition-delay: 0ms; }
  .mounted .anim-2 { opacity: 1; transform: translateY(0); transition-delay: 300ms; }
  .mounted .anim-3 { opacity: 1; transform: translateY(0); transition-delay: 600ms; }
  .mounted .anim-4 { opacity: 1; transform: translateY(0); transition-delay: 900ms; }
  .mounted .anim-5 { opacity: 1; transform: translateY(0); transition-delay: 1200ms; }
  .mounted .anim-photo { opacity: 1; transform: translateY(0); transition-delay: 200ms; }

  .hero-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-pill);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .hero-name {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: var(--text-3xl);
    color: var(--text-primary);
    line-height: 1.1;
    margin-bottom: 1.5rem;
    min-height: 1.2em;
  }

  .cursor {
    color: var(--accent-primary);
    animation: blink 0.7s step-end infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }

  .hero-subtitle {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .desktop-br { display: none; }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.75rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-primary {
    background: var(--accent-primary);
    color: #080d0a;
  }
  .btn-primary:hover {
    box-shadow: var(--glow-md);
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-hover);
  }
  .btn-outline:hover {
    background: var(--bg-elevated);
    transform: translateY(-2px);
  }

  .hero-social {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--text-sm);
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .social-link:hover {
    color: var(--accent-primary);
  }

  /* ── Hero Photo ── */
  .hero-photo {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .photo-frame {
    position: relative;
    width: 260px;
    height: 340px;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid var(--border);
    transition: border-color 0.3s ease;
    z-index: 1;
  }

  .photo-frame:hover {
    border-color: var(--accent-primary);
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    filter: saturate(0.75) brightness(0.9);
    transition: filter 0.4s ease, transform 0.4s ease;
  }

  .photo-frame:hover .hero-img {
    filter: saturate(1) brightness(1);
    transform: scale(1.03);
  }

  .photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(8, 13, 10, 0.6) 0%,
      transparent 40%
    );
    pointer-events: none;
  }

  .photo-ring {
    position: absolute;
    inset: -12px;
    border-radius: 28px;
    border: 1px solid rgba(74, 222, 128, 0.08);
    z-index: 0;
    animation: ringPulse 4s ease-in-out infinite;
  }

  @keyframes ringPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.02); }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .falling-leaf {
    animation: fallLeaf 2.5s ease-in-out infinite;
  }

  @keyframes fallLeaf {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
    50% { transform: translateY(16px) rotate(15deg); opacity: 1; }
    100% { transform: translateY(32px) rotate(-5deg); opacity: 0; }
  }

  @media (min-width: 768px) {
    .desktop-br { display: block; }

    .hero-inner {
      flex-direction: row;
      text-align: left;
    }

    .photo-frame {
      width: 300px;
      height: 400px;
    }
  }
</style>
