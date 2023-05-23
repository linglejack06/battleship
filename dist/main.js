/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/board */ \"./src/modules/board.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/doc */ \"./src/modules/doc.js\");\n/* eslint-disable max-len */\n\n\n\n\nvar battleships = ['Dummy', 'Destroyer', 'Submarine', 'Cruiser', 'Battleship', 'Carrier'];\nvar human = new _modules_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Jack');\nvar board1 = new _modules_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](human, []);\nvar cruiser = new _modules_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Cruiser', 'horizontal', [0, 0]);\nboard1.placeShip(cruiser);\nvar board2 = new _modules_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, []);\nvar carrier = new _modules_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Carrier', 'horizontal', [7, 2]);\nboard2.placeShip(carrier);\n// eslint-disable-next-line consistent-return\nfunction startGame(error) {\n  if (!battleships[0]) return 'done';\n  var tags;\n  if (error) {\n    tags = _modules_doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setupGame(board1, board2, battleships[battleships.length - 1], error);\n  } else {\n    tags = _modules_doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setupGame(board1, board2, battleships[battleships.length - 1]);\n  }\n  tags.form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var input = document.getElementById('coord');\n    var coords = input.value.split(', ').map(function (coord) {\n      return parseInt(coord, 10);\n    });\n    var ship = new _modules_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](battleships[battleships.length - 1], 'horizontal', coords);\n    if (board1.checkShipPosition(ship)) {\n      board1.placeShip(ship);\n      battleships.pop();\n      startGame();\n    } else {\n      startGame(\"Error: \".concat(ship.type, \" must have \").concat(ship.length, \" consecutive spaces and not be on top of another ship\"));\n    }\n  });\n}\nstartGame();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ \"./src/modules/space.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Board = /*#__PURE__*/function () {\n  function Board(player) {\n    var battleships = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    _classCallCheck(this, Board);\n    this.player = player;\n    this.arr = new Array(10);\n    for (var i = 0; i < 10; i += 1) {\n      this.arr[i] = new Array(10);\n      for (var j = 0; j < 10; j += 1) {\n        this.arr[i][j] = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      }\n    }\n    if (battleships) {\n      this.battleships = battleships;\n      for (var _i = 0; _i < battleships.length; _i += 1) {\n        this.placeShip(battleships[_i]);\n      }\n    } else {\n      this.battleships = [];\n    }\n  }\n  // game controller needs to check ship position first and then place ship if position is false\n  _createClass(Board, [{\n    key: \"placeShip\",\n    value: function placeShip(ship) {\n      this.battleships.push(ship);\n      if (ship.position === 'horizontal') {\n        for (var j = 0; j < ship.length; j += 1) {\n          this.arr[ship.startingPoint[0]][ship.startingPoint[1] + j] = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ship.type);\n        }\n      } else {\n        for (var _j = 0; _j < ship.length; _j += 1) {\n          this.arr[ship.startingPoint[0] + _j][ship.startingPoint[1]] = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ship.type);\n        }\n      }\n    }\n  }, {\n    key: \"checkShipPosition\",\n    value: function checkShipPosition(ship) {\n      for (var i = 0; i < ship.length; i += 1) {\n        if (ship.position === 'horizontal') {\n          if (this.arr[ship.startingPoint[0]][ship.startingPoint[1] + i].type !== 'Empty') return false;\n        } else if (ship.position === 'vertical') {\n          if (this.arr[ship.startingPoint[0] + i][ship.startingPoint[1]].type !== 'Empty') return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"takeHit\",\n    value: function takeHit(hitPoint) {\n      var location = this.arr[hitPoint[0]][hitPoint[1]];\n      if (location.isTried) {\n        return 'retry';\n      }\n      if (location.type === 'Empty') {\n        this.arr[hitPoint[0]][hitPoint[1]].isTried = true;\n        return 'miss';\n      }\n      if (location.type !== 'Empty') {\n        this.arr[hitPoint[0]][hitPoint[1]].isHit = true;\n        this.arr[hitPoint[0]][hitPoint[1]].isTried = true;\n        for (var i = 0; i < this.battleships.length; i += 1) {\n          if (this.battleships[i].type === location.type) {\n            this.battleships[i].hit();\n          }\n        }\n      }\n      return 'hit';\n    }\n  }, {\n    key: \"checkWin\",\n    value: function checkWin() {\n      var win = true;\n      for (var i = 0; i < this.battleships.length; i += 1) {\n        var ship = this.battleships[i];\n        if (ship.isSunk() === false) win = false;\n      }\n      return win;\n    }\n  }]);\n  return Board;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/modules/board.js?");

/***/ }),

/***/ "./src/modules/doc.js":
/*!****************************!*\
  !*** ./src/modules/doc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-underscore-dangle */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function Doc() {\n  var box1 = document.createElement('div');\n  box1.classList.add('game-board');\n  document.body.appendChild(box1);\n  var box2 = document.createElement('div');\n  box2.classList.add('game-board');\n  document.body.appendChild(box2);\n  function _populateBoard(box, board) {\n    for (var i = 0; i < board.length; i += 1) {\n      var col = board[i];\n      var gameColumn = document.createElement('div');\n      gameColumn.classList.add('game-column');\n      for (var j = 0; j < col.length; j += 1) {\n        var gameSpace = document.createElement('div');\n        gameSpace.classList.add('game-space', col[j].type);\n        gameColumn.appendChild(gameSpace);\n      }\n      box.appendChild(gameColumn);\n    }\n  }\n  function _addInput(form, ship) {\n    var coordInput = document.createElement('input');\n    coordInput.type = 'text';\n    coordInput.placeholder = 'num1, num2';\n    coordInput.id = \"\".concat(ship);\n    var label = document.createElement('label');\n    label.htmlFor = \"\".concat(ship);\n    label.textContent = \"\".concat(ship, \" Coordinates: \");\n    form.appendChild(label);\n    form.appendChild(coordInput);\n  }\n  function _renderStartForm(box, player, nextShip, error) {\n    var formContainer = document.createElement('div');\n    formContainer.classList.add('game-text', 'form-container');\n    var instructions = document.createElement('h2');\n    if (error) {\n      instructions.textContent = error;\n      instructions.classList.add('error');\n    } else {\n      instructions.classList.add('instructions');\n      instructions.textContent = \"Place your \".concat(nextShip);\n    }\n    formContainer.appendChild(instructions);\n    var form = document.createElement('form');\n    form.classList.add(player.name, 'coord-form');\n    var coords = _addInput(form, nextShip);\n    var submitBtn = document.createElement('button');\n    submitBtn.classList.add('start-submit', 'submit-btn');\n    submitBtn.textContent = 'Place';\n    form.appendChild(submitBtn);\n    formContainer.appendChild(form);\n    box.appendChild(formContainer);\n    return {\n      form: form,\n      instructions: instructions,\n      coords: coords\n    };\n  }\n  function setupGame(board1, board2, nextShip, error) {\n    box1.innerHTML = '';\n    box2.innerHTML = '';\n    var formObj = _renderStartForm(box1, board1.player, nextShip, error);\n    _populateBoard(box1, board1.arr);\n    _populateBoard(box2, board2.arr);\n    return formObj;\n  }\n  function renderGame(board1, board2) {\n    box1.innerHTML = '';\n    box2.innerHTML = '';\n    _populateBoard(box1, board1.arr);\n    _populateBoard(box2, board2.arr);\n  }\n  return {\n    setupGame: setupGame,\n    renderGame: renderGame\n  };\n})());\n\n//# sourceURL=webpack://battleship/./src/modules/doc.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Player = /*#__PURE__*/function () {\n  function Player(name, computer) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this.computer = computer;\n    this.hitTries = [];\n    this.isTurn = false;\n  }\n\n  // recursively calls generate hit with new random hit until the hit has not already been tried\n  _createClass(Player, [{\n    key: \"generateHit\",\n    value: function generateHit() {\n      var hit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];\n      if (this.checkHit(hit)) {\n        this.hitTries.push(hit);\n        return hit;\n      }\n      return this.generateHit([Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);\n    }\n  }, {\n    key: \"checkHit\",\n    value: function checkHit(hit) {\n      if (this.hitTries.indexOf(hit) === -1) return true;\n      return false;\n    }\n  }, {\n    key: \"toggleTurn\",\n    value: function toggleTurn() {\n      if (this.isTurn) {\n        this.isTurn = false;\n      } else {\n        this.isTurn = true;\n      }\n    }\n  }]);\n  return Player;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Ship = /*#__PURE__*/_createClass(function Ship(type, position, startingPoint) {\n  var _this = this;\n  _classCallCheck(this, Ship);\n  _defineProperty(this, \"hit\", function () {\n    if (_this.isSunk()) return;\n    _this.hits += 1;\n  });\n  _defineProperty(this, \"isSunk\", function () {\n    if (_this.length === _this.hits) return true;\n    return false;\n  });\n  this.type = type;\n  this.position = position;\n  this.startingPoint = startingPoint;\n  if (type === 'Carrier') {\n    this.length = 5;\n  } else if (type === 'Battleship') {\n    this.length = 4;\n  } else if (type === 'Cruiser') {\n    this.length = 3;\n  } else if (type === 'Submarine') {\n    this.length = 3;\n  } else {\n    this.length = 2;\n  }\n  this.hits = 0;\n});\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/modules/space.js":
/*!******************************!*\
  !*** ./src/modules/space.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Space)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Space = /*#__PURE__*/_createClass(function Space() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Empty';\n  var isTried = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var isHit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  _classCallCheck(this, Space);\n  this.type = type;\n  this.isTried = isTried;\n  this.isHit = isHit;\n});\n\n\n//# sourceURL=webpack://battleship/./src/modules/space.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;