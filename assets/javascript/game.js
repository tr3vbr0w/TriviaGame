
//Create FIve questions within objects to be called by random number selector
var question1 = {
    ques : "What is the maximum allowable amount of alcohol per cocktail in Utah",
    ans : ["5 oz", "3.5 oz", "2.5 oz", "One metric s***ton"]
    };
var question2 = {
    ques : "How old must you be to have an alcoholic beverage in Utah?",
    ans : ["18 years old", "21 years old", "All you need is one hand and a mouth", "Two kids and a mortgage"]
};
var question3 = {
    ques : "Which cocktail was made famous by Earnest Hemmingway?",
    ans : ["Hemmingway Daquiri", "Vodka Soda", "Motor Oil", "India Pale Ale"
    ]
};
var question4 = {
    ques : "At what point are you legally too intoxicated to operate a motor vehicle in Utah?",
    ans : ["If you can dodge a wrench, you can dodge a car", "After three beverages", ".08 BAC", ".05 BAC"]
};
var question5 = {
    ques : "What is the most consumed beer in Utah?",
    ans : ["Budweiser", "Uinta Lime Pilsner", "PBR Tallboys", "Diet Coke"]
};
//Variables Initializing correct and incorrect answers
var unusedQuestion = [question1, question2, question3, question4, question5];
var usedQuestion = [];
var correctAns = 0;
var incorrectAns = 0;

//Function to pull random question from unusedQuestion array, add it to the usedQuestion array, display it on the screen in the correct location, and save the correct answer within the question div
function nextQuestion() {
        
    const element = unusedQuestion[i];
    var Q = unusedQuestion[1];
    var usedQ = unusedQuestion.splice(1)
    console.log(usedQuestion); 
        
    
}
// function startGame() {
//     // $("#start-game").click(nextQuestion());
// }
// nextQuestion();
console.log(question1.correctAns);
