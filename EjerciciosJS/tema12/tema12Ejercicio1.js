function fibo(num) {
  let array = [];
  let val2 = 1;
  let val3 = 1;
  if (num === 1) {
    return (array = [1]);
  } else if (num === 2) {
    return (array = [1, 1]);
  } else {
    array = [1, 1];
    for (let i = 3; i <= num; i++) {
      let val1 = val2 + val3;
      array.push(val1);
      val3 = val2;
      val2 = val1;
    }
    return array;
  }
}

let numfibo = fibo(10);
console.log(numfibo);
