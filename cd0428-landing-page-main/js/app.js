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
const navigation = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * Helper Functions
 */

// Calculate offset from the top of the viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

/**
 * Main Functions
 */

// Build the navigation menu
const navBuilder = () => {
  let navUI = "";
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });
  navigation.innerHTML = navUI;
};
navBuilder();

// Scroll to anchor ID using scrollIntoView event
const scrolling = () => {
  const links = document.querySelectorAll(".menu__link");
  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      sections[index].scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
scrolling();

/**
 * Events
 */

// Add class 'your-active-class' to section when near top of viewport
const addActive = (section) => {
  const sectionOffset = offset(section);
  const isInViewport = sectionOffset < 200 && sectionOffset >= -200; // Adjust this value to change the activation point
  if (isInViewport) {
    section.classList.add("your-active-class");
  } else {
    section.classList.remove("your-active-class");
  }
};

// Set sections as active based on their position in the viewport
const setActiveSections = () => {
  sections.forEach((section) => {
    addActive(section);
  });
};

// Listen for scroll events and update active sections
document.addEventListener("scroll", setActiveSections);
