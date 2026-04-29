<script lang="ts">
  import '../app.css';
  import '@fontsource/fraunces/400.css';
  import '@fontsource/fraunces/500.css';
  import '@fontsource/fraunces/600.css';
  import '@fontsource/fraunces/700.css';
  import '@fontsource/fraunces/800.css';
  import '@fontsource/fraunces/900.css';
  import '@fontsource/fraunces/400-italic.css';
  import '@fontsource/dm-sans/400.css';
  import '@fontsource/dm-sans/500.css';
  import '@fontsource/dm-sans/600.css';
  import '@fontsource/dm-sans/700.css';
  import '@fontsource/jetbrains-mono/400.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import CustomCursor from '$lib/components/CustomCursor.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Daniel Hendra Susanto | Software Engineer</title>
  <meta name="description" content="Software Engineer specializing in distributed systems, AI infrastructure, and healthcare technology. 14 months production experience at PT Kalbe Farma Tbk." />
  <meta name="keywords" content="software engineer, backend, distributed systems, healthcare, AI, SvelteKit, portfolio" />
  <meta property="og:title" content="Daniel Hendra Susanto | Software Engineer" />
  <meta property="og:description" content="Backend engineer building distributed systems, AI infrastructure, and healthcare technology." />
  <meta property="og:type" content="website" />
  <meta name="theme-color" content="#080d0a" />
</svelte:head>

<!-- SVG Grain Filter (hidden, referenced by CSS) -->
<svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
</svg>

<CustomCursor />
<Navbar />

<main>
  {@render children()}
</main>
