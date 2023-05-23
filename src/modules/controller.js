/* eslint-disable consistent-return */
import Board from './board';
import Player from './player';
import Ship from './ship';
import Doc from './doc';

const battleships = ['Destroyer', 'Submarine', 'Cruiser', 'Battleship', 'Carrier'];
const human = new Player('Jack');
const board1 = new Board(human, []);
const board2 = new Board(null, []);

function setPlayerBoard() {
  const tags = Doc.setupGame(board1, board2, battleships[battleships.length - 1]);
  let count = 0;
  tags.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const coords = tags.coords.value.split(', ').map((coord) => parseInt(coord, 10));
    const ship = new Ship(battleships[battleships.length - 1], 'horizontal', coords);
    board1.placeShip(ship);
    battleships.pop();
    tags.coords.value = '';
    count += 1;
    if (count === 5) {
      Doc.renderGame(board1, board2);
    }
  });
}
// eslint-disable-next-line no-unused-vars
function setComputerBoard() {
  if (battleships.length === 0) return 'done';
  Doc.setupGame(board1, board2, battleships[battleships.length - 1]);
  const randomCoords = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
  const ship = new Ship(battleships[battleships.length - 1], 'horizontal', randomCoords);
  if (board2.checkShipPosition(ship)) {
    board2.placeShip(ship);
    battleships.pop();
    setComputerBoard();
  } else {
    setComputerBoard();
  }
}
export default function startGame() {
  setPlayerBoard();
}
