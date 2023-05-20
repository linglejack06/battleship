import Ship from '../modules/ship';

let ship1;
let ship2;
beforeEach(() => {
  ship1 = new Ship('Carrier');
  ship2 = new Ship('Cruiser');
});
it('Computes correct length', () => {
  expect(ship1.length).toBe(5);
  expect(ship2.length).toBe(3);
});
it('Computes a hit', () => {
  ship1.hit();
  expect(ship1.hits).toBe(1);
  ship2.hit();
  ship2.hit();
  expect(ship2.hits).toBe(2);
});
it('sinks when its been hit enough times', () => {
  for (let i = 0; i < 5; i += 1) {
    ship1.hit();
  }
  expect(ship1.isSunk()).toBeTruthy();
  ship2.hit();
  expect(ship2.isSunk()).toBeFalsy();
});
