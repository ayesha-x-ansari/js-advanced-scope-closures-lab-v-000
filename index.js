function produceDrivingRange() {

}

function produceTipCalculator(tip) {
  returns function (dollar) {
  return tip * dollar
}
}

function createDriver() {
  driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }

  }
}
