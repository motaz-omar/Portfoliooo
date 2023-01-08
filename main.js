const home = document.querySelector("#home");
const about = document.querySelector("#about-me");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const homeIcon = document.querySelector("#home-icon");
const aboutIcon = document.querySelector("#about-icon");
const projectsIcon = document.querySelector("#projects-icon");
const contactIcon = document.querySelector("#contact-icon");

const lightMode = document.querySelector("#theme");
homeIcon.addEventListener("click", function () {
  homeIcon.style.backgroundColor = "var(--color-text-secondary)";
  aboutIcon.style.backgroundColor = "var(--color-icon)";
  projectsIcon.style.backgroundColor = "var(--color-icon)";
  contactIcon.style.backgroundColor = "var(--color-icon)";
  home.style.display = "grid";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  window.scrollTo(0, 0);
});
aboutIcon.addEventListener("click", function () {
  home.style.display = "none";
  about.style.display = "flex";
  projects.style.display = "none";
  contact.style.display = "none";
  homeIcon.style.backgroundColor = "var(--color-icon)";
  aboutIcon.style.backgroundColor = "var(--color-text-secondary)";
  projectsIcon.style.backgroundColor = "var(--color-icon)";
  contactIcon.style.backgroundColor = "var(--color-icon)";
  window.scrollTo(0, 0);
});
projectsIcon.addEventListener("click", function () {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "block";
  contact.style.display = "none";
  homeIcon.style.backgroundColor = "var(--color-icon)";
  aboutIcon.style.backgroundColor = "var(--color-icon)";
  projectsIcon.style.backgroundColor = "var(--color-text-secondary)";
  contactIcon.style.backgroundColor = "var(--color-icon)";
  window.scrollTo(0, 0);
});
contactIcon.addEventListener("click", function () {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "grid";
  homeIcon.style.backgroundColor = "var(--color-icon)";
  aboutIcon.style.backgroundColor = "var(--color-icon)";
  projectsIcon.style.backgroundColor = "var(--color-icon)";
  contactIcon.style.backgroundColor = "var(--color-text-secondary)";
  window.scrollTo(0, 0);
});
lightMode.addEventListener("click", function () {
  const light = document.querySelector(":root");
  light.classList.toggle("light-mode");
});
