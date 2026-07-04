<script>
  import jonny from '../images/jonny-pugh.jpg'
  import { fadeSlide } from './actions'
</script>

<section id="hero" class="relative pt-24 pb-8 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-surface-900 to-accent-900/20"></div>
  <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
  <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
  <div class="relative max-w-6xl mx-auto px-6" use:fadeSlide>
    <div class="flex flex-col md:flex-row items-stretch gap-5 md:gap-10">
      <div class="shrink-0 self-center md:self-auto">
        <div class="gradient-border w-48 md:w-52 h-full rounded-xl overflow-hidden">
          <img src={jonny} alt="Jonny Pugh" class="w-full h-full object-cover object-top rounded-xl" />
        </div>
      </div>
      <div class="text-center md:text-left">
        <p class="text-white font-medium text-sm tracking-widest uppercase mb-3">Senior Software Engineer</p>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          <span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Hi, I'm Jonny!</span>
        </h1>
        <p class="text-lg md:text-xl text-surface-300 max-w-xl leading-relaxed">
          I'm currently building scalable solutions, mentoring engineers, and pioneering AI development practices for Amazon's Devices Sustainability team.
        </p>
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
