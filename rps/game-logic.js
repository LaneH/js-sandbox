var rps=function() {
    var userChoice = $('input[name="userChoiceInput"]').val().toLowerCase();
    if (userChoice=="") {
        alert('Please type rock, paper or scissors in the field and click the "Go!" button.');
        return false;
    } else if (userChoice!=="rock"&&userChoice!=="paper"&&userChoice!=="scissors") { 
        $('.item').remove();
        $('.result').append('<div class="item failure"><p>What is "' + userChoice + '"? Please type rock, paper or scissors.</p></div>');
        $('input[name="userChoiceInput"]').val("");
        return false;
    }

    var computerChoice = Math.random();
    if (computerChoice <= 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    $('.item').remove();
    $('.result').append('<div class="item"><p>You picked ' + userChoice + ', I picked ' + computerChoice + '.</p></div>');
    $('.result').append('<div class="item"><h2 class="success">' + compare(computerChoice, userChoice) + '</h2></div>');
    return false;
};

var compare=function (choice1, choice2) {
    if (choice1 == choice2) {
        return "The result is a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock wins.";
        } else {
            return "Paper wins.";
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins.";
        } else {
            return "Scissors wins.";
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock wins.";
        } else {
            return "Scissors wins.";
        }
    }
};

