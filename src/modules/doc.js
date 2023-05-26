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

  function populateBoard(board, human = false, box = box1) {
    for (let i = 0; i < board.length; i += 1) {
      const col = board[i];
      const gameRow = document.createElement('div');
      gameRow.classList.add('game-row');
      for (let j = 0; j < col.length; j += 1) {
        const gameSpace = document.createElement('div');
        gameSpace.classList.add('game-space');
        if (col[j].isHit) {
          gameSpace.classList.remove('ship');
          gameSpace.classList.add('hit');
        }
        if (col[j].isTried && !col[j].isHit) {
          gameSpace.classList.add('miss');
        }
        if (col[j].type !== 'Empty' && human) {
          gameSpace.classList.add('ship');
        }
        gameRow.appendChild(gameSpace);
      }
      box.appendChild(gameRow);
    }
  }
  function _addInput(form) {
    const coordInput = document.createElement('input');
    coordInput.type = 'text';
    coordInput.placeholder = 'num1, num2';
    coordInput.id = 'coords';
    const label = document.createElement('label');
    label.htmlFor = 'coords';
    label.textContent = 'Hit Coordinates: ';
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
    populateBoard(board1.arr, true, gameBoard1);
    populateBoard(board2.arr, false, gameBoard2);
    return formObj;
  }
  function renderHitForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('hit-form-container');
    const instructions = document.createElement('h2');
    instructions.classList.add('hit-instructions');
    instructions.textContent = 'Bomb their ship';
    formContainer.appendChild(instructions);
    const form = document.createElement('form');
    form.classList.add('hit-form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'num1, num2';
    input.id = 'hit-coord';
    const label = document.createElement('label');
    label.classList.add('hit-label');
    label.htmlFor = 'hit-coord';
    form.appendChild(label);
    form.appendChild(input);
    const submit = document.createElement('button');
    submit.classList.add('place-hit-button');
    submit.textContent = 'Bomb Enemy';
    form.appendChild(submit);
    formContainer.appendChild(form);
    box1.appendChild(formContainer);
    return {
      instructions, input, submit, form,
    };
  }
  function renderGame(board1, board2) {
    box1.innerHTML = '';
    gameBoard1.innerHTML = '';
    const tags = renderHitForm();
    box1.appendChild(gameBoard1);
    gameBoard2.innerHTML = '';
    box2.appendChild(gameBoard2);
    populateBoard(board1.arr, true, gameBoard1);
    populateBoard(board2.arr, false, gameBoard2);
    return tags;
  }
  function displayWin(player) {
    document.body.innerHTML = '';
    const winMessage = document.createElement('h1');
    winMessage.classList.add('win-message');
    winMessage.textContent = `Congrats ${player.name}! You win`;
    document.body.appendChild(winMessage);
  }
  function renderBoard(board, num, player = false) {
    if (num === 1) {
      gameBoard1.innerHTML = '';
      populateBoard(board.arr, player, gameBoard1);
    } else {
      gameBoard2.innerHTML = '';
      populateBoard(board.arr, false, gameBoard2);
    }
  }
  return {
    setupGame, renderGame, renderBoard, displayWin,
  };
}());
