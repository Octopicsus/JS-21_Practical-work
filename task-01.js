let a = "";

for (let i = 10; i <= 20; i++) {
  a += i;

  if (i < 20) {
    a += ", ";
  }
}

console.log(a);
