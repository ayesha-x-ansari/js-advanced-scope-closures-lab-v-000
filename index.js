function produceDrivingRange(max) {
    return function (start, end) {
     return start - end > max? true : `${start - end}`
    }
}

function produceTipCalculator(tip) {
  return function (dollar) {
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
