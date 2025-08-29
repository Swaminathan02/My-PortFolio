document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Highlight active nav link on scroll
  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    let offset = 120; // adjust for navbar height
    let currentSection = sections[0];
    for (let section of sections) {
      if (section.offsetTop - offset <= scrollPos) {
        currentSection = section;
      }
    }
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection.id) {
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
});
