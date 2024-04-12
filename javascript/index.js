/* Dark Mode */

/* 1. in CSS verändertes Styling bei Hinzufügen von Klasse .dark  */
/* 2. in JavaScript bei Click auf Checkbox Klasse dark in allen Elementen hinzufügen, die das betrifft */
/* 3. if Klasse=dark in classList, dann Icons anderer Pfad (nämlich weiße bzw. hellgrüne) */
/* 4. gleiches Vorgehen für die anderen Seiten (erst mal nur profile.html) */

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
