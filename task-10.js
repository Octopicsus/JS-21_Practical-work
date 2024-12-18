const loopMax = 9;
let multiTable = "";

for (let row = 1; row <= loopMax; row++) {
  for (let column = 2; column <= loopMax; column++) {
    multiTable += `${row} * ${column} = ${row * column}\n`;
  }
}

console.log(multiTable);
