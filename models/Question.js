export class Question {
  /**
   *
   * @param {String} text this is the text of a question
   * @param {String[]} choices this are the choice of the question
   * @param {String} answer this is the response
   */
  constructor(text, choices, answer) {
    this.text = text
    this.choices = choices
    this.answer = answer
  }

  /**
   * // Methods
   * @param {String} choice some text to guess
   * @returns {boolean} returns true is the answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer
  }
}
