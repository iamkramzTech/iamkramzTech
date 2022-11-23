$(document).ready(function () {
  const shrinkNavbar = () => {
    const navbarCollapsible = document.body.querySelector("#mainNav");

    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };
  //shrink the navbar
  shrinkNavbar();

  // Shrink the navbar when page is scrolled
  $(document).scroll(shrinkNavbar);
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 72,
    });
  }
});
