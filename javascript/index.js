const answerButton = document.querySelector('[data-js="show-hide-button"]');

const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  console.log("button clicked");
  answer.classList.toggle("visible");
});
