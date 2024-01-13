/* eslint-disable prefer-const */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Ship, Gameboard, Player, Computer,
} from './logic';
import {
  displayBoard, displayShips, displayHits, disableBoard, receiveAttackListeners,
} from './display';

function mainGameLoop(player1, player1GameBoard, player2, player2GameBoard, turn) {
  let currentTurn = turn;
  console.log(currentTurn);
  while (player1GameBoard.endGame() !== false
  || player2GameBoard.endGame() !== false) {
    if (currentTurn === 'firstPlayer') {
      // Disable own board to focus on enemy board
      disableBoard(currentTurn);
      // Pass turn to other player once their move is made
    }
  }
}

function newTestGame() {
  // Create player 1 and player 1 gameboard with ships
  const player1 = new Player('john');
  const player1GameBoard = new Gameboard();
  player1GameBoard.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
  player1GameBoard.placeShip(new Ship('battleship'), 2, 3, 'vertical');
  player1GameBoard.placeShip(new Ship('cruiser'), 5, 5, 'horizontal');
  player1GameBoard.placeShip(new Ship('submarine'), 7, 2, 'vertical');
  player1GameBoard.placeShip(new Ship('destroyer'), 9, 6, 'horizontal');
  // Create player 2 and player 2 gameboard with ships
  const player2 = new Computer();
  const player2GameBoard = new Gameboard();
  player2GameBoard.placeShip(new Ship('carrier'), 0, 9, 'vertical');
  player2GameBoard.placeShip(new Ship('battleship'), 2, 1, 'horizontal');
  player2GameBoard.placeShip(new Ship('cruiser'), 4, 3, 'horizontal');
  player2GameBoard.placeShip(new Ship('submarine'), 7, 1, 'horizontal');
  player2GameBoard.placeShip(new Ship('destroyer'), 7, 6, 'vertical');
  // Display boards
  displayBoard('1');
  displayBoard('2');
  // Display ships on gameboard
  displayShips(player1GameBoard.board, '1');
  displayShips(player2GameBoard.board, '2');
  // Allow boards to receive attacks through click
  receiveAttackListeners('1', player2, player1GameBoard);
  receiveAttackListeners('2', player1, player2GameBoard);
  // Run game
  mainGameLoop(player1, player1GameBoard, player2, player2GameBoard, 'firstPlayer');
}

export {
  newTestGame,
};
