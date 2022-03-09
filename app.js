const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navmenu");
// const bsCollapse = new bootstrap.Collapse(menuToggle);

// close the navbar when click on the link

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("show");
  });
});

// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.hide();
//   });
// });
