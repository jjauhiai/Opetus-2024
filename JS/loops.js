//for-loop
console.log("For-loop\n");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("While-loop\n");
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("Do-while-loop\n");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

console.log("If-else if-else\n");
const random = Math.floor(Math.random() * 10) + 1;
let x = random;
console.log("Number is ", random);

if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is equal to 10");
}
