AOS.init({
  duration: 1000,
  once: true,
});

// Smooth Scroll
document.querySelectorAll("a.nav-link, a.btn").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const section = document.querySelector(this.hash);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Navbar Shrink on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

const countUp = (counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        countUp(counter);
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => observer.observe(counter));

// Show Modal After 3 Seconds
window.onload = function () {
  setTimeout(function () {
    const modal = new bootstrap.Modal(document.getElementById("signupModal"), {
      keyboard: false,
    });
    modal.show();
  }, 3000);
};
