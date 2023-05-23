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
function startGame(error) {
  if (!battleships[0]) return 'done';
  let tags;
  if (error) {
    tags = Doc.setupGame(board1, board2, battleships[battleships.length - 1], error);
  } else {
    tags = Doc.setupGame(board1, board2, battleships[battleships.length - 1]);
  }
  tags.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('coord');
    const coords = input.value.split(', ').map((coord) => parseInt(coord, 10));
    const ship = new Ship(battleships[battleships.length - 1], 'horizontal', coords);
    if (board1.checkShipPosition(ship)) {
      board1.placeShip(ship);
      battleships.pop();
      startGame();
    } else {
      startGame(`Error: ${ship.type} must have ${ship.length} consecutive spaces and not be on top of another ship`);
    }
  });
}
startGame();
