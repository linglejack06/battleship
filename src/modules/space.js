export default class Space {
  constructor(type = 'Empty', isTried = false, isHit = false) {
    this.type = type;
    this.isTried = isTried;
    this.isHit = isHit;
  }
}
