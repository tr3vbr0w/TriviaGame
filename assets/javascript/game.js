
//Create FIve questions within objects to be called by random number selector, denote correct answer within object to log correct vs incorrect ans
var question = [
    ans : [],
    {
    ques : "What is the maximum allowable amount of alcohol per cocktail in Utah",
    
    ans : ["5 oz", "3.5 oz", "2.5 oz", "One metric s***ton"],
    correctAns : ans[2]   
    
    }, {
    ques : "How old must you be to have an alcoholic beverage in Utah?",
    ans : ["18 years old", "21 years old", "All you need is one hand and a mouth", "Two kids and a mortgage"],
    correctAns : ans[1]
    }, 
    {
    ques : "Which cocktail was made famous by Earnest Hemmingway?",
    ans : ["Hemmingway Daquiri", "Vodka Soda", "Motor Oil", "India Pale Ale"],
    correctAns : ans[0]
    
    }, 
    {
    ques : "At what point are you legally too intoxicated to operate a motor vehicle in Utah?",
    ans : ["If you can dodge a wrench, you can dodge a car", "After three beverages", ".08 BAC", ".05 BAC"],
    correctAns : ans[3]
    }, 
    {
    ques : "What is the most consumed beer in Utah?",
    ans : ["Budweiser", "Uinta Lime Pilsner", "PBR Tallboys", "Diet Coke"],
    correctAns : ans[3]
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

console.log(randomQuestion())  



console.log(question1.correctAns);
