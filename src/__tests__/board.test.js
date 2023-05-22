import Board from '../modules/board';
import Ship from '../modules/ship';

let battleship; let cruiser; let board;
beforeEach(() => {
  battleship = new Ship('Battleship', 'horizontal', [0, 3]);
  cruiser = new Ship('Cruiser', 'horizontal', [7, 6]);
  board = new Board({ type: 'human', turn: true });
});

it('Rejects ship location if ship has already been placed there', () => {
  board.placeShip(cruiser);
  expect(board.checkShipPosition(cruiser)).toBeFalsy();
});
it('Accepts ship location if ship has not been placed', () => {
  expect(board.checkShipPosition(battleship)).toBeTruthy();
});
it('Registers hit on ship', () => {
  board.placeShip(cruiser);
  expect(board.takeHit([7, 6])).toBe('hit');
});
it('Registers miss on ship', () => {
  expect(board.takeHit([9, 1])).toBe('miss');
});
it('Registers hit already tried', () => {
  board.takeHit([7, 6]);
  expect(board.takeHit([7, 6])).toBe('retry');
});
it('Returns true when all ships are sunk', () => {
  board.placeShip(cruiser);
  board.takeHit([7, 6]);
  board.takeHit([7, 7]);
  board.takeHit([7, 8]);
  expect(board.checkWin()).toBeTruthy();
});
it('Returns false when all ships are not sunk', () => {
  board.placeShip(cruiser);
  board.takeHit([7, 6]);
  board.takeHit([7, 8]);
  expect(board.checkWin()).toBeFalsy();
});
