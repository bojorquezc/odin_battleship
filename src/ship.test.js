/* eslint-disable */
import { Ship } from './logic';

    // const carrier = new Ship('carrier');
    // const battleship = new Ship('battleship');
    // const cruiser = new Ship('cruiser');
    // const submarine = new Ship('submarine');
    // const destroyer = new Ship('destroyer');

test('ship gets hit', () => {
    const carrier = new Ship('carrier');
    carrier.hit();
    expect(carrier.hitPoints).toEqual(4);
});

// In order for ship to sink, it first has to be hit, just setting hitPoints = 0 does not sink the ship
test('ship sinks', () => {
    const carrier = new Ship('carrier');
    carrier.hitPoints = 1;
    carrier.hit();
    expect(carrier.sunk).toEqual(true);
});