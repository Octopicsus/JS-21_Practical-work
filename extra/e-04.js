// Scope

/*
global
functional
block
*/

let a = 1;

for (let i = 0; i < 10; i++) {
  console.log(a);

  let x = 7;
  console.log(x);
}

if (a > 1) {
  let q = 8;
  console.log(q);
}

if (a > 1) {
  let w = 5;
  if (w > 1) {
    console.log(w);
  }
}
