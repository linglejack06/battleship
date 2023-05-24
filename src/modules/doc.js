/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
export default (function Doc() {
  const box1 = document.createElement('div');
  box1.classList.add('game-board');
  document.body.appendChild(box1);
  const box2 = document.createElement('div');
  box2.classList.add('game-board');
  document.body.appendChild(box2);
  function populateBoard(board, box = box1) {
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
  function _addInput(form, ship) {
    const coordInput = document.createElement('input');
    coordInput.type = 'text';
    coordInput.placeholder = 'num1, num2';
    coordInput.id = `${ship}`;
    const label = document.createElement('label');
    label.htmlFor = `${ship}`;
    label.textContent = `${ship} Coordinates: `;
    form.appendChild(label);
    form.appendChild(coordInput);
    return coordInput;
  }
  function _renderStartForm(box, player, nextShip) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('game-text', 'form-container');
    const instructions = document.createElement('h2');
    instructions.classList.add('instructions');
    instructions.textContent = `Place your ${nextShip}`;
    formContainer.appendChild(instructions);
    const form = document.createElement('form');
    form.classList.add(player.name, 'coord-form');
    const coords = _addInput(form, nextShip);
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('start-submit', 'submit-btn');
    submitBtn.textContent = 'Place';
    form.appendChild(submitBtn);
    formContainer.appendChild(form);
    box.appendChild(formContainer);
    return {
      form, instructions, coords,
    };
  }
  function setupGame(board1, board2, nextShip, error) {
    box1.innerHTML = '';
    box2.innerHTML = '';
    const formObj = _renderStartForm(box1, board1.player, nextShip, error);
    populateBoard(board1.arr, box1);
    populateBoard(board2.arr, box2);
    return formObj;
  }
  function renderGame(board1, board2) {
    box1.innerHTML = '';
    box2.innerHTML = '';
    populateBoard(board1.arr, box1);
    populateBoard(board2.arr, box2);
  }
  return { setupGame, renderGame, populateBoard };
}());
