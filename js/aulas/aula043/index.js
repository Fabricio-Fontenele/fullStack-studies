function fizzBuzz(num) {
  if (num % 3 === 0) return "fizz";
  else if (num % 5 === 0) return "buzz";
  else if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
  else if (num % 5 !== 0 || num % 3 !== 0) return num;
  if (typeof num !== Number) return num;
}

for (let i = 0; i < 100; i++) {
  console.log(fizzBuzz(i));
}
