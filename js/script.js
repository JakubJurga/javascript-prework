{
//Counter & Variables
    let counterPlayerWin = 0;
    let counterComputerWin = 0;

    const playRock = document.getElementById('play-rock');
    const playPaper = document.getElementById('play-paper');
    const playScissors = document.getElementById('play-scissors');



// Funkcja getMoveName

function playGame(playerInput){

    clearMessages();

    function getMoveName(argMoveId){
        if (argMoveId == 1){
          return 'kamień';
        } else if (argMoveId == 2){
		        return 'papier';
        } else if (argMoveId == 3){
		        return 'nożyce';
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';

        }

// Odczytanie ruchu komputera

      let randomNumber = Math.floor(Math.random() * 3 + 1);

      console.log('Wylosowana liczba to: ' + randomNumber);

      let computerMove = getMoveName(randomNumber);

      printMessage('Mój ruch to: ' + computerMove);

//Odczytanie ruchu gracza

      console.log('Gracz wpisał: ' + playerInput);

      let playerMove = getMoveName(playerInput)

      printMessage('Twój ruch to: ' + playerMove);

// Wynik gry

      let argComputerMove = computerMove

      let argPlayerMove = playerMove

      console.log('moves:', argComputerMove, argPlayerMove)

      displayResult(argComputerMove, argPlayerMove)

//Funkcja Display Result

    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamien' || argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        counterPlayerWin = counterPlayerWin + 1;
      }

      else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
      }

      else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'kamien' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
        counterComputerWin = counterComputerWin + 1;
      }

      else if (argPlayerMove == 'nieznany ruch'){
        printMessage('Błąd! Gra nie może się rozpocząć!');
      }
      printResult('Twój wynik to: ' + counterPlayerWin + ', wynik komputera to: ' + counterComputerWin);
    }
    }

// Event listener

      playRock.addEventListener('click', function(){
      playGame(1);
      });

      playPaper.addEventListener('click', function(){
      playGame(2);
      });

      playScissors.addEventListener('click', function() {
      playGame(3);
      });
}
