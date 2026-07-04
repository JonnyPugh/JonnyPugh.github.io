<script>
  import michigan from '../images/michigan.png'
  import { fadeSlide } from './actions'
</script>

<section id="education" use:fadeSlide>
  <div class="max-w-6xl mx-auto px-6">
    <div class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
        </div>
        <h2 class="text-xl font-bold text-white">Education</h2>
      </div>
      <div class="flex items-center gap-6">
        <img src={michigan} alt="University of Michigan" class="w-16 h-16 object-contain" />
        <div>
          <h3 class="text-lg font-semibold text-white">B.S.E. Computer Science, Music Minor</h3>
          <p class="text-primary-400">University of Michigan College of Engineering</p>
          <p class="text-surface-400 text-sm mt-1">September 2013 — April 2017</p>
        </div>
      </div>
    </div>
  </div>
</section>
