/* eslint-disable max-len */
import Board from './modules/board';
import Player from './modules/player';
import Ship from './modules/ship';
import Doc from './modules/doc';

const human = new Player('Jack');
const board1 = new Board(human, []);
const cruiser = new Ship('Cruiser', 'horizontal', [0, 0]);
board1.placeShip(cruiser);
const board2 = new Board(null, []);
const carrier = new Ship('Carrier', 'horizontal', [7, 2]);
board2.placeShip(carrier);
const form = Doc.setupGame(board1, board2); // grabs form to attach event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const destroyer = new Ship('Destroyer', 'horizontal', [0, 8]);
  board1.placeShip(destroyer);
  Doc.renderGame(board1, board2);
});
