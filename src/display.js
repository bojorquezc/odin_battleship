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

function displayBoard(player) {
  const gameBoardContainer = document.querySelector(`.gameboard_container_p${player}`);

  // Create title section of gameboard
  const gameBoardTitle = document.createElement('div');
  gameBoardTitle.textContent = `Player ${player} Board`;
  gameBoardTitle.classList.add('gameboard_title');
  gameBoardContainer.appendChild(gameBoardTitle);

  // Create main container for gameboard
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('gameboard');
  gameBoardContainer.appendChild(gameBoard);

  // Create 100 board squares with coordinate data
  const rows = 10;
  const columns = 10;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      const boardSquare = document.createElement('div');
      boardSquare.classList.add('board_square');
      boardSquare.dataset.player = `${player}`;
      boardSquare.dataset.coordinate = `[${i}][${j}]`;
      gameBoard.appendChild(boardSquare);
    }
  }
}

function displayShips(gameBoard, player) {
  const coordinate = document.querySelectorAll('.board_square');

  for (let i = 0; i < gameBoard.length; i += 1) {
    for (let j = 0; j < gameBoard[i].length; j += 1) {
      if (gameBoard[i][j] === 'carrier'
        || gameBoard[i][j] === 'battleship'
        || gameBoard[i][j] === 'cruiser'
        || gameBoard[i][j] === 'submarine'
        || gameBoard[i][j] === 'destroyer') {
        for (const boardSquare of coordinate) {
          if (boardSquare.dataset.player === `${player}`
            && boardSquare.dataset.coordinate === `[${i}][${j}]`) {
            boardSquare.style.backgroundColor = '#684aab';
          }
        }
      }
    }
  }
}

export {
  displayBoard,
  displayShips,
};
