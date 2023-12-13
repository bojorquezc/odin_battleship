/* eslint-disable */
import { Gameboard } from "./src/logic";

const gameBoardTest = new Gameboard;

test('gameboard is generated', () => {
    expect(gameBoardTest.board.length).toBe(100);
});

test('gameboard coordinates are correct', () => {
    expect(gameBoardTest.board[0]).toBe('a1');
    expect(gameBoardTest.board[99]).toBe('j10');
})