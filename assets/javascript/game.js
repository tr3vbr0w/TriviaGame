
//Create FIve questions within objects to be called by random number selector, denote correct answer within object to log correct vs incorrect ans
var question = [
    {
    ques : "What is the maximum combined allowable amount of alcohol per cocktail in Utah",
    ans : ["5 oz", "3.5 oz", "One metric s***ton", "2.5 oz"],
    correctAns : "2.5 oz"   
    
    }, {
    ques : "How old must you be to have an alcoholic beverage in Utah?",
    ans : ["21 years old", "18 years old", "All you need is one hand and a mouth", "Two kids and a mortgage"],
    correctAns : "21 years old"
    }, 
    {
    ques : "Which cocktail was made famous by Earnest Hemmingway?",
    ans : ["Hemmingway Daquiri", "Vodka Soda", "Motor Oil", "India Pale Ale"],
    correctAns : "Hemmingway Daquiri"
    
    }, 
    {
    ques : "At what point are you legally too intoxicated to operate a motor vehicle in Utah?",
    ans : ["If you can dodge a wrench, you can dodge a car", "After three beverages", ".08 BAC", ".05 BAC"],
    correctAns : ".05 BAC"
    }, 
    {
    ques : "What is the most consumed beer in Utah?",
    ans : ["Budweiser", "Uinta Lime Pilsner", "PBR Tallboys", "Diet Coke"],
    correctAns : "Diet Coke"
    },
]


//Variables Initializing correct and incorrect answers
var unusedQuestions = [question[0], question[1], question[2], question[3], question[4]];
var usedQuestions = [];
var correct = 0;
var incorrect = 0;
var selected

//Function to pull random question from unusedQuestion array, add it to the usedQuestion array, and save the correct answer within the question div
function randomQuestion() {
    var q = Math.floor(Math.random() * Math.floor(unusedQuestions.length))
    selected = unusedQuestions[q];
    usedQuestions.splice(1, 0, selected);
    unusedQuestions.splice(selected, 1);
    console.log('this is the unusedQuestions Array '+ usedQuestions[q])
  }

  
  
//This function exists to randomize answers
function btnClick (){
    //Adds click handler for each button in the ans-dump div
    var btns = $('#ans-btn')
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      $('#ans-btn').on('click', function(){
        $('#game').html('');
     //This if statement checks to see if the clicked button is equal to the correct answer, then 
        console.log('this is the button i am trying to add a click event to(theoretically) '+ this)
        if ($('#ans-btn') === selected.correctAns){
            var cor =$('<h1>').text('Good Job');
            $('#game').append(cor);
          } else {
              var inc = $('<h1>').text('Wrong');
              $('#game').append(inc);
          }
      })
      
    } 
       
}
function displayQuestion() {
  var questionDiv = $('<div>').attr('id','question-div');
  $('#game').append(questionDiv);
  $('<h1>').text(selected.ques).prependTo(questionDiv);
  var ansDiv = $('<div>').addClass('ans-dump')
  $('#game').append(ansDiv);
  //For loop creates a button for each 
  for (var i = -1; i < selected.ans.length + 1; i++){
    //This line of code selects a random answer from the ans array within the selected question
    var a = Math.floor(Math.random() * Math.floor(selected.ans.length))
    //This line of code creates a button with text for each answer within the 
    var randAns = $('<button>').text(selected.ans[a])
    selected.ans.splice(a, 1);
    randAns.attr('id', 'ans-btn')
    if (selected.ans.length === 1) {
      var last = $('<button>').text(selected.ans[0]);
      last.attr('id', 'ans-btn');
    } 
  btnClick(); 
 
  $('.ans-dump').append(randAns)
  $('.ans-dump').append(last)

  }
}




  //#start-game button is not hiding here once created and clicked
  // setInterval()
  
  // When timer hits 0, I want to clear the question display
  $('.question-display').html("");

  //Once the display is cleared, i want to let the user know that time has expired
  $('.question-display').append('<h1>').text('time is up. Click button for next question');

  //Once the display is cleared, I want to create a button to move on to the next question
  $('.question-display').append($('<button>').text('nextquestion').attr('id', 'next-q'));
  $('#next-q').on('click', function(){
    $('.question-display').html('');
    randomQuestion();
    displayQuestion();
    btnClick();
  });









//On key press, the browser selects a random question object from the questions array then fills the information in the cooresponding 

// This Func start my game, calls my func that gen questions and start my timer. 
$('#start-game').on('click', function() {
  //Hide start game button
  $('#start-game').hide();

  // When a user clicks the start game btn I want to select a question randomly
  randomQuestion();
  // When a user clicks the start game btn I want to display that random question
  displayQuestion();
  // When this btn is clicked I want to start my timer because that is what I will use to track the game play

  //Begin timeout function, which runs for 10 seconds then clears the question-display div, displaying time is up
})
// $('')
console.log('Used array ' + usedQuestions)
console.log('Unused array ' + unusedQuestions)




