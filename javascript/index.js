/* Toggle Button auf index.html */

const answerButtonList = document.querySelectorAll(
  '[data-js="show-hide-button"]'
);

answerButtonList.forEach((itemButton) => {
  itemButton.addEventListener("click", (event) => {
    console.log("button clicked");
    console.log("This button was clicked:", event.target);

    const parentCard = event.target.closest(".card");
    const answer = parentCard.querySelector('[data-js="answer"]');

    answer.classList.toggle("card__answer--visible");

    if (answer.classList.contains("card__answer--visible")) {
      itemButton.textContent = "Hide Answer";
    } else {
      itemButton.textContent = "Show Answer";
    }
  });
});

/* Toggle Bookmark auf index.html */

/* Dark Mode */

/* check 1. in CSS verändertes Styling bei Hinzufügen von Klasse .dark  */
/* 2. in JavaScript bei Click auf Checkbox Klasse dark in allen Elementen hinzufügen, die das betrifft */
/* 3. if Klasse=dark in classList, dann Icons anderer Pfad (nämlich weiße bzw. hellgrüne) */
/* 4. gleiches Vorgehen für die anderen Seiten (erst mal nur profile.html) */

// const body = document.querySelector('[data-js="body"]');
// const header = document.querySelector('[data-js="header"]');
// const counter = document.querySelector('[data-js="counter"]');
// const footer = document.querySelector('[data-js="footer"]');
// const navbar = document.querySelector('[data-js="navbar"]');
// const navbarElement = document.querySelector('[data-js="navbar-element"]');
// const active = document.querySelector('[data-js="active"]');

// const slider = document.querySelector('[data-js="slider"]');

// console.log(slider);

// slider.addEventListener("click", () => {
//   console.log("event");
//   body.classList.toggle("dark");
//   header.classList.toggle("dark");
//   counter.classList.toggle("dark");
//   footer.classList.toggle("dark");
//   navbar.classList.toggle("dark");
//   navbarElement.classList.toggle("dark");
//   active.classList.toggle("dark");
// });
