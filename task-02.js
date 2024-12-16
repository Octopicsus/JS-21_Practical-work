let a = "";

for (let i = 10; i <= 20; i++) {
  a += Math.pow(i, 2);

  if (i < 20) {
    a += ", ";
  }
}

console.log(a);
