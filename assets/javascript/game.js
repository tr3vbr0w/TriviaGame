
//Create FIve questions within objects to be called by random number selector, denote correct answer within object to log correct vs incorrect ans
var question = [
    {
    ques : "What is the maximum combined allowable amount of alcohol per cocktail in Utah",
    incorrectAns : ["5 oz", "3.5 oz", "One metric s***ton"],
    correctAns : "2.5 oz"   
    
    }, {
    ques : "How old must you be to have an alcoholic beverage in Utah?",
    incorrectAns : ["18 years old", "All you need is one hand and a mouth", "Two kids and a mortgage"],
    correctAns : "21 years old"
    }, 
    {
    ques : "Which cocktail was made famous by Earnest Hemmingway?",
    incorrectAns : ["Vodka Soda", "Motor Oil", "India Pale Ale"],
    correctAns : "Hemmingway Daquiri"
    
    }, 
    {
    ques : "At what point are you legally too intoxicated to operate a motor vehicle in Utah?",
    incorrectAns : ["If you can dodge a wrench, you can dodge a car", "After three beverages", ".08 BAC"],
    correctAns : ".05 BAC"
    }, 
    {
    ques : "What is the most consumed beer in Utah?",
    incorrectAns : ["Budweiser", "Uinta Lime Pilsner", "PBR Tallboys"],
    correctAns : "Diet Coke"
    // correctAns : incorrectAns[3]
    },
]
// console.log(question[4].correctAns)
//Variables Initializing correct and incorrect answers
var unusedQuestions = [question[0], question[1], question[2], question[3], question[4]];
var usedQuestions = [];
var correct = 0;
var incorrect = 0;
var selected
//Function to pull random question from unusedQuestion array, add it to the usedQuestion array, and save the correct answer within the question div
function randomQuestion() {
    var q = Math.floor(Math.random() * Math.floor(unusedQuestions.length))
    selected = unusedQuestion[q];
    usedQuestions.splice(1, 0, selected);
    unusedQuestions.splice(selected, 1);
    return selected
  }
function randomizeAnswer(){
  var q = Math.floor(Math.random() * Math.floor(selected.incorrectAns.length))
  for (var i = 0; i < selected.incorrectAns.length; i++){
    var ansDiv = $('<div>').addClass('answer-dump')
    var randAns = $('<button>').text(selected.incorrectAns[q]).addClass('incorrect')
    ansDiv.append(randAns)
  }
}

function displayQuestion() {
  var questionDiv = $('<div>').addClass('question-display');
  $('#game').append(questionDiv);
  $('<h1>').text(selected.ques).prependTo(questionDiv);
  randomizeAnswer();

  // $('<div>').addClass('answer-display');
}

var gameTimer = setTimeout(function(){
  //#start-game button is not hiding here once created and clicked
  // setInterval()

  // When timer hits 0, I want to clear the question display

  //Once the display is cleared, i want to let the user know that time has expired

  //Once the display is cleared, I want to create a button to move on to the next question


},2000) 

function buttonCreator() {
  $('.question-display').html("");
  $('.question-display').append('<h1>').text('time is up. Click button for next question');
  $('.question-display').append($('<button>').text('nextquestion').attr('id', 'start-game'));
}




//On key press, the browser selects a random question object from the questions array then fills the information in the cooresponding 

// This Func start my game, calls my func that gen questions and start my timer. 
$('#start-game').on('click', function() {
  $('#start-game').hide();

  // When a user clicks the start game btn I want to select a question randomly
  randomQuestion();
  // When a user clicks the start game btn I want to display that random question
  displayQuestion();
  // When this btn is clicked I want to start my timer because that is what I will use to track the game play
  gameTimer();

  //Begin timeout function, which runs for 10 seconds then clears the question-display div, displaying time is up
})
// $('')
console.log(usedQuestions)




