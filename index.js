let rect = require("./rectangle")

function solveRect (l, b) {
  console.log("Solving for reactangkle with l =" +l + "")
  if (l <= 0 || b <= 0) {
    console.log("reactangle dimensions should be greater than zero: l=" + l + ", and b")
  }
  else {
    console.log(" The area of the rectangle is " + rect.area(l,b))
    console.log(" The perimeter of the rectangle is" + rect.perimeter(l,b))
  }
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0,5)
solveRect(-3, 5)
