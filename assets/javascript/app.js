//Game object for questions, answers, and options
var game = {
    question1: {
        question: "What is an Arcade?",
        answer: "A place to play games!", 
        funfact: "An arcade is also classically defined as a covered passageway with arches along one or both sides.",
        options: ["A place to play games!", "A place to dock a ship!", "A place to get your haircut!", "A place to park your car!"],
    },
    question2: {
        question: "What character jumped over barrels in Donkey Kong?",
        answer: "Mario",
        funfact: "Mr. Video and Jumpman were the original names for Mario.",
        options: [],
    },
    question3: {
        question: "What was the world's first Arcade Game?",
        answer: "Computer Space", 
        funfact: "Computer Space was derived from an earlier video game called, Spacewar!",
        options: [],
    },
    question4: {
        question: "What are the names of the four ghosts in Pac-Man?",
        answer: "Blinky, Pinky, Inky, and Clyde", 
        funfact: "Blinky and Pinky chase Pac-Man directly, Inky uses strategic ambush tactics, and Clyde behaves completely randomly.",
        options: [],
    },
    question5: {
        question: "The Super Mushrooms which cause Mario to grow were inspired by what classic story tale?",
        answer: "Alice in Wonderland", 
        funfact: "The mushrooms in Alice in Wonderland caused her to grow!",
        options: [],
    },
    question6: {
        question: "What game caused the current rating system for video games?",
        answer: "Mortal Kombat",
        funfact: "The original Mortal Kombat was developed in 10 months by a group of only four people!",
        options: [],
    },
    question7: {
        question: "What company did video game pioneers Nolan Bushnell and Ted Dabney create?",
        funfact: "Atari's first commercial success was the class game Pong!",
        answer: "Atari",
        options: [],
    },
    question8: {
        question: "What is the longest lived game series whose Main Playable Character is a female?",
        answer: "Metroid",
        funfact: "While Samus Aran may not be the first playable female character, Nintendo has been making Metroid games since 1986!", 
        options: [],
    }
}

//Function to randomize answer array on propagation 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var timeLeft = 30;
var elem = $("#timer");


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(0);
    } else {
        $("#timer").text("Countdown: " + timeLeft + " seconds remaining")
        timeLeft--;
    }
}

//Global Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//Initial loading with instructions and start option
$(document).ready(function() {
    $("#title").text("Welcome to my trivia game!");
    startButton = $("<button>").text("Start!")
    $("#timer").append(startButton)
    $("#question").text("When the game starts, simply click on the answer you would like to choose! To start, press the start button!")
    $("#funfact").text("")
    $("#option0").text("")
    $("#option1").text("")
    $("#option2").text("")
    $("#option3").text("")

    $("button").on("click", function() {
        $("#title").text("Question " + 1)
        $("#timer").text("Countdown:")
        $("#question").text(game.question1.question)

        setInterval(countdown, 1000);
        
        //shuffle and propagate choices on screen        
        shuffle(game.question1.options)
        for (i = 0; i < 4; i++) {
            $("#option" + i).text(game.question1.options[i])
        }
        
    });


 //TODO:Countdown timer for each question


 //1 Question with multiple responses each round

 //Each round displays if answer was correct and if not, displays correct response

 //TODO: After all questions are asked, display trivia data output, and have restart/reset button.

});