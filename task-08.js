let currentNumber = 0;

for (let counter = 0; counter <= 200; counter++) {
  currentNumber++;

  if (currentNumber % 3 === 0) {
    if (currentNumber >= 100 && currentNumber <= 200) {
      console.log(currentNumber);
    }
  }
}

