/* eslint-disable max-len */
import Board from './modules/board';
// import Player from './modules/player';
import Ship from './modules/ship';
import Doc from './modules/doc';

const board1 = new Board(null, []);
const cruiser = new Ship('Cruiser', 'horizontal', [0, 0]);
board1.placeShip(cruiser);
const board2 = new Board(null, []);
const carrier = new Ship('Carrier', 'horizontal', [7, 2]);
board2.placeShip(carrier);
Doc.renderGame(board1.arr, board2.arr);
