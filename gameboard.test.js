/* eslint-disable */
import { Ship, Gameboard } from "./src/logic";

const gameBoardTest = new Gameboard;

test('gameboard is generated', () => {
    expect(gameBoardTest.board.length).toBe(100);
});

test('gameboard coordinates are correct', () => {
    expect(gameBoardTest.board[0]).toBe('a1');
    expect(gameBoardTest.board[99]).toBe('j10');
});

test('place ship on gameboard horizontally', () => {
    gameBoardTest.placeShip( new Ship('carrier'), 'a1', 'horizontal');
    expect(gameBoardTest.board[0]).toBe('carrier');
    expect(gameBoardTest.board[1]).toBe('carrier');
    expect(gameBoardTest.board[2]).toBe('carrier');
    expect(gameBoardTest.board[3]).toBe('carrier');
    expect(gameBoardTest.board[4]).toBe('carrier');
});