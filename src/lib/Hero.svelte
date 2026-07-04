<script>
  import jonathan from '../images/jonathan-pugh.jpg'
  import { fadeSlide } from './actions'
</script>

<section id="hero" class="relative pt-32 pb-24 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-surface-900 to-accent-900/20"></div>
  <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
  <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
  <div class="relative max-w-6xl mx-auto px-6" use:fadeSlide>
    <div class="flex flex-col md:flex-row items-stretch gap-10">
      <div class="shrink-0">
        <div class="gradient-border w-48 md:w-52 h-full rounded-xl overflow-hidden">
          <img src={jonathan} alt="Jonathan Pugh" class="w-full h-full object-cover object-top rounded-xl" />
        </div>
      </div>
      <div class="text-center md:text-left">
        <p class="text-primary-400 font-medium text-sm tracking-widest uppercase mb-3">Senior Software Engineer</p>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, I'm <span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Jonathan</span>
        </h1>
        <p class="text-lg md:text-xl text-surface-300 max-w-xl leading-relaxed">
          and I'm currently building scalable solutions, mentoring engineers, and pioneering AI development practices for Amazon's Devices Sustainability team.
        </p>
        <div class="flex items-center gap-4 mt-8 justify-center md:justify-start">
          <a href="https://github.com/jonnypugh" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2da44e] hover:bg-[#2c974b] text-white rounded-lg font-medium transition-colors text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jonnypugh" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-lg font-medium transition-colors text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .gradient-border {
    position: relative;
    background: linear-gradient(270deg, var(--color-primary-500), var(--color-accent-500), var(--color-primary-500), var(--color-accent-500));
    background-size: 300% 300%;
    animation: gradient-rotate 4s ease infinite;
    padding: 3px;
  }
  .gradient-border img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
  }
  @keyframes gradient-rotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
