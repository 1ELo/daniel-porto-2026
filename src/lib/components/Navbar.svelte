<script lang="ts">
  import { onMount } from "svelte";

  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let activeSection = $state("");

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academic', href: '#academic' },
    { label: 'Contact', href: '#contact' }
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 60;

      // Determine active section
      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          activeSection = sections[i];
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleNavClick(href: string) {
    mobileOpen = false;
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav class="navbar" class:scrolled aria-label="Main navigation">
  <div class="navbar-inner">
    <a
      class="logo"
      href="#"
      onclick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <em>el.</em>
    </a>

    <!-- Desktop links -->
    <div class="nav-links desktop-only">
      {#each links as link}
        <a
          class="nav-link"
          class:active={activeSection === link.href.replace("#", "")}
          href={link.href}
          onclick={(e) => {
            e.preventDefault();
            handleNavClick(link.href);
          }}
        >
          {#if activeSection === link.href.replace("#", "")}
            <svg
              class="leaf-indicator"
              width="6"
              height="6"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.5 6 3 10 3 14c0 5 4 8 9 8s9-3 9-8c0-4-3.5-8-9-12z"
                fill="var(--accent-primary)"
              />
            </svg>
          {/if}
          {link.label}
        </a>
      {/each}
    </div>

    <!-- Mobile hamburger -->
    <button
      class="hamburger mobile-only"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
    >
      <span class="bar" class:open={mobileOpen}></span>
      <span class="bar" class:open={mobileOpen}></span>
      <span class="bar" class:open={mobileOpen}></span>
    </button>
  </div>
</nav>

<!-- Mobile overlay -->
{#if mobileOpen}
  <div class="mobile-overlay" role="dialog" aria-modal="true">
    <div class="mobile-menu">
      {#each links as link, i}
        <a
          class="mobile-link"
          href={link.href}
          style="animation-delay: {i * 60}ms"
          onclick={(e) => {
            e.preventDefault();
            handleNavClick(link.href);
          }}
        >
          {link.label}
        </a>
      {/each}
    </div>
  </div>
{/if}

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      backdrop-filter 0.3s ease;
    border-bottom: 1px solid transparent;
  }

  .navbar.scrolled {
    background-color: rgba(8, 13, 10, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom-color: var(--border);
  }

  .navbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    color: var(--accent-primary);
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    position: relative;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--accent-primary);
  }

  .leaf-indicator {
    animation: leafBounce 0.4s ease;
  }

  @keyframes leafBounce {
    0% {
      transform: scale(0) rotate(-45deg);
    }
    60% {
      transform: scale(1.3) rotate(5deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
  }

  .bar {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .bar.open:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .bar.open:nth-child(2) {
    opacity: 0;
  }
  .bar.open:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .desktop-only {
    display: flex;
  }
  .mobile-only {
    display: none;
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(8, 13, 10, 0.97);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .mobile-link {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    color: var(--text-primary);
    text-decoration: none;
    opacity: 0;
    animation: fadeUp 0.4s ease forwards;
    transition: color 0.2s ease;
  }

  .mobile-link:hover {
    color: var(--accent-primary);
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: flex;
    }
  }
</style>
