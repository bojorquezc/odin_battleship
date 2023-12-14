/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */

class Ship {
  constructor(type) {
    this.type = type;
    this.sunk = false;

    if (type === 'carrier') {
      this.length = 5;
      this.hitPoints = 5;
    } else if (type === 'battleship') {
      this.length = 4;
      this.hitPoints = 4;
    } else if (type === 'cruiser' || type === 'submarine') {
      this.length = 3;
      this.hitPoints = 3;
    } else {
      this.length = 2;
      this.hitPoints = 2;
    }
  }

  hit() {
    this.hitPoints -= 1;
    if (this.hitPoints === 0) {
      this.sunk = true;
    }
  }
}

class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const gameBoard = [];
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    for (const row of rows) {
      for (let index = 1; index <= 10; index += 1) {
        gameBoard.push(row + index);
      }
    }
    return gameBoard;
  }

  placeShip(ship, startingCoordinate, direction) {
    let boardIndex = this.board.indexOf(startingCoordinate);

    if (direction === 'horizontal') {
      for (let index = 0; index < ship.length; index += 1) {
        this.board[boardIndex + index] = ship.type;
      }
    } else {
      for (let index = 0; index < ship.length; index += 1) {
        if (index === 0) {
          this.board[boardIndex] = ship.type;
        } else {
          this.board[boardIndex += 10] = ship.type;
        }
      }
    }
  }
}

export {
  Ship,
  Gameboard,
};
