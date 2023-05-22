/* eslint-disable no-underscore-dangle */
export default (function Doc() {
  const box1 = document.createElement('div');
  box1.classList.add('game-board');
  document.body.appendChild(box1);
  const box2 = document.createElement('div');
  box2.classList.add('game-board');
  document.body.appendChild(box2);
  function _populateBoard(box, board) {
    for (let i = 0; i < board.length; i += 1) {
      const col = board[i];
      const gameColumn = document.createElement('div');
      gameColumn.classList.add('game-column');
      for (let j = 0; j < col.length; j += 1) {
        const gameSpace = document.createElement('div');
        gameSpace.classList.add('game-space', col[j].type);
        gameColumn.appendChild(gameSpace);
      }
      box.appendChild(gameColumn);
    }
  }
  function renderGame(board1, board2) {
    _populateBoard(box1, board1);
    _populateBoard(box2, board2);
  }
  return { renderGame };
}());
