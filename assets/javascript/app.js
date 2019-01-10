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
        options: ["Mario", "Luigi", "Diddy Kong", "Jump Fox"],
    },
    question3: {
        question: "What was the world's first Arcade Game?",
        answer: "Computer Space", 
        funfact: "Computer Space was derived from an earlier video game called, Spacewar!",
        options: ["Computer Space", "Pong", "Joust", "Battlezone"],
    },
    question4: {
        question: "What are the names of the four ghosts in Pac-Man?",
        answer: "Blinky, Pinky, Inky, and Clyde", 
        funfact: "Blinky and Pinky chase Pac-Man directly, Inky uses strategic ambush tactics, and Clyde behaves completely randomly.",
        options: ["Blinky, Pinky, Inky, and Clyde", "Simon, Pinky, Clyde, and Ghosty", "Clyde, Simon, Ghosty, and Blinky", "Pinky, Winky, Dinky, and Rhyme"],
    },
    question5: {
        question: "The Super Mushrooms which cause Mario to grow were inspired by what classic story tale?",
        answer: "Alice in Wonderland", 
        funfact: "The mushrooms in Alice in Wonderland caused her to grow!",
        options: ["Alice in Wonderland", "Hansel and Gretel", "Jack and the Magic Beanstalk", "The Three Little Pigs"],
    },
    question6: {
        question: "What game caused the current rating system for video games?",
        answer: "Mortal Kombat",
        funfact: "The original Mortal Kombat was developed in 10 months by a group of only four people!",
        options: ["Mortal Kombat", "Tekken", "Street Fighter", "Streets of Rage"],
    },
    question7: {
        question: "What company did video game pioneers Nolan Bushnell and Ted Dabney create?",
        answer: "Atari",
        funfact: "Atari's first commercial success was the class game Pong!",
        options: ["Atari", "Sega", "Nintendo", "Sony"],
    },
    question8: {
        question: "What is the longest lived game series whose Main Playable Character is a female?",
        answer: "Metroid",
        funfact: "While Samus Aran may not be the first playable female character, Nintendo has been making Metroid games since 1986!", 
        options: ["Metroid", "Mortal Kombat", "Pong", "Star Fox"],
    }
}

//Global Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeLeft = 30;

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
};

 //Countdown timer for each question
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(0);
    } else {
        $("#timer").text("Countdown: " + timeLeft + " seconds remaining")
        timeLeft--;
    }
};

function resultCorrect() {
    $("#funfact").text("Correct!")
    $("#option0").text(game.question1.funfact)
    $("#option1").text("")
    $("#option2").text("")
    $("#option3").text("")
}

function resultIncorrect() {
    $("#funfact").text("Incorrect! The correct answer is: " + game.question1.answer)
    $("#option0").text(game.question1.funfact)
    $("#option1").text("")
    $("#option2").text("")
    $("#option3").text("")
}

//TODO: After all questions are asked, display trivia data output, and have restart/reset button.


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
        
        //Checks an answer  //Each round displays if answer was correct and if not, displays correct response
        $(".choice").on("click", function() {
            var answer = $(this).text();
            if (answer === game.question1.answer) {

                //correct response - add stop to timer and go to response "page"
                correct++;
                resultCorrect();
            } else if (answer !== game.question1.answer) {

                //incorrect response - add stop to timer and go to response "page"
                incorrect++;
                resultIncorrect();
            }
        });

    });


});