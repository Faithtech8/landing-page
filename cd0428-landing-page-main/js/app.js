/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 */

/**
 * Global Variables
 */
const navMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/**
 * Helper Functions
 */

// Calculate offset from the top of the viewport

/**
 * Main Functions
 */

// Build the navigation menu

function buildNavMenu() {
  const fragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
    fragment.appendChild(listItem);
  });

  navMenu.appendChild(fragment);
}
buildNavMenu();

function highlightActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Attach scroll event to highlight active section
window.addEventListener("scroll", highlightActiveSection);

// Scroll to anchor ID using scrollIntoView event
const scrollToSection = (event) => {
  event.preventDefault();
  const link = event.target;

  const section = document.getElementById(link.getAttribute("href").slice(1));

  section.scrollIntoView({ behavior: "smooth" });
};

// Attach click event to navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Call the function to enable smooth scrolling to anchor IDs

/**
 * Events
 */

// Add class 'your-active-class' to section when near top of viewport
const addActiveClass = (section) => {
  const sectionOffset = getOffsetFromTop(section);
  const isInViewport = sectionOffset < 200 && sectionOffset >= -200; // Adjust this value to change the activation point

  if (isInViewport) {
    section.classList.add("your-active-class");
  } else {
    section.classList.remove("your-active-class");
  }
};

// Helper function to get the offset of an element from the top of the viewport
const getOffsetFromTop = (element) => {
  const { top } = element.getBoundingClientRect();
  return top;
};

const setActiveSections = () => {
  sections.forEach((section) => {
    setSectionActive(section);
  });
};

const setSectionActive = (section) => {
  const sectionOffset = getOffsetFromTop(section);
  const isInViewport = sectionOffset < 200 && sectionOffset >= -200;

  if (isInViewport) {
    section.classList.add("your-active-class");
  } else {
    section.classList.remove("your-active-class");
  }
};
