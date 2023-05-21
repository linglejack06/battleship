import Space from './space';

export default class Board {
  constructor(player, battleships = null) {
    this.player = player;
    this.arr = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      this.arr[i] = new Array(10);
      for (let j = 0; j < 10; j += 1) {
        this.arr[i][j] = new Space();
      }
    }
    if (battleships) {
      this.battleships = battleships;
      for (let i = 0; i < battleships.length; i += 1) {
        this.placeShip(battleships[i]);
      }
    } else {
      this.battleships = [];
    }
  }
  // game controller needs to check ship position first and then place ship if position is false

  placeShip(ship) {
    this.battleships.push(ship);
    if (ship.position === 'horizontal') {
      for (let j = 0; j < ship.length; j += 1) {
        this.arr[ship.startingPoint[0]][ship.startingPoint[1] + j] = new Space(ship.type);
      }
    } else {
      for (let j = 0; j < ship.length; j += 1) {
        this.arr[ship.startingPoint[0] + j][ship.startingPoint[1]] = new Space(ship.type);
      }
    }
  }

  checkShipPosition(ship) {
    for (let i = 0; i < ship.length; i += 1) {
      if (ship.position === 'horizontal') {
        if (this.arr[ship.startingPoint[0]][ship.startingPoint[1] + i].type !== 'Empty') return false;
      } else if (ship.position === 'vertical') {
        if (this.arr[ship.startingPoint[0] + i][ship.startingPoint[1]].type !== 'Empty') return false;
      }
    }
    return true;
  }

  takeHit(hitPoint) {
    const location = this.arr[hitPoint[0]][hitPoint[1]];
    if (location.isTried) {
      return 'retry';
    }
    if (location.type === 'Empty') {
      this.arr[hitPoint[0]][hitPoint[1]].isTried = true;
      return 'miss';
    }
    if (location.type !== 'Empty') {
      this.arr[hitPoint[0]][hitPoint[1]].isHit = true;
      this.arr[hitPoint[0]][hitPoint[1]].isTried = true;
      for (let i = 0; i < this.battleships.length; i += 1) {
        if (this.battleships[i].type === location.type) {
          this.battleships[i].hit();
        }
      }
    }
    return 'hit';
  }

  checkWin() {
    let win = true;
    for (let i = 0; i < this.battleships.length; i += 1) {
      const ship = this.battleships[i];
      if (ship.isSunk() === false) win = false;
    }
    return win;
  }
}
