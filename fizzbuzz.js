function fizzBuzz(n) {
    let fizzArray = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzArray.push('FizzBuzz');
      } else if (i % 3 === 0) {
        fizzArray.push('Fizz');
      } else if (i % 5 === 0) {
        fizzArray.push('Buzz');
      } else {
        fizzArray.push(i.toString());
      }
    }
    return fizzArray;
  }
  
  console.log(fizzBuzz(3)); 
  console.log(fizzBuzz(5)); 
  console.log(fizzBuzz(15));