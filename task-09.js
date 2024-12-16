let number = parseInt(prompt('Enter your number > 0'));
let divisorCount = 0;
let divisorSum = 0;

if (number > 0) {
  console.log(`\nMy number: ${number} \n`);

  for (let i = 1; i <= number; i++) { 
    if (number % i === 0) {
      console.log(i);
      divisorCount++;
      divisorSum = divisorSum + i;
    }
  }

  console.log(`\nNumber of divisors: ${divisorCount}`);
  console.log(`Sum of divisors:    ${divisorSum}`);
} else {
  alert("Invalid number");
}
