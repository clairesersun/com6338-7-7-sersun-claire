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
    var PREVIOUS_SCORE = 'previous_score'
    var score
    var timerEl
    var optionBtn
    var correct
    // //score is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). This number should be rounded to the nearest whole number.
    score = Math.floor((correct / 5) + 1)
    var i = 0
    var prevScore

//on load add a start quiz button
var quiz = document.querySelector('#quiz')
var createStartBtn = document.createElement('button')
//The button MUST have an id attribute of "start-quiz"
createStartBtn.setAttribute('id', 'start-quiz')
var startQuizBtnTxt = document.createTextNode('Start Quiz!')
createStartBtn.appendChild(startQuizBtnTxt)
quiz.appendChild(createStartBtn)

var game = function() {
    //remove the previous score IF it is there
    if (prevScore) {
      prevScore.remove()
    }
    //remove the start Quiz btn
    var startQuizBtn = document.getElementById('start-quiz')
    startQuizBtn.remove()
    //select the first question in questionsArr and display the question 
      //create a p for question
      var createQuesPara = document.createElement('p')
      var quesParaTxt = document.createTextNode(questionsArr[i].question)
      createQuesPara.appendChild(quesParaTxt)
      createQuesPara.setAttribute('id', 'question')
      quiz.appendChild(createQuesPara)
      //create 4 btns for possible answers
      // in another div show the possible choices as BUTTONS
      for (let ii = 0; ii < questionsArr[i].options.length; ii++) {
        const quesOptions = questionsArr[i].options[ii];
        var createAnsBtn = document.createElement('button')
        var ansBtnTxt = document.createTextNode(quesOptions)
        createAnsBtn.appendChild(ansBtnTxt)
        createAnsBtn.setAttribute('class', 'option')
        quiz.appendChild(createAnsBtn)
        var option = document.querySelector('.option')
        option.onClick = function() {
          i += 1
          if (questionsArr[i].options[ii] == questionsArr[1].answer) {
            correct =+ 1
        }
        }
      }
      //create a p for timer
      //The quiz should also display a timer that counts down from 30 one second at a time
      var createTimerPara = document.createElement('p')
      var timerParaTxt = document.createTextNode('30')
      createTimerPara.appendChild(timerParaTxt)
      createTimerPara.setAttribute('id', 'timer')
      quiz.appendChild(createTimerPara)
      startTimer
      //Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. 
}

//use JavaScript's setInterval and clearInterval methods to create the timer.
var startTimer = setInterval(function() {
  var timerEl = document.getElementById('timer')
  //count down every second from p on page
  var seconds = Number(timerEl.textContent) - 1
  if (seconds === -1) {
    //clear the count down when it gets past 0
    clearInterval(startTimer)
  } else {
    //show the count down      
    timerEl.textContent = seconds
  }
  //miliseconds - 1 second == 1000 miliseconds
}, 1000)

// JavaScript localStorage API to store the user's most recent score under the key previous-score after each game and retrieve the score on page load
localStorage.setItem(PREVIOUS_SCORE, score)

var startGame = document.querySelector('#start-quiz')
//on click of button, start game
startGame.onclick = game



// var optionBtn = document.querySelector('button')
//       if (optionBtn.onclick || timerEl.value == -1) {
//       }
//     } endGame

// //If the user has taken the quiz before, the app should ALSO display the previous score
// if (localStorage.getItem(PREVIOUS_SCORE)) {
//   var addPrevScorePara = document.createElement('p')
//   var prevScoreTxt = document.createTextNode('Previous Score: ' + score + '%')
//   addPrevScorePara.appendChild(prevScoreTxt)
//   addPrevScorePara.setAttribute('id', 'previous-score')
//   quiz.appendChild(addPrevScorePara)
// }

// // var prevScore = document.getElementById('previous-score')

// var startGame = function() {
//   //remove the previous score IF it is there
//   if (prevScore) {
//     prevScore.remove()
//   }
//   //remove the start Quiz btn
//   var startQuizBtn = document.getElementById('start-quiz')
//   startQuizBtn.remove()
//   //select the first question in questionsArr and display the question 
//   for (let i = 0; i < questionsArr.length; i++) {
//     //create a p for question
//     var createQuesPara = document.createElement('p')
//     var quesParaTxt = document.createTextNode(questionsArr[i].question)
//     createQuesPara.appendChild(quesParaTxt)
//     createQuesPara.setAttribute('id', 'question')
//     quiz.appendChild(createQuesPara)
//     //create 4 btns for possible answers
//     // in another div show the possible choices as BUTTONS
//     for (let ii = 0; ii < questionsArr[i].options.length; ii++) {
//       const quesOptions = questionsArr[i].options[ii];
//       var createAnsBtn = document.createElement('button')
//       var ansBtnTxt = document.createTextNode(quesOptions)
//       createAnsBtn.appendChild(ansBtnTxt)
//       createAnsBtn.setAttribute('class', 'option')
//       quiz.appendChild(createAnsBtn)
//       if (questionsArr[i].options[ii]) {
//         correct =+ 1
//       }
//     }
//     //create a p for timer
//     //The quiz should also display a timer that counts down from 30 one second at a time
//     var createTimerPara = document.createElement('p')
//     var timerParaTxt = document.createTextNode('30')
//     createTimerPara.appendChild(timerParaTxt)
//     createTimerPara.setAttribute('id', 'timer')
//     quiz.appendChild(createTimerPara)
//     startTimer
//     //Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. 
//     var optionBtn = document.querySelector('button')
//     if (optionBtn.onclick || timerEl.value == -1) {
//     }
//   } endGame
// }
// //use JavaScript's setInterval and clearInterval methods to create the timer.
// var startTimer = setInterval(function() {
//   var timerEl = document.getElementById('timer')
//   //count down every second from p on page
//   var seconds = Number(timerEl.textContent) - 1
//   if (seconds === -1) {
//     //clear the count down when it gets past 0
//     clearInterval(startTimer)
//   } else {
//     //show the count down      
//     timerEl.textContent = seconds
//   }
//   //miliseconds - 1 second == 1000 miliseconds
// }, 1000)

// //After the last question is answered or time runs out, the game should display the "start quiz" button along with a score 
// var endGame = function() {
//   createQuesPara.remove()
//   createTimerPara.remove()
//   for (let i = 0; i < questionsArr[i].options.length; i++) {
//     const lastQuesOptions = questionsArr[4].options[i];
//     createAnsBtn.remove()
//   }
//   //start btn
//   //The button MUST have an id attribute of "start-quiz"
//   createStartBtn.setAttribute('id', 'start-quiz')
//   createStartBtn.appendChild(startQuizBtnTxt)
//   quiz.appendChild(createStartBtn)
//   //score
//   var addPrevScorePara = document.createElement('p')
//   var prevScoreTxt = document.createTextNode('Previous Score: ' + previousScore + '%')
//   addPrevScorePara.appendChild(prevScoreTxt)
//   addPrevScorePara.setAttribute('id', 'previous-score')
//   quiz.appendChild(addPrevScorePara)
// }
      
      
          
// var startQuiz = document.querySelector('#start-quiz')
// //on click of button, start game
// startQuiz.onclick = startGame