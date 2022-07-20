let i = 1;
let text = "";

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    text = text + "Fizz ";
  } else if (i % 5 == 0) {
    text = text + "Buzz ";
  } else {
    text = text + i + " ";
  }
  if (i % 6 == 0) {
    text = text + "\n";
  }
}
