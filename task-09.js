// let a = parseInt(prompt("Enter number > 0"));

let a = parseInt(prompt('Enter your number > 0'));
let b = 0;
let c = 0;

if (a > 0) {
  console.log(`\nMy number: ${a} \n `);

  for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
      console.log(i);
      b++;
      c = c + i;
    }
  }

  console.log(`\nNumber of even divisors: ${b}`);
  console.log(`Sum of even divisors:    ${c}`);
} else {
  alert("Invalid number");
}
