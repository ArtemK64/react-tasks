let a = Math.floor(Math.random() * 100);

console.log('First part of task');
console.log('if-else realization:');

if ((a > 10 ? a : a * 2) > 5) {
    console.log((2 * a) + 1);
  } else {
    if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
      console.log(5);
    } else {
      console.log((a % 2 == 0 ? 6 : 7));
    }
}

console.log('Switch realization:');

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

console.log('Second part of task');
console.log('if-else realization:')

function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    
    if (a > 10) {
        if (a == 5) {
            console.log('a is bigger than 10 and an example of a special case');
        } else {
            console.log('a is bigger than 10');
        }
        if (a != 15) {
            console.log('but a is not 15');
        }
    } else {
        if (a == 5) {
            console.log('a is less than or equal to 10 and an example of a special case');
        } else {
            console.log('a is less than or equal to 10');
        }
    }
    if (a % 2 == 0) {
        console.log('and a is even');
    } else {
        console.log('and a is odd');
    }
}

manyChecks();

console.log('Switch realization:');
function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    switch (true) {
        case a > 10: 
            if (a === 5) {
                console.log('a is bigger than 10 and an example of a special case');
            } else {
                console.log('a is bigger than 10');
            }
            if (a !== 15) {
                console.log('but a is not 15');
            }
            console.log('and a is greater than 5');
            break;
        case a === 5: 
            console.log('a is less than or equal to 10 and an example of a special case');
            console.log('and a is less than or equal to 5');
            break;
        default: 
            console.log('a is less than or equal to 10');
            console.log('and a is less than or equal to 5');
    }
    if (a % 2 === 0) {
        console.log('and a is even');
    } else {
        console.log('and a is odd');
    }
}

manyChecks();