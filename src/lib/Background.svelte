<script>
  import { fadeSlide } from './actions'
</script>

<section id="background" use:fadeSlide>
  <div class="max-w-6xl mx-auto px-6">
    <div class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        </div>
        <h2 class="text-xl font-bold text-white">Background</h2>
      </div>
      <p class="text-surface-300 leading-relaxed text-lg">
        I'm a senior engineer focused on creating scalable first-to-world solutions that solve
        ambiguous, high-impact problems. I mentor other senior engineers to scale my impact
        through others, and I trailblaze AI development practices to deliver faster while
        automating business processes that get in the way of building.
      </p>
    </div>
  </div>
</section>
