/**
 *
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
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navigation = document.getElementById("navbar__list"); //
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const navBuilder = () => {
  sections.forEach((section) => {
    let navUI = "";
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navUI += `<li><a class = "menu__link" href="#${sectionID}">${sectionDataNav}</a></li>;`;
    navigation.append(navUI);
  });
};
navBuilder();
// Add class 'active' to section when near top of viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// Scroll to anchor ID using scrollTO event
const scrolling = () => {
  const links = document.querySelectorAll(".navbar_menu a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {}
    });
  });
};
scrolling();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
