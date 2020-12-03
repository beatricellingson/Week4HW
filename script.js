
var start = document.querySelector("startingPage")
var quiz = document.querySelector("quiz")
var question = document.querySelector("questions")
var choice1 = document.querySelector("choice1")
var choice2 = document.querySelector("choice2")
var choice3 = document.querySelector("choice3")
var choice4 = document.querySelector("choice4")
var log = document.querySelector("log")
var initials = document.querySelector("initials")
var endScreen = document.querySelector("endScreen")
var score = document.querySelector("score")
var tryAgain = document.querySelector("tryAgain")
var seeHighscores = document.querySelector("seeHighsores")


var currentIndex = 0;

var questions = [
    {
        question: "How many elves does santa have?",
        choices: ["1,000", "40,000", "80,000", "110,000"],
        answer: "110,000",
    },
    {
        question: "When was the movie Elf released?",
        choices: ["2003", "2006", "1999", "1997"],
        answer: "2003",
    },
    {
        question: "What does the Christmas tree symbolize",
        choices: ["Growth", "Christ", "Nothing", "Life"],
        answer: "Christ",
    },
    {
        question: "Whats the best christmas movie?",
        choices: ["Love Actually", "Christmas Vacation", "The grinch", "Home Alone"],
        answer: "Christmas Vacation",
    },
    {
        question: "How many reindeer pull Santa's sleigh?",
        choices: ["5", "7", "9", "11"],
        answer: "9",
    },
    {
        question: "In what decade did Congress esablish Christmas as a federal holiday?",
        choices: ["1670s", "1770s", "1870s", "1970s"],
        answer: "1870s"
    },
    {
        question: "Which of the following is NOT a name of one of Santa's reindeer?",
        choices: ["Comet", "Cupid", "Dancer", "Gabe"],
        answer: "Gabe",
    },
    {
        question: "What does Santa give to children who are naughty?",
        choices: ["A lump of sugar", "Nothing", "Ichy sweater", "Lump of coal"],
        answer: "Lump of coal",
    },
    {
        question: "Where does Santa live?",
        choices: ["The South Pole", "The Moon", "The Morth Pole", "Upstate New York"],
        answer: "The North Pole"
    },
    {
        question: "In 'The Twelve Days of Christmas' carol, how many golden rings are given?",
        choices: ["3", "4", "5", "6"],
        answer: "5"

    },

];

function startQuiz() {
    console.log("button has been clicked")

    $(".startingPage").removeClass("show").addClass("hidden");
    $(".quiz").removeClass("hidden").addClass("show");

    //execute the function to show questions
    //example for hardcoded js injection
    $(".question").text(questions[currentIndex].question);
    $(".choices").text(questions[currentIndex].choices);

    //start timer function
}

$(".start").on("click", function () {
    startQuiz();
})

// var timeLeft = 60;
// var downloadTimer = setInterval(function () {
//     timeLeft--;
//     document.querySelector(".timer").textContent = timeLeft;
//     if (timeleft <= 0) {
//        pop up end page
//     }
// }, 1000);


// function myFunction(event) {
//     var x = event.target
//     time.innerHTML = timeLeft
// }



// $(start).onclick(function () {
//     e.preventDefault();
//     start.class =

// });




// $(":button").css("background- color", "teal")


