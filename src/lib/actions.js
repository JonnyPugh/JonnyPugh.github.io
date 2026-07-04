export function fadeSlide(node, { delay = 0, duration = 350 } = {}) {
  node.classList.add('opacity-0', 'translate-y-12')
  node.style.transitionProperty = 'opacity, transform'
  node.style.transitionDuration = duration + 'ms'
  node.style.transitionTimingFunction = 'ease-out'
  node.style.transitionDelay = delay + 'ms'

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.classList.remove('opacity-0', 'translate-y-12')
        observer.unobserve(node)
      }
    })
  }, { threshold: 0.1 })

  observer.observe(node)

  return {
    destroy() {
      observer?.unobserve(node)
    }
  }
}
