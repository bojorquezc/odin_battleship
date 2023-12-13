class Ship {
  constructor(type) {
    this.type = type;
    this.hit = 0;
    this.sunk = false;

    if (type == 'carrier') {
      this.length = 5;
    } else if (type == 'battleship') {
      this.length = 4;
    } else if (type == 'cruiser' || type == 'submarine') {
      this.length = 3;
    } else {
      this.length = 2;
    }
  }
}

export {
  Ship,
}