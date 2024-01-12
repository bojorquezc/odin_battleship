/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Ship, Gameboard, Player, Computer,
} from './logic';
import {
  displayBoard, displayShips,
} from './display';

function newTestGame() {
  displayBoard('1');
  displayBoard('2');
  // create player 1 and player 1 gameboard with ships
  const player1 = new Player('john');
  const player1GameBoard = new Gameboard();
  player1GameBoard.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
  player1GameBoard.placeShip(new Ship('battleship'), 2, 3, 'vertical');
  player1GameBoard.placeShip(new Ship('cruiser'), 5, 5, 'horizontal');
  player1GameBoard.placeShip(new Ship('submarine'), 7, 2, 'vertical');
  player1GameBoard.placeShip(new Ship('destroyer'), 9, 6, 'horizontal');
  // create player 2 and player 2 gameboard with ships
  const player2 = new Computer();
  const player2GameBoard = new Gameboard();
  player2GameBoard.placeShip(new Ship('carrier'), 0, 9, 'vertical');
  player2GameBoard.placeShip(new Ship('battleship'), 2, 1, 'horizontal');
  player2GameBoard.placeShip(new Ship('cruiser'), 4, 3, 'horizontal');
  player2GameBoard.placeShip(new Ship('submarine'), 7, 1, 'horizontal');
  player2GameBoard.placeShip(new Ship('destroyer'), 7, 6, 'vertical');

  displayShips(player1GameBoard.board, '1');
  displayShips(player2GameBoard.board, '2');
}

export {
  newTestGame,
};
