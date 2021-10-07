// @ts-check
import { questions } from "./data/questions.js"
import { Quiz } from "./models/Quiz.js"
import { UI } from "./models/UI.js"

/**
 *
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui Object
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    console.log(quiz.score)
    ui.showScores(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text)
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice)
      renderPage(quiz, ui)
    })
    ui.showProgress(quiz.questionsIndex + 1, questions.length)
  }
}

function main() {
  const quiz = new Quiz(questions)

  const ui = new UI()

  renderPage(quiz, ui)
}

main()
