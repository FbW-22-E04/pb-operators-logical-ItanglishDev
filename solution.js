let isDogBetter = true;
let isCatBetter = false;
console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isCatBetter));

let atoms = 32;
let sandGrains = 44;
let starsInSky = 11;

console.log("a", atoms > starsInSky && atoms > sandGrains);
// if both of them are true than the result is true (right to left)
console.log("b", atoms !== sandGrains);
// first value is different from second one (left to right)
console.log("c", starsInSky < sandGrains || atoms !== sandGrains);
// one of the two values is true (left to right)
console.log("d", atoms === starsInSky || atoms !== sandGrains);
// one of the two values is true (left to right)
console.log("e", atoms >= 10 && sandGrains <= 10);
// if both of them are true than the result is true (right to left)
console.log("f", atoms * starsInSky < 100 || atoms * sandGrains > 100);
// one of the two values is true (left to right)
