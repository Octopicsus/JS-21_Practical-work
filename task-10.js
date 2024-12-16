let multiCand = 0;
let multiTable = "";
let loopMax = 9;

for (let row = 0; row < loopMax; row++) {
  multiCand++;

  for (let column = 2; column <= loopMax; column++) {
    multiTable += `${multiCand} * ${column} = ${
      multiCand * column
    } \n`;
  }
}

console.log(multiTable);
