export default class Player {
  constructor(name, computer) {
    this.name = name;
    this.computer = computer;
    this.hitTries = [];
    this.isTurn = false;
  }

  // recursively calls generate hit with new random hit until the hit has not already been tried
  generateHit(hit = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]) {
    if (this.checkHit(hit)) {
      this.hitTries.push(hit);
      return hit;
    }
    return this.generateHit([Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);
  }

  checkHit(hit) {
    if (this.hitTries.indexOf(hit) === -1) return true;
    return false;
  }

  toggleTurn() {
    if (this.isTurn) {
      this.isTurn = false;
    } else {
      this.isTurn = true;
    }
  }
}
