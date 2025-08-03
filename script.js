window.onload = function () {
  // ✅ Swiper configuration
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    effect: 'slide',
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  };

  // ✅ Initialize Swipers
  new Swiper(".card-swiper", swiperOptions);
  new Swiper(".internship-projects-swiper", swiperOptions);
  new Swiper(".personal-projects-swiper", swiperOptions);
  new Swiper(".technical-projects-swiper", swiperOptions);
  // 🔁 (OPTIONAL) new Swiper(".certifications-swiper", swiperOptions); // IF you want swipe effect

  // ✅ Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ✅ Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ✅ Contact form handling
  const contactForm = document.getElementById('contactForm');
  const formResponse = document.getElementById('formResponse');
  if (contactForm && formResponse) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      formResponse.innerHTML = `<p class="text-teal-400">Message sent successfully!</p>`;
      contactForm.reset();
      setTimeout(() => {
        formResponse.textContent = '';
      }, 5000);
    });
  }

  // ✅ Fade-in on scroll (including certifications zigzag layout)
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}; // ✅ End window.onload
