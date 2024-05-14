const answerButtons = document.querySelectorAll('[data-js="show-hide-button"]');

answerButtons.forEach((answerButton) => {
  answerButton.addEventListener("click", (event) => {
    const parentCard = event.target.closest('[data-js="card"]');
    const answer = parentCard.querySelector('[data-js="answer"]');

    answer.classList.toggle("card__answer--visible");

    if (answer.classList.contains("card__answer--visible")) {
      answerButton.textContent = "Hide Answer";
    } else {
      answerButton.textContent = "Show Answer";
    }
  });
});

const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((bookmarkButton) => {
  bookmarkButton.addEventListener("click", (event) => {
    const parentIcon = event.target.closest('[data-js="card__bookmark--icon"]');

    if (parentIcon.classList.contains("bookmark--unmarked")) {
      parentIcon.classList.remove("bookmark--unmarked");
      parentIcon.classList.add("bookmark--marked");
      parentIcon.setAttribute("alt", "a marked bookmark icon");
    } else {
      parentIcon.classList.remove("bookmark--marked");
      parentIcon.classList.add("bookmark--unmarked");
      parentIcon.setAttribute("alt", "an unmarked bookmark icon");
    }
  });
});

/* Dark Mode */

/* 1. in CSS verändertes Styling bei Hinzufügen von Klasse .dark  */
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
