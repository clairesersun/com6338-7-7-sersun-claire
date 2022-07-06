// Your code here

//will contain all of the quiz data that the app will use.
var questionsArr = [
    {
      question: 'Where did Kyra get married?',
      answer: 'Bark Eater Inn',
      options: [
        'Bark Eater Inn',
        'The Lodge on Echo Lake',
        'Promise Gardens',
        'Whiteace Club and Reort',
      ]
    },
    {
        question: 'What day was the wedding?',
        answer: '26 June',
        options: [
          '23 May',
          '14 February',
          '26 June',
          '1 January',
        ]
      },
      {
        question: 'What is their last name?',
        answer: 'Clauss',
        options: [
          'Hoffmann',
          'Becker',
          'Schaefer',
          'Clauss',
        ]
      },
      {
        question: 'How many mini pies did the bride and friends make for the wedding?',
        answer: '98',
        options: [
          '98',
          '183',
          '44',
          '67',
        ]
      },
      {
        question: 'What did NOT happen during their wedding and reception?',
        answer: 'cutting of the cake',
        options: [
          'Communion',
          'Fireworks',
          'Song and dance during the best man speach',
          'cutting of the cake',
        ]
      },
    ]

var quizContainer = document.getElementById('quiz')
var score = 0
var currentQuestion = 0
var timeRemaining
var timerId

quizContainer.onclick = function(e) {
  if (e.target.id === 'start-quiz') {
    drawQuestion()
  } else if (e.target.parentElement.id === 'choices'
  && e.target.tagName === 'BUTTON'){
    if(e.target.textContent === questionsArr[currentQuestion].answer){
      score++
    }
    clearInterval(timerId)
    currentQuestion++
    if (currentQuestion < questionsArr.length){
      drawQuestion()
    } else {
      endGame()
    }
  }
}

function drawGameStart(){
  score = 0
  currentQuestion = 0
  quizContainer.innerHTML = ''
  var previousScore = localStorage.getItem('previous-score')
  if (previousScore){
    var previousScoreEl = document.createElement('p')
    previousScoreEl.textContent = 'Previous Score: ' + previousScore
    quizContainer.appendChild(previousScoreEl)
  }
  var startBtn = document.createElement('button')
  startBtn.id = 'start-quiz'
  startBtn.textContent = "Start Quiz!"
  quizContainer.appendChild(startBtn)
}

function drawQuestion(){
  var questionObj = questionsArr[currentQuestion]
  quizContainer.innerHTML = ""
  var questionTextEl = document. createElement('p')
  questionTextEl.textContent = questionObj.question
  quizContainer.appendChild(questionTextEl)
  var choicesContainer = document.createElement('div')
  choicesContainer.id = 'choices'
  quizContainer.appendChild(choicesContainer)
  questionObj.options.forEach(function(choice){
    var btn = document.createElement('button')
    btn.textContent = choice
    choicesContainer.appendChild(btn)
  })
  timeRemaining = 30
  var timerEl = document.createElement('p')
  timerEl.id = 'timer'
  timerEl.textContent = timeRemaining
  quizContainer.appendChild(timerEl)
  startTimer()
}

function startTimer(){
  var timerEl = document.getElementById('timer')
  timerId = setInterval(function() {
    timeRemaining--
    if (timeRemaining >= 0){
      timerEl.textContent = timeRemaining
    } else {
      clearInterval(timerId)
      currentQuestion++
      if(currentQuestion < questionsArr.length){
        drawQuestion()
      } else {
        endGame()
      }
    }
  }, 1000)
}

function endGame() {
  quizContainer.innerHTML = ""
  var percentage = Math.round(score / questionsArr.length * 100) + '%'
  localStorage.setItem('previous-score', percentage)
  drawGameStart()
}

drawGameStart()