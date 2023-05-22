import Board from './modules/board';
import Player from './modules/player';
import Ship from './modules/ship';
import Doc from './modules/doc';

function startGame() {
  const human = new Player('Jack');
  const board1 = new Board(human, [new Ship('Cruiser', 'horizontal', [7, 6]), new Ship('Battleship', 'horizontal', [0, 3])]);
  // const computer = new Player('', true);
  // eslint-disable-next-line max-len
  // const board2 = new Board(computer, [new Ship('Cruiser', 'horizontal', [7, 6]), new Ship('Destroyer', 'horizontal', [0, 3])]);
  Doc.renderGame(board1.arr);
}
startGame();

// eslint-disable-next-line no-alert
alert('hi');
