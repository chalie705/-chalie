/* =========================================================
   CONFIG — edit your links here
   ========================================================= */
const CONFIG = {
  github: "https://github.com/chalie705",
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO: your LinkedIn URL
  email: "chaliemelkamu6@gmail.com",
};

/* Apply configured links */
document.querySelectorAll("[data-link]").forEach((a) => {
  const key = a.dataset.link;
  const val = CONFIG[key];
  if (!val) return;
  a.href = key === "email" ? `mailto:${val}` : val;
  if (a.dataset.show === "text") a.textContent = val.replace(/^https?:\/\/(www\.)?/, "");
});

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Theme toggle */
const root = document.documentElement;
document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* Mobile menu */
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const setMenu = (open) => {
  navLinks.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("is-open")));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* Nav shadow on scroll */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Active section highlight */
const links = [...document.querySelectorAll(".nav__link")];
const sections = links.map((l) => document.querySelector(l.getAttribute("href")));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${en.target.id}`));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => s && spy.observe(s));

/* Reveal on scroll */
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); reveal.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

/* Project filters */
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach((btn) => btn.addEventListener("click", () => {
  const f = btn.dataset.filter;
  filters.forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-pressed", String(b === btn)); });
  projects.forEach((p) => { p.hidden = !(f === "all" || p.dataset.tags.split(" ").includes(f)); });
}));

/* Missing project images → elegant fallback */
document.querySelectorAll(".project__media img").forEach((img) => {
  img.addEventListener("error", () => img.parentElement.classList.add("is-fallback"), { once: true });
});

/* Contact form — validation + mailto (no backend connected) */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const messages = {
  valueMissing: "This field is required.",
  typeMismatch: "Please enter a valid email address.",
  tooShort: (el) => `Please use at least ${el.minLength} characters.`,
};
const validate = (el) => {
  const err = el.parentElement.querySelector(".err");
  let msg = "";
  if (el.validity.valueMissing) msg = messages.valueMissing;
  else if (el.validity.typeMismatch) msg = messages.typeMismatch;
  else if (el.validity.tooShort) msg = messages.tooShort(el);
  err.textContent = msg;
  el.setAttribute("aria-invalid", msg ? "true" : "false");
  return !msg;
};
form.querySelectorAll("input:not(.hp), textarea").forEach((el) => el.addEventListener("blur", () => validate(el)));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.className = "form__status";
  if (form.website.value) return; // honeypot triggered — silently ignore bots
  const fields = [...form.querySelectorAll("input:not(.hp), textarea")];
  const ok = fields.map(validate).every(Boolean);
  if (!ok) {
    status.textContent = "Please fix the highlighted fields.";
    status.classList.add("is-error");
    return;
  }
  const body = `Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Your email app should now open with the message ready to send.";
  status.classList.add("is-success");
  form.reset();
});
