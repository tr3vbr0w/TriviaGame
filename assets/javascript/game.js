
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
    incorrectAns : ["Budweiser", "Uinta Lime Pilsner", "PBR Tallboys", ],
    correctAns : "Diet Coke"
    },
]
//Variables Initializing correct and incorrect answers
var unusedQuestion = [question[0], question[1], question[2], question[3], question[4]];
var usedQuestion = [];
// var correctAns = 0;
var incorrectAns = 0;

//Function to pull random question from unusedQuestion array, add it to the usedQuestion array, and save the correct answer within the question div
function randomQuestion() {
    var q = Math.floor(Math.random() * Math.floor(question.length))
    usedQuestions.splice(1, 0, question[q])
    unusedQuestions.splice(question[q], 1)
    console.log(usedQuestions)
    return q
  }
//On key press, the browser selects a random question object from the questions array then fills the information in the cooresponding 

console.log(randomQuestion())  



console.log(question1.correctAns);
