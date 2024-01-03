/* eslint-disable */
import { Ship, Gameboard, Player, Computer } from "./logic";

// PLAYER ATTACK
test('player can attack and enemy receives attack', () => {
    // player and board setup with 1 ship each
    const player1 = new Player('john');
    const player2 = new Computer();
    const player1GameBoard = new Gameboard();
    player1GameBoard.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
    const player2GameBoard = new Gameboard();
    player2GameBoard.placeShip(new Ship('carrier'), 1, 0, 'horizontal');
    // attack phase
    player1.sendAttack(player2GameBoard, 1, 1)
    // enemy ship was damaged
    expect(player2GameBoard.playerShips[0].hitPoints).toEqual(4);
});

// COMPUTER ATTACK
test('computer can attack randomly and enemy board receives attack', () => {
    // player and board setup with 1 ship each
    const player1 = new Player('john');
    const player2 = new Computer();
    const player1GameBoard = new Gameboard();
    player1GameBoard.placeShip(new Ship('carrier'), 0, 0, 'horizontal');
    const player2GameBoard = new Gameboard();
    player2GameBoard.placeShip(new Ship('carrier'), 1, 0, 'horizontal');
    // board received attack
    player2.sendAttack(player1GameBoard)
    // check for random attack received
    function checkAttack(gameBoard) {
        for (const row of gameBoard) {
            for (const column of row) {
                if (column === 'missed' || column === 'x') {
                    return true;
                }
            }
        }
    }
    expect(checkAttack(player1GameBoard.board)).toEqual(true);
});
