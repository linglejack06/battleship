export default (function Doc() {
  const box1 = document.createElement('div');
  box1.classList.add('game-board');
  document.body.appendChild(box1);
  const box2 = document.createElement('div');
  box2.classList.add('game-board');
  function renderGame(board1 /* board2 */) {
    board1.forEach((space) => {
      const gameSpace = document.createElement('div');
      gameSpace.classList.add('game-space', space.type);
      box1.appendChild(gameSpace);
    });
    document.body.appendChild(box1);
  }
  return { renderGame };
}());
