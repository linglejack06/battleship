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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/board */ \"./src/modules/board.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/doc */ \"./src/modules/doc.js\");\n\n\n\n\nfunction startGame() {\n  const human = new _modules_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Jack');\n  const board1 = new _modules_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](human, [new _modules_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Cruiser', 'horizontal', [7, 6]), new _modules_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Battleship', 'horizontal', [0, 3])]);\n  // const computer = new Player('', true);\n  // eslint-disable-next-line max-len\n  // const board2 = new Board(computer, [new Ship('Cruiser', 'horizontal', [7, 6]), new Ship('Destroyer', 'horizontal', [0, 3])]);\n  _modules_doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderGame(board1.arr);\n}\nstartGame();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ \"./src/modules/space.js\");\n\nclass Board {\n  constructor(player, battleships = null) {\n    this.player = player;\n    this.arr = new Array(10);\n    for (let i = 0; i < 10; i += 1) {\n      this.arr[i] = new Array(10);\n      for (let j = 0; j < 10; j += 1) {\n        this.arr[i][j] = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      }\n    }\n    if (battleships) {\n      this.battleships = battleships;\n      for (let i = 0; i < battleships.length; i += 1) {\n        this.placeShip(battleships[i]);\n      }\n    } else {\n      this.battleships = [];\n    }\n  }\n  // game controller needs to check ship position first and then place ship if position is false\n\n  placeShip(ship) {\n    this.battleships.push(ship);\n    if (ship.position === 'horizontal') {\n      for (let j = 0; j < ship.length; j += 1) {\n        this.arr[ship.startingPoint[0]][ship.startingPoint[1] + j] = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ship.type);\n      }\n    } else {\n      for (let j = 0; j < ship.length; j += 1) {\n        this.arr[ship.startingPoint[0] + j][ship.startingPoint[1]] = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ship.type);\n      }\n    }\n  }\n  checkShipPosition(ship) {\n    for (let i = 0; i < ship.length; i += 1) {\n      if (ship.position === 'horizontal') {\n        if (this.arr[ship.startingPoint[0]][ship.startingPoint[1] + i].type !== 'Empty') return false;\n      } else if (ship.position === 'vertical') {\n        if (this.arr[ship.startingPoint[0] + i][ship.startingPoint[1]].type !== 'Empty') return false;\n      }\n    }\n    return true;\n  }\n  takeHit(hitPoint) {\n    const location = this.arr[hitPoint[0]][hitPoint[1]];\n    if (location.isTried) {\n      return 'retry';\n    }\n    if (location.type === 'Empty') {\n      this.arr[hitPoint[0]][hitPoint[1]].isTried = true;\n      return 'miss';\n    }\n    if (location.type !== 'Empty') {\n      this.arr[hitPoint[0]][hitPoint[1]].isHit = true;\n      this.arr[hitPoint[0]][hitPoint[1]].isTried = true;\n      for (let i = 0; i < this.battleships.length; i += 1) {\n        if (this.battleships[i].type === location.type) {\n          this.battleships[i].hit();\n        }\n      }\n    }\n    return 'hit';\n  }\n  checkWin() {\n    let win = true;\n    for (let i = 0; i < this.battleships.length; i += 1) {\n      const ship = this.battleships[i];\n      if (ship.isSunk() === false) win = false;\n    }\n    return win;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/board.js?");

/***/ }),

/***/ "./src/modules/doc.js":
/*!****************************!*\
  !*** ./src/modules/doc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function Doc() {\n  const box1 = document.createElement('div');\n  box1.classList.add('game-board');\n  document.body.appendChild(box1);\n  const box2 = document.createElement('div');\n  box2.classList.add('game-board');\n  function renderGame(board1 /* board2 */) {\n    board1.forEach(space => {\n      const gameSpace = document.createElement('div');\n      gameSpace.classList.add('game-space', space.type);\n      box1.appendChild(gameSpace);\n    });\n    document.body.appendChild(box1);\n  }\n  return {\n    renderGame\n  };\n})());\n\n//# sourceURL=webpack://battleship/./src/modules/doc.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name, computer) {\n    this.name = name;\n    this.computer = computer;\n    this.hitTries = [];\n    this.isTurn = false;\n  }\n\n  // recursively calls generate hit with new random hit until the hit has not already been tried\n  generateHit(hit = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]) {\n    if (this.checkHit(hit)) {\n      this.hitTries.push(hit);\n      return hit;\n    }\n    return this.generateHit([Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);\n  }\n  checkHit(hit) {\n    if (this.hitTries.indexOf(hit) === -1) return true;\n    return false;\n  }\n  toggleTurn() {\n    if (this.isTurn) {\n      this.isTurn = false;\n    } else {\n      this.isTurn = true;\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(type, position, startingPoint) {\n    this.type = type;\n    this.position = position;\n    this.startingPoint = startingPoint;\n    if (type === 'Carrier') {\n      this.length = 5;\n    } else if (type === 'Battleship') {\n      this.length = 4;\n    } else if (type === 'Cruiser') {\n      this.length = 3;\n    } else if (type === 'Submarine') {\n      this.length = 3;\n    } else {\n      this.length = 2;\n    }\n    this.hits = 0;\n  }\n  hit = () => {\n    if (this.isSunk()) return;\n    this.hits += 1;\n  };\n  isSunk = () => {\n    if (this.length === this.hits) return true;\n    return false;\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/modules/space.js":
/*!******************************!*\
  !*** ./src/modules/space.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Space)\n/* harmony export */ });\nclass Space {\n  constructor(type = 'Empty', isTried = false, isHit = false) {\n    this.type = type;\n    this.isTried = isTried;\n    this.isHit = isHit;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/space.js?");

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