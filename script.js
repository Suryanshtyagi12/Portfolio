// Theme toggle functionality
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// Hamburger menu toggle for responsive design
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Navbar Active Link Highlight on Click
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navItems.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Close menu after selecting (on mobile)
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
    }
  });
});

// Highlight Active Section on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Swiper for Projects Section (with responsiveness)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3, // Adjusted for your project
    },
    1440: {
      slidesPerView: 4, // Adjusted for larger screens
    }
  }
});
