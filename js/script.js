
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


// toggle 'show-menu' when the bar is clicked in mobile view

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.header__mobile-list');
const navBtn = getElement('.header__mobile-icon');

const menuIcon = getElement('.menu-icon');
const closeIcon = getElement('.close-icon');

navBtn.addEventListener('click', () => {
  links.classList.toggle('show-menu');

  // Toggle between showing the menu and close icons
  if (menuIcon.style.display === 'none') {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
});

