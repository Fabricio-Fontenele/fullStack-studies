function maxNumber(x, y) {
  if (x > y) return x;
  if (y > x) return y;
  else return "São iguais";
}

console.log(maxNumber(42, 23));
