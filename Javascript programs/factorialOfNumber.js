let num = 5;
function factorial(num) {
  if (num < 0) {
    return "Factorial Not allowed for negative numbers";
  } else if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(num));
