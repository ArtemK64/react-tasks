let a = Math.floor(Math.random() * 100);

console.log('First part of task');
console.log('if-else realization: ');

if ((a > 10 ? a : a * 2) > 5) {
    console.log((2 * a) + 1);
  } else {
    if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
      console.log(5);
    } else {
      console.log((a % 2 == 0 ? 6 : 7));
    }
}

console.log('Switch realization: ');

switch (true) {
    case (a > 10 ? a : a * 2) > 5:
      console.log((2 * a) + 1);
      break;
    case (a < 3 ? 1 : 2 * (a - 2)) > 4:
      console.log(5);
      break;
    default:
      console.log((a % 2 == 0 ? 6 : 7));
}