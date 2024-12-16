let a = 0;

for (let i = 0; i <= 200; i++) {
  a++;
  
  if (a % 3 === 0) {
    if (a >= 100 && a <= 200) {
      console.log(a);
    }
  }
}
