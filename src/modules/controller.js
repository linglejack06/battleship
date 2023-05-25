/* eslint-disable consistent-return */
import Board from './board';
import Player from './player';
import Ship from './ship';
import Doc from './doc';

let battleships = ['Destroyer', 'Submarine', 'Cruiser', 'Battleship', 'Carrier'];
const human = new Player('Jack');
const computer = new Player('Computer', true);
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
function beginGame() {
  const tags = Doc.renderGame(board1, board2);
  const instructions = document.querySelector('.hit-instructions');
  const input = document.getElementById('hit-coord');
  const form = document.querySelector('.hit-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const coords = input.value.split(', ').map((val) => parseInt(val, 10));
    const humanResult = board2.takeHit(coords);
    let comResult = board1.takeHit(computer.generateHit());
    while (comResult === 'retry') {
      comResult = board1.takeHit(computer.generateHit());
    }
    instructions.textContent = humanResult;
    tags.input.value = '';
    if (board1.checkWin() || board2.checkWin()) {
      tags.instructions = 'winner';
      form.remove();
      const player = board1.checkWin() ? board1.player : board2.player;
      Doc.displayWin(player);
    }
  });
}
function setPlayerBoard() {
  const tags = Doc.setupGame(board1, board2, battleships[battleships.length - 1]);
  let count = 0;
  tags.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const coords = tags.coords.value.split(', ').map((coord) => parseInt(coord, 10));
    const position = tags.dropdown.value;
    const ship = new Ship(battleships[battleships.length - 1], position, coords);
    if (board1.checkShipPosition(ship)) {
      board1.placeShip(ship);
      Doc.renderBoard(board1);
      battleships.pop();
      tags.coords.value = '';
      tags.instructions.textContent = `Place your ${battleships[battleships.length - 1]}`;
      count += 1;
    } else {
      tags.coords.value = '';
      tags.instructions.textContent = `Error: ${ship.type} must have atleast ${ship.length} consecutive spaces and not be placed on another ship.`;
    }
    if (count >= 5) {
      setComputerBoard();
      Doc.renderGame(board1, board2);
      tags.form.remove();
      beginGame();
    }
  });
}
export default async function startGame() {
  setPlayerBoard();
}
