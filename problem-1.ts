type NumberArray = number[];

const sumArray = (param: NumberArray): number => {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum; 
}

let result = sumArray([1, 2, 3, 4, 5] );


console.log(result);