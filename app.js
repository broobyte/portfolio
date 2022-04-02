/*-----------
    SELECTORS
-------------*/

// Element for user click.
const toggle = document.getElementById("toggle");
const nav = document.querySelector("nav");
const projectsItem = document.querySelectorAll("#projectsItem");
const projectsItemText = document.querySelectorAll("#projectsItemText");
const projectsAsideText = document.getElementById("projectsAsideText");
const email = document.getElementById("email");

/*---------
    GLOBALS
-----------*/

const projectText = [
  "A personal blog made with Nodejs and MongoDB.<br /> <a href='/'>Go to <i class='fa-solid fa-arrow-up-right-from-square'></i></a>",
  "A random colour switcher where you can find both the name and hex values.<br /> <a href='/colours'>Go to <i class='fa-solid fa-arrow-up-right-from-square'></i></a>",
  "A bot who scrapes news articles for the most common word of the day.<br /> <a href='https://www.reddit.com/r/commonword' target='_blank'>Reddit <i class='fa-solid fa-arrow-up-right-from-square'></i></a> | <a href='https://www.twitter.com/commonwordbot' target='_blank'>Twitter <i class='fa-solid fa-arrow-up-right-from-square'></i></a>",
];

// Default theme load.
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light"); // Default theme.
} else {
  theme(localStorage.getItem("theme")); // User theme.
}

// User click.
toggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light") {
    theme("dark"); // Switch theme.
  } else {
    theme("light"); // Switch theme.
  }
});

/*-----------
    FUNCTIONS
-------------*/

// Set theme.
function theme(val) {
  if (val === "light") {
    localStorage.setItem("theme", "light");

    toggle.classList.remove("fa-toggle-on");
    toggle.classList.add("fa-toggle-off");

    document.body.style.backgroundColor = "var(--BGprimaryLight)";
    document.body.style.color = "var(--Textlight)";
    nav.style.backgroundColor = "rgba(241, 243, 245, 0.199)";
    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].addEventListener("click", () => {
        projectsAsideText.innerHTML = projectText[i];
      });

      projectsItem[i].style.backgroundColor = "var(--BGsecondaryLight)";
      projectsItemText[i].style.color = "var(--Textlight)";
    }
    email.style.backgroundColor = "var(--BGprimaryLight)";
    email.style.color = "var(--Textlight)";
  } else if (val === "dark") {
    localStorage.setItem("theme", "dark");

    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");

    document.body.style.backgroundColor = "var(--BGprimaryDark)";
    document.body.style.color = "var(--Textdark)";
    nav.style.backgroundColor = "rgba(31, 31, 31, 0.199)";
    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].addEventListener("click", () => {
        projectsAsideText.innerHTML = projectText[i];
      });

      projectsItem[i].style.backgroundColor = "var(--BGsecondaryDark)";
      projectsItemText[i].style.color = "var(--Textdark)";
    }
    email.style.backgroundColor = "var(--BGprimaryDark)";
    email.style.color = "var(--Textdark)";
  }
}

// Animate elements.
function animate(el, animation, delay, speed, repeat) {
  el.classList.add("animate__animated");
  el.classList.add(`animate__${animation}`);
  el.classList.add(`animate__${delay}`);
  el.classList.add(`animate__${speed}`);
  el.classList.add(`animate__${repeat}`);
  el.addEventListener("animationend", () => {
    el.classList.remove("animate__animated");
    el.classList.remove(`animate__${animation}`);
    el.classList.remove(`animate__${delay}`);
    el.classList.remove(`animate__${speed}`);
    el.classList.remove(`animate__${repeat}`);
  });
}
