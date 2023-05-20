export default class Ship {
  constructor(type, startingPoint) {
    this.type = type;
    if (type === 'Carrier') {
      this.length = 5;
    } else if (type === 'Battleship') {
      this.length = 4;
    } else if (type === 'Cruiser') {
      this.length = 3;
    } else if (type === 'Submarine') {
      this.length = 3;
    } else {
      this.length = 2;
    }
    this.hits = 0;
    this.startingPoint = startingPoint;
  }

  hit = () => {
    if (this.isSunk()) return;
    this.hits += 1;
  };

  isSunk = () => {
    if (this.length === this.hits) return true;
    return false;
  };
}
