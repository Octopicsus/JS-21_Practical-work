let a = 0;
let b = "";
let loopMax = 10;

for (let i = 0; i < loopMax; i++) {
  a++;

  for (let j = 0; j <= loopMax; j++) {
    b += `${a} * ${j} = ${a * j} \n`;
  }

}

console.log(b);
