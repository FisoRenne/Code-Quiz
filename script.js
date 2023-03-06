const startButton = document.getElementById('start_button')
const NextButton = document.getElementById('start_button')
const questionContainerElement = document.getElementById('question_container')
const questionElement = document.getElementById('que_text')
const answerButtonsElement = document.getElementById('option_list')

let shuffledQuestions,currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(()=> Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
  resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
questionElement.innerText = question.question
question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
})
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){

}

const questions = [
    {
      question: 'What Does HTML stand for?',
       answers: [
        {text: 'Hyper Text Preprocessor', correct: false},
        {text: 'Hyper Text Markup Language', correct: true},
        {text: 'Hyper Text Multiple Language', corrext: false},
        {text: 'Hyper Tool Multi Language', correct: false}
      ]
    }
]