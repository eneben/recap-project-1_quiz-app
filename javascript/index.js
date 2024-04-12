/* Dark Mode */

/* check 1. in CSS verändertes Styling bei Hinzufügen von Klasse .dark  */
/* 2. in JavaScript bei Click auf Checkbox Klasse dark in allen Elementen hinzufügen, die das betrifft */
/* 3. if Klasse=dark in classList, dann Icons anderer Pfad (nämlich weiße bzw. hellgrüne) */
/* 4. gleiches Vorgehen für die anderen Seiten (erst mal nur profile.html) */

const body = document.querySelector('[data-js="body"]');
const header = document.querySelector('[data-js="header"]');
const counter = document.querySelector('[data-js="counter"]');
const footer = document.querySelector('[data-js="footer"]');
const navbar = document.querySelector('[data-js="navbar"]');
const active = document.querySelector('[data-js="active"]');

const slider = document.querySelector('[data-js="slider"]');

slider.addEventListener("click", () => {
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  counter.classList.toggle("dark");
  footer.classList.toggle("dark");
  navbar.classList.toggle("dark");
  active.classList.toggle("dark");
});

/* Toggle Button auf index.html */

const answerButton = document.querySelector('[data-js="show-hide-button"]');

const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  console.log("button clicked");

  answer.classList.toggle("visible");

  if (answer.classList.contains("visible")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});

/*
erst hatte ich es so gemacht:

if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }

also mit anderer if-bedingung als jetzt.

das hat nicht funktioniert. warum nicht??

*/
