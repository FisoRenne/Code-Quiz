const startButton = document.getElementById('start_button')
const questionContainerElement = document.getElementById('question_container')
const questionElement = document.getElementById('que_text')
const answerButtonsElement = document.getElementById('option_list')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(()=> Math.random()- .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('answer_button')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
})
}

function resetState() {
  clearStatusClass(document.body)
}

function selectAnswer(e) {
  const selectedButton = e.target 
  const correct= selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.lenght > currentQuestionIndex + 1) {

  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: 'What Does HTML stand for?',
       answers: [
        {text: 'Hyper Text Preprocessor', correct: false},
        {text: 'Hyper Text Markup Language', correct: true},
        {text: 'Hyper Text Multiple Language', corrext: false},
        {text: 'Hyper Tool Multi Language', correct: false}
      ],
      question: 'Arrays in Javascript can be used to store in?',
      answers: [
        {text: 'numbers/strings', correct:false},
        {text: 'other arrays', correct:false},
        {text: 'booleans', correct:false},
        {text: 'All of the above', correct: true}
      ],
      question: '____ is the process of finding errors and fixing them within a program.', 
      answers: [
        {text: 'Compiling', correct:false},
        {text: 'Executing', correct: false},
        {text: 'Debugging', correct: true},
        {text: 'Scanning', correct: false}
      ],
      question: 'Which of the following keywords is used to define a variable in JavaScript?',
      answers: [
        {text: 'var', correct: false},
        {text: 'let', correct: false},
        {text:'Both var and let', correct: true},
        {text: ' None of above', correct: false}
      ],
      question: 'How to stop an interval timer in Javascript',
      answers: [
        {text: 'clearInterval', correct: true},
        {text: 'clearTimer', correct: false},
        {text: 'IntervalOver', correct: false},
        {text: 'None of the above', correct: false}
      ]
    }
]