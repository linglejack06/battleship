/* eslint-disable consistent-return */
import Board from './board';
import Player from './player';
import Ship from './ship';
import Doc from './doc';

let battleships = ['Destroyer', 'Submarine', 'Cruiser', 'Battleship', 'Carrier'];
const human = new Player('Jack');
const board1 = new Board(human, []);
const board2 = new Board(null, []);

function setComputerBoard() {
  battleships = ['Destroyer', 'Submarine', 'Cruiser', 'Battleship', 'Carrier'];
  for (let i = 0; i < 5; i += 1) {
    let randomCoords = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    const position = Math.floor(Math.random() * 2);
    let orientation = '';
    if (position === 0) {
      orientation = 'horizontal';
    } else {
      orientation = 'vertical';
    }
    let ship = new Ship(battleships[battleships.length - 1], orientation, randomCoords);
    while (!board2.checkShipPosition(ship)) {
      randomCoords = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
      ship = new Ship(battleships[battleships.length - 1], orientation, randomCoords);
    }
    board2.placeShip(ship);
    battleships.pop();
  }
}
function setPlayerBoard() {
  const tags = Doc.setupGame(board1, board2, battleships[battleships.length - 1]);
  let count = 0;
  tags.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const coords = tags.coords.value.split(', ').map((coord) => parseInt(coord, 10));
    const ship = new Ship(battleships[battleships.length - 1], 'horizontal', coords);
    if (board1.checkShipPosition(ship)) {
      board1.placeShip(ship);
      Doc.populateBoard(board1);
      battleships.pop();
      tags.coords.value = '';
      count += 1;
    } else {
      tags.coords.value = '';
      tags.instructions.textContent = `Error: ${ship.type} must have atleast ${ship.length} consecutive spaces and not be placed on another ship.`;
    }
    if (count === 5) {
      setComputerBoard();
      Doc.renderGame(board1, board2);
    }
  });
}
export default function startGame() {
  setPlayerBoard();
}
