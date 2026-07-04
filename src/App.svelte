<script>
  import Navbar from './lib/Navbar.svelte'
  import Hero from './lib/Hero.svelte'
  import Background from './lib/Background.svelte'
  import Experience from './lib/Experience.svelte'
  import Education from './lib/Education.svelte'
</script>

<div class="min-h-screen bg-surface-900 text-white">
  <Navbar />
  <Hero />
  <div class="space-y-16 pb-24">
    <Background />
    <Experience />
    <Education />
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
  }
</style>
