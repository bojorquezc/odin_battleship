/* eslint-disable */
import { Ship, Gameboard } from "./src/logic";

// gameBoard is a 2D array, its length should be 10
test('gameboard is generated', () => {
    const gameBoardTest = new Gameboard;
    expect(gameBoardTest.board.length).toBe(10);
});

// placing a ship horizontally with space available
test('place ship on gameboard horizontally', () => {
    const gameBoardTest = new Gameboard;
    gameBoardTest.placeShip( new Ship('carrier'), 0, 0, 'horizontal');
    expect(gameBoardTest.board[0][0]).toBe('carrier');
    expect(gameBoardTest.board[0][1]).toBe('carrier');
    expect(gameBoardTest.board[0][2]).toBe('carrier');
    expect(gameBoardTest.board[0][3]).toBe('carrier');
    expect(gameBoardTest.board[0][4]).toBe('carrier');
});

// placing a ship horizontally with no space available
test('place ship on gameboard horizontally with no space avaiable', () => {
    const gameBoardTest = new Gameboard;
    function instantiateShip() {
        gameBoardTest.placeShip(new Ship('carrier'), 0, 6, 'horizontal');
    }
    expect(instantiateShip).toThrow('Ship does not fit coordinates');
});

// placing a ship horizontally over a ship already in place
test('placing a ship horizontally with no space available', () => {
    const gameBoardTest = new Gameboard;
    function instantiateShip() {
        gameBoardTest.placeShip(new Ship('cruiser'), 0, 2, 'vertical');
        gameBoardTest.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
    }
    expect(instantiateShip).toThrow('Ship already in place, choose different coordinates');
});

// placing a ship vertically with space available
test('place ship on gameboard vertically', () => {
    const gameBoardTest = new Gameboard;
    gameBoardTest.placeShip( new Ship('carrier'), 0, 0, 'vertical');
    expect(gameBoardTest.board[0][0]).toBe('carrier');
    expect(gameBoardTest.board[1][0]).toBe('carrier');
    expect(gameBoardTest.board[2][0]).toBe('carrier');
    expect(gameBoardTest.board[3][0]).toBe('carrier');
    expect(gameBoardTest.board[4][0]).toBe('carrier');
});