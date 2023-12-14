/* eslint-disable */
import { Ship, Gameboard } from "./src/logic";

test('gameboard is generated', () => {
    const gameBoardTest = new Gameboard;
    expect(gameBoardTest.board.length).toBe(100);
});

test('gameboard coordinates are correct', () => {
    const gameBoardTest = new Gameboard;
    expect(gameBoardTest.board[0]).toBe('a1');
    expect(gameBoardTest.board[99]).toBe('j10');
});

test('place ship on gameboard horizontally', () => {
    const gameBoardTest = new Gameboard;
    gameBoardTest.placeShip( new Ship('carrier'), 'a1', 'horizontal');
    expect(gameBoardTest.board[0]).toBe('carrier');
    expect(gameBoardTest.board[1]).toBe('carrier');
    expect(gameBoardTest.board[2]).toBe('carrier');
    expect(gameBoardTest.board[3]).toBe('carrier');
    expect(gameBoardTest.board[4]).toBe('carrier');
});

test('place ship on gameboard vertically', () => {
    const gameBoardTest = new Gameboard;
    gameBoardTest.placeShip( new Ship('carrier'), 'a1', 'vertical');
    expect(gameBoardTest.board[0]).toBe('carrier');
    expect(gameBoardTest.board[10]).toBe('carrier');
    expect(gameBoardTest.board[20]).toBe('carrier');
    expect(gameBoardTest.board[30]).toBe('carrier');
    expect(gameBoardTest.board[40]).toBe('carrier');
});