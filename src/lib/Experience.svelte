<script>
  import { fadeSlide } from './actions'
</script>

<section id="experience">
  <div class="max-w-6xl mx-auto px-6">
    <div class="flex items-center gap-3 mb-6" use:fadeSlide>
      <div class="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
        <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      </div>
      <h2 class="text-xl font-bold text-white">Experience</h2>
    </div>
    <div class="space-y-6">
      <div class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200" use:fadeSlide>
        <div class="flex items-start justify-between mb-1">
          <h3 class="text-lg font-semibold text-white">Senior SDE — Devices Sustainability</h3>
          <span class="text-xs text-surface-500 bg-surface-800 px-3 py-1 rounded-full border border-surface-700">2025 — Present</span>
        </div>
        <p class="text-primary-400 font-medium text-sm mb-4">Amazon — Arlington VA</p>
        <ul class="text-surface-300 text-sm space-y-1.5 list-disc list-inside">
          <li>Architected and built the first-to-industry AI-informed LCA solution, automating 90% of the process with &lt;1% carbon footprint variance vs. manual baselines</li>
          <li>Collaborated with AWS and Stores Sustainability teams on LCA automation and carbon footprint data pipeline architecture</li>
          <li>Mentored the organization on engineering practices and AI fluency to scale the team's impact</li>
        </ul>
      </div>
      <div class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200" use:fadeSlide={{ delay: 80 }}>
        <div class="flex items-start justify-between mb-1">
          <h3 class="text-lg font-semibold text-white">Senior SDE — Devices Privacy</h3>
          <span class="text-xs text-surface-500 bg-surface-800 px-3 py-1 rounded-full border border-surface-700">2019 — 2025</span>
        </div>
        <p class="text-primary-400 font-medium text-sm mb-4">Amazon — Arlington VA</p>
        <ul class="text-surface-300 text-sm space-y-1.5 list-disc list-inside">
          <li>Architected and created the Alexa data anonymization platform that anonymizes petabytes of text data using a novel text anonymization model</li>
          <li>Built and scaled the foundational privacy systems that verified appropriate data handling controls for all systems across Amazon</li>
          <li>Invented the first-to-Amazon zero-operator access private compute architecture, enabling Amazon to acquire Bee</li>
        </ul>
      </div>
      <div class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200" use:fadeSlide={{ delay: 160 }}>
        <div class="flex items-start justify-between mb-1">
          <h3 class="text-lg font-semibold text-white">Senior Software Engineer — Risk Tech</h3>
          <span class="text-xs text-surface-500 bg-surface-800 px-3 py-1 rounded-full border border-surface-700">2018 — 2019</span>
        </div>
        <p class="text-accent-400 font-medium text-sm mb-4">Capital One — McLean VA</p>
        <ul class="text-surface-300 text-sm space-y-1.5 list-disc list-inside">
          <li>Built the web app and microservices powering Capital One's Model governance system of record</li>
          <li>Delivered business-critical features as microservices and reinvented the CI/CD pipeline for automated iteration</li>
          <li>Championed new technologies and mentored engineers across the Risk Tech organization</li>
        </ul>
      </div>
      <div class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200" use:fadeSlide={{ delay: 240 }}>
        <div class="flex items-start justify-between mb-1">
          <h3 class="text-lg font-semibold text-white">Software Engineer — Finance Tech</h3>
          <span class="text-xs text-surface-500 bg-surface-800 px-3 py-1 rounded-full border border-surface-700">2017 — 2018</span>
        </div>
        <p class="text-accent-400 font-medium text-sm mb-4">Capital One — Richmond VA</p>
        <ul class="text-surface-300 text-sm space-y-1.5 list-disc list-inside">
          <li>Built the first AWS Finance data lake at Capital One for critical modeling and regulatory use cases</li>
          <li>Owned a Finance metadata search app from hackathon concept to production deployment</li>
          <li>Championed serverless architecture adoption and automated the software delivery pipeline</li>
        </ul>
      </div>
    </div>
  </div>
</section>
