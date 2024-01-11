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

  for (const ship of gameBoard) {
    if (ship === 'carrier'
      || ship === 'battleship'
      || ship === 'cruiser'
      || ship === 'submarine'
      || ship === 'destroyer') {
      console.log(`ship found ${gameBoard.indexOf(ship)}`);
      for (const boardSquare of coordinate) {
        if (boardSquare.dataset.dataPlayer === '1' && boardSquare.dataset.coordinate === `[0][${gameBoard.indexOf(ship)}]`) {
          boardSquare.style.backgroundColor = 'red';
        }
      }
    } else {
      console.log('ship not found');
    }
  }
}

export {
  displayShips,
};
