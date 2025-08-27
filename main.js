// Fixed Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");

  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add(
      "fixed",
      "top-0",
      "bg-white",
      "shadow-lg",
      "text-gray-900"
    );

    navbar.classList.remove("absolute");
    navbar.classList.remove("text-white");

    logo.src = "assets/logo/TARHUD-LOGO-WARNA.png";
  } else {
    navbar.classList.remove(
      "fixed",
      "top-0",
      "bg-white",
      "shadow-lg",
      "text-gray-900"
    );

    navbar.classList.add("absolute");
    navbar.classList.add("text-white");

    logo.src = "assets/logo/TARHUD-LOGO-WARNA-PUTIH.png";
  }
});

// Navbar Dropdown
const profilNav = document.getElementById('nav-profil');
const profilDropdown = document.getElementById('profil-dropdown');

profilNav.addEventListener('mouseover', () => {
  profilDropdown.classList.remove('rotate-y-90');
  profilDropdown.classList.remove('opacity-0');
  profilDropdown.classList.add('rotate-y-0');
  profilDropdown.classList.add('opacity-100');
});

// Accordion
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");
  const texts = accordion.querySelectorAll(".content-text");

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("max-h-96");

    if (isOpen) {
      // Menutup Box
      content.classList.remove("max-h-96", "p-5");
      content.classList.add("max-h-0");

      texts.forEach((text) => {
        text.classList.remove("opacity-100", "translate-y-0");
        text.classList.add("opacity-0", "translate-y-2");
      });
    } else {
      // Membuka Box
      content.classList.remove("max-h-0");
      content.classList.add("max-h-96", "p-5");

      // Memberi delay untuk setiap text keluar
      texts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.remove("opacity-0", "translate-y-2");
          text.classList.add("opacity-100", "translate-y-0");
        }, 800 + 300 * index);
      });
    }
  });
});

// Hero Banner
document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  let contentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const contents = document.querySelectorAll(".content");

  function showSlides() {
    slides.forEach((slide) => {
      slide.classList.remove("opacity-100");
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("opacity-100");

    setTimeout(showSlides, 10000);
  }

  function showContent() {
    contents.forEach((content) => {
      content.classList.remove("block");
      content.classList.add("hidden");
    });

    contentIndex++;
    if (contentIndex > contents.length) {
      contentIndex = 1;
    }

    contents[contentIndex - 1].classList.add("block");
    contents[contentIndex - 1].classList.remove("hidden");

    setTimeout(showContent, 10000);
  }

  showSlides();
  showContent();
});

// Swiper Slide
const swiper = new Swiper(".card-wrapper", {
  speed: 1000,
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 3000,
  },

  // Pagination Bullet
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperThemeColor = document.documentElement;

swiperThemeColor.style.setProperty(
  "--swiper-theme-color",
  "oklch(68.1% 0.162 75.834)"
);

// Alert Notification
const alertBg = document.getElementById("alertBg");
const alertBox1 = document.getElementById("alertBox1");
const alertBox2 = document.getElementById("alertBox2");

function openAlert() {
  alertBg.classList.remove("-translate-y-100");
  alertBg.classList.add("translate-y-0");

  setTimeout(() => {
    alertBox1.classList.remove("scale-0");
    alertBox1.classList.add("scale-100");
  }, 500);
}

function closeAlert() {
  alertBox1.classList.remove("scale-100");
  alertBox1.classList.add("scale-0");
  alertBox2.classList.remove("scale-100");
  alertBox2.classList.add("scale-0");

  setTimeout(() => {
    alertBg.classList.remove("translate-y-0");
    alertBg.classList.add("-translate-y-100");
  }, 500);
}

function nextAlert() {
  alertBox1.classList.remove("scale-100");
  alertBox1.classList.add("scale-0");

  setTimeout(() => {
    alertBox2.classList.remove("scale-0");
    alertBox2.classList.add("scale-100");
  }, 500);
}

// Nav Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLists = document.querySelectorAll('#navList li');

hamburgerBtn.addEventListener('click', () => {
  if(hamburgerMenu.classList.contains('-translate-x-full')) {
    hamburgerMenu.classList.remove('-translate-x-full');
    hamburgerMenu.classList.add('translate-x-0');

    navLists.forEach(list => {
      list.classList.add('opacity-0');
      list.classList.add('-translate-x-2');
      list.classList.add('transition-all');
      list.classList.add('duration-300');
      list.classList.add('ease-in-out');
    });

    navLists.forEach((list, index) => {
      setTimeout(() => {
        list.classList.remove('opacity-0');
        list.classList.add('opacity-100');
        list.classList.remove('-translate-x-2');
        list.classList.add('translate-x-0');
      }, 500 + (index * 300));
    });
  } else {
    hamburgerMenu.classList.remove('translate-x-0');
    hamburgerMenu.classList.add('-translate-x-full');

    navLists.forEach(list => {
      list.classList.remove('opacity-100');
      list.classList.add('opacity-0');
      list.classList.remove('translate-x-0');
      list.classList.add('-translate-x-2');
    });
  }
});

navLists.forEach(list => {
  list.addEventListener('click', () => {
    hamburgerMenu.classList.remove('translate-x-0');
    hamburgerMenu.classList.add('-translate-x-full');
  });
});