export class UI {
  constructor() {}

  /**
   *
   * @param {String} text question to render
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question")

    questionTitle.innerHTML = text
  }

  /**
   *
   * @param {String[]} choices the choices of the question
   */
  showChoices(choices, callback) {
    const choiceContainer = document.getElementById("choices")

    choiceContainer.innerHTML = ""
    for (let i = 0; i < choices.length; i++) {
      const btn = document.createElement("button")

      btn.innerText = choices[i]
      btn.className = "btn"

      btn.addEventListener("click", () => callback(choices[i]))

      choiceContainer.append(btn)
    }
  }
  /**
   *
   * @param {Number} score the total score
   */
  showScores(score) {
    const quizEndHtml = `<h1>Result</h1> 
    <h2>Your Score: ${score}</h2> `

    const element = document.getElementById("quiz")
    element.innerHTML = quizEndHtml
  }

  /**
   *
   * @param {Number} currentIndex the current index of the quiz
   * @param {Number} total total questions number
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress")
    element.innerHTML = `Question ${currentIndex} of ${total}`
  }
}
