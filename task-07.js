let a = 0;
let b = 0;

for (let i = 30; i <= 80; i++) {   
  if (i % 2 === 0) {                
    console.log(i);                  
    b += i;                          
  }
}

console.log("\nSum of paired numbers:", b);
