// Funkcja getMoveName
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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput)

printMessage('Twój ruch to: ' + playerMove);

// Wynik gry

let argComputerMove = computerMove

let argPlayerMove = playerMove

console.log('moves:', argComputerMove, argPlayerMove)

displayResult(argComputerMove, argPlayerMove)


function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamien' || argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }

  else if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
  }

  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'kamien' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
  }

  else if (argPlayerMove == 'nieznany ruch'){
    printMessage('Błąd! Gra nie może się rozpocząć!');
  }
}
