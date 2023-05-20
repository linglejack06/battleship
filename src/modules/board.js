import Ship from './ship';
import Space from './space';

export default class Board {
  constructor(player, test) {
    this.player = player;
    this.arr = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      this.arr[i] = new Array(10);
      for (let j = 0; j < 10; j += 1) {
        this.arr[i][j] = new Space();
      }
    }
    if (test) {
      this.setupTestEnvironment();
    }
  }

  setupTestEnvironment = () => {
    const carrier = new Ship('Carrier', [1, 4]);
    for (let i = 0; i < carrier.length; i += 1) {
      this.arr[carrier.startingPoint[0]][carrier.startingPoint[1] + i] = new Space(carrier.type);
    }
  };
}
