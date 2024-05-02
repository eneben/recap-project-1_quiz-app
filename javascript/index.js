const answerButtonList = document.querySelectorAll(
  '[data-js="show-hide-button"]'
);

answerButtonList.forEach((itemButton) => {
  itemButton.addEventListener("click", (event) => {
    // console.log("This button was clicked:", event.target);

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

const bookmarkButtonList = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtonList.forEach((bookmarkButton) => {
  bookmarkButton.addEventListener("click", (event) => {
    // console.log("This button was clicked:", event.target);
    // console.log(
    //   "event.target.closest:",
    //   event.target.closest(".card__bookmark--icon")
    // );

    const parentIcon = event.target.closest(".card__bookmark--icon");

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

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="form-main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const question = formElements.form__question.value;
  const answer = formElements.form__answer.value;
  const code = formElements.form__code.value;
  const tag = formElements.form__tag.value;

  function addCard(question, answer, code, tag) {
    const newCard = document.createElement("section");
    newCard.classList.add("card");
    newCard.setAttribute("aria-label", "quiz-card");
    main.append(newCard);

    const newBookmarkButton = document.createElement("button");
    newBookmarkButton.classList.add("card__bookmark");
    newBookmarkButton.setAttribute("aria-label", "bookmark for the quiz-card");
    newBookmarkButton.setAttribute("data-js", "bookmark-button");
    newBookmarkButton.innerHTML = `
    <svg class="card__bookmark--icon bookmark--unmarked"
          alt="an unmarked bookmark icon"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
          </svg>
    `;
    newCard.append(newBookmarkButton);

    const newQuestion = document.createElement("p");
    newQuestion.classList.add("card__question");
    // newQuestion.setAttribute("id", "hier müsste die id hochzählen")
    newQuestion.textContent = question;
    newCard.append(newQuestion);

    const newAnswerButton = document.createElement("button");
    newAnswerButton.classList.add("card__show-hide-button");
    newAnswerButton.setAttribute("aria-label", "button");
    newAnswerButton.setAttribute("data-js", "show-hide-button");
    newAnswerButton.textContent = "Hide Answer";
    newCard.append(newAnswerButton);

    const newAnswerContainer = document.createElement("div");
    newAnswerContainer.classList.add("card__answer", "card__answer--visible");
    // newAnswerContainer.setAttribute("aria-labelledby", "hier müsste die id von oben hochzählen");
    newAnswerContainer.setAttribute("data-js", "answer");
    newCard.append(newAnswerContainer);

    const newAnswer = document.createElement("p");
    newAnswer.textContent = answer;
    newAnswerContainer.append(newAnswer);

    const newCodeContainer = document.createElement("div");
    newCodeContainer.classList.add("card__answer__code-block");
    newAnswerContainer.append(newCodeContainer);

    const newCode = document.createElement("code");
    newCode.textContent = code;
    newCodeContainer.append(newCode);

    const newTagList = document.createElement("ul");
    newTagList.classList.add("card__hashtags");
    newTagList.setAttribute("aria-label", "relating hashtags to this card");
    newCard.append(newTagList);

    const newTag = document.createElement("li");
    newTag.classList.add("card__hashtags__tag");
    newTag.textContent = tag;
    newTagList.append(newTag);
  }

  addCard(question, answer, code, tag);

  event.target.reset();
  formElements.form__question.focus();
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
