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
        funfact: "Atari's first commercial success was the classic game Pong!",
        options: ["Atari", "Sega", "Nintendo", "Sony"],
    },
    question8: {
        question: "What is the longest lived game series whose Main Playable Character is a female?",
        answer: "Metroid",
        funfact: "While Samus Aran may 4not be the first playable female character, Nintendo has been making Metroid games since 1986!", 
        options: ["Metroid", "Mortal Kombat", "Pong", "Star Fox"],
    }
}

//Global Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeLeft = 15;
var countdownTimer;
var gameCounter = 0;
var key = "question" + gameCounter;
var gameSwitch = false;



//Initial loading with instructions and start option
$(document).ready(function() {
    $("#title").text("Welcome to my trivia game!");
    startButton = $("<button>").text("Start!").attr("id", "start")
    $("#timer").append(startButton)
    $("#question").text("When the game starts, simply click on the answer you would like to choose! To start, press the start button!")
    $("#funfact").text("")
    $("#option0").text("")
    $("#option1").text("")
    $("#option2").text("")
    $("#option3").text("")

    $("#start").on("click", function() {
        uiReset();
    });
        
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

    //Sets the current game question and shuffles the options array
    function nextQuestion() {
        $("#title").text("Question " + gameCounter)
        $("#question").text(game[key].question)

        //shuffle and propagate choices on screen        
        shuffle(game[key].options)
        for (i = 0; i < 4; i++) {
            $("#option" + i).text(game[key].options[i])
        }
    };

    function uiReset() {
        if (gameSwitch === false) {
            gameCounter++;
            gameSwitch != gameSwitch
        }
        $("#timer").text("")
        $("#title").text("")
        $("#question").text("")
        $("#funfact").text("")
        $("#option0").text("")
        $("#option1").text("")
        $("#option2").text("")
        $("#option3").text("")
        timeLeft = 15;
        stop();
        key = "question" + gameCounter;
        countdownTimer = setInterval(countdown, 1000);
        gameSwitch != gameSwitch
        nextQuestion();

    }

    //Countdown timer for each question
    function countdown() {
        if (timeLeft === -1) {
            stop();
            unansweredResult();
        } else {
            $("#timer").text("Countdown: " + timeLeft + " seconds remaining")
            timeLeft--;
        }
    };


    //Result Functions
    function resultCorrect() {
        if (gameCounter === 8){
            endResult()
        } else {
        $("#funfact").text("Correct! " + game[key].funfact)
        stop();
        setTimeout(uiReset, 5000)
        }
    }

    function resultIncorrect() {
        if (gameCounter === 8){
            endResult()
        }else {
            $("#funfact").text("Incorrect! The correct answer is: " + game[key].answer + ". " + game[key].funfact)
            stop();
            setTimeout(uiReset, 5000)
        }
    }

    function unansweredResult() {
        if (gameCounter === 8){
            endResult()
        } else {
        $("#funfact").text("Times up! The correct answer is: " + game[key].answer + ". " + game[key].funfact)
        stop();
        setTimeout(uiReset, 5000)
        }
    }

    // After all questions are asked, display trivia data output, and have restart/reset button.
    function endResult () {
        stop();

        $("#title").text("Game Over! Check your results below!");
        $("#timer").text("")
        restartButton = $("<button>").text("Restart!").attr("id", "restart")
        $("#timer").append(restartButton)
        $("#question").text("To play again, hit the Restart button!")
        $("#funfact").text("Results:")
        $("#option0").text("Correct Answers: " + correct)
        $("#option1").text("Incorrect Answers: " + incorrect)
        $("#option2").text("Unanswered Questions: " + unanswered)
        $("#option3").text("Grade: " + (correct/8*100) + "%")


        $("#restart").on("click", function() {
            reset();
            uiReset();
        });
    }

    //Checks an answer each round and displays the result
    $(".choice").on("click", function() {
        var answer = $(this).text();

        if (answer === game[key].answer) {
            correct++;
            resultCorrect();
        }
        if (answer !== game[key].answer) {
            incorrect++;
            resultIncorrect();
        }
    });

    function reset() {
        gameCounter = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    function stop() {
        clearInterval(countdownTimer);
    }
});