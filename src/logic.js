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
    } else if (type === 'destroyer') {
      this.length = 2;
      this.hitPoints = 2;
    } else {
      throw Error('Unknown type of ship');
    }
  }

  hit() {
    this.hitPoints -= 1;
    if (this.hitPoints === 0) {
      this.sunk = true;
    }
    return `${this.type} hit points: ${this.hitPoints}`;
  }
}

class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.playerShips = [];
  }

  createBoard() {
    const gameBoard = [];
    const rows = 10;
    const columns = 10;
    // Create a 2D gameBoard array
    for (let i = 0; i < rows; i += 1) {
      gameBoard[i] = [];
      for (let j = 0; j < columns; j += 1) {
        gameBoard[i][j] = j;
      }
    }
    return gameBoard;
  }

  checkCoordinates(ship, row, column, direction) {
    if (direction === 'horizontal') {
      for (let index = 0; index < ship.length; index += 1) {
        // the ship does not fit the row
        if (column + ship.length > 10) {
          throw Error('Ship does not fit coordinates');
          // the coordinate is taken by another ship
        } else if (
          this.board[row][column + index] === 'carrier'
          || this.board[row][column + index] === 'battleship'
          || this.board[row][column + index] === 'cruiser'
          || this.board[row][column + index] === 'submarine'
          || this.board[row][column + index] === 'destroyer'
        ) {
          throw Error('Ship already in place, choose different coordinates');
        }
      }
    }
    if (direction === 'vertical') {
      for (let index = 0; index < ship.length; index += 1) {
        // the ship does not fit the row
        if (row + ship.length > 10) {
          throw Error('Ship does not fit coordinates');
          // the coordinate is taken by another ship
        } else if (
          this.board[row + index][column] === 'carrier'
          || this.board[row + index][column] === 'battleship'
          || this.board[row + index][column] === 'cruiser'
          || this.board[row + index][column] === 'submarine'
          || this.board[row + index][column] === 'destroyer'
        ) {
          throw Error('Ship already in place, choose different coordinates');
        }
      }
    }
    return true;
  }

  placeShip(ship, row, column, direction) {
    if (direction === 'horizontal' && this.checkCoordinates(ship, row, column, direction) === true) {
      // Add ship object to the playerShips array
      this.playerShips.push(ship);
      for (let index = 0; index < ship.length; index += 1) {
        // Add the ship type to the selected coordinates
        this.board[row][column + index] = ship.type;
      }
    } else if (direction === 'vertical' && this.checkCoordinates(ship, row, column, direction) === true) {
      // Add ship object to the playerShips array
      this.playerShips.push(ship);
      for (let index = 0; index < ship.length; index += 1) {
        // Add the ship type to the selected coordinates
        this.board[row + index][column] = ship.type;
      }
    }
  }

  receiveAttack(row, column) {
    if (
      this.board[row][column] === 'carrier'
      || this.board[row][column] === 'battleship'
      || this.board[row][column] === 'cruiser'
      || this.board[row][column] === 'submarine'
      || this.board[row][column] === 'destroyer'
    ) {
      const damagedShip = this.board[row][column];
      for (const ship of this.playerShips) {
        if (ship.type === damagedShip) {
          ship.hit();
        }
      }
    } else {
      this.board[row][column] = 'missed';
    }
  }

  endGame(playerShipArray) {
    for (const ship of playerShipArray) {
      if (ship.sunk === false) {
        return false;
      }
    }
    return true;
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }

  sendAttack(playerGameboard, row, column) {
    playerGameboard.receiveAttack(row, column);
  }
}

class Computer {
  constructor() {
    this.name = 'computer';
    this.playedMoves = this.createBoard();
  }

  createBoard() {
    const gameBoard = [];
    const rows = 10;
    const columns = 10;
    // Create a 2D gameBoard array
    for (let i = 0; i < rows; i += 1) {
      gameBoard[i] = [];
      for (let j = 0; j < columns; j += 1) {
        gameBoard[i][j] = j;
      }
    }
    return gameBoard;
  }

  sendAttack(enemyGameboard) {
    const row = Math.floor(Math.random() * 9);
    const column = Math.floor(Math.random() * 9);
    if (this.playedMoves[row][column] !== 'x') {
      enemyGameboard.receiveAttack(row, column);
      this.playedMoves[row][column] = 'x';
      return this.playedMoves;
    }
  }
}

export {
  Ship,
  Gameboard,
  Player,
  Computer,
};
