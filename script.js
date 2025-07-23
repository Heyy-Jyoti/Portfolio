// script.js

// Show sections with animation on scroll
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Animate timeline items as they scroll into view
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.5
});

timelineItems.forEach(item => {
  observer.observe(item);
});

// Smooth scroll for navigation links


  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


// const list = document.querySelectorAll("#certifications-list li");
// let currentIndex = 0;

// // Initially show the first item
// list[currentIndex].classList.add("active");

// function showNext() {
//   list[currentIndex].classList.remove("active");
//   currentIndex = (currentIndex + 1) % list.length;
//   list[currentIndex].classList.add("active");
// }

// function showPrev() {
//   list[currentIndex].classList.remove("active");
//   currentIndex = (currentIndex - 1 + list.length) % list.length;
//   list[currentIndex].classList.add("active");
// }

// // Auto-rotate every 3 seconds
// const interval = setInterval(showNext, 3000);

// // Optional: add buttons for manual control

// document.getElementById("prevBtn").addEventListener("click", showPrev);
// document.getElementById("nextBtn").addEventListener("click", showNext);


const lists = [
  "certifications-list1",
  "certifications-list2",
  "certifications-list3"
];

lists.forEach(listId => {
  const ul = document.getElementById(listId);
  const items = ul.querySelectorAll("li");
  let index = 0;

  items[index].classList.add("active");

  setInterval(() => {
    items[index].classList.remove("active");
    index = (index + 1) % items.length;
    items[index].classList.add("active");
  }, 2000);
});
