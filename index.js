function produceDrivingRange() {

}

function produceTipCalculator(tip) {
  function (dollar) {
  return tip * dollar / 100
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
