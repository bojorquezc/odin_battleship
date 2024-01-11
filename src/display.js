/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import {
  Ship, Gameboard, Player, Computer,
} from './logic';
import {
  newTestGame,
} from './gameloop';

function displayShips(gameBoard) {
  const coordinate = document.querySelectorAll('.board_square');

  for (let i = 0; i < gameBoard.length; i += 1) {
    for (let j = 0; j < gameBoard[i].length; j += 1) {
      if (gameBoard[i][j] === 'carrier'
        || gameBoard[i][j] === 'battleship'
        || gameBoard[i][j] === 'cruiser'
        || gameBoard[i][j] === 'submarine'
        || gameBoard[i][j] === 'destroyer') {
        console.log(gameBoard[i][j]);
        for (const boardSquare of coordinate) {
          if (boardSquare.dataset.player === '1'
            && boardSquare.dataset.coordinate === `[${i}][${j}]`) {
            boardSquare.style.backgroundColor = '#684aab';
          }
        }
      }
    }
  }
}

export {
  displayShips,
};
