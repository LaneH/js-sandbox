var userChoice = 'not set';

$(document).ready(function(){
  
  $('.letter-button').click(function() {

      switch(this.id) {
          case 'button-r':
              userChoice='r';
              var computerChoice = pickComputerOption();
              console.log(userChoice);
              console.log(computerChoice);
              $('.item').remove();
              $('#result').prepend('<img class="item" src="images/result-rvs.jpg" />')
              $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

          break;
          case 'button-p':
              userChoice='p';
              var computerChoice = pickComputerOption();
              console.log(userChoice);
              console.log(computerChoice);
              $('.item').remove();
              $('#result').prepend('<img class="item" src="images/result-pvs.jpg" />')
              $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

          break;
          case 'button-s':
              userChoice='s';
              var computerChoice = pickComputerOption();
              console.log(userChoice);
              console.log(computerChoice);
              $('.item').remove();
              $('#result').prepend('<img class="item" src="images/result-svs.jpg" />')
              $('#result').append('<p class="item"> ' + userChoice + ' vs. ' + computerChoice + '</p>');

          break;
      }     
  });
});