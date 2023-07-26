const numbers = [3, 1, 5, 2, 8, 4, 6, 7, 9, 10];

//ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); 

//descending order
numbers.sort((a, b) => b - a);
console.log(numbers);
