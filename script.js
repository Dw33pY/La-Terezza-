gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".hero h1", {
  y: -80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero .btn", {
  scale: 0.8,
  opacity: 0,
  delay: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// SCROLL ANIMATIONS FOR CARDS
gsap.utils.toArray(".card, .glass").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// MOBILE MENU LOGIC - FIXED VERSION
const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  
  // CLOSE FUNCTION
  function closeMenu() {
    toggle.classList.remove("active");
    navLinks.classList.remove("active");
    document.body.style.overflow = "auto";
  }
  
  // CLOSE ON LINK CLICK
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
      closeMenu();
    });
  });
  
  // CLOSE IF CLICK OUTSIDE - FIXED
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("active")) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        closeMenu();
      }
    }
  });
  
  // CLOSE ON RESIZE
  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
// ================= BACK TO TOP BUTTON =================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
