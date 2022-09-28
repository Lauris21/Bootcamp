const numbers = [1, 2, 3, 5, 45, 37, 58];
let suma = 0;
const sumAll = (array) => {
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

console.log(sumAll(numbers));