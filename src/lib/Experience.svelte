<script>
  import { fadeSlide } from './actions'

  const roles = [
    {
      title: 'Senior SDE — Devices Sustainability',
      date: '2025 — Present',
      company: 'Amazon',
      location: 'Arlington VA',
      accent: 'primary',
      bullets: [
        'Architected the first-to-industry AI-informed LCA solution, achieving <1% variance and automating 90% of the carbon footprint calculation process',
        'Collaborated with AWS and Stores Sustainability teams on foundational LCA automation and corporate carbon footprint reporting solutions',
        'Mentored the organization on engineering practices and AI fluency to scale the team\'s impact',
      ],
    },
    {
      title: 'Senior SDE — Devices Privacy',
      date: '2019 — 2025',
      company: 'Amazon',
      location: 'Arlington VA',
      accent: 'primary',
      bullets: [
        'Conceived and established the Alexa anonymization platform, enabling data analysis and model training with petabytes of privacy-preserving text data',
        'Developed and scaled the foundational privacy systems that continuously verify appropriate data handling controls for all systems across Amazon',
        'Pioneered a novel zero-operator access private compute architecture at Amazon, protecting Bee customer data and enabling Amazon to acquire Bee',
      ],
    },
    {
      title: 'Senior Software Engineer — Risk Tech',
      date: '2018 — 2019',
      company: 'Capital One',
      location: 'Tysons VA',
      accent: 'accent',
      bullets: [
        'Designed the microservice architecture and built Capital One\'s model governance system of record',
        'Reinvented the CI/CD pipeline to standardize testing, accelerate releases, and iterate faster',
        'Championed new technologies and mentored engineers across the Risk Tech organization',
      ],
    },
    {
      title: 'Software Engineer — Finance Tech',
      date: '2017 — 2018',
      company: 'Capital One',
      location: 'Richmond VA',
      accent: 'accent',
      bullets: [
        'Created the first AWS finance data lake at Capital One for critical modeling and regulatory use cases',
        'Owned a finance metadata search app from hackathon concept to production deployment',
        'Championed serverless architecture adoption and automated the software delivery pipeline',
      ],
    },
  ]
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
      {#each roles as role, i}
        <div
          class="bg-surface-800/50 border border-surface-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-[border-color,box-shadow] duration-200"
          use:fadeSlide={{ delay: i * 80 }}
        >
          <div class="flex items-start justify-between mb-1">
            <h3 class="text-lg font-semibold text-white">{role.title}</h3>
            <span class="text-xs text-surface-500 bg-surface-800 px-3 py-1 rounded-full border border-surface-700">{role.date}</span>
          </div>
          <p class="text-sm mb-4 font-medium {role.accent === 'primary' ? 'text-primary-400' : 'text-accent-400'}">{role.company} — {role.location}</p>
          <ul class="text-surface-300 text-sm space-y-1.5 list-disc pl-5">
            {#each role.bullets as bullet}
              <li class="pl-1">{bullet}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
