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
  let navUI = "";
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navUI += `<li><a class = "menu__link" href="#${sectionID}">${sectionDataNav}</a></li>;`;
  });
  navigation.innerHTML = navUI;
};
navBuilder();
// Add class 'active' to section when near top of viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// Scroll to anchor ID using scrollTO event
const scrolling = () => {
  const links = document.querySelectorAll(".navbar_menu a");
  links.forEach((link, indek) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[index].scrollIntoView({
          behavior: "smooth",
        });
      }
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
const addActive = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};

// Set sections as active
