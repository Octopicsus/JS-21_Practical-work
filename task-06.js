let a = 0;
let sum = 0;
let result = 1;

for (let i = 1; i <= 500; i++) {
  sum += i;
  a++;
}

result = sum / a;
console.log(result);

