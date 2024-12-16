let arr = ["cat", "dog", "parrot", "fish"];
let search = prompt("Enter your animal...");
let a = "Match NOT found";
let b = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === search) {
    a = "Match found: " + arr[i];
    b = true;
  }
}

console.log(a);
console.log(b);
