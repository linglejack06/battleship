/* eslint-disable max-len */
import Board from './modules/board';
import Player from './modules/player';
import Ship from './modules/ship';
import Doc from './modules/doc';

const battleships = ['Dummy', 'Destroyer', 'Submarine', 'Cruiser', 'Battleship', 'Carrier'];
const human = new Player('Jack');
const board1 = new Board(human, []);
const cruiser = new Ship('Cruiser', 'horizontal', [0, 0]);
board1.placeShip(cruiser);
const board2 = new Board(null, []);
const carrier = new Ship('Carrier', 'horizontal', [7, 2]);
board2.placeShip(carrier);
// eslint-disable-next-line consistent-return
function startGame() {
  if (!battleships[0]) return 'done';
  const form = Doc.setupGame(board1, board2, battleships[battleships.length - 1]);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('coord');
    const coords = input.value.split(', ').map((coord) => parseInt(coord, 10));
    const ship = new Ship(battleships[battleships.length - 1], 'horizontal', coords);
    battleships.pop();
    board1.placeShip(ship);
    startGame();
  });
}
startGame();
