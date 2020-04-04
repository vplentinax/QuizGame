let QuizGame = (function () {
  const EXIT_COMMAND = 'exit'
  let count = 0
  let score = 0

  let log = (...args) => console.log.apply(this, args)

  function Question(question, options, correctAnswer) {
    this._questions = questions
    this._options = options
    this._correctAnswers = correctAnswers

    this._printQuestion = function () {
      let index = Math.floor(Math.random() * this._questions.length)
      count++
      log(`%c ${count} ${this._questions[index]}`, 'font-weight:bold;')
      log(`
        1. ${this._options[index][0]}
        2. ${this._options[index][1]}
        3. ${this._options[index][2]}`
      )
      let promptAnswer = prompt(
        'Look at your console and select the number that contains the correct answer \nWrite EXIT to end the game'
      )
      this._checkAnswer(index, promptAnswer)
    }

    this._checkAnswer = function (index, promptAnswer) {
      if (typeof promptAnswer === 'string')
        promptAnswer = promptAnswer.toLowerCase()
      while (promptAnswer !== EXIT_COMMAND) {
        if (this._correctAnswers[index] === parseInt(promptAnswer)) {
          log('%c Correct answer!', 'font-weight: bold; color: green;')
          score++
        } else {
          log('%c Wrong answer!', 'font-weight: bold; color: red;')
        }

        return function (score) {
          log(`%c Current score: ${score}`, 'font-weight: bold; color: blue;')
          log('-'.repeat(40));
          this._printQuestion()
        }.call(this, score)
      }
      log('%c BYE!', 'font-weight: bold; color: blue;')
      promptAnswer = 0
    }
  }

  return function (quizConf) {
    this.quiz = new Question(
      quizConf.questions,
      quizConf.options,
      quizConf.correctAnswer
    )
    this.init = () => this.quiz._printQuestion()
  }
})()
