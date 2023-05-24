/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
export default (function Doc() {
  const box1 = document.createElement('div');
  box1.classList.add('player-1');
  const gameBoard1 = document.createElement('div');
  gameBoard1.classList.add('game-board');
  box1.appendChild(gameBoard1);
  document.body.appendChild(box1);
  const box2 = document.createElement('div');
  box2.classList.add('player-2');
  const gameBoard2 = document.createElement('div');
  gameBoard2.classList.add('game-board');
  box2.appendChild(gameBoard2);
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
  function _addInput(form) {
    const coordInput = document.createElement('input');
    coordInput.type = 'text';
    coordInput.placeholder = 'num1, num2';
    coordInput.id = 'coords';
    const label = document.createElement('label');
    label.htmlFor = 'coords';
    label.textContent = 'Coordinates: ';
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
    const coords = _addInput(form);
    const dropdown = document.createElement('select');
    dropdown.name = 'position';
    dropdown.setAttribute('id', 'position');
    const horizontal = document.createElement('option');
    horizontal.value = 'horizontal';
    horizontal.textContent = 'Horizontal';
    dropdown.appendChild(horizontal);
    const vertical = document.createElement('option');
    vertical.value = 'vertical';
    vertical.textContent = 'Vertical';
    dropdown.appendChild(vertical);
    form.appendChild(dropdown);
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('start-submit', 'submit-btn');
    submitBtn.textContent = 'Place';
    form.appendChild(submitBtn);
    formContainer.appendChild(form);
    box.appendChild(formContainer);
    return {
      form, instructions, coords, dropdown,
    };
  }
  function setupGame(board1, board2, nextShip) {
    box1.innerHTML = '';
    box2.innerHTML = '';
    const formObj = _renderStartForm(box1, board1.player, nextShip);
    gameBoard1.innerHTML = '';
    box1.appendChild(gameBoard1);
    populateBoard(board1.arr, gameBoard1);
    populateBoard(board2.arr, gameBoard2);
    return formObj;
  }
  function renderGame(board1, board2) {
    box1.innerHTML = '';
    gameBoard1.innerHTML = '';
    box1.appendChild(gameBoard1);
    gameBoard2.innerHTML = '';
    populateBoard(board1.arr, gameBoard1);
    populateBoard(board2.arr, gameBoard2);
  }
  function renderBoard(board) {
    gameBoard1.innerHTML = '';
    populateBoard(board.arr, gameBoard1);
  }
  return { setupGame, renderGame, renderBoard };
}());
