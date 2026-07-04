<script>
  import Navbar from './lib/Navbar.svelte'
  import Hero from './lib/Hero.svelte'
  import Background from './lib/Background.svelte'
  import Experience from './lib/Experience.svelte'
  import Education from './lib/Education.svelte'

  let showButton = $state(false)

  function onScroll() {
    showButton = window.scrollY > 400
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<svelte:window onscroll={onScroll} />

<div class="min-h-screen bg-surface-900 text-white">
  <Navbar />
  <div class="space-y-8 pb-24">
    <Hero />
    <Background />
    <Experience />
    <Education />
  </div>

  {#if showButton}
    <button
      onclick={scrollToTop}
      class="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/50 text-primary-400 hover:bg-primary-500/30 hover:text-primary-300 transition-colors flex items-center justify-center backdrop-blur-sm"
      aria-label="Back to top"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
  }
</style>
