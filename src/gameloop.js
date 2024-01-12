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
  displayBoard();
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
  player2GameBoard.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
  player2GameBoard.placeShip(new Ship('battleship'), 2, 3, 'vertical');
  player2GameBoard.placeShip(new Ship('cruiser'), 5, 5, 'horizontal');
  player2GameBoard.placeShip(new Ship('submarine'), 7, 2, 'vertical');
  player2GameBoard.placeShip(new Ship('destroyer'), 9, 6, 'horizontal');

  displayShips(player1GameBoard.board);
  displayShips(player2GameBoard.board);
}

export {
  newTestGame,
};
