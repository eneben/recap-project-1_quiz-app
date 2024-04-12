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
