const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="form-main"]');
let idCounter = 0;

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

    idCounter++;
    const newQuestionID = "aria-new-question-" + idCounter;

    const newQuestion = document.createElement("p");
    newQuestion.classList.add("card__question");
    newQuestion.setAttribute("id", newQuestionID);
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
    newAnswerContainer.setAttribute("aria-labelledby", newQuestionID);
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
    if (tag[0] === "#") {
      newTag.textContent = tag;
    } else {
      newTag.textContent = "#" + tag;
    }
    newTagList.append(newTag);
  }

  addCard(question, answer, code, tag);

  event.target.reset();
  formElements.form__question.focus();
});
