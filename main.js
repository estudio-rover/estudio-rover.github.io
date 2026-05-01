document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.section-text, .home-block, .assets img, .assets iframe, .contact, .sn-item');
  elementsToReveal.forEach((el, index) => {
    el.classList.add('reveal-hidden');
    el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    observer.observe(el);
  });
});
