let count = 0;
let totalSum = 0;
let average = 1;

for (let i = 1; i <= 500; i++) {
  totalSum += i; 
  count++;         
}

average = totalSum / count;  
console.log(average);
