function produceDrivingRange(max) {

    return function (start, end) {
      debugger
      let dist = Math.abs(parseInt(end)-parseInt(start))
     return dist < max  ? `within range by ${max - dist}` : `${dist  - max} blocks out of range`
     debugger
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
