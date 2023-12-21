/* eslint-disable */
import { Ship, Gameboard } from "./logic";

// gameBoard is a 2D array, its length should be 10
test('gameboard is generated', () => {
    const gameBoardTest = new Gameboard;
    expect(gameBoardTest.board.length).toBe(10);
});

// HORIZONTAL PLACEMENT TESTS
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

// VERTICAL PLACEMENT TESTS
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

// placing a ship vertically with no space available
test('place ship on gameboard vertically with no space avaiable', () => {
    const gameBoardTest = new Gameboard;
    function instantiateShip() {
        gameBoardTest.placeShip(new Ship('carrier'), 6, 0, 'vertical');
    }
    expect(instantiateShip).toThrow('Ship does not fit coordinates');
});

// placing a ship vertically over a ship already in place
test('placing a ship vertically with no space available', () => {
    const gameBoardTest = new Gameboard;
    function instantiateShip() {
        gameBoardTest.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
        gameBoardTest.placeShip(new Ship('cruiser'), 0, 2, 'vertical');
    }
    expect(instantiateShip).toThrow('Ship already in place, choose different coordinates');
});

// RECEIVE HIT
test('the selected coordinates damage a ship if a ship is found', () => {
    const gameBoardTest = new Gameboard;
    gameBoardTest.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
    gameBoardTest.receiveAttack(0,0);
    gameBoardTest.receiveAttack(0,1);
    expect(gameBoardTest.playerShips[0].hitPoints).toEqual(3);
});

// MISSED SHOT
test.only('the selected coordinates add a missed marker in case no ship is found', () => {
    const gameBoardTest = new Gameboard;
    gameBoardTest.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
    gameBoardTest.receiveAttack(0,4);
    expect(gameBoardTest.board[0][4]).toEqual('carrier');
    gameBoardTest.receiveAttack(0,5);
    expect(gameBoardTest.board[0][5]).toEqual('missed');
});