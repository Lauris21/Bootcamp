const numbers = [1, 2, 3, 5, 45, 37, 58];


/*function sumAll(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
        return suma;
    }
}

console.log(sumAll(numbers));*/
let sum = 0;
function sumAll(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        return console.log(sum);
    }
}