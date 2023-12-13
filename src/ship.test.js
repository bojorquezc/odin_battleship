/* eslint-disable */
import { Ship } from "./functions";

    const carrier = new Ship('carrier');
    const battleship = new Ship('battleship');
    const cruiser = new Ship('cruiser');
    const submarine = new Ship('submarine');
    const destroyer = new Ship('destroyer');

test('ship object length', () => {
    expect(carrier.length).toEqual(5);
    expect(battleship.length).toEqual(4);
    expect(cruiser.length).toEqual(3);
    expect(submarine.length).toEqual(3);
    expect(destroyer.length).toEqual(2);
});
