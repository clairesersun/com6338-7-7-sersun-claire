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

//on load add a start quiz button
//The button MUST have an id attribute of "start-quiz"

//If the user has taken the quiz before, the app should ALSO display the previous score

//on click of button, start game
//select the first question in questionsArr and display the question 
// in another div show the possible choices as BUTTONS
//The quiz should also display a timer that counts down from 30 one second at a time
//use JavaScript's setInterval and clearInterval methods to create the timer.

//Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. 
//There should be no messaging or feedback displayed to the user after making a selection or running out of time

//After the last question is answered or time runs out, the game should display the "start quiz" button along with a score 

//score is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). This number should be rounded to the nearest whole number.

// JavaScript localStorage API to store the user's most recent score under the key previous-score after each game and retrieve the score on page load